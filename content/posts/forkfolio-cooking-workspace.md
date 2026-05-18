---
title: Turning messy recipes into a searchable, remixable cooking workspace
category: Case Study
tags:
  - forkfolio
readTime: 6 min
date: April 2026
order: 1
excerpt: How I used LLMs, semantic search, and a modern full-stack setup to turn scattered recipe ideas into structured, reusable data.
---

ForkFolio started from a pretty personal place. I originally built it as a way
for my family and me to share recipes more easily and hopefully get a little
closer through food. It was also motivated by my own cooking habits: I am
constantly looking for new ideas, especially around Indian food, and I wanted a
better way to collect recipes, tweak them, and keep building a body of dishes
that actually reflect how I cook.

The old workflow was the usual mess. Recipes were scattered across text
messages, notes apps, browser tabs, screenshots, and memory. When I found
something good online, I wanted to save it. When I changed it to fit my taste,
I wanted to keep that version. When a family member made something great, I
wanted it in the same place as everything else, not buried in another notebook
or lost in another link.

That became the core idea behind ForkFolio: a recipe workspace where import,
cleanup, search, remixing, and reuse all happen in one system.

## What I built

ForkFolio is a collaborative recipe app that helps people collect recipes from
across the internet, turn them into clean structured data, search them
semantically, remix them with AI, and keep building a shared cooking library
over time.

At a product level, the organizing features matter, but they are not really the
center of gravity. The heart of the product is the LLM-driven data pipeline:

- importing recipes from raw text or URLs
- cleaning messy source material into usable recipe data
- extracting structured ingredients and instructions
- deduplicating overlapping entries
- generating embeddings for semantic search
- remixing existing recipes or inventing new ones
- aggregating grocery lists from multiple recipes

Everything else exists to make that core workflow more usable in day-to-day
cooking.

## How it works

ForkFolio uses a split architecture with a Next.js frontend and a FastAPI
backend, backed by Supabase for Postgres persistence and auth. For model
access, it uses OpenRouter, which keeps the app on the standard OpenAI SDK
surface while making it easy to switch models as different tasks evolve. For
observability, Braintrust acts as the sink for LLM tracing, which matters a lot
once an AI-heavy app moves past the demo stage.

### Recipe import is an AI pipeline, not just a form submission

One of the most important flows in ForkFolio is taking messy recipe input and
converting it into something the rest of the product can trust.

The input can start as either:

- raw pasted text
- a recipe URL that gets previewed before saving

From there, the backend runs a multi-stage pipeline:

```text
recipe URL or raw text -> LLM cleanup -> LLM extraction -> dedupe -> embeddings -> searchable storage
```

For URL imports, the service first fetches the source page, strips out
irrelevant HTML, and extracts readable content. After that, an LLM cleanup step
removes the surrounding noise that usually comes with web content: layout
artifacts, navigation text, junk copy, and formatting issues. Once the input is
reasonably clean, a second LLM step extracts the recipe into structured fields
like title, ingredients, instructions, servings, and total time.

That structured output is validated before it moves forward. After extraction,
the system attempts deduplication, then generates embeddings from the recipe
content so the result is not just stored, but immediately useful for search.

This is the part of the project I care about most. I did not want ForkFolio to
be another place to dump links. I wanted it to convert messy internet data into
clean product data.

### The supporting product surfaces matter too

The organizational parts of ForkFolio are there to make the pipeline usable:

- recipe detail pages with source metadata
- recipe books for grouping dishes into collections
- a grocery bag for selecting recipes before list generation
- recent recipe tracking for quick return visits
- Google OAuth through Supabase for a standard low-friction sign-in flow

These features are not the most technically novel part of the project, but they
are what make the AI features feel grounded in an actual application instead of
a loose collection of backend demos.

## Key decisions and tradeoffs

One of the clearer decisions in the project was using Next.js on the frontend
and FastAPI on the backend. The split is partly an artifact of how I already
think about product work from my day job, but it also fits the shape of the app
well. The frontend could focus on the user experience, while Python handled the
AI orchestration, data processing, and backend logic.

I chose OpenRouter because it made it easy to switch models without rewriting
the app around a single vendor. At the same time, I could keep using the
familiar OpenAI SDK interface instead of introducing a separate abstraction
layer too early.

Braintrust was a pragmatic choice for tracing. Once an app depends on multiple
LLM steps, debugging by intuition stops working. You need visibility into
prompts, outputs, and behavior over time.

Supabase was another pragmatic decision. It is easy to get moving with, and
pairing Postgres, pgvector, and standard OAuth gets a lot of the boring but
necessary platform work out of the way quickly.

The main tradeoff throughout the project was prioritizing end-to-end usefulness
before deeper optimization. I wanted the flows to work. Latency, polish, and
tighter guarantees matter, but I cared first about polishing a complete system.

## Evals and learnings

The biggest lesson from building ForkFolio is that reliability, evals, and
tuning are where a real LLM application is made.

Getting an impressive prototype working is not the hard part anymore. The
harder part is making the system dependable enough that users can trust the
outputs, especially when the app is doing structured extraction and feeding one
AI-generated step into another.

I also enjoyed stepping outside my usual comfort zone and building on a fresher
stack. Modern open-source tooling made it easy to get moving, and deployment
felt much smoother than it might have a few years ago. That combination made
the project fun in a way that side projects are supposed to be.

## What's next

I do not think of ForkFolio as a finished project so much as a system I want to
keep building.

The original motivation came from family recipe sharing, but I think the
product should be broader than that. The next step is less about adding random
features and more about deepening the library itself: growing the recipe
corpus, improving the quality and breadth of the stored data, and making
collaboration stronger as the shared collection expands.

If you want to try it out, ForkFolio is live. Feel free to sign in, import a
recipe, and see how the pipeline handles it.
