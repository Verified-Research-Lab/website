# Verified Research Lab website

The public website for [Verified Research Lab](https://verifiedresearchlab.org/), built with Hugo and the project-specific `VRL Evidence Ledger` theme.

## Design system

The site presents Verified Research Lab as an independent evidence practice. Its visual system is quiet, editorial, and built to make scope and findings easy to scan:

- warm neutral surfaces and a muted green accent;
- a softer charcoal palette in dark mode;
- compact uppercase labels for scope, version, and status;
- one system sans-serif family across navigation, headings, body copy, and metadata;
- no stock photography or invented trust marks;
- automatic light and dark modes with a persistent Auto/Light/Dark switcher;
- responsive, accessible, dependency-free templates;
- print styles for long-form methods and reports.

The custom theme lives in `themes/vrl`. Every public section has a purpose-built layout, including the homepage, consolidated research services, technical due diligence, methods, reports, about, governance, contact, and the 404 page.

The five research offerings live as accessible, deep-linkable accordions on `/services/`. Their former detail URLs are retained as `noindex` redirect stubs so existing links land on the corresponding open section. Technical due diligence remains a standalone page because its audience, confidentiality, and decision context differ.

## Search and machine discovery

The production build includes canonical URLs, Open Graph and social metadata, Organization, WebSite, WebPage, BreadcrumbList, and Service structured data. Hugo generates `robots.txt` and `sitemap.xml`; the static assets include `llms.txt` and `llms-full.txt` for AI-oriented discovery.

The crawler rules allow conventional search engines and the named AI crawlers used by OpenAI, Anthropic, and Perplexity. Review those rules before changing the lab's publication policy.

## Run locally

Install the Hugo extended edition, then run:

```sh
hugo server
```

The preview is available at `http://localhost:1313/`.

Run the production check with:

```sh
hugo --gc --minify --panicOnWarning
```

Hugo writes the generated site to `public/`. This directory is intentionally ignored by Git.

For a local quality audit, serve the production build and run Lighthouse against it. PageSpeed Insights requires a publicly reachable deployment and cannot test `localhost`.

## Content

Site content is stored under `content/`:

- `services/` — accordion source content for research services plus the standalone technical due-diligence page;
- `methods/` — the verification method and evidence labels;
- `reports/` — the public report registry;
- `about/` — institutional position and boundaries;
- `governance/` — independence and accountability commitments;
- `contact/` — engagement intake. The fit-check form prepares a local `mailto:` draft and does not upload data to the site.

Create a report draft with:

```sh
hugo new content reports/short-report-name.md
```

The report archetype includes identifiers for version, status, evidence labels, sponsor, conflicts, response status, and revalidation.

## Before publication

Provision `contact@verifiedresearchlab.org` before publication, or replace `params.contactEmail` in `hugo.yaml` and the address in `content/contact/_index.md`.
