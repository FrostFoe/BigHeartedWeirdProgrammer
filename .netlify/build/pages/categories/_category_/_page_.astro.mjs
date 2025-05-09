import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { S as SITE } from '../../../chunks/index_CtAh2QRB.mjs';
import { a as articlesHandler } from '../../../chunks/articles_BQkvpJjv.mjs';
import { c as categoriesHandler } from '../../../chunks/categories_C5I1yADU.mjs';
import { $ as $$List } from '../../../chunks/list_COjq_h7j.mjs';
import { $ as $$WideCard, a as $$Pagination } from '../../../chunks/wideCard_GVM9tiEZ.mjs';
import { a as getEntry } from '../../../chunks/_astro_content_vWAZpvmf.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const getStaticPaths = async ({ paginate }) => {
  const allCategories = categoriesHandler.allCategories();
  const allArticles = articlesHandler.allArticles();
  return allCategories.flatMap((category) => {
    const filteredArticles = allArticles.filter(
      (article) => article.data.category.id === category.id
    );
    return paginate(filteredArticles, {
      params: { category: category.id },
      props: { postsLength: filteredArticles.length },
      pageSize: SITE.postsPerPage
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const { postsLength } = Astro2.props;
  const params = Astro2.params;
  const articles = page.data;
  const pathname = new URL(Astro2.request.url).pathname.split("/");
  const basePath = `${pathname[1]}/${pathname[2]}`;
  const entry = await getEntry("views", "categories");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "ListLayout", $$List, { "header": params.category, "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col gap-2 flex-1"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "WideCard", $$WideCard, { "article": article, "isLast": articles.lastIndexOf(article) === articles.length - 1 })}`)} </ul> ${postsLength > SITE.postsPerPage ? renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "length": page.lastPage, "currentUrl": page.url.current, "currentPage": page.currentPage, "baseUrl": `/${basePath}`, "prevUrl": page.url.prev, "nextUrl": page.url.next, "lastUrl": `/${basePath}/${page.lastPage}` })}` : null}` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/[page].astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/[page].astro";
const $$url = "/categories/[category]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
