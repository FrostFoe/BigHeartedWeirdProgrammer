import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-puYO_x.mjs';
import 'clsx';

const frontmatter = {
  "title": "articles",
  "description": "List of articles by author in the Astro News.",
  "blocks": [{
    "name": "HEADER",
    "title": "articles",
    "description": "List of authors of the Astro News."
  }, {
    "name": "ATTENTION",
    "description": "These names and images are not real. The images are from Unsplash, used in this project to show how to add authors to articles."
  }],
  "minutesRead": "0 min read",
  "lastModified": "2025-05-09T12:38:17.026Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/views/author.mdx";
const file = "/workspaces/FrostFoe/astro-news/src/content/views/author.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/FrostFoe/astro-news/src/content/views/author.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
