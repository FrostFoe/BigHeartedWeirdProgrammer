import { c as createComponent, d as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { a as getEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
import { $ as $$Base } from '../chunks/base_Cg7v60DN.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("views", "error404");
  if (!entry) {
    throw new Error("404 page not found");
  }
  const [HERO] = entry.data.blocks;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col items-center justify-center py-20"> <h1 class="text-4xl">${HERO.title}</h1> <p class="mt-2">${HERO.description}</p> <a${addAttribute(HERO.link_url, "href")} class="btn mt-6" aria-label="Return to Homepage">${HERO.link_text}</a> </div> ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/pages/404.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
