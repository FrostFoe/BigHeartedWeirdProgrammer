import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate } from '../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import 'clsx';
import { c as categoriesHandler } from '../../chunks/categories_C5I1yADU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
function getStaticPaths() {
  const categories = categoriesHandler.allCategories();
  return categories.map((category) => ({ params: { category: category.id } }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { category } = Astro2.params;
  return renderTemplate`<!-- TODO: show last articles and fix pagination --><meta http-equiv="refresh"${addAttribute(`0; url=${`/categories/${category}/1`}`, "content")}>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/index.astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
