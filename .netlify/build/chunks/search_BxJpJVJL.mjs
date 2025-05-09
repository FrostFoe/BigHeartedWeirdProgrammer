import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-puYO_x.mjs';
import 'clsx';

const frontmatter = {
  "title": "Search",
  "description": "Search articles in the Astro News.",
  "blocks": [{
    "name": "HEADER",
    "title": "Search Articles"
  }],
  "minutesRead": "0 min read",
  "lastModified": "2025-05-09T12:38:17.056Z"
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

const url = "src/content/views/search.mdx";
const file = "/workspaces/FrostFoe/astro-news/src/content/views/search.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/FrostFoe/astro-news/src/content/views/search.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
