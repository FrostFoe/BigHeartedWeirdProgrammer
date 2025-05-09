import { g as getCollection } from './_astro_content_vWAZpvmf.mjs';

const articlesCollection = (await getCollection("articles", ({ data }) => {
  return data.isDraft !== true && new Date(data.publishedTime) < /* @__PURE__ */ new Date();
})).sort(
  (a, b) => new Date(b.data.publishedTime).toISOString().localeCompare(new Date(a.data.publishedTime).toISOString())
);
const articlesHandler = {
  allArticles: () => articlesCollection,
  mainHeadline: () => {
    const article = articlesCollection.filter(
      (article2) => article2.data.isMainHeadline === true
    )[0];
    if (!article)
      throw new Error(
        "Please ensure there is at least one item to display for the main headline."
      );
    return article;
  },
  subHeadlines: () => {
    const mainHeadline = articlesHandler.mainHeadline();
    const subHeadlines = articlesCollection.filter(
      (article) => article.data.isSubHeadline === true && mainHeadline.id !== article.id
    ).slice(0, 4);
    if (subHeadlines.length === 0)
      throw new Error(
        "Please ensure there is at least one item to display for the sub headlines."
      );
    return subHeadlines;
  }
};

export { articlesHandler as a };
