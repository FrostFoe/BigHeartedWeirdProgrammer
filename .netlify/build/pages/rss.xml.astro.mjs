import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_vWAZpvmf.mjs';
import { S as SITE } from '../chunks/index_CtAh2QRB.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const articles = await getCollection("articles");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishedTime,
      description: article.data.description,
      link: `/articles/${article.id}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
