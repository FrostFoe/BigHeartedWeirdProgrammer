import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-puYO_x.mjs';
import 'clsx';

const frontmatter = {
  "name": "FrostFoe",
  "job": "Editor",
  "avatar": "@assets/images/authors/frostfoe/avatar.png",
  "bio": "LifePerahim",
  "social": [],
  "minutesRead": "0 min read",
  "lastModified": "2025-05-09T12:42:34.604Z"
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

const url = "src/content/authors/frostfoe/index.mdx";
const file = "/workspaces/FrostFoe/astro-news/src/content/authors/frostfoe/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/FrostFoe/astro-news/src/content/authors/frostfoe/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
