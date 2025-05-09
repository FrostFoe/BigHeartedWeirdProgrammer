import { g as getCollection } from './_astro_content_vWAZpvmf.mjs';

const authorsCollection = await getCollection("authors");
const authorsHandler = {
  allAuthors: () => authorsCollection,
  limitAurhors: (limit) => authorsCollection.slice(0, limit),
  getAuthors: (authors) => {
    return authors.map(({ id }) => {
      const author = authorsCollection.find((author2) => author2.id === id);
      if (!author) {
        throw new Error(`Author ${id} not found`);
      }
      return author;
    });
  },
  findAuthor: (id) => {
    const author = authorsCollection.find((author2) => author2.id === id);
    if (!author) {
      throw new Error(`Author ${id} not found`);
    }
    return author;
  }
};

export { authorsHandler as a };
