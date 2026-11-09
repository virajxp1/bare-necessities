---
title: How We Sped Up Our Automated Testing for a Fraction of the Cost
category: Engineering
tags:
  - buildkite
  - gcp
  - ci-cd
readTime: 4 min
date: November 2026
order: 2
excerpt: How moving our test suite to a custom self-hosted cloud server eliminated setup delays, slashed compute costs, and cleaned up noisy pull request feedback.
---

Standard cloud testing services are great until your application reaches a
certain complexity. Once you need to simulate complex database setups, run
heavy browser test suites, or cache large environments between runs,
standard off-the-shelf testing runners start spending twenty minutes just
getting ready to test.

For a recent project, we shifted our automated testing pipeline over to a
dedicated, self-hosted cloud server managed by Buildkite. The setup turned out
to be far simpler than expected, significantly faster, and much cheaper to
run. Here is how we put it together.

## Splitting the Brains from the Brawn

Instead of paying a single provider to manage both the testing logic and the
hardware, Buildkite splits the job into two parts:

1. **The Pipeline (The Brains):** A simple configuration file inside our
   codebase that defines what tests run and in what order.
2. **The Agent (The Brawn):** A cloud server we own and control, configured
   specifically to run our code.

Buildkite acts strictly as the coordinator. It tells our server when a new
code update arrives, and our server executes the work.

```yaml
steps:
  - label: checks
    key: checks
    command: bash .buildkite/scripts/checks.sh
    agents:
      queue: app-ci
    timeout_in_minutes: 20
    concurrency: 1
    concurrency_group: app/disposable-worker
    retry:
      automatic:
        - exit_status: -1
          limit: 2
    notify:
      - github_commit_status:
          context: app/checks
```

A few key rules keep this reliable:

- **Direct Progress Updates:** Each testing step sends its status straight to
  GitHub, giving developers immediate feedback on exactly which part of the
  test suite passed or failed.
- **Traffic Control:** Jobs that touch shared resources are automatically
  queued so they don't step on each other's toes.
- **Smart Retries:** If our cloud server drops offline unexpectedly mid-run,
  the test automatically retries. But if an actual test fails because of a
  bug, it stops right there so we don't hide real issues.

## Cost-Effective, Security-First Infrastructure

Our testing server is built on Google Cloud using automated infrastructure
code. We designed it with three main priorities:

- **Pay Only for What We Use:** The server is configured to stay powered off
  by default. It only spins up when there is active work to do, keeping idle
  compute costs at zero.
- **80% Cost Savings via "Spot" Hardware:** We use discounted cloud instances
  that cost a fraction of standard servers. In exchange, Google can reclaim
  the machine with short notice, which is precisely why our automatic retry
  rules exist.
- **Locked Down by Default:** The server has zero open doors to the public
  internet and carries no broad access permissions to our sensitive cloud
  accounts. Secrets are injected into memory only for the brief seconds a
  specific test requires them, then immediately erased.

Because the server image comes pre-packaged with all required dependencies,
tests start instantly instead of spending minutes downloading prerequisites
on every single code commit.

## Auto-Updating Status Reports

Once test runs were fast, the remaining bottleneck was communication: every
test run was leaving a new status comment on our code reviews, cluttering the
discussion thread with duplicate updates.

We solved this with a simple automation script. Before posting a new report,
the system checks if it has already left a comment on that pull request:

```bash
marker='<!-- acceptance-dashboard -->'
existing=$(gh api "repos/$REPO/issues/$pr/comments" --paginate \
  --jq "[.[] | select(.body | startswith(\"$marker\"))][0].id // empty")
if [ -n "$existing" ]; then
  gh api -X PATCH "repos/$REPO/issues/comments/$existing" -F body=@"body.md"
else
  gh api -X POST "repos/$REPO/issues/$pr/comments" -F body=@"body.md"
fi
```

If a previous report exists, the script silently edits that comment in place.
If not, it creates a new one. Reviewers always see a single, clean dashboard
showing the latest test results, no comment spam required.

## The Takeaway

By taking ownership of our test hardware, we eliminated setup lag, lowered
cloud spend, and created a cleaner feedback loop for our engineering team.

The trade-off: self-hosted servers require a bit of upfront infrastructure
management. But by keeping the server disposable, locked down, and tightly
automated, it delivers a massive performance upgrade for a fraction of the
cost.
