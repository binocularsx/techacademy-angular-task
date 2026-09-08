# Posh — Angular Rebuild

A rebuild of the [Posh landing page](https://prium.github.io/Posh/v2.1.0/) as a
real Angular application, done for the Angular Bootcamp assessment
(Bluechip Technology Tech Academy).

## Running it locally

```bash
npm install
ng serve
```

Then open `http://localhost:4200/`.

## How the page was split into components

## 5. Routing

- app.routes.ts defines two lazy-loaded routes: '' (Home) and
  'about' (About), plus a wildcard redirect back to Home.
- AppComponent renders the active route through <router-outlet>.
- NavbarComponent links use routerLink / routerLinkActive.

The original single HTML file was broken into one standalone component
per visual section, plus two page-level components tied to routes:

- **`NavbarComponent`** — renders nav links from an array with `@for`,
  and owns the mobile menu open/closed state as a `signal`, emitting an
  `output()` whenever it toggles.
- **`HeroComponent`** — headline, subtext and CTA label all come in as
  Signal `input()`s instead of being hardcoded; the CTA button emits an
  `output()` event instead of using an inline `onclick`.
- **`ShowcaseComponent`** — owns the typed list of showcase items and
  the feature-highlight strip, and renders the grid by looping `@for`
  over `ShowcaseCardComponent`.
- **`ShowcaseCardComponent`** — a single reusable card that takes one
  typed `ShowcaseItem` as an `input()` and emits a `cardSelected` event.
- **`ContactComponent`** — a Reactive Form (the original page had no
  working form here). Custom validators (`notBlankValidator`,
  `strictEmailValidator`) guard each field, the submit button is
  disabled until the form is valid, and a `signal` swaps in a "thanks"
  view on success.
- **`FooterComponent`** — pulls the copyright year from `new Date()`.
- **`HomeComponent`** / **`AboutComponent`** — the two routed pages.
  `HomeComponent` composes Hero + Showcase + Contact; `AboutComponent`
  is the second route added to satisfy the routing requirement, reached
  via `routerLink` and rendered through `<router-outlet>` in
  `AppComponent`.