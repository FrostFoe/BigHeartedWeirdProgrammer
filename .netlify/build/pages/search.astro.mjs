import { b as createAstro, c as createComponent, d as renderComponent, a as renderTemplate, g as renderScript, m as maybeRenderHead } from '../chunks/astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/base_Cg7v60DN.mjs';
/* empty css                                 */
import { a as getEntry } from '../chunks/_astro_content_vWAZpvmf.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const entry = await getEntry("views", "search");
  if (!entry) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container py-4"> <script src="/pagefind/pagefind-ui.js"><\/script> <div id="search"></div> ', " </div> "])), maybeRenderHead(), renderScript($$result2, "/workspaces/FrostFoe/astro-news/src/pages/search/index.astro?astro&type=script&index=0&lang.ts")) })} <style>
  :root {
    --pagefind-ui-scale: 0.9;
    --pagefind-ui-primary: oklch(var(--p));
    --pagefind-ui-text: oklch(var(--bc));
    --pagefind-ui-background: oklch(var(--b1));
    --pagefind-ui-border: oklch(var(--b2));
    --pagefind-ui-tag: oklch(var(--b2));
    --pagefind-ui-border-width: 2px;
    --pagefind-ui-border-radius: 8px;
    --pagefind-ui-image-border-radius: 8px;
    --pagefind-ui-image-box-ratio: 3 / 2;
    --pagefind-ui-font: var(--font-sans);
  }
</style>`;
}, "/workspaces/FrostFoe/astro-news/src/pages/search/index.astro", void 0);

const $$file = "/workspaces/FrostFoe/astro-news/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
