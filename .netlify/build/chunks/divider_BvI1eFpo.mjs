import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$Divider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Divider;
  const { responsive = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "divider divider-horizontal h-[4px] m-0 ",
    responsive ? "hidden lg:flex" : ""
  ], "class:list")}></div>`;
}, "/workspaces/FrostFoe/astro-news/src/components/bases/divider.astro", void 0);

export { $$Divider as $ };
