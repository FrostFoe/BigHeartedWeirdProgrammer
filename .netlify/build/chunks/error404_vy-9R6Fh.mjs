import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-puYO_x.mjs';
import 'clsx';

const frontmatter = {
  "title": "404 - Page Not Found",
  "description": "Page not found.",
  "blocks": [{
    "name": "HERO",
    "title": "404 - Page Not Found",
    "description": "Oops! The page you're looking for doesn't exist.",
    "link_text": "Return to Homepage",
    "link_url": "/"
  }],
  "minutesRead": "0 min read",
  "lastModified": "2025-05-09T12:38:17.049Z"
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

const url = "src/content/views/error404.mdx";
const file = "/workspaces/FrostFoe/astro-news/src/content/views/error404.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/FrostFoe/astro-news/src/content/views/error404.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
