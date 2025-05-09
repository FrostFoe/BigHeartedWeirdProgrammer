import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { S as SITE } from '../../../chunks/index_CtAh2QRB.mjs';
import { a as articlesHandler } from '../../../chunks/articles_BQkvpJjv.mjs';
import { a as authorsHandler } from '../../../chunks/authors_BXc97tMw.mjs';
import { $ as $$List } from '../../../chunks/list_COjq_h7j.mjs';
import { $ as $$WideCard, a as $$Pagination } from '../../../chunks/wideCard_GVM9tiEZ.mjs';
import { a as getEntry } from '../../../chunks/_astro_content_vWAZpvmf.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const getStaticPaths = ({ paginate }) => {
  const allAuthors = authorsHandler.allAuthors();
  const allArticles = articlesHandler.allArticles();
  return allAuthors.flatMap((author) => {
    const filteredArticles = allArticles.filter(
      (article) => article.data.authors.map((a) => a.id).includes(author.id)
    );
    return paginate(filteredArticles, {
      params: { id: author.id },
      pageSize: SITE.postsPerPage
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const params = Astro2.params;
  const articles = page.data;
  const pathname = new URL(Astro2.request.url).pathname.split("/");
  const basePath = `${pathname[1]}/${pathname[2]}`;
  const entry = await getEntry("views", "author");
  const author = authorsHandler.findAuthor(params.id);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const [HEADER] = entry.data.blocks;
  return renderTemplate`${renderComponent($$result, "ListLayout", $$List, { "header": `${author.data.name}'s ${HEADER.title}`, "entry": {
    ...entry,
    data: {
      ...entry.data,
      title: `${author.data.name}'s ${entry.data.title}`
    }
  } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex-1"> <ul class="flex flex-col gap-4"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "WideCard", $$WideCard, { "article": article, "isLast": articles.lastIndexOf(article) === articles.length - 1 })}`)} </ul> </section> ${renderComponent($$result2, "Pagination", $$Pagination, { "length": page.lastPage, "currentUrl": page.url.current, "currentPage": page.currentPage, "baseUrl": `/${basePath}`, "prevUrl": page.url.prev, "nextUrl": page.url.next, "lastUrl": `/${basePath}/${page.lastPage}` })} ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/[page].astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/[page].astro";
const $$url = "/authors/[id]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
