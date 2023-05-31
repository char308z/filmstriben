import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.9b869f1a.mjs';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.b05fa3f7.mjs');
const _page1  = () => import('./chunks/componentsite@_@astro.6a045354.mjs');
const _page2  = () => import('./chunks/allefilm@_@astro.1a14cc31.mjs');
const _page3  = () => import('./chunks/_alder_@_@astro.a539972c.mjs');
const _page4  = () => import('./chunks/_genre_@_@astro.c4189866.mjs');
const _page5  = () => import('./chunks/_kategori_@_@astro.83327be5.mjs');
const _page6  = () => import('./chunks/_slug_@_@astro.d323235b.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/componentsite.astro", _page1],["src/pages/allefilm.astro", _page2],["src/pages/[alder].astro", _page3],["src/pages/[genre].astro", _page4],["src/pages/[kategori].astro", _page5],["src/pages/[slug].astro", _page6]]);const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9fb8535e.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/componentsite.02d4cdac.css"},{"type":"external","src":"/_astro/_slug_.8c17ad87.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/componentsite.2a556f2c.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6c8103e5.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/componentsite.02d4cdac.css"},{"type":"external","src":"/_astro/componentsite.2a556f2c.css"},{"type":"external","src":"/_astro/componentsite.978a7fa3.css"},{"type":"external","src":"/_astro/_slug_.1dab506e.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_alder_.fe222c1c.css"}],"routeData":{"route":"/componentsite","type":"page","pattern":"^\\/componentsite\\/?$","segments":[[{"content":"componentsite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/componentsite.astro","pathname":"/componentsite","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c5ca8795.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_alder_.fe222c1c.css"}],"routeData":{"route":"/allefilm","type":"page","pattern":"^\\/allefilm\\/?$","segments":[[{"content":"allefilm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/allefilm.astro","pathname":"/allefilm","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c5ca8795.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_alder_.fe222c1c.css"}],"routeData":{"route":"/[alder]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"alder","dynamic":true,"spread":false}]],"params":["alder"],"component":"src/pages/[alder].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c5ca8795.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_alder_.fe222c1c.css"}],"routeData":{"route":"/[genre]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"genre","dynamic":true,"spread":false}]],"params":["genre"],"component":"src/pages/[genre].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c5ca8795.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_alder_.fe222c1c.css"}],"routeData":{"route":"/[kategori]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"kategori","dynamic":true,"spread":false}]],"params":["kategori"],"component":"src/pages/[kategori].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.f87edcf7.js"}],"styles":[{"type":"external","src":"/_astro/_alder_.ae9c4bec.css"},{"type":"external","src":"/_astro/componentsite.02d4cdac.css"},{"type":"external","src":"/_astro/_alder_.62ad6ba0.css"},{"type":"external","src":"/_astro/_slug_.1dab506e.css"},{"type":"external","src":"/_astro/_slug_.0d7b6d8f.css"},{"type":"external","src":"/_astro/componentsite.6f87528c.css"},{"type":"external","src":"/_astro/_slug_.8c17ad87.css"},{"type":"external","src":"/_astro/_slug_.e6e01a3c.css"}],"routeData":{"route":"/[slug]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[alder].astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[genre].astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[kategori].astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/allefilm.astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/componentsite.astro",{"propagation":"none","containsHead":true}],["/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/[genre].astro":"chunks/pages/_genre_.astro.87a84558.mjs","/src/pages/[kategori].astro":"chunks/pages/_kategori_.astro.ffb5bb9b.mjs","/src/pages/allefilm.astro":"chunks/pages/allefilm.astro.8238b7a6.mjs","/src/pages/index.astro":"chunks/pages/index.astro.049ba485.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.b05fa3f7.mjs","\u0000@astro-page:src/pages/componentsite@_@astro":"chunks/componentsite@_@astro.6a045354.mjs","\u0000@astro-page:src/pages/allefilm@_@astro":"chunks/allefilm@_@astro.1a14cc31.mjs","\u0000@astro-page:src/pages/[alder]@_@astro":"chunks/_alder_@_@astro.a539972c.mjs","\u0000@astro-page:src/pages/[genre]@_@astro":"chunks/_genre_@_@astro.c4189866.mjs","\u0000@astro-page:src/pages/[kategori]@_@astro":"chunks/_kategori_@_@astro.83327be5.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"chunks/_slug_@_@astro.d323235b.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.9fb8535e.js","/astro/hoisted.js?q=0":"_astro/hoisted.f87edcf7.js","/astro/hoisted.js?q=2":"_astro/hoisted.6c8103e5.js","/astro/hoisted.js?q=3":"_astro/hoisted.c5ca8795.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_alder_.fe222c1c.css","/_astro/_alder_.62ad6ba0.css","/_astro/_alder_.ae9c4bec.css","/_astro/_slug_.e6e01a3c.css","/_astro/_slug_.8c17ad87.css","/_astro/_slug_.1dab506e.css","/_astro/_slug_.0d7b6d8f.css","/_astro/componentsite.6f87528c.css","/_astro/componentsite.02d4cdac.css","/_astro/componentsite.2a556f2c.css","/_astro/componentsite.978a7fa3.css","/appikon.svg","/appknap.svg","/appstore.svg","/dbc_logo.svg","/favicon.svg","/googleplay.svg","/hjul.svg","/imdb.svg","/logo.svg","/pointCirkel.svg","/share_with_care.svg","/_astro/Hero.astro_astro_type_script_index_0_lang.19b47ebc.js","/_astro/Primarycard_karrusel.astro_astro_type_script_index_0_lang.5448b35f.js","/_astro/Undermenu.astro_astro_type_script_index_0_lang.53955b2c.js","/_astro/hoisted.6c8103e5.js","/_astro/hoisted.9fb8535e.js","/_astro/hoisted.c5ca8795.js","/_astro/hoisted.f87edcf7.js","/_astro/star.astro_astro_type_script_index_0_lang.fb0509ac.js","/alder/11.webp","/alder/15.webp","/alder/7.webp","/alder/a.webp","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/mstile-144x144.png","/favicon/mstile-150x150.png","/favicon/mstile-310x150.png","/favicon/mstile-310x310.png","/favicon/mstile-70x70.png","/favicon/site.webmanifest","/icons/heart.svg","/icons/star.svg","/img/maanedens film/imgCard.webp","/img/maanedens film/imgPlakat.jpg","/img/maanedens film/imgSingleview.webp","/img/maanedens film/imgSingleview2.webp","/img/Danske kortfilm/Angel/imgCard.webp","/img/Danske kortfilm/Angel/imgSingleview.webp","/img/Danske kortfilm/Angel/imgSingleview2.webp","/img/Danske kortfilm/Bare en cappuccino/imgCard.webp","/img/Danske kortfilm/Bare en cappuccino/imgSingleview.webp","/img/Danske kortfilm/Bare en cappuccino/imgSingleview2.webp","/img/Danske kortfilm/Bjorn på Langeland/imgCard.webp","/img/Danske kortfilm/Bjorn på Langeland/imgSingleview.webp","/img/Danske kortfilm/Bjorn på Langeland/imgSingleview2.webp","/img/Danske kortfilm/Dark angel/imgCard.webp","/img/Danske kortfilm/Dark angel/imgSingleview.webp","/img/Danske kortfilm/Dark angel/imgSingleview2.webp","/img/Danske kortfilm/Drengevenner/imgCard.webp","/img/Danske kortfilm/Drengevenner/imgSingleview.webp","/img/Danske kortfilm/Drengevenner/imgSingleview2.webp","/img/Danske kortfilm/En svale gor ingen sommer/imgCard.webp","/img/Danske kortfilm/En svale gor ingen sommer/imgSingleview.webp","/img/Danske kortfilm/En svale gor ingen sommer/imgSingleview2.webp","/img/Danske kortfilm/Palle alene i verden/imgCard.webp","/img/Danske kortfilm/Palle alene i verden/imgSingleview.webp","/img/Danske kortfilm/Palle alene i verden/imgSingleview2.webp","/img/Danske kortfilm/Uden barn/imgCard.webp","/img/Danske kortfilm/Uden barn/imgSingleview.webp","/img/Danske kortfilm/Uden barn/imgsingleview2.webp","/img/andet/robocop/imgCard.webp","/img/andet/robocop/imgSingleview.webp","/img/andet/robocop/imgSingleview2.webp","/img/andet/the-guest/imgCard.webp","/img/andet/the-guest/imgSingleview.webp","/img/andet/the-guest/imgSingleview2.webp","/img/andet/underverden/imgCard.webp","/img/andet/underverden/imgSingleview.webp","/img/andet/underverden/imgSingleview2.webp","/img/far tema/Gaven/imgCard.webp","/img/far tema/Gaven/imgSingleview.webp","/img/far tema/Gaven/imgSingleview2.webp","/img/far tema/Gensyn med Yorkshire/imgCard.webp","/img/far tema/Gensyn med Yorkshire/imgSingleview.webp","/img/far tema/Gensyn med Yorkshire/imgSingleview2.webp","/img/far tema/Lulu/imgCard.webp","/img/far tema/Lulu/imgSingleview.webp","/img/far tema/Lulu/imgSingleview2.webp","/img/far tema/Mesterkokken/imgCard.webp","/img/far tema/Mesterkokken/imgSingleview.webp","/img/far tema/Mesterkokken/imgSingleview2.webp","/img/far tema/Omveje/imgCard.webp","/img/far tema/Omveje/imgSingleview.webp","/img/far tema/Omveje/imgSingleview2.webp","/img/far tema/Paris of the North/imgCard.webp","/img/far tema/Paris of the North/imgSingleview.webp","/img/far tema/Paris of the North/imgSingleview2.webp","/img/animation/chihiro-og-heksene/imgCard.webp","/img/animation/chihiro-og-heksene/imgSingleview.webp","/img/animation/chihiro-og-heksene/imgSingleview2.webp","/img/animation/mysteriet-om-hr-link/imgCard.webp","/img/animation/mysteriet-om-hr-link/imgSingleview.webp","/img/animation/mysteriet-om-hr-link/imgSingleview2.webp","/img/kaerlighed/Ali Ava/imgCard.webp","/img/kaerlighed/Ali Ava/imgSingleview.webp","/img/kaerlighed/Ali Ava/imgSingleview2.webp","/img/kaerlighed/Barbara/imgCard.webp","/img/kaerlighed/Barbara/imgSingleview.webp","/img/kaerlighed/Barbara/imgSingleview2.webp","/img/kaerlighed/Cyrano/imgCard.webp","/img/kaerlighed/Cyrano/imgSingleview.webp","/img/kaerlighed/Cyrano/imgSingleview2.webp","/img/kaerlighed/Jeg elsker ogsaa dig/imgCard.webp","/img/kaerlighed/Jeg elsker ogsaa dig/imgSingleview.webp","/img/kaerlighed/Jeg elsker ogsaa dig/imgSingleview2.webp","/img/kaerlighed/Jeg hedder Ernesto/imgCard.webp","/img/kaerlighed/Jeg hedder Ernesto/imgSingleview.webp","/img/kaerlighed/Jeg hedder Ernesto/imgSingleview2.webp","/img/kaerlighed/Moderen og luderen/imgCard.webp","/img/kaerlighed/Moderen og luderen/imgSingleview.webp","/img/kaerlighed/Moderen og luderen/imgSingleview2.webp","/img/kaerlighed/Peter von Kant/imgCard.webp","/img/kaerlighed/Peter von Kant/imgSingleview.webp","/img/kaerlighed/Peter von Kant/imgSingleview2.webp","/img/kaerlighed/Waiting for Bojangles/imgCard.webp","/img/kaerlighed/Waiting for Bojangles/imgSingleview.webp","/img/kaerlighed/Waiting for Bojangles/imgSingleview2.webp","/img/maanedens dokumentar/de-fem-aar/imgCard.webp","/img/maanedens dokumentar/de-fem-aar/imgSingleview.webp","/img/maanedens dokumentar/de-fem-aar/imgSingleview2.webp","/img/mongoliet/Aligermaas eventyr/imgCard.webp","/img/mongoliet/Aligermaas eventyr/imgSingleview.webp","/img/mongoliet/Aligermaas eventyr/imgSingleview2.webp","/img/mongoliet/Den gyldne jord/imgCard.webp","/img/mongoliet/Den gyldne jord/imgSingleview.webp","/img/mongoliet/Den gyldne jord/imgSingleview2.webp","/img/mongoliet/Faedre soenner/imgCard.webp","/img/mongoliet/Faedre soenner/imgSingleview.webp","/img/mongoliet/Faedre soenner/imgSingleview2.webp","/img/mongoliet/Le dernier loup/imgCard.webp","/img/mongoliet/Le dernier loup/imgSingleview.webp","/img/mongoliet/Le dernier loup/imgSingleview2.webp","/img/mongoliet/Migas rejse/imgCard.webp","/img/mongoliet/Migas rejse/imgSingleview.webp","/img/mongoliet/Migas rejse/imgSingleview2.webp","/img/mongoliet/Oernejaegerens soen/imgCard.webp","/img/mongoliet/Oernejaegerens soen/imgSingleview.webp","/img/mongoliet/Oernejaegerens soen/imgSingleview2.webp","/img/oscar film/Drive my car/imgCard.webp","/img/oscar film/Drive my car/imgPlakat.webp","/img/oscar film/Drive my car/imgSingleview.webp","/img/oscar film/Drive my car/imgSingleview2.webp","/img/oscar film/Everything everywhere all at once/imgCard.webp","/img/oscar film/Everything everywhere all at once/imgPlakat.webp","/img/oscar film/Everything everywhere all at once/imgSingleview.webp","/img/oscar film/Everything everywhere all at once/imgSingleview2.webp","/img/oscar film/Licorice pizza/imgCard.webp","/img/oscar film/Licorice pizza/imgPlakat.webp","/img/oscar film/Licorice pizza/imgSingleview.webp","/img/oscar film/Licorice pizza/imgSingleview2.webp","/img/oscar film/Quo vadis Aida/imgCard.webp","/img/oscar film/Quo vadis Aida/imgPlakat.webp","/img/oscar film/Quo vadis Aida/imgSingleview.webp","/img/oscar film/Quo vadis Aida/imgSingleview2.webp","/img/oscar film/The father/imgCard.webp","/img/oscar film/The father/imgPlakat.webp","/img/oscar film/The father/imgSingleview.webp","/img/oscar film/The father/imgSingleview2.webp","/img/oscar film/The lost daughter/imgCard.webp","/img/oscar film/The lost daughter/imgPlakat.webp","/img/oscar film/The lost daughter/imgSingleview.webp","/img/oscar film/The lost daughter/imgSingleview2.webp","/img/oscar film/To Leslie/imgCard.webp","/img/oscar film/To Leslie/imgPlakat.webp","/img/oscar film/To Leslie/imgSingleview.webp","/img/oscar film/To Leslie/imgSingleview2.webp","/img/oscar film/Verdens verste menneske/imgCard.webp","/img/oscar film/Verdens verste menneske/imgPlakat.webp","/img/oscar film/Verdens verste menneske/imgSingleview.webp","/img/oscar film/Verdens verste menneske/imgSingleview2.webp","/img/senest tilfoejet/free Cjol Soo Lee/imgCard.webp","/img/senest tilfoejet/free Cjol Soo Lee/imgSingleview.webp","/img/senest tilfoejet/free Cjol Soo Lee/imgSingleview2.webp","/img/senest tilfoejet/hej verden/imgCard.webp","/img/senest tilfoejet/hej verden/imgSingleview.webp","/img/senest tilfoejet/hej verden/imgSingleview2.webp","/img/senest tilfoejet/jeg elsker ogsaa dig/imgCard.webp","/img/senest tilfoejet/jeg elsker ogsaa dig/imgSingleview.webp","/img/senest tilfoejet/jeg elsker ogsaa dig/imgSingleview2.webp","/img/senest tilfoejet/min sommer i Provence/imgCard.webp","/img/senest tilfoejet/min sommer i Provence/imgPlakat.jpg","/img/senest tilfoejet/min sommer i Provence/imgSingleview.webp","/img/senest tilfoejet/min sommer i Provence/imgSingleview2.webp","/img/senest tilfoejet/nattens skov/imgCard.webp","/img/senest tilfoejet/nattens skov/imgSingleview.webp","/img/senest tilfoejet/nattens skov/imgSingleview2.webp","/img/senest tilfoejet/songs my brothers taught me/imgCard.webp","/img/senest tilfoejet/songs my brothers taught me/imgSingleview.webp","/img/senest tilfoejet/songs my brothers taught me/imgSingleview2.webp","/img/senest tilfoejet/spun/imgCard.webp","/img/senest tilfoejet/spun/imgSingleview.webp","/img/senest tilfoejet/spun/imgSingleview2.webp","/img/senest tilfoejet/the super 8 years/imgCard.webp","/img/senest tilfoejet/the super 8 years/imgSingleview.webp","/img/senest tilfoejet/the super 8 years/imgSingleview2.webp","/img/splash/Love Proof/imgCard.webp","/img/splash/Love Proof/imgSingleview.webp","/img/splash/Love Proof/imgSingleview2.webp","/img/splash/Lulu/imgCard.webp","/img/splash/Lulu/imgSingleview.webp","/img/splash/Lulu/imgSingleview2.webp","/img/splash/maanedens dokumentar/imgCard.webp","/img/splash/maanedens dokumentar/imgSingleview.webp"]}), {
	pageMap,
	renderers,
	undefined
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
