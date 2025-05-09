import { g as getCollection } from './_astro_content_vWAZpvmf.mjs';
import { a as articlesHandler } from './articles_BQkvpJjv.mjs';

const categoriesCollection = await getCollection("categories");
const categoriesHandler = {
  allCategories: () => categoriesCollection.sort(
    (a, b) => a.data.title.localeCompare(b.data.title)
  ),
  oneCategory: (categoryId) => {
    const category = categoriesCollection.find(
      (category2) => category2.id === categoryId
    );
    if (!category) {
      throw new Error(`Category with id ${categoryId} not found`);
    }
    return category;
  },
  allCategoriesWithLatestArticles: () => {
    return categoriesCollection.map((category) => {
      const articles = articlesHandler.allArticles().filter((article) => article.data.category.id === category.id);
      return {
        ...category,
        data: {
          ...category.data,
          count: articles.length,
          latestArticles: articles.slice(0, 3)
        }
      };
    });
  }
};

export { categoriesHandler as c };
