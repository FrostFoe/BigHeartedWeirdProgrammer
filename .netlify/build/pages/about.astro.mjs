import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { $ as $$Content } from '../chunks/content_46pHvNEF.mjs';
import { $ as $$Base } from '../chunks/base_Cg7v60DN.mjs';
import { a as getEntry, r as renderEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const entry = await getEntry("views", "about");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentLayout", $$Content, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/about.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
