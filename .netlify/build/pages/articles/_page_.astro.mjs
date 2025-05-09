import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { $ as $$List } from '../../chunks/list_COjq_h7j.mjs';
import { S as SITE } from '../../chunks/index_CtAh2QRB.mjs';
import { $ as $$WideCard, a as $$Pagination } from '../../chunks/wideCard_GVM9tiEZ.mjs';
import { a as getEntry } from '../../chunks/_astro_content_vWAZpvmf.mjs';
import { a as articlesHandler } from '../../chunks/articles_BQkvpJjv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const getStaticPaths = async ({ paginate }) => {
  const articles = articlesHandler.allArticles();
  return paginate(articles, { pageSize: SITE.postsPerPage });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const articles = page.data;
  const pathname = new URL(Astro2.request.url).pathname.split("/");
  const basePath = pathname[1];
  const entry = await getEntry("views", "articles");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const [HEADER] = entry.data.blocks;
  return renderTemplate`${renderComponent($$result, "ListLayout", $$List, { "header": HEADER.title, "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex-1"> <ul class="flex flex-col gap-4"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "WideCard", $$WideCard, { "article": article, "isLast": articles.lastIndexOf(article) === articles.length - 1 })}`)} </ul> </section> ${renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "length": page.lastPage, "currentUrl": page.url.current, "currentPage": page.currentPage, "baseUrl": `/${basePath}`, "prevUrl": page.url.prev, "nextUrl": page.url.next, "lastUrl": `/${basePath}/${page.lastPage}` })}`}` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/articles/[page].astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/articles/[page].astro";
const $$url = "/articles/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
