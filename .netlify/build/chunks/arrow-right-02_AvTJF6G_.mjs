import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderComponent, e as addAttribute, a as renderTemplate } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$ResponsiveImage } from './_astro_assets_CN_SSaD9.mjs';
import { $ as $$Divider } from './divider_BvI1eFpo.mjs';
import { r as renderEntry } from './_astro_content_vWAZpvmf.mjs';
import { c as categoriesHandler } from './categories_C5I1yADU.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astro-news-six.vercel.app");
const $$NewsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsCard;
  const { article, index } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(article);
  const category = categoriesHandler.oneCategory(article.data.category.id);
  return renderTemplate`${maybeRenderHead()}<article class="col-span-1 group max-w-sm mx-auto flex flex-col gap-2 h-full relative isolate"> <div class="aspect-video overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$ResponsiveImage, { "src": article.data.cover, "alt": article.data.covert_alt ? article.data.covert_alt : article.data.title, "loading": index < 3 ? "eager" : "lazy", "layout": "responsive", "class": "w-full h-full object-cover" })} </div> <div class="flex flex-col flex-1"> <h3 class="text-xl font-serif font-semibold lg:group-hover:underline line-clamp-2"> <a${addAttribute(`/articles/${article.id}`, "href")}> <span class="absolute inset-0 z-10 pointer-events-none"></span> ${article.data.title} </a> </h3> <p class="text-sm text-base-content/80 line-clamp-3 text-pretty lg:mb-auto"> ${article.data.description} </p> <div class="flex items-center text-xs text-base-content/80 mt-2"> <span class="text-xs text-primary dark:text-secondary">${category.data.title}</span> ${renderComponent($$result, "Divider", $$Divider, {})} <span class="text-xs text-base-content/80">${remarkPluginFrontmatter.minutesRead}</span> </div> </div> </article>`;
}, "/workspaces/FrostFoe/astro-news/src/components/cards/newsCard.astro", void 0);

const $$Astro = createAstro("https://astro-news-six.vercel.app");
const $$ArrowRight02 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowRight02;
  const {
    width = "20",
    height = "20",
    color = "currentColor",
    strokeWidth = "1.5",
    size
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size ? size : width, "width")}${addAttribute(size ? size : height, "height")}${addAttribute(color, "color")} fill="none"> <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor"${addAttribute(strokeWidth, "stroke-width")} stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/workspaces/FrostFoe/astro-news/src/assets/svgs/arrow-right-02.astro", void 0);

export { $$ArrowRight02 as $, $$NewsCard as a };
