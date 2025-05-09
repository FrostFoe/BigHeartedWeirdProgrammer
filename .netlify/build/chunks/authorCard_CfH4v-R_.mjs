import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderComponent, e as addAttribute, a as renderTemplate } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$ResponsiveImage } from './_astro_assets_CN_SSaD9.mjs';

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$AuthorCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { author } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group relative isolate mx-auto w-full"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "w-320 aspect-square max-w-full object-cover filter grayscale group-hover:grayscale-0 rounded-md", "src": author.data.avatar, "alt": author.data.name, "layout": "responsive", "loading": "lazy", "width": 320, "height": 320 })} <div class="flex flex-col gap-0.5 mt-2"> <h3 class="text-base font-semibold group-hover:underline"> <a${addAttribute(`/authors/${author.id}`, "href")}> <span class="absolute inset-0 z-10 pointer-events-none"></span> ${author.data.name} </a> </h3> <p class="text-sm text-primary dark:text-secondary">${author.data.job}</p> </div> </li>`;
}, "/workspaces/FrostFoe/astro-news/src/components/cards/authorCard.astro", void 0);

export { $$AuthorCard as $ };
