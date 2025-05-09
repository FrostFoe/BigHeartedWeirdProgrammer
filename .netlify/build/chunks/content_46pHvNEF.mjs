import { c as createComponent, m as maybeRenderHead, r as renderSlot, a as renderTemplate } from './astro/server_D-puYO_x.mjs';
import 'kleur/colors';
import 'clsx';

const $$Content = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="prose md:prose-lg py-8 container prose-img:border prose-img:mx-auto prose-img:border-base-200 prose-img:rounded-lg prose-p:break-words prose-a:break-all prose-pre:break-words prose-pre:cursor-text prose-code:break-words prose-code:whitespace-pre-wrap" data-pagefind-body> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "/workspaces/FrostFoe/astro-news/src/layouts/content.astro", void 0);

export { $$Content as $ };
