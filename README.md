# Astro Figma Build

This is the finished product of a video series on the Net Ninja YouTube channel created by Coding in Public. Here is the [Figma Design](https://www.figma.com/file/qFEYJk98NxJMxOc7SrNkuH/Astro-Design?node-id=25%3A27&t=zepD2d07iJJLeurh-1)

## Setup

Run `npm install` then `npm run dev` to view the site at `http://localhost:3000/`. A package called `open-props` was used but I would have preferred to use Tailwind. I created a `robots.txt` and `.htaccess` file which I added to the `public` folder. Run `npm run build` to generate the finished files.

I would like to add the JavaScript code in the `<head>` tag to an external JS file, and replace the SVG code with images.

## Sitemap

- `npx astro add sitemap` then `y` and `y`
- Then, apply this integration to your astro.config.\* file using the integrations property: `integrations: [sitemap()],` though it's done automatucally
- that's it, except you need to add a `site` attribute in `astro.config.mjs` though you will need to change the url to the one your site will live on, like the netlify URL: `https://astro-blog-project.netlify.app`
- then just run `npm run build` then go into the `dist` folder and you will see 2 sitemaps: 1 that has the link to your sitemap, then the sitemap with your page links
- you also can apply a filter property (See docs)
- From Astro:

> Add your site’s URL under your `astro.config.*` using the `site` property. This must begin with `http`: or `https`: `site: 'https://stargazers.club',`

## astro-robots-txt

- https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
- `npx astro add astro-robots-txt`
- Here is what you need to add to astro.config:

```js
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), robotsTxt()],
});
```

## astro-seo and npm install astro-seo-meta

> **ERRORS**

- npm i astro-seo
- using `import { SEO } from "astro-seo";` gives an error - just use Astro.props
- npm install astro-seo-meta
- import { Seo } from "astro-seo-meta" then use (don't need this)

```jsx
<head>
  <Seo
    title="My astro website"
    description="My fast astro website"
    icon="favicon.ico"
  />
</head>
```

## astro-breadcrumbs

- https://github.com/felix-berlin/astro-breadcrumbs#readme
- npm install astro-breadcrumbs
- import Breadcrumbs from 'astro-breadcrumbs';

```jsx
<Breadcrumbs indexText={"home"}>

  <span slot="separator" class="c-breadcrumbs__separator">
    <!-- Add icon or text here -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </span>

</Breadcrumbs>
```

## Miscellaneous notes

This series of videos, along with other videos on Figma, are really good if you can't figure Figma out.

Below are notes on various Astro Integrations I tried to use in this project.

Video 4, Figma plugins:

- Lorem ipsum, Feather Icons, UI Faces, Simpleicons

Video 5, Astro Intro:

- Dependencies: Astro-Icon, PostCSS and Autoprefixer, Open Props, postcss-jit-props

Video 8, Infinite Slider

- Check out `data/reviews.json` and `src/js/reviews.js`,

He uses a lot of CSS properties and values that I am unfamilliar with:

- Selectors: small, [aria-expanded="true"] + .nav-links, [role="none"], :is()
- Properties: max-width, font-size as a %, line-height, overflow: hidden, display grid, grid-template-rows, min-height, color: transparent, background-clip: text, place-items, align-content, clip: rect(), white-space: nowrap, transform: translateY, content, inset, filter: blur(), transform: rotate(), filter: blur(), filter: drop-shadow(), justify-self, inset-inline, transition: transform, flex, transform: translateX
- Values: calc(), hsl(), clamp()

## My summary

Links:

1. [Astro docs](https://docs.astro.build/en/getting-started/)
1. [Astro integrations](https://astro.build/integrations/): definitely do Tailwind, `astro-robots-txt`, @astrojs/images | already have astro-icon and `@astrojs/sitemap` | look into: @astrojs/netlify, `astro-breadcrumbs`
1. [type-scale.com](https://type-scale.com/): get various font sizes based on your body / default size
1. [unDraw](https://undraw.co/): open-source illustrations
1. [Open Props](https://open-props.style/): something about CSS Variables, links for PostCSS, JIT Props
1. [Astro Vite](https://docs.astro.build/en/reference/configuration-reference/#vite)
1. [Astro integrations](https://astro.build/integrations/)
1. [Astro icon](https://github.com/natemoo-re/astro-icon#readme): includes all of the most common icon packs
1. [icon sets](https://icon-sets.iconify.design/): the icon sets

Install:

1. `npm create astro@latest`
1. Name your project
1. Choose `An empty project`
1. `y` for `Install dependencies` and `Initialize Git`
1. Choose `Relaxed` for Typescript
1. Then run `npm run dev`

Packages:

- npm create astro@latest
- npm i astro-icon
- npm i -D postcss autoprefixer
- npm i -D postcss postcss-cli
- npm i -D postcss-preset-env
- npm i -D open-props postcss-jit-props
- npx astro add tailwind (generates a tailwind config file and updates the astro config)

> THE STACK: astro, js, postcss, postcss-jit-props, open-props

Required folder and file names:

- `src`
- `src/pages`- `src/pages/index.astro`
- `src/layouts`
- `src/components`
- `src/icons`
- package.json `browserslist`
- astro.config.mjs
- tsconfig.json
- postcss.config.cjs
- tailwind.config.js

Optional folder and file names:

- `src/data`
- `src/js`
- `src/images`
- `src/styles`
- `src/styles`
- `src/pages/posts`
- `src/pages/blog`
- `src/pages/404.astro`
- `src/pages/blog/[...page].astro`: new indesx.astro file
- `src/pages/author/[...author].astro`
- `src/pages/category`
- `src/pages/category/[category].asgro`
- `src/pages/tag`
- `public/sitemap.xml`
- `public/.htaccess`
- `public/robots.txt`
- `[slug].astro`

Astro functions

- Astro.props
- Astro.params
- Astro.glob
- getStaticPaths()

```js
const { frontmatter } = Astro.props;
const { title, description, date, category, author, image } = frontmatter;
```

### Important points

1. After installing astro and other dependencies, create required folders `layouts`, `components`, `icons` | and others: `js`, `data`, and `css` or `styles`
1. `layouts` for HTML boilerplate and `<head>` tag and specific page layouts such as `blog` or `store` or `products` || if you want a component on every page
1. `components` for blocks common to ALL pages: `<header>` tag, `<footer>` tag, `<aside>` tag, and `<nav>` tag | and for commonly used components: `buttons`, `cards`, ...
1. Add meta `title` and `description` as `Astro.props` in you `Head` component/layout
1. import your secondary layouts (Head, ?) into your main layout and also your main components (Header, Navbar, Footer)
1. then import the main layout(s) into all pages and sub-pages
1. create an array of navbar objects to map thru
1. For the cards, create an array of objects for the title, body, and image and map thru it
1. you can pass `props` into layouts, components, and pages
1. make sure to load your favicon.ico in the `public` folder

And finally:

- **Using JS**: 1. frontmatter, 2. import files, 3. script tags at the bottom of the file, 4. linked js files (in public folder and adding `is:inline` to script tag, last 2 are the only client-side options)
- **Frontmatter**: use in .astro, .md, or .mdx files
- Astro.props vs Astro.paramas vs Astro.glob
- **Markdown**: use Astro.glob to get multiple md files - The link to the post is the slug - frontmatter has the props for the posts - frontmatter is passed as props - it's passed as an object called `frontmatter`
- getStaticPaths() - **It needs to be an `async` Fx** - it returns an array of objects which must have a `params` object, and may have an optional `props` object
- `robots.txt`, `.htaccess`, `sitemap.xml`
- `Astro.glob()`: a way to load many local files into your static site setup - takes one parameter: a relative URL glob of which local files you’d like to import. It’s async, and returns an array of the exports from matching files
- Astro Components (`.astro`) and Markdown Files (`.md`) in the `src/pages` directory automatically become pages on your website
- remember to use `()` and not `{}` for `.map` and similar
- What is the default Astro component called `<Markdown>`?
