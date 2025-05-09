import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, d as renderComponent } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { a as getEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
import 'clsx';
import { $ as $$AuthorCard } from '../chunks/authorCard_CfH4v-R_.mjs';
import { $ as $$List } from '../chunks/list_COjq_h7j.mjs';
import { a as authorsHandler } from '../chunks/authors_BXc97tMw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$Info = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  const { width = "20", height = "20", strokeWidth = "1.5", size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")} class="shrink-0 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(strokeWidth, "stroke-width")} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/info.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entry = await getEntry("views", "authors");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const authors = authorsHandler.allAuthors();
  const [HEADER, ATTENTION] = entry.data.blocks;
  return renderTemplate`${renderComponent($$result, "ListLayout", $$List, { "header": HEADER.title, "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section role="alert" class="alert alert-info mb-4 bg-info/60"> ${renderComponent($$result2, "Info", $$Info, { "size": "16" })} <span>${ATTENTION.description}</span> </section> <section class="flex-1"> <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4"> ${authors.map((author) => renderTemplate`${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "author": author })}`)} </ul> </section> ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/authors/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
