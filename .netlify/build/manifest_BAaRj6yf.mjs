import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_D-puYO_x.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/FrostFoe/astro-news/","cacheDir":"file:///workspaces/FrostFoe/astro-news/node_modules/.astro/","outDir":"file:///workspaces/FrostFoe/astro-news/dist/","srcDir":"file:///workspaces/FrostFoe/astro-news/src/","publicDir":"file:///workspaces/FrostFoe/astro-news/public/","buildClientDir":"file:///workspaces/FrostFoe/astro-news/dist/","buildServerDir":"file:///workspaces/FrostFoe/astro-news/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"authors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/authors","isIndex":true,"type":"page","pattern":"^\\/authors\\/?$","segments":[[{"content":"authors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/authors/index.astro","pathname":"/authors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"categories/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-news-six.vercel.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/components/cards/mainHeadline.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/_home/headlines.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/components/cards/newsCard.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/_home/latestNews.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/components/cards/subHeadlineCard.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/lib/handlers/articles.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/lib/handlers/categories.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/articles/_components/article-header.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/articles/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categories/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/categories/[category]/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories/[category]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/articles/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/authors/[id]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/lib/handlers/authors.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/lib/utils/getMeta.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/layouts/base.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/layouts/list.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/authors/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/authors/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/search/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/_home/authors.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/authors/[id]/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/authors/[id]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/FrostFoe/astro-news/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/[page]@_@astro":"pages/articles/_page_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/authors/[id]/[page]@_@astro":"pages/authors/_id_/_page_.astro.mjs","\u0000@astro-page:src/pages/authors/[id]/index@_@astro":"pages/authors/_id_.astro.mjs","\u0000@astro-page:src/pages/categories/[category]/[page]@_@astro":"pages/categories/_category_/_page_.astro.mjs","\u0000@astro-page:src/pages/categories/[category]/index@_@astro":"pages/categories/_category_.astro.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"pages/search.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/authors/index@_@astro":"pages/authors.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/articles/[id]@_@astro":"pages/articles/_id_.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000virtual:astro:assets/fonts/internal":"chunks/internal_l0sNRNKZ.mjs","/workspaces/FrostFoe/astro-news/.astro/content-modules.mjs":"chunks/content-modules_Cf-szy8m.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Z-jCae9a.mjs","/workspaces/FrostFoe/astro-news/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D8j8unhg.mjs","/workspaces/FrostFoe/astro-news/src/content/views/about.mdx?astroPropagatedAssets":"chunks/about_zDFW6q_n.mjs","/workspaces/FrostFoe/astro-news/src/content/views/articles.mdx?astroPropagatedAssets":"chunks/articles_C6BU5lj8.mjs","/workspaces/FrostFoe/astro-news/src/content/views/authors.mdx?astroPropagatedAssets":"chunks/authors_BBqnXCsL.mjs","/workspaces/FrostFoe/astro-news/src/content/views/author.mdx?astroPropagatedAssets":"chunks/author_BL12jGjg.mjs","/workspaces/FrostFoe/astro-news/src/content/views/categories.mdx?astroPropagatedAssets":"chunks/categories_Cc_VNXYj.mjs","/workspaces/FrostFoe/astro-news/src/content/views/contact.mdx?astroPropagatedAssets":"chunks/contact_Df5ostHR.mjs","/workspaces/FrostFoe/astro-news/src/content/views/error404.mdx?astroPropagatedAssets":"chunks/error404_DEU6zl1J.mjs","/workspaces/FrostFoe/astro-news/src/content/views/home.mdx?astroPropagatedAssets":"chunks/home_D5uwQ058.mjs","/workspaces/FrostFoe/astro-news/src/content/views/search.mdx?astroPropagatedAssets":"chunks/search_4ctYulpv.mjs","/workspaces/FrostFoe/astro-news/src/content/authors/frostfoe/index.mdx?astroPropagatedAssets":"chunks/index_Co-QUeDR.mjs","/workspaces/FrostFoe/astro-news/src/content/views/articles.mdx":"chunks/articles_sK5OiCjX.mjs","/workspaces/FrostFoe/astro-news/src/content/views/authors.mdx":"chunks/authors_ClnwqVfs.mjs","/workspaces/FrostFoe/astro-news/src/content/views/author.mdx":"chunks/author_zfJ6Kbvg.mjs","/workspaces/FrostFoe/astro-news/src/content/views/categories.mdx":"chunks/categories_5JdpDlHB.mjs","/workspaces/FrostFoe/astro-news/src/content/views/contact.mdx":"chunks/contact_BNIrNjCX.mjs","/workspaces/FrostFoe/astro-news/src/content/views/error404.mdx":"chunks/error404_vy-9R6Fh.mjs","/workspaces/FrostFoe/astro-news/src/content/views/home.mdx":"chunks/home_DHlMxEs_.mjs","/workspaces/FrostFoe/astro-news/src/content/views/search.mdx":"chunks/search_BxJpJVJL.mjs","/workspaces/FrostFoe/astro-news/src/content/authors/frostfoe/index.mdx":"chunks/index_DqHVGifW.mjs","/workspaces/FrostFoe/astro-news/.astro/content-assets.mjs":"chunks/content-assets_DJ-w_fPo.mjs","/workspaces/FrostFoe/astro-news/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/workspaces/FrostFoe/astro-news/src/content/views/about.mdx":"chunks/about_lta9yRX3.mjs","\u0000@astrojs-manifest":"manifest_BAaRj6yf.mjs","/workspaces/FrostFoe/astro-news/src/pages/search/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.Dxi9UhEQ.js","/workspaces/FrostFoe/astro-news/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/workspaces/FrostFoe/astro-news/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.CaZ7xgi7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/avatar.BgOGUHNQ.png","/_astro/Performances.FXMZItJb.png","/_astro/screenshot-astronews.B92DgFEf.png","/_astro/source-sans-pro-cyrillic-ext-400-normal.BZJRkJ55.woff2","/_astro/source-sans-pro-cyrillic-400-normal.Bo6gnWEs.woff2","/_astro/source-sans-pro-greek-ext-400-normal.DurV-KM9.woff2","/_astro/source-sans-pro-greek-400-normal.CZJmCPdY.woff2","/_astro/source-sans-pro-vietnamese-400-normal.DmpbtSrx.woff2","/_astro/source-sans-pro-latin-400-normal.tpsLXCSJ.woff2","/_astro/source-sans-pro-latin-ext-400-normal.b0izRs8p.woff2","/_astro/default-image.Cmn-eKmv.jpg","/_astro/source-sans-pro-cyrillic-ext-600-normal.qEDpwGRt.woff2","/_astro/source-sans-pro-cyrillic-600-normal.7IW-0rI7.woff2","/_astro/source-sans-pro-greek-ext-600-normal.Bk3oygDb.woff2","/_astro/source-sans-pro-greek-600-normal.DufzpiO_.woff2","/_astro/source-sans-pro-vietnamese-600-normal.B_7vbVAt.woff2","/_astro/source-sans-pro-latin-600-normal.BM2CBz6W.woff2","/_astro/source-sans-pro-latin-ext-600-normal.XGkkjFz7.woff2","/_astro/source-serif-4-cyrillic-ext-wght-normal.cHuGMAiY.woff2","/_astro/source-serif-4-cyrillic-wght-normal.DwHjdM4S.woff2","/_astro/source-serif-4-greek-wght-normal.ece1310W.woff2","/_astro/source-serif-4-vietnamese-wght-normal.D-yuW59g.woff2","/_astro/source-serif-4-latin-ext-wght-normal.CxNHBx-q.woff2","/_astro/source-serif-4-latin-wght-normal.D9elroTD.woff2","/_astro/source-sans-pro-cyrillic-ext-700-normal.CMNOJ5Qm.woff2","/_astro/source-sans-pro-cyrillic-700-normal.CkdS6a5a.woff2","/_astro/source-sans-pro-greek-ext-700-normal.sY5KVvyA.woff2","/_astro/source-sans-pro-greek-700-normal.Bq-mRDqF.woff2","/_astro/source-sans-pro-vietnamese-700-normal.f-Bm14rw.woff2","/_astro/source-sans-pro-latin-ext-700-normal.Cf8nNWsm.woff2","/_astro/source-sans-pro-latin-700-normal.DL7J4422.woff2","/_astro/source-sans-pro-cyrillic-ext-400-normal.DtD_g0fW.woff","/_astro/source-sans-pro-cyrillic-400-normal.h6inArLS.woff","/_astro/source-sans-pro-greek-ext-400-normal.BfIWL1p1.woff","/_astro/source-sans-pro-vietnamese-400-normal.C_X2WPHN.woff","/_astro/source-sans-pro-latin-400-normal.R7DZS9ko.woff","/_astro/source-sans-pro-latin-ext-400-normal.B4yavu5O.woff","/_astro/source-sans-pro-cyrillic-ext-600-normal.BLUySEgx.woff","/_astro/source-sans-pro-cyrillic-600-normal.C6gpv_4y.woff","/_astro/source-sans-pro-greek-ext-600-normal.Bk3wWfL4.woff","/_astro/source-sans-pro-greek-600-normal.CNXbxSoy.woff","/_astro/source-sans-pro-vietnamese-600-normal.DJqX7dzL.woff","/_astro/source-sans-pro-latin-600-normal.CjV2-MXP.woff","/_astro/source-sans-pro-latin-ext-600-normal.BgwKN7TX.woff","/_astro/source-sans-pro-greek-400-normal.C-qB9CTB.woff","/_astro/source-sans-pro-cyrillic-ext-700-normal.C6lq_OUW.woff","/_astro/source-sans-pro-cyrillic-700-normal.DCJL43JV.woff","/_astro/source-sans-pro-greek-ext-700-normal.BXPp6Eqx.woff","/_astro/source-sans-pro-greek-700-normal.BCz9b4qF.woff","/_astro/source-sans-pro-vietnamese-700-normal.CwqTh6JM.woff","/_astro/source-sans-pro-latin-ext-700-normal.yj0w5CKO.woff","/_astro/source-sans-pro-latin-700-normal.BNdTgDH_.woff","/_astro/_page_.CQtECkwM.css","/_astro/index.CXOjeUv_.css","/apple-touch-icon.png","/favicon copy.svg","/favicon-96x96.png","/favicon.ico","/favicon.svg","/robots.txt","/site.webmanifest","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/index.astro_astro_type_script_index_0_lang.Dxi9UhEQ.js","/_astro/ui-core.CaZ7xgi7.js","/404.html","/about/index.html","/articles/index.html","/authors/index.html","/categories/index.html","/rss.xml","/search/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"T7n32dLMt42KyIz2pcaFAFoycItvYJQBxBE1ZoTiBgQ=","sessionConfig":{"driver":"fs-lite","options":{"base":"/workspaces/FrostFoe/astro-news/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
