// One-column take on the AltaCV LaTeX look: Lato, uppercase headings over a
// thick rule, light company names, icon meta rows, boxed skill tags.
// Single column on purpose so resume scanners read it top to bottom.

#let ink = rgb("#1a1a1a")
#let muted = rgb("#555555")
#let rule-gray = rgb("#bbbbbb")

// Icons are PDF artifacts so text extraction (and resume scanners) skip them.
#let fa(code, brand: false, solid: true) = pdf.artifact(text(
  font: if brand { "Font Awesome 7 Brands" } else { "Font Awesome 7 Free" },
  weight: if solid and not brand { 900 } else { 400 },
  size: 0.85em,
  fill: muted,
  str.from-unicode(code),
))

#let resume(body) = {
  set document(title: "Viraj Parikh, Resume", author: "Viraj Parikh")
  set page(paper: "us-letter", margin: (x: 0.55in, top: 0.45in, bottom: 0.4in))
  set text(font: "Lato", size: 9.6pt, fill: ink, lang: "en")
  set par(justify: false, leading: 0.5em, spacing: 0.6em)
  set list(marker: text(fill: muted, sym.bullet), indent: 0.2em, body-indent: 0.5em, spacing: 0.6em)
  body
}

#let header(name: "", tagline: "", contacts: ()) = {
  text(size: 21pt, weight: "bold", tracking: 0.04em, upper(name))
  v(-0.25em)
  text(size: 12.5pt, weight: "bold", tagline)
  v(0.05em)
  text(size: 8.6pt, weight: "bold", contacts.join(h(1.4em)))
}

#let section(title) = {
  v(0.8em)
  block(below: 0.5em, stack(
    spacing: 0.3em,
    text(size: 12.5pt, weight: "bold", upper(title)),
    line(length: 100%, stroke: 1.6pt + ink),
  ))
}

#let divider() = {
  v(0.1em)
  line(length: 100%, stroke: (paint: rule-gray, thickness: 0.6pt, dash: "dashed"))
  v(0.1em)
}

#let company(name) = {
  text(size: 12.5pt, weight: "regular", name)
  v(-0.2em)
}

// `org` repeats the company in the meta row so scanners tie every role to it.
#let role(title: "", org: "", dates: "", place: "", note: none, body) = {
  text(size: 10.4pt, weight: "bold", title)
  linebreak()
  text(size: 8.8pt, fill: muted)[
    #fa(0xf1ad) #org #h(1.2em) #fa(0xf133, solid: false) #dates #h(1.2em) #fa(0xf3c5) #place
  ]
  if note != none {
    linebreak()
    text(size: 8.8pt, style: "italic", fill: muted, note)
  }
  v(0.05em)
  body
}

#let tag(label) = box(
  stroke: 0.6pt + rule-gray,
  radius: 3pt,
  inset: (x: 0.4em, y: 0.25em),
  outset: (y: 0.1em),
  text(size: 8.8pt, label),
)

#let tags(..items) = items.pos().map(tag).join(h(0.3em))
