import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, d as renderComponent, r as renderSlot } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import { $ as $$Base } from './base_Cg7v60DN.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$ViewListHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewListHeader;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center border-b-2 border-primary/10 p-1 mb-4"> <h1 class="text-xl font-bold capitalize">${title}</h1> </section>`;
}, "/workspaces/FrostFoe/astro-news/src/components/shared/view-list-header.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$List;
  const { entry, header } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "entry": entry }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex flex-col h-full pb-8 pt-4" data-pagefind-ignore="all"> ${renderComponent($$result2, "ViewListHeader", $$ViewListHeader, { "title": header })} ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/workspaces/FrostFoe/astro-news/src/layouts/list.astro", void 0);

export { $$List as $ };
