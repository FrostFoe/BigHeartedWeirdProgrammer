import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate } from '../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import 'clsx';
import { a as authorsHandler } from '../../chunks/authors_BXc97tMw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const getStaticPaths = async () => {
  const authors = authorsHandler.allAuthors();
  return authors.map((author) => ({
    params: { id: author.id },
    props: { author }
  }));
};
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { author } = Astro2.props;
  return renderTemplate`<meta http-equiv="refresh"${addAttribute(`0;url=/authors/${author.id}/1`, "content")}>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/index.astro";
const $$url = "/authors/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
