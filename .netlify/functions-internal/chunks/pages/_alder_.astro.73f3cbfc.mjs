/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.9b869f1a.mjs';
import 'html-escaper';
/* empty css                                   *//* empty css                            *//* empty css                             *//* empty css                             */
const $$Astro$m = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Button;
  const { tekst, variant, typeIcon, btnClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(variant, "data-variant")}${addAttribute(`${btnClass} noBreak w-fit h-fit gap-2 py-2 px-5 rounded-md flex astro-VNZLVQNM`, "class")}>
  <div class="body-md astro-VNZLVQNM">
    ${tekst}
  </div>
  <div class="icon lightIcon astro-VNZLVQNM">
    <p class="lightIcon astro-VNZLVQNM">${typeIcon}</p>
  </div>
</button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Button.astro");

const $$Astro$l = createAstro();
const $$Facebook = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Facebook;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(variant, "data-variant")} href="https://www.facebook.com/filmstriben" class="astro-N2WX347R">
  <p class="brandIcon text-gold-500 hover:text-white astro-N2WX347R"></p></a>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/facebook.astro");

const $$Astro$k = createAstro();
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Instagram;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(variant, "data-variant")} href="https://www.instagram.com/filmstriben/" class="astro-PYSNA62S">
  <p class="brandIcon text-gold-500 hover:text-white astro-PYSNA62S">instagram</p></a>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/Instagram.astro");

const $$Astro$j = createAstro();
const $$Twitter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Twitter;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(variant, "data-variant")} href="https://twitter.com/filmstriben" class="astro-IOFCNQ35">
  <p class="brandIcon text-gold-500 hover:text-white astro-IOFCNQ35"></p></a>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/twitter.astro");

const $$Astro$i = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-black mt-14 px-20 pt-10 pb-8 bottom-0 astro-SZ7XMLTE">
  <section class="flex justify-between astro-SZ7XMLTE">
    <div class="logo flex flex-col astro-SZ7XMLTE">
      <img class="logo astro-SZ7XMLTE" src="../logo.svg" alt="logo">
      <p class="text-grey-500 mt-8 body-sm astro-SZ7XMLTE">© DBC Digital A/S</p>
    </div>

    <div class="flex flex-col gap-1 astro-SZ7XMLTE">
      <p class="text-xs font-display uppercase text-gold-500 mb-1 astro-SZ7XMLTE">
        Information
      </p>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Om Filmstriben</a>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Persondata</a>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Tilgængelighedserklæring</a>
    </div>

    <div class="flex flex-col gap-1 astro-SZ7XMLTE">
      <p class="text-xs font-display uppercase text-gold-500 mb-1 astro-SZ7XMLTE">
        Til brugerne
      </p>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Om pointsystem</a>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Hvordan ser jeg film</a>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Se film på biblioteket</a>
      <a class="body-sm text-grey-200 astro-SZ7XMLTE" href="">Kontakt kundeservice</a>
    </div>

    <div class="flex flex-col gap-4 astro-SZ7XMLTE">
      <img class="w-1/2 astro-SZ7XMLTE" src="../dbc_logo.svg" alt="dbc_logo">
      <address class="not-italic body-sm text-grey-400 astro-SZ7XMLTE">
        Tempovej 7-11 2750 Ballerup
      </address>
      <p class="body-sm text-grey-400 astro-SZ7XMLTE">
        <a href="tel:+4544867777" class="astro-SZ7XMLTE">+45 44 86 77 77</a>
      </p>
    </div>

    <div class="flex flex-col justify-between astro-SZ7XMLTE">
      <div class="flex w-full gap-3 items-baseline astro-SZ7XMLTE">
        <div class="w-full astro-SZ7XMLTE">
          <p class="body-sm text-grey-400 astro-SZ7XMLTE">Email</p>
          <hr class="text-white w-full astro-SZ7XMLTE">
        </div>
        ${renderComponent($$result, "Button", $$Button, { "variant": "secondary-uden-icon", "tekst": "Tilmeld nyhedsbrev", "class": "astro-SZ7XMLTE" })}
      </div>

      <div class="flex gap-3 astro-SZ7XMLTE">
        <h5 class="text-white body-sm noBreak items-center flex astro-SZ7XMLTE">Følg os:</h5>
        ${renderComponent($$result, "Facebook", $$Facebook, { "variant": "medium", "class": "astro-SZ7XMLTE" })}
        ${renderComponent($$result, "Instagram", $$Instagram, { "variant": "medium", "class": "astro-SZ7XMLTE" })}
        ${renderComponent($$result, "Twitter", $$Twitter, { "variant": "medium", "class": "astro-SZ7XMLTE" })}

        <img class="pl-16 astro-SZ7XMLTE" src="../share_with_care.svg" alt="share_with_care">
      </div>
    </div>
  </section>
</footer>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Footer.astro");

const bornunge = [
	{
		kategori: "Små børn",
		alderMenu: "0",
		aldersgruppe: [
			"a"
		]
	},
	{
		kategori: "Større børn",
		alderMenu: "7",
		aldersgruppe: [
			"a",
			"7"
		]
	},
	{
		kategori: "Unge",
		alderMenu: "11",
		aldersgruppe: [
			"a",
			"7",
			"11",
			"15"
		]
	}
];

const filmkategori = [
	"Dokumentar",
	"Spillefilm",
	"Kortfilm",
	"Tv-serie"
];

const $$Astro$h = createAstro();
const $$Kryds = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Kryds;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="del"${addAttribute(variant, "data-variant")} class="astro-XZ435I2Q">
  <p${addAttribute(variant, "data-variant")} class="hover:text-gold-500 solidIcon astro-XZ435I2Q">xmark</p>
</button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/Kryds.astro");

const $$Astro$g = createAstro();
const $$Undermenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Undermenu;
  const { navpunkt } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="ulle astro-S5YGW34U">
  <li class="navpunkt cursor-pointer astro-S5YGW34U">${navpunkt}</li>

  <div class="undermenu absolute hidden left-0 mt-4 w-screen py-4 px-12 bg-black flex flex-col astro-S5YGW34U">
    <div class="luk flex w-full justify-end astro-S5YGW34U">${renderComponent($$result, "Kryds", $$Kryds, { "class": "astro-S5YGW34U" })}</div>
    <div class="flex flex-row gap-8 astro-S5YGW34U">
      <ul class="kategori divider pr-8 py-4 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-2 astro-S5YGW34U">
        <li class="flex py-1 px-1 align-middle text-yellow-600 font-medium astro-S5YGW34U">
          <a href="allefilm" class="astro-S5YGW34U">Alle film</a>
        </li>
        ${filmkategori.map((filmkategori) => renderTemplate`<li class=" py-1 px-1 align-middle  astro-S5YGW34U">
              <a class="Underline astro-S5YGW34U"${addAttribute(filmkategori, "href")}>
                ${filmkategori}
              </a>
            </li>`)}
      </ul>

      ${renderSlot($$result, $$slots["default"])}
    </div>
  </div>
</ul>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/layouts/Undermenu.astro");

const $$Astro$f = createAstro();
const $$Bornmenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Bornmenu;
  console.log(bornunge);
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Undermenu", $$Undermenu, { "navpunkt": "B\xF8rn & Unge" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="grid grid-rows-3 py-4 gap-x-4 gap-y-2">
    ${bornunge.map((aldersKategori) => renderTemplate`<li class=" py-1 px-1 align-middle">
          <a class="Underline"${addAttribute(aldersKategori.kategori, "href")}>${`${aldersKategori.kategori} +${aldersKategori.alderMenu} \xE5r`}</a>
        </li>`)}
  </div>
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Bornmenu.astro");

const $$Astro$e = createAstro();
const $$Burgermenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Burgermenu;
  return renderTemplate`${maybeRenderHead($$result)}<ul class="astro-APWTRYAH">
  <li class="burger cursor-pointer lightIcon hover:text-gold-400 astro-APWTRYAH">bars</li>

  <div class="undermenuBurger hidden absolute left-0 mt-4 h-screen py-4 pb-28 px-8 bg-black flex-col gap-4 overflow-scroll scrollbar-hide astro-APWTRYAH">
    <div class="bgOverlay fixed bg-black bg-opacity-70 items-cente top-0 left-0 w-screen h-screen -z-40 astro-APWTRYAH">
    </div>
    <div class="lukBurger flex w-full justify-end astro-APWTRYAH">${renderComponent($$result, "Kryds", $$Kryds, { "class": "astro-APWTRYAH" })}</div>
    <ul class="flex flex-col pb-8 gap-6 astro-APWTRYAH">
      <li class="w-full pb-2 border-b-[1px] font-display text-sm uppercase astro-APWTRYAH">
        Point
      </li>
      <a href="#" class="astro-APWTRYAH"> <img class="w-1/2 astro-APWTRYAH" src="../pointCirkel.svg" alt=""></a>
      <p class="astro-APWTRYAH">
        Du har 8 point tilbage denne måned. <br class="astro-APWTRYAH"> bibliotek tilbyder dig 12 point
        i alt hver måned. <br class="astro-APWTRYAH"><a class="underline text-white astro-APWTRYAH" href="#">Læs mere her</a>
      </p>
    </ul>

    <ul class="flex flex-col pb-8 astro-APWTRYAH">
      <li class="w-full pb-2 border-b-[1px] font-display text-sm uppercase astro-APWTRYAH">
        Nyheder
      </li>
      <ul class="underpunkter w-full flex flex-col gap-3 pt-3 pr-8 astro-APWTRYAH">
        <li class="flex text-grey-200 astro-APWTRYAH">
          <a class="Underline pr-8 astro-APWTRYAH" href="#">Nyeste film og TV-serier</a>
        </li>

        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Kommende film</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Nyhedsarkiv</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="allefilm">Alle film</a>
        </li>
      </ul>
    </ul>
    <ul class="flex flex-col astro-APWTRYAH">
      <li class="w-full pb-2 border-b-[1px] font-display text-sm uppercase astro-APWTRYAH">
        Information
      </li>
      <ul class="underpunkter flex flex-col gap-3 pt-3 astro-APWTRYAH">
        <li class="flex text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Hvordan ser jeg film</a>
        </li>

        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Om filmstriben</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Om pointsystem</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Kontakt kundeservice</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Se film på biblioteket</a>
        </li>
        <li class="text-grey-200 astro-APWTRYAH">
          <a class="Underline astro-APWTRYAH" href="#">Tilmeld nyhedsbrev</a>
        </li>
      </ul>
    </ul>
  </div>
</ul>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Burgermenu.astro");

const filmgenre = [
	"Action",
	"Animation",
	"Drama",
	"Eventyr",
	"Familie",
	"Gyser",
	"Historie",
	"Indie",
	"Komedie",
	"Krimi",
	"Kærlighed",
	"Musical",
	"Musik",
	"Science fiction",
	"Thriller",
	"Western"
];

const $$Astro$d = createAstro();
const $$Genremenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Genremenu;
  return renderTemplate`${renderComponent($$result, "Undermenu", $$Undermenu, { "navpunkt": "Genre" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="grid grid-rows-3 grid-cols-6 grid-flow-col py-4 gap-x-4 gap-y-2">
    ${filmgenre.map((genre) => renderTemplate`<li class=" py-1 px-1 align-middle">
          <a class="Underline"${addAttribute(genre, "href")}>
            ${genre}
          </a>
        </li>`)}
  </div>
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Genremenu.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$c = createAstro();
const $$Sog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Sog;
  const { variant } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button id="sog"', ' class="astro-TRJO3SYI">\n  <p class="lightIcon active:solidIcon hover:text-gold-500 astro-TRJO3SYI">\n    magnifying-glass\n  </p></button>\n\n\n\n<!-- <script>\n  const Button = document.getElementById("sog");\n  const textElement = document.querySelector("#sog p");\n\n  Button.addEventListener("click", colorOn);\n\n  function colorOn() {\n    textElement.classList = "solidIcon ";\n    textElement.style.color = "#CAAE68";\n    Button.addEventListener("click", colorOff);\n  }\n  function colorOff() {\n    textElement.classList = "lightIcon ";\n    textElement.style.color = "white";\n    Button.addEventListener("click", colorOn);\n  }\n<\/script> -->'])), maybeRenderHead($$result), addAttribute(variant, "data-variant"));
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/sog.astro");

const $$Astro$b = createAstro();
const $$Sogbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Sogbar;
  return renderTemplate`${maybeRenderHead($$result)}<div class="sog">${renderComponent($$result, "Sog", $$Sog, { "variant": "small" })}</div>

<div class="bar hidden absolute w-screen bg-black left-0 top-[72px] h-16 px-8 pb-8 pt-4">
  <div class="bgSogOverlay fixed bg-black bg-opacity-70 items-cente top-0 left-0 w-screen h-screen -z-40">
  </div>
  <div class="flex gap-4 w-full">
    <p class="lightIcon noBreak">magnifying-glass</p>

    <p class="body-sm text-grey-200 border-b-[0.50px] border-solid border-gold-400 w-full">
      Søg efter serier eller film
    </p>
  </div>
</div>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Sogbar.astro");

const $$Astro$a = createAstro();
const $$HeaderHeart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeaderHeart;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(variant, "data-variant")} class="astro-UA2CTAZH">
  <p class="solidIcon text-gold-400 astro-UA2CTAZH">heart</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/Header_heart.astro");

const $$Astro$9 = createAstro();
const $$HeaderUser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeaderUser;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(variant, "data-variant")} class="astro-6FV7FKZ6">
  <p class="solidIcon text-white astro-6FV7FKZ6">user</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/Header_user.astro");

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="sticky z-50 top-0 bg-black flex flex-col justify-center px-10 pb-4 pt-2">
  <div>
    <p class="text-[10px] text-grey-400 float-right">
      Hej Bruger | Du bydes velkommen af <strong class="text-grey-300">Københavns Biblioteker</strong>
    </p>
  </div>
  <div class="flex justify-between items-center w-full">
    <div class="flex gap-6">
      ${renderComponent($$result, "Burgermenu", $$Burgermenu, {})}
      <div class="flex gap-4">
        <div class="">
          ${renderComponent($$result, "Bornmenu", $$Bornmenu, { "specialClass": "born" })}
        </div>
        <div class="">
          ${renderComponent($$result, "Genremenu", $$Genremenu, { "specialClass": "genre" })}
        </div>
      </div>
    </div>

    <a href="/"> <img class="logo w-28" src="../logo.svg" alt="logo"></a>

    <div class="text-[20px] flex flex-row gap-4 pl-[92px]">
      ${renderComponent($$result, "Sogbar", $$Sogbar, {})}
      ${renderComponent($$result, "Header_heart", $$HeaderHeart, {})}
      ${renderComponent($$result, "Header_user", $$HeaderUser, {})}
    </div>
  </div>
</header>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Header.astro");

const $$Astro$7 = createAstro();
const $$Procesbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Procesbar;
  return renderTemplate`${maybeRenderHead($$result)}<div class="progress-bar w-1 fixed h-full bg-gold-400 z-40 origin-top-left top-0 bottom-0 right-0 ease-linear duration-300">
</div>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/procesbar.astro");

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="da">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description" content="Filmstriben er bibliotekernes digitale film bibliotek.
    Filmstriben har et bredt og alsidigt udvalg af spillefilm, kortfilm og dokumentarfilm i forskellige film genre. ">
    <meta name="keywords" content="film genre, danske film, dokumentarfilm">
    <meta name="robots" content="noindex">
    <link rel="stylesheet" href="https://use.typekit.net/fio0bms.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <title>${title}</title>
  ${renderHead($$result)}</head>
  <div id="apphenvisning" class="z-[900] w-screen h-screen bg-black fixed px-16 py-40 flex flex-col justify-between place-content-center gap-6 md:hidden">
    <div class="absolute top-0 left-0 bg-grey-50 w-screen flex justify-between px-4 py-6">
      <div class="flex gap-4 items-center">
        <img class="w-fit" src="../appikon.svg" alt="">
        <div>
          <p class="body-lg font-light text-grey-900 leading-none">
            Filmstriben
          </p>
          <p class="body-xs font-light text-grey-700">
            Dit lokale filmbibliotek
          </p>
        </div>
      </div>
      <img class="w-fit" src="../appknap.svg" alt="">
    </div>
    <h1 class="font-display uppercase text-md">
      Få den mest optimale <span class="text-gold-400">biografoplevelse</span> med
      filmstribens app!
    </h1>
    <p class="text-grey-200">
      For at få den bedste oplevelse henviser vi dig til at benytte vores appen.
    </p>
    <p class="text-grey-200">
      Download Filmstribens app der hvor du downloader apps og få adgang til et
      væld af forskellige film genre.
    </p>
    <div class="flex w-full justify-between">
      <img src="../appstore.svg" alt="Billede af Appstore icon der linker til Filmstribens app">
      <img src="../googleplay.svg" alt="Billede af Appstore icon der linker til Filmstribens app">
    </div>
    <img class="w-fit mt-8" src="../logo.svg" alt="">
  </div>

  
    ${renderComponent($$result, "Header", $$Header, {})}
    ${renderComponent($$result, "Procesbar", $$Procesbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </html>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/layouts/Layout.astro");

const filmdatabase = [
	{
		filmTitel: "Everything everywhere all at once",
		slug: "everything-everywhere-all-at-once",
		originalTitel: "",
		aarstal: "2021",
		genre: "Action",
		underGenre: [
			"Science fiction",
			"Drama"
		],
		type: "Spillefilm",
		varighed: "2 t 14 min",
		instruktor: [
			"Daniel Kwan",
			"Daniel Scheinert"
		],
		manusforfatter: [
			"Daniel Kwan",
			"Daniel Scheinert"
		],
		medvirkende: [
			"Jamie Lee Curtis",
			"Michelle Yeoh",
			"Stephanie Hsu",
			"Ke Huy Quan",
			"Jenny Slate",
			"Harry Shum jr.",
			"James Hong"
		],
		langResume: "Evelyn Wang sidder bøjet over skatteregnskabet, da hun pludselig kastes ud i et eventyr, hvor kun hun alene kan redde verden fra undergangen ved at udforske andre universer, der forbinder hende med de liv, hun også kunne have levet. Filmen er instrueret af instuktørparret Dan Kwan og Daniel Scheinert, der også stod bag komedien 'Swiss army man' med Paul Dano og Daniel Radcliffe.",
		kortResume: "Evelyn Wang sidder bøjet over skatteregnskabet, da hun pludselig kastes ud i et eventyr, hvor kun hun alene kan redde verden fra undergangen ved at udforske andre universer, der forbinder hende med de liv, hun også kunne have levet.",
		sprog: [
			"Engelsk",
			"Kinesisk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Larkin Seiple"
		],
		produktionsselskab: [
			"Year of the rat",
			"Gonzie Agbo"
		],
		emneord: [
			"Kampsport",
			"LGBT-personer"
		],
		ratingFilmstriben: "4",
		ratingAntal: "235",
		ratingIMDb: "7.9",
		point: "4",
		alder: "15",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "Everything everywhere all at once",
		alt: "Billede fra Everything everywhere all at once"
	},
	{
		filmTitel: "To Leslie",
		slug: "to-leslie",
		originalTitel: "",
		aarstal: "2021",
		genre: "Drama",
		underGenre: [
			"Indie"
		],
		type: "Spillefilm",
		varighed: "1 t 55 min",
		instruktor: [
			"Michael Morris"
		],
		manusforfatter: [
			"Ryan Binaco"
		],
		medvirkende: [
			"Andrea Riseborough",
			"Andre Royo",
			"Owen Teague",
			"Stephen Root",
			"James Landry Hébert",
			"Marc Maron",
			"Allison Janney"
		],
		langResume: "Leslie Rowland er en enlig mor fra Texas, som endelig får en chance for et bedre liv, da hun bliver lottomillionær – pengene bliver hurtigt brugt på hendes misbrug, og da hun når bunden, er hun virkelig langt nede. Da hun møder motelejeren Sweeney, får hun en sidste chance, men spørgsmålet er, om hun tør tage den. 'To Leslie' er et følelsesstærkt drama baseret på virkelige hændelser, med Andrea Riseborough i hovedrollen.",
		kortResume: "Leslie Rowland er en enlig mor fra Texas, som endelig får en chance for et bedre liv, da hun bliver lottomillionær – pengene bliver hurtigt brugt på hendes misbrug, og da hun når bunden, er hun virkelig langt nede. Da hun møder motelejeren Sweeney, får hun en sidste chance, men spørgsmålet er, om hun tør tage den.",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Larkin Seiple"
		],
		produktionsselskab: [
			"Jason Shuman Productions",
			"Eduardo Cisneros Productions",
			"Baral Waley Productions"
		],
		emneord: [
			"Lotto",
			"Lottovindere",
			"Mor-søn-forholdet",
			"Texas",
			"USA",
			"Amerikanske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "48",
		ratingIMDb: "7.1",
		point: "4",
		alder: "15",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "To Leslie",
		alt: "billede fra To Leslie"
	},
	{
		filmTitel: "Licorice pizza",
		slug: "licorice-pizza",
		originalTitel: "",
		aarstal: "2021",
		genre: "Drama",
		underGenre: [
			"Kærlighed",
			"Komedie",
			"Unge"
		],
		type: "Spillefilm",
		varighed: "2 t 13 min",
		instruktor: [
			"Paul Thomas Anderson"
		],
		manusforfatter: [
			"Paul Thomas Anderson"
		],
		medvirkende: [
			"Alana Haim",
			"Cooper Hoffman",
			"Skyler Gisondo",
			"Mary Elizabeth Ellis",
			"John Michael Higgins",
			"Christine Ebersole",
			"Harriet Sansom Harris",
			"Sean Penn",
			"Tom Waits"
		],
		langResume: "Den forunderlige historie om det unge par Gary og Alana, som følges ad ud i voksenlivet i San Fernando Valley i 1973.",
		kortResume: "Den forunderlige historie om det unge par Gary og Alana, som følges ad ud i voksenlivet i San Fernando Valley i 1973.",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Paul Thomas Anderson",
			"Michael Bauman"
		],
		produktionsselskab: [
			"Ghoulardi Film Company"
		],
		emneord: [
			"Kærlighed",
			"Ungdom",
			"Californien",
			"USA",
			"1970-1979",
			"Coming of age"
		],
		ratingFilmstriben: "4",
		ratingAntal: "47",
		ratingIMDb: "7.2",
		point: "4",
		alder: "7",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "Licorice pizza",
		alt: "billede fra Licorice pizza "
	},
	{
		filmTitel: "Verdens værste menneske",
		slug: "verdens-vaerste-menneske",
		originalTitel: "Verdens vaerste menneske",
		aarstal: "2021",
		genre: "Drama",
		underGenre: [
			"Komedie"
		],
		type: "Spillefilm",
		varighed: "2 t 6 min",
		instruktor: [
			"Joachim Trier"
		],
		manusforfatter: [
			"Joachim Trier",
			"Eskil Vogt"
		],
		medvirkende: [
			"Renate Reinsve",
			"Anders Danielsen Lie",
			"Herbert Nordum"
		],
		langResume: "Julie (Renate Reinsve) er nået den alder, hvor de fleste, inklusive kæresten Aksel (Anders Danielsen Lie), er klare til at stifte familie. Men Julie er ikke færdig med at sparke døre ind, og mødet med den indtagende Eivind (Herbert Nordrum) åbner et nyt kapitel i hendes liv. Filmen er et på én gang gribende og komisk drama, der med varme og musikalitet tager livtag med den romantiske, men til tider hundesvære kærlighed. Renate Reinsve vandt prisen for bedste kvindelige skuespiller i Cannes, og filmen var nomineret til Oscar for både manuskript og bedste internationale film.",
		kortResume: "Julie (Renate Reinsve) er nået den alder, hvor de fleste, inklusive kæresten Aksel (Anders Danielsen Lie), er klare til at stifte familie. Men Julie er ikke færdig med at sparke døre ind, og mødet med den indtagende Eivind (Herbert Nordrum) åbner et nyt kapitel i hendes liv.",
		sprog: [
			"Norsk"
		],
		land: [
			"Norge"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Kasper Tuxen"
		],
		produktionsselskab: [
			"Olso Pictures"
		],
		emneord: [
			"Kærlighed",
			"Voksenliv",
			"Norge",
			"Oslo"
		],
		ratingFilmstriben: "4",
		ratingAntal: "84",
		ratingIMDb: "7.8",
		point: "4",
		alder: "11",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "Verdens verste menneske",
		alt: "billede fra Verdens verste menneske"
	},
	{
		filmTitel: "Drive my car",
		slug: "drive-my-car",
		originalTitel: "",
		aarstal: "2021",
		genre: "Drama",
		underGenre: [
			"Kærlighed"
		],
		type: "Spillefilm",
		varighed: "2 t 52 min",
		instruktor: [
			"Ryusuke Hamaguchi"
		],
		manusforfatter: [
			"Ryusuke Hamaguchi",
			"Takamasa Oe"
		],
		medvirkende: [
			"Hidetoshi Nishijima",
			"Toko Miura",
			"Reika Kirishima"
		],
		langResume: "Yusuke Kafuku, en teaterskuespiller, der efter to år endnu ikke er kommet sig over sin elskede kones død, påtager sig opgaven at instruere en opførelse af 'Onkel Vanja' til en teaterfestival i Hiroshima. Her møder han Misaki, en indadvendt ung kvinde, som er blevet hyret som hans chauffør. På deres ture betror de sig til hinanden, og fortidens hemmeligheder afsløres. Et episk drama om sorg, kunst og lidenskab. Filmen vandt Oscar for bedste udenlandske film 2022 og Golden Globe for bedste ikke-engelske film 2022. Hamaguchi betragtes som et af de største navne inden for den nye generation af japanske filmskabere. ",
		kortResume: "Yusuke Kafuku, en teaterskuespiller, der efter to år endnu ikke er kommet sig over sin elskede kones død, påtager sig opgaven at instruere en opførelse af 'Onkel Vanja' til en teaterfestival i Hiroshima. Her møder han Misaki, en indadvendt ung kvinde, som er blevet hyret som hans chauffør. På deres ture betror de sig til hinanden, og fortidens hemmeligheder afsløres. Et episk drama om sorg, kunst og lidenskab. ",
		sprog: [
			"Japansk"
		],
		land: [
			"Japan"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Hidetoshi Shinomiya"
		],
		produktionsselskab: [
			"C&I entertainment"
		],
		emneord: [
			"Sorg",
			"Kunst",
			"Lidenskab",
			"Kærlighed",
			"Teater",
			"Ensomhed",
			"Japan",
			"Japanske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "53",
		ratingIMDb: "7.6",
		point: "4",
		alder: "a",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "Drive my car",
		alt: "billede fra Drive my car "
	},
	{
		filmTitel: "The lost daughter",
		slug: "the-lost-daughter",
		originalTitel: "",
		aarstal: "2020",
		genre: "Thriller",
		underGenre: [
			"Drama"
		],
		type: "Spillefilm",
		varighed: "1 t 57 min",
		instruktor: [
			"Maggie Gyllenhaal"
		],
		manusforfatter: [
			"Maggie Gyllenhaal"
		],
		medvirkende: [
			"Olivia Coleman",
			"Jessie Buckley",
			"Dakota Johnson",
			"Ed Harris",
			"Peter Sarsgaard",
			"Dagmara Dominczyk",
			"Paul Mescal",
			"Jack Farthing",
			"Alba Rohrwacher"
		],
		langResume: "Leda (Olivia Colman) er alene på ferie på en græsk ø, hvor hun bliver besat af en ung mor og hendes datter, som hun observerer på stranden. Noget ved mor-datter-forholdet får Ledas egne minder frem. En impulsiv handling tvinger Leda til at konfrontere sig selv og de kontroversielle valg, hun tog som ung mor. </br> Filmen bygger på en roman af den populære forfatter Elena Ferrante.",
		kortResume: "Leda (Olivia Colman) er alene på ferie på en græsk ø, hvor hun bliver besat af en ung mor og hendes datter, som hun observerer på stranden. Noget ved mor-datter-forholdet får Ledas egne minder frem. En impulsiv handling tvinger Leda til at konfrontere sig selv og de kontroversielle valg, hun tog som ung mor. ",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Hélène Louvart"
		],
		produktionsselskab: [
			"In the Current",
			"Pie Films"
		],
		emneord: [
			"mor-datter-forholdet",
			"moderskab",
			"døtre",
			"ambitioner",
			"ferie",
			"minder",
			"Grækenland"
		],
		ratingFilmstriben: "4",
		ratingAntal: "43",
		ratingIMDb: "6.7",
		point: "4",
		alder: "7",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "The lost daughter",
		alt: "billede fra The lost daughter"
	},
	{
		filmTitel: "The father",
		slug: "the-father",
		originalTitel: "",
		aarstal: "2020",
		genre: "Drama",
		underGenre: [
			"Historie"
		],
		type: "Spillefilm",
		varighed: "1 t 37 min",
		instruktor: [
			"Florian Zeller"
		],
		manusforfatter: [
			"Florian Zeller",
			"Christopher Hampton"
		],
		medvirkende: [
			"Anthony Hopkins",
			"Olivia Colman",
			"Mark Gatiss",
			"Imogen Poots",
			"Rufus Sewell",
			"Olivia Williams"
		],
		langResume: "Anthony er en kultiveret mand. Han lytter til opera, spiller klassisk musik og læser stor litteratur. Men Anthony har Alzheimers, og det skaber store udfordringer for hans omsorgsfulde datter, Anne. Hun forsøger at gøre tilværelsen så god som mulig for sin far ved at lade ham blive i sine vante omgivelser. Anthony skræmmer imidlertid alle sine hjemmeplejere væk, og efterhånden som hans greb om virkeligheden smuldrer, bliver Anne nødt til at træffe et svært valg - for sig selv og for sin far. Anthony Hopkins og Olivia Colman leverer skuespil i verdensklasse i denne gribende og stærke fortælling om den ubetingede kærlighed til dem, man elsker allerhøjest.",
		kortResume: "Anthony er en kultiveret mand. Han lytter til opera, spiller klassisk musik og læser stor litteratur. Men Anthony har Alzheimers, og det skaber store udfordringer for hans omsorgsfulde datter, Anne. Hun forsøger at gøre tilværelsen så god som mulig for sin far ved at lade ham blive i sine vante omgivelser. Anthony skræmmer imidlertid alle sine hjemmeplejere væk, og efterhånden som hans greb om virkeligheden smuldrer, bliver Anne nødt til at træffe et svært valg - for sig selv og for sin far.",
		sprog: [
			"Engelsk"
		],
		land: [
			"Frankrig",
			"Storbritannien"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Ben Smithard"
		],
		produktionsselskab: [
			"F comme films",
			"Trademark Films",
			"Ciné-@"
		],
		emneord: [
			"Alzheimers sygdom",
			"demens",
			"far-datter-forholdet",
			"pårørende",
			"England",
			"engelske film",
			"franske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "164",
		ratingIMDb: "8.2",
		point: "4",
		alder: "15",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "The father"
	},
	{
		filmTitel: "Quo vadis, Aida?",
		slug: "quo-vadis-Aida",
		originalTitel: "",
		aarstal: "2020",
		genre: "Drama",
		underGenre: [
			"Historie"
		],
		type: "Spillefilm",
		varighed: "1 t 44 min",
		instruktor: [
			"Jasmila Žbanić"
		],
		manusforfatter: [
			"Jasmila Žbanić"
		],
		medvirkende: [
			"Jasna Đuričić",
			"Izudin Bajrović",
			"Boris Ler",
			"Dino Bajrović"
		],
		langResume: "Bosnien, juli 1995. Aida arbejder som oversætter for FN i den lille by Srebrenica. Da den serbiske hær overtager byen, er Aida og hendes familie blandt de tusinder af borgere, som søger ly i FN-lejren. Som en insider til forhandlingerne mellem FN og den serbiske hærchef, får Aida adgang til afgørende information, som hun er nødt til at reagere på. Hvad er horisonten for hendes familie og folk—redning eller død? 'Quo Vadis, Aida?' er en grusom, rystende, spændende og fortvivlende film om, hvor magtesløs FN fremstod under massakren i Srebrenica. Filmen undgår forbilledligt en udpensling af volden og bliver i stedet en meget personlig beretning om en afmægtig kvindes kamp for sine elskede, som sætter sig og bliver siddende længe.",
		kortResume: "Bosnien, juli 1995. Aida arbejder som oversætter for FN i den lille by Srebrenica. Da den serbiske hær overtager byen, er Aida og hendes familie blandt de tusinder af borgere, som søger ly i FN-lejren. Som en insider til forhandlingerne mellem FN og den serbiske hærchef, får Aida adgang til afgørende information, som hun er nødt til at reagere på. Hvad er horisonten for hendes familie og folk—redning eller død?",
		sprog: [
			"Bosnisk",
			"Engelsk",
			"Serbisk",
			"Kroatisk"
		],
		land: [
			"Bosnien-Hercegovina"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Christine A. Maier"
		],
		produktionsselskab: [
			"Deblokada"
		],
		emneord: [
			"folkemord",
			"etniske udrensninger",
			"massakrer",
			"borgerkrige",
			"historie",
			"Srebrenica",
			"Bosnien-Hercegovina",
			"Serbien",
			"1990-1999"
		],
		ratingFilmstriben: "4",
		ratingAntal: "37",
		ratingIMDb: "8.0",
		point: "4",
		alder: "15",
		tema: "Oscar-film | vindere og nominerede",
		imgTema: "oscar film",
		imgTitel: "Quo vadis Aida"
	},
	{
		filmTitel: "Den Sidste Ulv",
		slug: "den-sidste-ulv",
		originalTitel: "Le dernier loup",
		aarstal: "2014",
		genre: "Drama",
		underGenre: [
			"Familie"
		],
		type: "Spillefilm",
		imgCard: "",
		imgSingleview: "",
		imgPlakat: "",
		varighed: "1 t 58 min",
		instruktor: [
			"Jean-Jacques Annaud"
		],
		manusforfatter: [
			"Alain Godard"
		],
		medvirkende: [
			"Shaofeng Feng",
			"Shaun Dou"
		],
		langResume: "I den anerkendte instruktør Jean-Jacques Annauds filmatisering af bestselleren 'Wolf Totem' sendes en ung studerende fra Beijing ud for at leve blandt nomade-kvægvogtere i det indre Mongoliet på grund af Mao Zedongs Kulturrevolution. Nomaderne er fanget mellem civilisationen fra syd og deres traditionelle fjender - de hærgende ulve - fra nord. Både mennesker og dyr, fastboende og indtrængende kæmper for at finde deres plads her i verden og bevare deres levevis.",
		kortResume: "I den anerkendte instruktør Jean-Jacques Annauds filmatisering af bestselleren 'Wolf Totem' sendes en ung studerende fra Beijing ud for at leve blandt nomade-kvægvogtere i det indre Mongoliet på grund af Mao Zedongs Kulturrevolution. ",
		sprog: [
			"Kinesisk"
		],
		land: [
			"Kina",
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Jean-Marie Dreujou"
		],
		produktionsselskab: [
			"China Film Co",
			"Repérage"
		],
		emneord: [
			"ulve",
			"studenter",
			"Mongoliet",
			"Kina",
			"1960-1969",
			"franske film",
			"kinesiske film"
		],
		ratingFilmstriben: "5",
		ratingAntal: "16",
		ratingIMDb: "6.6",
		point: "4",
		alder: "15",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Le dernier loup",
		farve: "mossGreen"
	},
	{
		filmTitel: "Aligermaas eventyr",
		slug: "aligermaas-eventyr",
		originalTitel: "",
		aarstal: "1999",
		genre: "Drama",
		underGenre: [
			"Børn",
			"Eventyr"
		],
		type: "Dokumentar",
		varighed: "1 t 4 min",
		instruktor: [
			"Andra Lasmanis"
		],
		manusforfatter: [
			"Staffan Julén"
		],
		medvirkende: [
			""
		],
		langResume: "Aligermaa på otte år sidder på en hest, som er hun født på den. Hun bor sammen med far og mor, store- og lillebror i Mongoliet. På de store stepper, hvor vinden suser, og hvor himlen er et uendeligt, farverigt panorama, lever familien i overensstemmelse med den barske og storslåede natur. Men én drøm har Aligermaa til fælles med mange andre jævnaldrende piger i verden. Drømmen om en hest. I Aligermaas verden betyder heste meget, og derfor ser alle frem til det store, årlige hestevæddeløb, hvor alle børnene deltager. ",
		kortResume: "Aligermaa på otte år sidder på en hest, som er hun født på den. Hun bor sammen med far og mor, store- og lillebror i Mongoliet. På de store stepper, hvor vinden suser, og hvor himlen er et uendeligt, farverigt panorama, lever familien i overensstemmelse med den barske og storslåede natur. Men én drøm har Aligermaa til fælles med mange andre jævnaldrende piger i verden. Drømmen om en hest. ",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Andra Lasmanis"
		],
		produktionsselskab: [
			"Manden med Cameraet",
			"Migma Film",
			"Det Danske Filminstitut"
		],
		emneord: [
			"dokumentarfilm",
			"børn",
			"opvækstvilkår",
			"Mongoliet",
			"for større børn"
		],
		ratingFilmstriben: "4",
		ratingAntal: "4",
		ratingIMDb: "5.3",
		point: "3",
		alder: "a",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Aligermaas eventyr",
		farve: "ashyGreen"
	},
	{
		filmTitel: "Ørnejægerens søn",
		slug: "oernejaegerens-soen",
		originalTitel: "Die Stimme des Adlers ",
		aarstal: "2009",
		genre: "Drama",
		underGenre: [
			"Større Børn"
		],
		type: "Spillefilm",
		varighed: "1 t 37 min",
		instruktor: [
			"René Hansen"
		],
		manusforfatter: [
			"René Hansen",
			"Stefan Karlsson",
			"Staffan Julén"
		],
		medvirkende: [
			"Bazarbai Matyei"
		],
		langResume: "Den 12-årige Bazarbai tager med sin far til Den Store Ørnefestival. Men da farens ørn bliver forskrækket af en kamerablitz og derefter forsvinder, begiver Bazarbai sig ud på en lang og farefuld færd efter den forsvundne ørn. En rejse, som ændrer ham for altid.",
		kortResume: "Den 12-årige Bazarbai tager med sin far til Den Store Ørnefestival. Men da farens ørn bliver forskrækket af en kamerablitz og derefter forsvinder",
		sprog: [
			"Mongolsk"
		],
		land: [
			"Sverige",
			"Tyskland"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Dixie Schmiedle"
		],
		produktionsselskab: [
			"Eden Film",
			"Stromberg Productions"
		],
		emneord: [
			"ørne",
			"Mongoliet",
			"mongolske film",
			"for større børn"
		],
		ratingFilmstriben: "4",
		ratingAntal: "25",
		ratingIMDb: "6.4",
		point: "4",
		alder: "a",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Oernejaegerens soen",
		farve: "deepOcean"
	},
	{
		filmTitel: "Migas rejse",
		slug: "migas-rejse",
		originalTitel: "",
		aarstal: "2002",
		genre: "Kortfilm",
		underGenre: [
			"Børn"
		],
		type: "Dokumentar",
		varighed: "29 min",
		instruktor: [
			"René Hansen"
		],
		manusforfatter: [
			"René Hansen"
		],
		medvirkende: [
			"Benjamin Windfelt"
		],
		langResume: "Sammen med sin søster lever den ti-årige Miga et sorgløs liv på Mongoliets uendelige stepper. Familiens 200 heste er hans et og alt. Men da vinteren kommer, med kulde ned til minus 50 grader, dør alle familiens dyr. Sulten og kulden bliver for meget, og Miga's søster stikker af hjemmefra. Miga savner sin søster og sniger sig ombord på nattoget til hovedstaden for at lede efter hende. Her oplever han for første gang storbyen og dermed gadebørnenes verden. De forsøger at hjælpe ham, men politiet jager dem over alt. Den første nat sover Miga samme med sine nye venner under jorden i byens kloak og varmerørskanaler. Udenfor er kulden, politiet og de uendelige gader, men hvor er hans søster?",
		kortResume: "Sammen med sin søster lever den ti-årige Miga et sorgløs liv på Mongoliets uendelige stepper. Familiens 200 heste er hans et og alt. Men da vinteren kommer, med kulde ned til minus 50 grader, dør alle familiens dyr. Sulten og kulden bliver for meget, og Miga's søster stikker af hjemmefra. Miga savner sin søster og sniger sig ombord på nattoget til hovedstaden for at lede efter hende.",
		sprog: [
			"Dansk",
			"Mongolsk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"René Hansen"
		],
		produktionsselskab: [
			"Manden med Cameraet"
		],
		emneord: [
			"gadebørn",
			"Mongoliet",
			"kortfilm",
			"for større børn"
		],
		ratingFilmstriben: "1",
		ratingAntal: "3",
		ratingIMDb: "",
		point: "2",
		alder: "7",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Migas rejse",
		farve: "lavender"
	},
	{
		filmTitel: "Den gyldne jord",
		slug: "den-gyldne-jord",
		originalTitel: "Veins of the world",
		aarstal: "2020",
		genre: "Drama",
		underGenre: [
			"Børn",
			"Historie"
		],
		type: "Spillefilm",
		varighed: "1 t 36 min",
		instruktor: [
			"Byambasuren Davaa"
		],
		manusforfatter: [
			"Byambasuren Davaa"
		],
		medvirkende: [
			"Bat-Ireedui Batmunkh",
			"Enerel Tumen",
			"Yalalt Namsrai",
			"Algirchamin Baatarsuren"
		],
		langResume: "11-årige Amra bor med sin nomadefamilie i en provins midt på den mongolske slette. Mens han og hans klassekammerater drømmer om at deltage i 'Mongolia's got talent' - det Mongolske svar på X-FACTOR - trues hans families fredfyldte tilværelse af illegale guldgravere og internationale mineselskaber, som ødelægger jorden omkring dem - den jord, de lever af og med. Amras lillesøster hjælper hver dag sin mor med dyrene på de majestætiske sletter nedenfor det hellige træ. Amras far, Erdene, arbejder som mekaniker og sælger den tørrede ost, som Amras mor laver, på det lokale marked. Han er også leder af de sidste nomader, der tør sige fra overfor de magtfulde mineselskaber, og han prøver at overbevise sine naboer om, at de ikke skal tage imod den kompensation, selskaberne tilbyder dem. Men da familien rammes af et uheld, og de planlægger at flytte til storbyen, fødes en modstand i Amra, og han tager ikke i skole, men bruger i stedet de mekaniker-tricks, han har lært af sin far, til at tage kampen op mod overmagten og maskinerne...",
		kortResume: "11-årige Amra bor med sin nomadefamilie i en provins midt på den mongolske slette. Mens han og hans klassekammerater drømmer om at deltage i 'Mongolia's got talent' - det Mongolske svar på X-FACTOR - trues hans families fredfyldte tilværelse af illegale guldgravere og internationale mineselskaber, som ødelægger jorden omkring dem - den jord, de lever af og med. Amras lillesøster hjælper hver dag sin mor med dyrene på de majestætiske sletter nedenfor det hellige træ.",
		sprog: [
			"Mongolsk"
		],
		land: [
			"Tyskland",
			"Mongoliet"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Talal Khoury"
		],
		produktionsselskab: [
			"Global Screen",
			"Basis Berlin Filmproduktion",
			"Mongol TV"
		],
		emneord: [
			"talentshows",
			"minedrift",
			"børnearbejde",
			"udnyttelse",
			"Mongoliet",
			"mongolske film",
			"tyske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "9",
		ratingIMDb: "7.0",
		point: "4",
		alder: "7",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Den gyldne jord",
		farve: "prettyBlue"
	},
	{
		filmTitel: "Fædre & sønner",
		slug: "faedre-og-soenner",
		originalTitel: "",
		aarstal: "2018",
		genre: "Historie",
		underGenre: [
			"Drama"
		],
		type: "Dokumentar",
		varighed: "1 t 25 min",
		instruktor: [
			"Andreas Møl Dalsgaard"
		],
		manusforfatter: [
			""
		],
		medvirkende: [
			"Søren Haslund-Christensen"
		],
		langResume: "Filmproducer Michael og hans far, den gamle hofmarskal Søren Haslund-Christensen er på loftet for at finde skjulte skatte fra fortiden. Bedstefar Henning var berømt opdagelsesrejsende og kulturarvs-indsamler blandt mongolske stammer og Michael har hørt rygter om, at Henning levede et hemmeligt dobbeltliv som britisk agent og våbensmugler. Nu vil han finde ud af, om det er sandt. Han vil også gerne have tid sammen med sin far, for Sørens helbred skranter og tiden er knap. Han får lokket sin far med på eventyr – som de har været så mange gange tidligere i deres liv – på en rejse i farfarens fodspor tilbage i tiden til en historie om kærlighed og afsavn og et storslået spionkomplot, der involverer både farfar Henning og mægtige imperiers kamp om verdensherredømmet.",
		kortResume: "Filmproducer Michael og hans far, den gamle hofmarskal Søren Haslund-Christensen er på loftet for at finde skjulte skatte fra fortiden. Bedstefar Henning var berømt opdagelsesrejsende og kulturarvs-indsamler blandt mongolske stammer og Michael har hørt rygter om, at Henning levede et hemmeligt dobbeltliv som britisk agent og våbensmugler. Nu vil han finde ud af, om det er sandt. ",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark",
			"Sverige"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Haslund Film",
			"Mantaray Film",
			"ELK Film"
		],
		emneord: [
			"1900-1999",
			"2000-2009",
			"2010-2019",
			"dokumentarfilm",
			"erindringer",
			"slægtshistorie",
			"far-søn forholdet",
			"fædre",
			"sønner",
			"opdagelsesrejsende",
			"ekspeditioner",
			"historie",
			"Danmark",
			"Mongoliet"
		],
		ratingFilmstriben: "5",
		ratingAntal: "3",
		ratingIMDb: "7.1",
		point: "3",
		alder: "15",
		tema: "Film om Mongoliet",
		imgTema: "mongoliet",
		imgTitel: "Faedre soenner",
		farve: "greyIsh"
	},
	{
		filmTitel: "Lulu",
		slug: "lulu",
		originalTitel: "",
		aarstal: "2014",
		genre: "Drama",
		underGenre: [
			"kærlighed"
		],
		type: "kortfilm",
		varighed: "46 min",
		instruktor: [
			"Caroline Sascha Cogez"
		],
		manusforfatter: [
			"Tone Mygind Rostbøll"
		],
		medvirkende: [
			"Malin Crépin",
			"Jens Jørn Spottag",
			"Andreas Holm Dittmer"
		],
		langResume: "Galleristen Lulu elsker Henrik, som er en af hendes største kunder. Henrik er også vild med Lulu, men er gift med Sophia, som han driver sit firma med. Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt. Men i huset i Frankrig forstyrres idyllen, da Henrik og Sophias feminine søn, David, uventet dukker op for at holde læseferie fra sin kostskole. Lulu og David prøver begge at finde deres vej i livet og i forholdet til Henrik. De søger begge efter kærlighed og higer efter at blive set som dem, de er. Instruktøren er den dansk-franske Caroline Sascha Cogez, der også har instrueret den fine dokumentar 'Hun synger'",
		kortResume: "Henrik inviterer Lulu med til sit gods i Frankrig. Turen skal være deres alene, en begyndelse til noget nyt.",
		sprog: [
			"Dansk",
			"Fransk"
		],
		land: [
			"Sverige",
			"Frankrig"
		],
		undertekst: "",
		filmfotograf: [
			"Magnus Nordenhof Jønck"
		],
		produktionsselskab: [
			"SF Film Produktion",
			"Fluxus Films"
		],
		emneord: [
			"parforhold",
			"far-søn forholdet",
			"jalousi",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "24",
		ratingIMDb: "6,8",
		point: "0",
		alder: "11",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Lulu"
	},
	{
		filmTitel: "Gensyn med Yorkshire",
		slug: "gensyn-med-yorkshire",
		originalTitel: "And when did you last see your father?",
		aarstal: "2007",
		genre: "drama",
		underGenre: [
			"Historie"
		],
		type: "spillefilm",
		varighed: "1t 29min",
		instruktor: [
			"Anand Tucker"
		],
		manusforfatter: [
			"David Nicholls"
		],
		medvirkende: [
			"Jim Broadbent",
			"Colin Firth",
			"Juliet Stevenson",
			"Matthew Beard"
		],
		langResume: "Blake har længe haft et problematisk forhold til sin far. Da faderen nu ligger for døden, bliver Blake nødt til at få afklaret sit forhold til ham.",
		kortResume: "Blake har længe haft et problematisk forhold til sin far. Da faderen nu ligger for døden, bliver Blake nødt til at få afklaret sit forhold til ham.",
		sprog: [
			"Engelsk"
		],
		land: [
			"Storbritannien"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Howard Atherton"
		],
		produktionsselskab: [
			"Film 4"
		],
		emneord: [
			"far-søn forholdet",
			"forsoning",
			"engelske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "4",
		ratingIMDb: "6,8",
		point: "4",
		alder: "15",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Gensyn med Yorkshire"
	},
	{
		filmTitel: "Paris of the North",
		slug: "paris-of-the-north",
		originalTitel: "Paris Norðursins",
		aarstal: "2014",
		genre: "komedier",
		underGenre: [
			"Drama"
		],
		type: "Spillefilm",
		varighed: "1t 32min",
		instruktor: [
			"Hafsteinn Gunnar Sigurðsson"
		],
		manusforfatter: [
			"Huldar Breiðfjörð"
		],
		medvirkende: [
			"Björn Thors",
			"Helgi Björnsson",
			"Nanna Kristín Magnúsdóttir",
			"Sigurður Skúlason",
			"Jón Páll Eyjólfsson",
			"Haki Lorenzen"
		],
		langResume: "Hugi, en 37-årig skolelærer bor og arbejder i en lille og afsidesliggende by i Island. Hugis rolige og isolerede liv afbrydes brat, da hans far melder sin ankomst - en nyhed Hugi ikke umiddelbart er begejstret for. Hugi beslutter sig dog for at byde faderen velkommen, en beslutning han hurtigt fortryder.",
		kortResume: "Hugi, en 37-årig skolelærer bor og arbejder i en lille og afsidesliggende by i Island. Hugis rolige og isolerede liv afbrydes brat, da hans far melder sin ankomst - en nyhed Hugi ikke umiddelbart er begejstret for.",
		sprog: [
			"Islandsk"
		],
		land: [
			"Island"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"G. Magni Àgustsson"
		],
		produktionsselskab: [
			"Kjartansson",
			"Zik Zak Kvikmyndir"
		],
		emneord: [
			"far-søn forholdet",
			"Island",
			"islandske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "14",
		ratingIMDb: "6,3",
		point: "4",
		alder: "15",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Paris of the North"
	},
	{
		filmTitel: "Gaven",
		slug: "gaven",
		originalTitel: "",
		aarstal: "2008",
		genre: "drama",
		underGenre: [
			"komedier"
		],
		type: "spillefilm",
		varighed: "1t 34min",
		instruktor: [
			"Niels Gråbøl"
		],
		manusforfatter: [
			"Rasmus Botoft",
			"Niels Gråbøl"
		],
		medvirkende: [
			"Henning Jensen",
			"Jakob Cedergren",
			"Paw Henrikssen",
			"Karen-Lise Mynster"
		],
		langResume: "Jens møder op med gedigne tømmermænd til sin lillebrors fødselsdag. Familiehyggen er dog intakt, indtil drengenes far uanmeldt dukker op. Den psykisk syge Mogens påstår, at han har købt en sportsvogn i fødselsdagsgave. Men han kan ikke lige huske, hvor han har parkeret den!",
		kortResume: "Jens møder op med gedigne tømmermænd til sin lillebrors fødselsdag. Familiehyggen er dog intakt, indtil drengenes far uanmeldt dukker op.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Morten Søborg"
		],
		produktionsselskab: [
			"Tju Bang Film 2"
		],
		emneord: [
			"road movies",
			"far-søn forholdet",
			"psykisk syge",
			"familien",
			"danske film",
			"danske spillefilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "5",
		ratingIMDb: "6,2",
		point: "4",
		alder: "11",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Gaven"
	},
	{
		filmTitel: "Omvejen",
		slug: "omvejen",
		originalTitel: "",
		aarstal: "2012",
		genre: "drama",
		underGenre: [
			"Krimi"
		],
		type: "kortfilm",
		varighed: "26min",
		instruktor: [
			""
		],
		manusforfatter: [
			"Jesper Troelstrup"
		],
		medvirkende: [
			"Peter Gantzler",
			"Magnus Bruun",
			"Tina Gylling Mortensen",
			"Camille-Cathrine Rommedahl"
		],
		langResume: "Jonas og hans far Asger er på vej gennem Midtsjælland i bil. De skal til Jonas bryllup og snakken går lystigt om gamle dage. Den bliver dog en anelse anstrengt da Jonas finder ud af, at hans far har været Jonas mor utro, og oveni købet imens hun var gravid.",
		kortResume: "Jonas og hans far Asger er på vej gennem Midtsjælland i bil. De skal til Jonas bryllup og snakken går lystigt om gamle dage. Den bliver dog en anelse anstrengt da Jonas finder ud af, at hans far har været Jonas mor utro, og oveni købet imens hun var gravid.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "",
		filmfotograf: [
			"Rolf Plant"
		],
		produktionsselskab: [
			"Fuzzfilm"
		],
		emneord: [
			"far-søn forholdet",
			"generationer",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "9",
		ratingIMDb: "",
		point: "2",
		alder: "a",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Omveje"
	},
	{
		filmTitel: "Mesterkokken",
		slug: "mesterkokken",
		originalTitel: "Toast",
		aarstal: "2010",
		genre: "drama",
		underGenre: [
			"komedier"
		],
		type: "spillefilm",
		varighed: "1t 33min",
		instruktor: [
			"S. J. Clarkson"
		],
		manusforfatter: [
			"Lee Hall"
		],
		medvirkende: [
			"Helena Bonham Carter",
			"Ken Stott",
			"Victoria Hamilton",
			"Freddie Highmore"
		],
		langResume: "I 1960'ernes England forsøger den unge Nigel at vinde sin fars accept ved at duellere med sin nye stedmor i kulinariske færdigheder. Færdigheder, som snart vil føre ham til noget meget større... Filmen er baseret på den engelske forfatter Nigel Slaters selvbiografiske bestseller.",
		kortResume: "I 1960'ernes England forsøger den unge Nigel at vinde sin fars accept ved at duellere med sin nye stedmor i kulinariske færdigheder. Færdigheder, som snart vil føre ham til noget meget større.",
		sprog: [
			"Engelsk"
		],
		land: [
			"Storbritannien"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Balazs Bolygo"
		],
		produktionsselskab: [
			"BBC",
			"Screen Wm",
			"Ruby Film & Television"
		],
		emneord: [
			"far-søn forholdet",
			"madlavning",
			"1960-1969",
			"engelske film",
			"spillefilm"
		],
		ratingFilmstriben: "4",
		ratingAntal: "34",
		ratingIMDb: "6,6",
		point: "4",
		alder: "15",
		tema: "Far tema",
		imgTema: "far tema",
		imgTitel: "Mesterkokken"
	},
	{
		filmTitel: "Min sommer i Provence",
		slug: "min-sommer-i-provence",
		originalTitel: "Le temps des secrets",
		aarstal: "2022",
		genre: "Drama",
		underGenre: [
			"Familie"
		],
		type: "Spillefilm",
		varighed: "1t 44min",
		instruktor: [
			"Christophe Barratier"
		],
		manusforfatter: [
			"Christophe Barratier"
		],
		medvirkende: [
			"Guillaume de Tonquedec",
			"Mélanie Doutey",
			"François-Xavier Demaison",
			"Anne Charrier",
			"Léo Campion"
		],
		langResume: "Sommeren står for døren og den 10-årige Marcel Pagnol tager med sin familie op til deres sommerbolig i Provence. Han glæder sig til at udforske den smukke, vilde natur med sin bedste ven, bondedrengen Lili. Det begynder som en sommer, fyldt med barndommens uskyldige eventyr, men da de møder den smukke aristokratiske pige, Isabelle, udvikler det sig uventet til spirende kærlighed, hemmeligheder og løgne.",
		kortResume: "Sommeren står for døren og den 10-årige Marcel Pagnol tager med sin familie op til deres sommerbolig i Provence. Han glæder sig til at udforske den smukke, vilde natur med sin bedste ven, bondedrengen Lili.",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Jérôme Alméras"
		],
		produktionsselskab: [
			"Lionceau Films",
			"Pathe",
			"France 3 Cinema"
		],
		emneord: [
			"barndom",
			"klasseforskelle",
			"naturen",
			"Provence",
			"Frankrig",
			"1900-1992",
			"franske film",
			"biografiske film"
		],
		ratingFilmstriben: "5",
		ratingAntal: "8",
		ratingIMDb: "6,4",
		point: "4",
		alder: "7",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "min sommer i Provence"
	},
	{
		filmTitel: "Jeg elsker også dig",
		slug: "jeg-elsker-ogsaa-dig",
		originalTitel: "Avec amour et acharnement",
		aarstal: "2021",
		genre: "Kærlighed",
		underGenre: [
			"Drama"
		],
		type: "spillefilm",
		varighed: "1t 52min",
		instruktor: [
			"Claire Denis"
		],
		manusforfatter: [
			"Christine Angot",
			"Claire Denis"
		],
		medvirkende: [
			"Juliette Binoche",
			"Vincent Lindon",
			"Gregoire Colin",
			"Buller Ogier",
			"Issa Perica"
		],
		langResume: "Trekantsdrama. 'Jeg elsker også dig' er et intens kærlighedsdrama, der handler om den midaldrende Sara, der ser sit liv langsomt komme ud af kontrol, da hun pludselig falder for en anden og noget yngre mand, hendes forhenværende kæreste. Tingene kompliceres yderligere af, at denne mand er hendes nuværende livspartners bedste ven. ",
		kortResume: "'Jeg elsker også dig' er et intens kærlighedsdrama, der handler om den midaldrende Sara, der ser sit liv langsomt komme ud af kontrol, da hun pludselig falder for en anden og noget yngre mand, hendes forhenværende kæreste.",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Eric Gautier"
		],
		produktionsselskab: [
			"Curiosa Films"
		],
		emneord: [
			"kærlighed",
			"parforhold",
			"trekantsdrama",
			"begær",
			"franske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "6",
		ratingIMDb: "6.1",
		point: "4",
		alder: "11",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "jeg elsker ogsaa dig"
	},
	{
		filmTitel: "The super 8 years",
		slug: "the-super-8-years",
		originalTitel: "Les années super-8",
		aarstal: "2022",
		genre: "Dokumentar",
		underGenre: [
			"Historie"
		],
		type: "Dokumentar",
		varighed: "1t 1min",
		instruktor: [
			"David Ernaux-Briot"
		],
		manusforfatter: [
			"Annie Ernaux"
		],
		medvirkende: [
			""
		],
		langResume: "Nobelprismodtager i litteratur Annie Ernauxs liv inden succesårene skildres gennem familiens super-8-film fra 1970'erne. Annie Ernaux arbejder som lærer, men er begyndt på opbygningen af den verden, som hendes bøger vil omhandle i de kommende 50 år. Super 8-årene afspejler en søgen efter fortidens mysterier og fremtidens uvished, som genfindes i Ernauxs romaner. Hun lægger selv fortællerstemme til, bag kameraet står hendes mand, og deres søn instruerer i denne intime skildring af et forfatterliv.",
		kortResume: "Nobelprismodtager i litteratur Annie Ernauxs liv inden succesårene skildres gennem familiens super-8-film fra 1970'erne. Annie Ernaux arbejder som lærer, men er begyndt på opbygningen af den verden, som hendes bøger vil omhandle i de kommende 50 år.",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Les Films Pelléas"
		],
		emneord: [
			"1970-1979",
			"dokumentarfilm",
			"forfattere",
			"fransk litteratur",
			"Frankrig",
			"Annie Ernaux"
		],
		ratingFilmstriben: "0",
		ratingAntal: "0",
		ratingIMDb: "6,7",
		point: "4",
		alder: "11",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "the super 8 years"
	},
	{
		filmTitel: "Free Cjol Soo Lee",
		slug: "free-cjol-soo-lee",
		originalTitel: "",
		aarstal: "2022",
		genre: "Dokumentar",
		underGenre: [
			"Historie"
		],
		type: "Dokumentar",
		varighed: "1t 22min",
		instruktor: [
			"Julie Ha",
			"Eugene Yi"
		],
		manusforfatter: [
			""
		],
		medvirkende: [
			""
		],
		langResume: "Dokumentar om den koreanske immigrant Chol Soo Lee, der i 1970'erne anholdes efter raceprofilering og fældes for et bandedrab. Da journalisten K. W. Lee begynder at grave i sagen, bliver det begyndelsen på en bredere bevægelses kamp for jagten på retfærdighed.",
		kortResume: "Dokumentar om den koreanske immigrant Chol Soo Lee, der i 1970'erne anholdes efter raceprofilering og fældes for et bandedrab. Da journalisten K. W. Lee begynder at grave i sagen, bliver det begyndelsen på en bredere bevægelses kamp for jagten på retfærdighed.",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Chol Soo Lee Documentary",
			"ITVS",
			"Center",
			"Asian American Media"
		],
		emneord: [
			"1970-1979",
			"dokumentarfilm",
			"kriminalsager",
			"etnisk profilering",
			"justitsmord",
			"borgerretsforkæmpere",
			"Chol Soo Lee"
		],
		ratingFilmstriben: "0",
		ratingAntal: "0",
		ratingIMDb: "7,1",
		point: "4",
		alder: "11",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "free Cjol Soo Lee"
	},
	{
		filmTitel: "Songs my brothers taught me",
		slug: "songs-my-brothers-taught-me",
		originalTitel: "",
		aarstal: "2015",
		genre: "drama",
		underGenre: [
			"Unge"
		],
		type: "spillefilm",
		varighed: "1t 30min",
		instruktor: [
			"Chloé Zhao"
		],
		manusforfatter: [
			"Chloé Zhao"
		],
		medvirkende: [
			"John Reddy",
			"Jashaun St. John",
			"Taysha Fuller",
			"Eleonore Hendricks",
			"Travis Lone Hill",
			"Jorge Dullknife",
			"Cat Clifford",
			"Kevin Hunter",
			"Irene Bedard"
		],
		langResume: "Filmen udspiller sig i Pine Ridge-indianerreservatet i South Dakota. Vi følger den unge Johnny, der ønsker at rejse til Los Angeles med kæresten for at slippe væk fra sin alkoholiserede mor og en hverdag, der består af ulovligt salg af alkohol og tæmning af vildheste. Men det vil betyde, at han skal efterlade sin elskede lillesøster. Chloé Zhaos (Nomadland og 'The rider) debutfilm 'Songs my Brother Taught Me' er et prisbelønnet drama, som blev rost af anmelderne og startede hendes flotte karriere.",
		kortResume: "",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Chloé Zhao"
		],
		produktionsselskab: [
			"Significant"
		],
		emneord: [
			"socialrealisme",
			"oprindelige folk",
			"indianere",
			"sioux-indianere",
			"indianerreservater",
			"søskendeforholdet",
			"familien",
			"identitet",
			"ungdom",
			"South Dakota",
			"USA",
			"2010-2019",
			"samfundsskildringer",
			"amerikanske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "3",
		ratingIMDb: "7.1",
		point: "4",
		alder: "15",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "songs my brothers taught me"
	},
	{
		filmTitel: "Nattens skov",
		slug: "nattens-skov",
		originalTitel: "Nachtwald",
		aarstal: "2021",
		genre: "drama",
		underGenre: [
			"Familie"
		],
		type: "spillefilm",
		varighed: "1t 33min",
		instruktor: [
			"André Hörmann",
			"Katrin Hörmann"
		],
		manusforfatter: [
			"André Hörmann",
			"Katrin Hörmann"
		],
		medvirkende: [
			"Levi Eisenblätter",
			"Jonas Oessel",
			"Marc Limpach",
			"Meike Droste"
		],
		langResume: "12-årige Paul er på jagt efter sin forsvundne far og det enorme underjordiske grottesystem, som han altid talte om. Var det en psykisk syg mands fantasier eller en rigtig geologisk opdagelse?",
		kortResume: "",
		sprog: [
			"Tysk"
		],
		land: [
			"Tyskland"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Michael Hammon"
		],
		produktionsselskab: [
			"Kurhaus Production",
			"Südwestrundfunk",
			"Norddeutscher Rundfunk"
		],
		emneord: [
			"familien",
			"normer",
			"grotter",
			"identitet",
			"naturen",
			"Tyskland",
			"eventyr",
			"spillefilm",
			"tyske film",
			"for større børn",
			"for unge"
		],
		ratingFilmstriben: "4",
		ratingAntal: "3",
		ratingIMDb: "6.6",
		point: "4",
		alder: "7",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "nattens skov"
	},
	{
		filmTitel: "Spun",
		slug: "spun",
		originalTitel: "",
		aarstal: "2002",
		genre: "Krimi",
		underGenre: [
			"drama"
		],
		type: "Spillefilm",
		varighed: "1t 37min",
		instruktor: [
			"Jonas Åkerlund"
		],
		manusforfatter: [
			"Will de los Santos",
			"Vero Creighton"
		],
		medvirkende: [
			"Jason Schwartzman",
			"Mickey Rourke",
			"Brittany Murphy",
			"John Leguizamo",
			"Patrick Fugit",
			"Mena Suvari",
			"Peter Stormare"
		],
		langResume: "Amfetamin-misbrugeren Ross bliver af sin pusher præsenteret for meth-laboratoriet, hvor stofferne fremstilles. Hans nye bekendtskab med manden bag varerne og dennes kæreste tager Ross på en paranoid rejse fyldt med galskab og problemer. 'Spun' er en sort komedie af Jonas Åkerlund med Jason Schwartzman, Brittany Murphy og Mickey Rourke.",
		kortResume: "",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Eric Broms"
		],
		produktionsselskab: [
			"Muse/Blacklist",
			"Brink Films"
		],
		emneord: [
			"stofmisbrugere",
			"stofmisbrug",
			"amerikanske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "6",
		ratingIMDb: "6.7",
		point: "4",
		alder: "15",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "spun"
	},
	{
		filmTitel: "Hej verden!",
		slug: "hej-verden",
		originalTitel: "Bonjour le Monde",
		aarstal: "2018",
		genre: "Animation",
		underGenre: [
			"Børn",
			"Familie"
		],
		type: "Animation",
		varighed: "1t 1min",
		instruktor: [
			"Anne-Lise Koehler",
			"Eric Serre"
		],
		manusforfatter: [
			"Anne-Lise Koehler"
		],
		medvirkende: [
			"Camilla Bendix",
			"Zaki Nobel",
			"Alvin Olid Bursøe",
			"Stanislav Sevecik",
			"Julian Kellerman",
			"Elias Strube",
			"Karoline Hamm",
			"Emma Silja Sångren",
			"Juliette Schaufuss"
		],
		langResume: "Hvordan bliver en fugl født? Hvorfor fødes en skabning som netop et insekt, et pattedyr eller en fisk?\n\nOplev det fantastiske og alsidige dyreliv, der findes i vores forbløffende natur, og mød samtidig 10 forskellige dyrearter, der hver især opdager verdenen omkring sig. Følg for eksempel isfuglens søgen efter en plads i solen. Svøm med den europæiske flodskildpadde, som flyder på vandet og trodser tidens gang. Bliv bekendt med den europæiske bæver, som ikke kan modstå duften af træ. Gedden, som håber på at blive så stor, at den kan opleve mægtige eventyr! Og den store kejserguldsmed – kæmperen, hvis rustning er smedet af solen. Alle som én råber de: ”HEJ VERDEN!”\n\nFilmen præsenterer os for en kunstners blik på dyreverdenen omkring os. Ved hjælp af figurer, skulpturer, maleri og animation får filmen os til at genopleve naturen, som vi aldrig har set den før!",
		kortResume: "",
		sprog: [
			"Dansk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Normaal"
		],
		emneord: [
			"årstider",
			"naturen",
			"dyr",
			"animationsfilm",
			"spillefilm",
			"franske film",
			"for små børn",
			"for større børn"
		],
		ratingFilmstriben: "5",
		ratingAntal: "1",
		ratingIMDb: "7.0",
		point: "4",
		alder: "a",
		tema: "Senest tilføjet",
		imgTema: "senest tilfoejet",
		imgTitel: "hej verden"
	},
	{
		filmTitel: "Jeg elsker også dig",
		slug: "jeg-elsker-ogsaa-dig",
		originalTitel: "Avec amour et acharnement",
		aarstal: "2021",
		genre: "Kærlighed",
		underGenre: [
			"Drama"
		],
		type: "spillefilm",
		varighed: "1t 52min",
		instruktor: [
			"Claire Denis"
		],
		manusforfatter: [
			"Christine Angot",
			"Claire Denis"
		],
		medvirkende: [
			"Juliette Binoche",
			"Vincent Lindon",
			"Gregoire Colin",
			"Buller Ogier",
			"Issa Perica"
		],
		langResume: "Trekantsdrama. 'Jeg elsker også dig' er et intens kærlighedsdrama, der handler om den midaldrende Sara, der ser sit liv langsomt komme ud af kontrol, da hun pludselig falder for en anden og noget yngre mand, hendes forhenværende kæreste. Tingene kompliceres yderligere af, at denne mand er hendes nuværende livspartners bedste ven.",
		kortResume: "",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Eric Gautier"
		],
		produktionsselskab: [
			"Curiosa Films"
		],
		emneord: [
			"kærlighed",
			"parforhold",
			"trekantsdrama",
			"begær",
			"franske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "6",
		ratingIMDb: "6.1",
		point: "4",
		alder: "11",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Jeg elsker ogsaa dig"
	},
	{
		filmTitel: "Ali & Ava",
		slug: "ali-og-ava",
		originalTitel: "",
		aarstal: "2020",
		genre: "Kærlighed",
		underGenre: [
			"Drama"
		],
		type: "Spillefilm",
		varighed: "1t 30min",
		instruktor: [
			"Clio Barnard"
		],
		manusforfatter: [
			"Clio Barnard"
		],
		medvirkende: [
			"Adeel Akhtar",
			"Claire Rushbrook"
		],
		langResume: "Ali og Ava har vidt forskellige bagrunde og drages alligevel mod hinanden. Men fortiden står i vejen for parret, og hver især må de kæmpe mod fordomme fra deres omgangskreds. En kærlighedshistorie fra det nordlige England om klasse, race og kulturforskelle.",
		kortResume: "",
		sprog: [
			"Engelsk"
		],
		land: [
			"Storbritannien"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Ole Bratt Birkeland"
		],
		produktionsselskab: [
			"Moonspun Films"
		],
		emneord: [
			"kærlighed",
			"kulturforskelle",
			"arbejderklassen",
			"socialrealisme",
			"Nordengland",
			"engelske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "6",
		ratingIMDb: "6.7",
		point: "4",
		alder: "7",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Ali Ava"
	},
	{
		filmTitel: "Jeg hedder Ernesto",
		slug: "jeg-hedder-ernesto",
		originalTitel: "Infancia clandestina",
		aarstal: "2011",
		genre: "drama",
		underGenre: [
			"kærlighed",
			"Historie"
		],
		type: "Spillefilm",
		varighed: "1t 46min",
		instruktor: [
			"Benjamín Ávila"
		],
		manusforfatter: [
			"Benjamín Ávila"
		],
		medvirkende: [
			"Natalia Oreiro",
			"Ernesto Alterio",
			"César Troncoso",
			"Cristina Banegas",
			"Mayana Neiva",
			"Douglas Simon",
			"Teo Gutiérrez Moreno"
		],
		langResume: "Med nye identiteter vender Juan's familie i 1979 tilbage til Argentina efter flere år i eksil på Cuba. Forældrene og onklen Beto er medlemmer af modstandsgruppen Montoneros, der kæmper mod militærjuntaen i Argentina i 1970'erne.",
		kortResume: "",
		sprog: [
			"Spansk"
		],
		land: [
			"Argentina"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Cine Argentino",
			"Habitacion 1520 Producciones"
		],
		emneord: [
			"diktatur",
			"kærlighed",
			"modstandsbevægelser",
			"guerillabevægelser",
			"modstandskamp",
			"Argentina",
			"1970-1979",
			"argentinske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "3",
		ratingIMDb: "7.0",
		point: "4",
		alder: "11",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Jeg hedder Ernesto"
	},
	{
		filmTitel: "Peter von Kant",
		slug: "peter-von-kant",
		originalTitel: "",
		aarstal: "2022",
		genre: "drama",
		underGenre: [
			"Kærlighed"
		],
		type: "spillefilm",
		varighed: "1t 22min",
		instruktor: [
			"François Ozon"
		],
		manusforfatter: [
			"François Ozon"
		],
		medvirkende: [
			"Denis Ménochet",
			"Isabelle Adjani",
			"Khalil Gharbia",
			"Hanna Schygulla",
			"Stefan Crepon",
			"Aminthe Audiard"
		],
		langResume: "Den berømte instruktør Peter von Kant præsenteres for det unge skuespillertalent Amir og bliver straks forelsket. Amir flytter hjem til Peter, som lover at hjælpe ham med at få et gennembrud i branchen. Men da succesen er blevet et faktum, afslutter Amir forholdet og efterlader Peter alene med sine dæmoner. François Ozons 'Peter von Kant' er en overdådig hyldest til Fassbinders klassiker 'Petra von Kants bitre tårer' med næsten ens navne, idet Petra er blevet Peter og har antaget mange af den legendariske instruktørs egenskaber. I rollerne ses Denis Ménochet, Isabelle Adjani, Khalil Ben Gharbia og Hanna Schygulla.",
		kortResume: "",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Manuel Dacosse"
		],
		produktionsselskab: [
			"Playtime"
		],
		emneord: [
			"drømme",
			"jalousi",
			"trekantsdrama",
			"filminstruktører",
			"kærlighed",
			"Tyskland (forbundsrepublik)",
			"1970-1979",
			"franske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "6",
		ratingIMDb: "6.3",
		point: "4",
		alder: "7",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Peter von Kant"
	},
	{
		filmTitel: "Waiting for Bojangles",
		slug: "waiting-for-bojangles",
		originalTitel: "En attendant Bojangles",
		aarstal: "2021",
		genre: "Kærlighed",
		underGenre: [
			"Drama"
		],
		type: "Spillefilm",
		varighed: "2t 4min",
		instruktor: [
			"Régis Roinsard"
		],
		manusforfatter: [
			"Romain Compingt",
			"Régis Roinsard"
		],
		medvirkende: [
			"Virginie Efira",
			"Romain Duris",
			"Grégory Gadebois",
			"Solan Machado-Graner"
		],
		langResume: "Drengen Gary bor med sine excentriske forældre og en eksotisk fugl i en lejlighed i Paris. Hver aften danser Camille og Georges kærligt til deres yndlingssang, ”Mr Bojangles”. I hjemmet er der kun plads til morskab, fantasi og venner. Men da hans dragende og uforudsigelige mor trækker sig længere ind i sit eget sind, er det op til Gary og hans far, Georges, at værne om hende. En film om glæden ved kærlighed, men også om hvilket tomrum og smerte kærligheden kan efterlade.",
		kortResume: "",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Guillaume Schiffman"
		],
		produktionsselskab: [
			"Curiosa Film"
		],
		emneord: [
			"kærlighed",
			"melankoli",
			"galskab",
			"følelser",
			"sorg",
			"Frankrig",
			"franske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "16",
		ratingIMDb: "6.4",
		point: "4",
		alder: "11",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Waiting for Bojangles"
	},
	{
		filmTitel: "Moderen og luderen",
		slug: "moderen-og-luderen",
		originalTitel: "La maman et la putain",
		aarstal: "1973",
		genre: "Kærlighed",
		underGenre: [
			"Drama"
		],
		type: "Spillefilm",
		varighed: "3t 30min",
		instruktor: [
			"Jean Eustache"
		],
		manusforfatter: [
			"Jean Eustache"
		],
		medvirkende: [
			"Bernadette Lafont",
			"Jean-Pierre Leaud",
			"Franc̨oise Lebrun",
			"Isabelle Weingarten"
		],
		langResume: "Skildrer et trekantsforhold mellem to kvinder og en mand i Paris i årene efter maj '68. De tre involverede personer vil gerne tro på det åbne forhold uden magtfornemmelser og ejerforhold, men virkeligheden er anderledes.",
		kortResume: "",
		sprog: [
			"Fransk"
		],
		land: [
			"Frankrig"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Pierre L'Homme"
		],
		produktionsselskab: [
			"Élite films",
			"Ciné Qua Non",
			"Les Films du Losange"
		],
		emneord: [
			"kærlighed",
			"trekantsdrama",
			"jalousi",
			"Frankrig",
			"Paris",
			"1960-1969",
			"1970-1979",
			"franske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "9",
		ratingIMDb: "7.8",
		point: "4",
		alder: "15",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Moderen og luderen"
	},
	{
		filmTitel: "Barbara",
		slug: "barbara",
		originalTitel: "",
		aarstal: "1997",
		genre: "kærlighed",
		underGenre: [
			"drama"
		],
		type: "Spillefilm",
		varighed: "2t 18min",
		instruktor: [
			"Nils Malmros"
		],
		manusforfatter: [
			"Nils Malmros",
			"John Mogensen"
		],
		medvirkende: [
			"Anneke von der Lippe",
			"Lars Simonsen",
			"Trond Høvik",
			"Jesper Christensen"
		],
		langResume: "I det herrens år 1760 kommer den unge præst, Hr. Poul, til Færøerne for at udøve sin hellige gerning. Han møder den unge, tiltrækkende præsteenke, Barbara, der - stik imod al fornuft - hensætter den ellers så jordnære Hr. Poul i en tilstand af rystende lidenskabelig besættelse. Og imod alle gode råd kaster de to sig ud i et stormende forhold, der i sin yderste konsekvens kommer til at koste det lille samfund en frygtelig pris!",
		kortResume: "",
		sprog: [
			"Dansk",
			"Norsk",
			"Færøsk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Jan Weincke"
		],
		produktionsselskab: [
			"Per Holst Film"
		],
		emneord: [
			"kvinder",
			"kærlighed",
			"præster",
			"Færøerne",
			"danske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "9",
		ratingIMDb: "6.1",
		point: "4",
		alder: "15",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Barbara"
	},
	{
		filmTitel: "Cyrano",
		slug: "cyrano",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kærlighed",
		underGenre: [
			"Musik",
			"Musical"
		],
		type: "Spillefilm",
		varighed: "2t 3min",
		instruktor: [
			"Joe Wright"
		],
		manusforfatter: [
			"Erica Schmidt"
		],
		medvirkende: [
			"Peter Dinklage",
			"Haley Bennett",
			"Kelvin Harrison Jr.",
			"Ben Mendelsohn",
			"Monica Dolan"
		],
		langResume: "Musical om den ulykkeligt forelskede Cyrano, der hjælper sin rival med at skrive kærlighedsbreve til den smukke Roxanne. Er hans skæbne blot at elske hende på afstand, mens han udlåner sit hjertes poesi til en anden?",
		kortResume: "",
		sprog: [
			"Engelsk"
		],
		land: [
			"Storbritannien",
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Seamus McGarvey"
		],
		produktionsselskab: [
			"Working Title Production",
			"Metro Goldwyn Mayer Pictures"
		],
		emneord: [
			"kærlighed",
			"forelskelse",
			"barok",
			"soldater",
			"Frankrig",
			"1600-1699",
			"musicals",
			"amerikanske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "6",
		ratingIMDb: "6.4",
		point: "4",
		alder: "11",
		tema: "Kærlighed",
		imgTema: "kaerlighed",
		imgTitel: "Cyrano"
	},
	{
		filmTitel: "De fem år",
		slug: "de-fem-aar",
		originalTitel: "De fem år",
		aarstal: "1955",
		genre: "Dokumentar",
		underGenre: [
			"sort-hvid"
		],
		type: "Dokumentar",
		varighed: "1t 38min",
		instruktor: [
			"Theodor Christensen"
		],
		manusforfatter: [
			""
		],
		medvirkende: [
			""
		],
		langResume: "En autentisk og dokumentarisk film om Danmarks besættelse, modstandskampen og befrielsen. Takket være modige danske filmfolks indsats lykkedes det her i landet at filme store dele af modstandskampen og de afgørende begivenheder, som prægede årene 1940-45. Dette enestående materiale er her samlet i een enkelt film, suppleret med et stort antal optagelser, som siden er fundet frem, dels fra danske gemmer, dels fra tyske og engelske arkiver, hvor man bl.a. har fundet tyskernes egne filmoptagelser fra Danmarks besættelse den 9. april 1940 og nogle fantastiske optagelser fra den RAF-maskine, der ledede angrebet på shell-huset den 21. marts 1945.",
		kortResume: "",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Dansk Film Co"
		],
		emneord: [
			"1940-1949",
			"dokumentarfilm",
			"modstandskamp",
			"historie",
			"besættelsestiden",
			"Danmark"
		],
		ratingFilmstriben: "4",
		ratingAntal: "14",
		ratingIMDb: "6.6",
		point: "3",
		alder: "15",
		tema: "månedens dokumentar",
		imgTema: "maanedens dokumentar",
		imgTitel: "de-fem-aar"
	},
	{
		filmTitel: "Chihiro og heksene",
		slug: "chihiro-og-heksene",
		originalTitel: "Spirited Away",
		aarstal: "2001",
		genre: "Animation",
		underGenre: [
			"Drama",
			"Børn",
			"Eventyr"
		],
		type: "Spillefilm",
		varighed: "2t",
		instruktor: [
			"Hayao Miyazaki"
		],
		manusforfatter: [
			"Hayao Miyazaki"
		],
		medvirkende: [
			""
		],
		langResume: "Chihiro er ti år og sur, for familien skal flytte, men på vejen til det nye hus farer familien vild og havner i en nedlagt forlystelsespark, hvor forældrene bliver forvandlede til svin. Chihiro er nu helt alene et fremmed sted med ånder og kun hun kan redde forældrene.",
		kortResume: "Chihiro er ti år og sur, for familien skal flytte, men på vejen til det nye hus farer familien vild og havner i en nedlagt forlystelsespark, hvor forældrene bliver forvandlede til svin. Chihiro er nu helt alene et fremmed sted med ånder og kun hun kan redde forældrene.",
		sprog: [
			"Japansk"
		],
		land: [
			"Japan"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Studio Ghibli"
		],
		emneord: [
			"piger",
			"ånder",
			"hekse",
			"magi",
			"eventyr",
			"japanske film",
			"animationsfilm",
			"spillefilm",
			"anime",
			"for større børn"
		],
		ratingFilmstriben: "5",
		ratingAntal: "12",
		ratingIMDb: "8.6",
		point: "4",
		alder: "a",
		tema: [
			"Animation",
			"Mine favoritter"
		],
		imgTema: "animation",
		imgTitel: "chihiro-og-heksene"
	},
	{
		filmTitel: "Mysteriet om Hr. Link",
		slug: "mysteriet-om-hr-link",
		originalTitel: "Missing Linky",
		aarstal: "2019",
		genre: "Animation",
		underGenre: [
			"Komedie",
			"Børn",
			"Eventyr"
		],
		type: "Spillefilm",
		varighed: "1 t 30 min",
		instruktor: [
			"Chris Butler"
		],
		manusforfatter: [
			"Chris Butler"
		],
		medvirkende: [
			"Jens Jacob Tychsen",
			"Pilou Asbæk",
			"Danica Curcic",
			"Ann Eleonora Jørgensen",
			"Ulf Pilgaard",
			"Bubber",
			"Sebastian Klein",
			"Søs Egelind",
			"Molly Blixt Egelind"
		],
		langResume: "Eventyreren Lionel Frost finder endelig et mytologisk væsen, som han har ledt efter så længe. Væsnet, kaldet Hr. Link, har selv ønsket at blive fundet af Lionel, og sammen tager de på en farefuld, men også skæg, færd.",
		kortResume: "Eventyreren Lionel Frost finder endelig et mytologisk væsen, som han har ledt efter så længe.",
		sprog: [
			"Engelsk",
			"Dansk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			""
		],
		produktionsselskab: [
			"Laika"
		],
		emneord: [
			"adventurefilm",
			"komedier",
			"opdagelsesrejsende",
			"overnaturlige væsener",
			"anerkendelse",
			"animationsfilm",
			"amerikanske film",
			"spillefilm",
			"for større børn",
			"for unge"
		],
		ratingFilmstriben: "5",
		ratingAntal: "57",
		ratingIMDb: "6.7",
		point: "4",
		alder: "7",
		tema: "Animation",
		imgTema: "animation",
		imgTitel: "mysteriet-om-hr-link"
	},
	{
		filmTitel: "Underverden",
		slug: "underverden",
		originalTitel: "Underverden",
		aarstal: "2017",
		genre: "Action",
		underGenre: [
			"Krimi"
		],
		type: "Spillefilm",
		varighed: "1 t 52 min",
		instruktor: [
			"Fenar Ahmad"
		],
		manusforfatter: [
			"Fenar Ahmad",
			"Adam August"
		],
		medvirkende: [
			"Dar Salim",
			"Stine Fisher Christensen",
			"Ali Sivandi",
			"Dulfi Al-Jabouri",
			"Roland Møller",
			"Jacob Hauberg Lohmann",
			"B. Branco"
		],
		langResume: "Zaid (Dar Salim) nyder tilværelsen som succesrig hjertekirurg med dyr lejlighed og gravid kæreste. En aften får han besøg af sin lillebror Yasin, der desperat beder om penge, men afvises blankt i døren. Kort efter bliver Yasin fundet, gennembanket til døde, og Zaid overvældes af skyldfølelse. Sorg afløses af vrede, og snart bliver Zaid besat af at finde den skruppelløse gerningsmand. Som retfærdighedssøgende, maskeret hævner bevæger han sig ned i Københavns kriminelle underverden, og ved at se sine egne skyggesider i øjnene, tvinges han frem mod det ultimative, uundgåelige valg, der kan ændre hele hans verden…",
		kortResume: "Zaid (Dar Salim) nyder tilværelsen som succesrig hjertekirurg med dyr lejlighed og gravid kæreste. En aften får han besøg af sin lillebror Yasin, der desperat beder om penge, men afvises blankt i døren. ",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Kasper Tuxen"
		],
		produktionsselskab: [
			"Profile Pictures"
		],
		emneord: [
			"selvtægt",
			"indvandrere",
			"brødre",
			"bander",
			"kriminalitet",
			"bandekriminalitet",
			"København",
			"danske film",
			"danske spillefilm"
		],
		ratingFilmstriben: "4",
		ratingAntal: "124",
		ratingIMDb: "6.6",
		point: "4",
		alder: "15",
		tema: [
			"andet",
			"Mine favoritter"
		],
		imgTema: "andet",
		imgTitel: "underverden"
	},
	{
		filmTitel: "Robocop",
		slug: "robocop",
		originalTitel: "Robocop",
		aarstal: "2014",
		genre: "Action",
		underGenre: [
			"Science fiction"
		],
		type: "Spillefilm",
		varighed: "1 t 59 min",
		instruktor: [
			"José Padilha"
		],
		manusforfatter: [
			"Joshua Zetumer",
			"Michael Miner",
			"Edward Neumeier"
		],
		medvirkende: [
			"Joel Kinnaman",
			"Gary Oldman",
			"Michael Keaton",
			"Abbie Cornish",
			"Jackie Earle Haley",
			"Michael K. Williams",
			"Samuel L. Jackson",
			"Jennifer Ehle",
			"Jay Baruchel"
		],
		langResume: "Politistyrken er ved at blive overtaget af robotter. Eneste problem er, at de ikke har følelser og skyder på alt hvad der er bevæbnet, selv små børn. Derfor er det en gave da politimanden Alex Murphy bliver dødeligt såret. Nu kan de teste deres nyeste opfindelse, en politimand der er halvt menneske, halvt maskine.",
		kortResume: "Politistyrken er ved at blive overtaget af robotter. Eneste problem er, at de ikke har følelser og skyder på alt hvad der er bevæbnet, selv små børn. ",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Lula Carvalho"
		],
		produktionsselskab: [
			"Metro-Goldwyn-Mayer Pictures",
			"Columbia Pictures",
			"Strike Entertainment"
		],
		emneord: [
			"robotter",
			"kriminalitet",
			"politi",
			"amerikanske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "40",
		ratingIMDb: "6.1",
		point: "4",
		alder: "15",
		tema: "andet",
		imgTema: "andet",
		imgTitel: "robocop"
	},
	{
		filmTitel: "The guest",
		slug: "the-guest",
		originalTitel: "",
		aarstal: "2013",
		genre: "Action",
		underGenre: [
			"Thriller"
		],
		type: "Spillefilm",
		varighed: "1 t 36 min",
		instruktor: [
			"Adam Wingard"
		],
		manusforfatter: [
			"Simon Barrett"
		],
		medvirkende: [
			"Dan Stevens",
			"Maika Monroe",
			"Leland Orser",
			"Sheila Kelley",
			"Brendan Meyer",
			"Chase Williamson"
		],
		langResume: "En fremmed banker en dag på døren. Han siger, at han har kendt familiens afdøde søn. De lukker ham ind og David bliver en del af familien. Men da uforklarlige mord begynder at forekomme omkring dem, falder mistanken på den fremmede, som det viser sig, har en farlig hemmelighed og vil gøre, hvad det skal være for ikke at blive afsløret.",
		kortResume: "En fremmed banker en dag på døren. Han siger, at han har kendt familiens afdøde søn. ",
		sprog: [
			"Engelsk"
		],
		land: [
			"USA",
			"Storbritannien"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Robby Baumgartner"
		],
		produktionsselskab: [
			"HanWay Films",
			"Snoot Films"
		],
		emneord: [
			"spillefilm",
			"amerikanske film"
		],
		ratingFilmstriben: "3",
		ratingAntal: "52",
		ratingIMDb: "6.7",
		point: "4",
		alder: "15",
		tema: "andet",
		imgTema: "andet",
		imgTitel: "the-guest"
	},
	{
		id: 0,
		filmTitel: "love-proof",
		slug: "Love proof",
		originalTitel: "Kärleksbevis",
		aarstal: "2022",
		genre: "thriller",
		underGenre: [
			"drama"
		],
		type: "Spillefilm",
		varighed: "1t 26min",
		instruktor: [
			"Richard Hobert"
		],
		manusforfatter: [
			"Richard Hobert"
		],
		medvirkende: [
			"Livia Millhagen",
			"Rolf Lassgård",
			"Hedda Rehnberg"
		],
		langResume: "Thomas og Marie skal skilles og mødes en sidste gang for at tømme og sælge sommerhuset. Ingen af dem kender den andens sande hensigter. En ung kvinde dukker pludselig op, drevet af jalousi og med sin egen dagsorden. Det, der skulle have været en civiliseret afslutning på et langt ægteskab, bliver minut for minut til en rystende weekend, der vender hele deres liv på hovedet.",
		kortResume: "Thomas og Marie skal skilles og mødes en sidste gang for at tømme og sælge sommerhuset. Ingen af dem kender den andens sande hensigter. En ung kvinde dukker pludselig op, drevet af jalousi og med sin egen dagsorden.",
		sprog: [
			"Svensk"
		],
		land: [
			"Sverige"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Andreas Troedsson"
		],
		produktionsselskab: [
			"Fundament Film"
		],
		emneord: [
			"ægteskab",
			"skilsmisse",
			"Sverige"
		],
		ratingFilmstriben: "4",
		ratingAntal: "18",
		ratingIMDb: "5,2",
		point: "4",
		alder: "11",
		tema: "splash",
		imgTema: "splash",
		imgTitel: "Love Proof"
	},
	{
		filmTitel: "Bare en cappuccino",
		slug: "bare-en-cappuccino",
		originalTitel: "",
		aarstal: "2017",
		genre: "Kortfilm",
		underGenre: [
			"kærlighed"
		],
		type: "Kortfilm",
		varighed: "30 min",
		instruktor: [
			"Elisabeth Rygård"
		],
		manusforfatter: [
			"Elisabeth Rygård"
		],
		medvirkende: [
			"Karen-Lise Mynster",
			"Anders Hove",
			"Søren Spanning",
			"Morten Hauch-Fausbøll"
		],
		langResume: "En kvinde er sunket ned i depression og isolation efter at have mistet sin mand i en trafikulykke nogle år inden. Hun beslutter sig for at date tre mænd, men hver af disse møder går grueligt galt.",
		kortResume: "En kvinde er sunket ned i depression og isolation efter at have mistet sin mand i en trafikulykke nogle år inden. Hun beslutter sig for at date tre mænd, men hver af disse møder går grueligt galt.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Henrik Ørslev"
		],
		produktionsselskab: [
			"Copenhagen Film Company"
		],
		emneord: [
			"ensomhed",
			"alderdom",
			"dating",
			"dating",
			"Danmark",
			"2010-2019",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "5",
		ratingAntal: "2",
		ratingIMDb: "",
		point: "2",
		alder: "a",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Bare en cappuccino",
		alt: ""
	},
	{
		filmTitel: "Drengevenner",
		slug: "drengevenner",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "18 min",
		instruktor: [
			"Joachim Morre"
		],
		manusforfatter: [
			"Joachim Morre"
		],
		medvirkende: [
			"Johan Bech Jespersen",
			"Rasmus Daugbjerg",
			"Anton Hjejle"
		],
		langResume: "To venner forbereder sig på at skulle til fest. Natten er ung og humøret er højt. Da vennen Simon ankommer, ændres stemningen drastisk. Der er noget han skal have sagt, men han er bange for, hvilke konsekvenser nyheden kan få for drengenes venskab.",
		kortResume: "To venner forbereder sig på at skulle til fest. Natten er ung og humøret er højt. Da vennen Simon ankommer, ændres stemningen drastisk.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Søren Kahr"
		],
		produktionsselskab: [
			"Isaac"
		],
		emneord: [
			"hemmeligheder",
			"jalousi",
			"venskab",
			"Danmark",
			"2020-2029",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "3",
		ratingAntal: "19",
		ratingIMDb: "8.7",
		point: "2",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Drengevenner",
		alt: ""
	},
	{
		filmTitel: "Angel",
		slug: "angel",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "19 min",
		instruktor: [
			"Lisa Svelmøe"
		],
		manusforfatter: [
			"Mariann Sofiasdóttir"
		],
		medvirkende: [
			"Christine Sønderris",
			"Rasmus Hammerich",
			"Karin Bertling",
			"ytte Kvinesdal"
		],
		langResume: "Stripperen Stinna lever i et voldeligt forhold med stofmisbrug, og hendes femårige datter er i familiepleje. En aften bliver hun konfronteret med fortidens svigt og fortielser, da en misforståelse fører til et job i et stort palæ.",
		kortResume: "Stripperen Stinna lever i et voldeligt forhold med stofmisbrug, og hendes femårige datter er i familiepleje.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Julie Mørch Honoré"
		],
		produktionsselskab: [
			"Goodwill",
			"Svelmøe Film"
		],
		emneord: [
			"strippere",
			"familien",
			"svigt",
			"Danmark",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "4",
		ratingAntal: "8",
		ratingIMDb: "",
		point: "2",
		alder: "15",
		tema: [
			"Danske kortfilm",
			"Mine favoritter"
		],
		imgTema: "Danske kortfilm",
		imgTitel: "Angel",
		alt: ""
	},
	{
		filmTitel: "Uden barn",
		slug: "uden-barn",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "20 min",
		instruktor: [
			"Cecilie Kronborg Thomsen"
		],
		manusforfatter: [
			"Cecilie Kronborg Thomsen"
		],
		medvirkende: [
			"Charlotte Munck"
		],
		langResume: "Asta kæmper en daglig kamp for at få et barn. Hendes biologiske ur tikker, mens hun forsøger at finde mening i al smerten.",
		kortResume: "Asta kæmper en daglig kamp for at få et barn. Hendes biologiske ur tikker, mens hun forsøger at finde mening i al smerten.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Julie Mørch Honoré"
		],
		produktionsselskab: [
			"FilmFyn"
		],
		emneord: [
			"kvinder",
			"barnløshed",
			"fertilitetsbehandling",
			"Danmark",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "5",
		ratingAntal: "5",
		ratingIMDb: "",
		point: "2",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Uden barn",
		alt: ""
	},
	{
		filmTitel: "Dark angel",
		slug: "dark-angel",
		originalTitel: "",
		aarstal: "2019",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "10 min",
		instruktor: [
			"Svend Ploug Johansen"
		],
		manusforfatter: [
			"Mads Koudal",
			"Svend Ploug Johansen"
		],
		medvirkende: [
			"Mads Koudal",
			"Ditte Ylva Olsen"
		],
		langResume: "En terrorist planlægger at begå et terrorangreb. Manden er nervøs og anspændt, og da han møder en mystisk kvinde, undgår han hende og løber væk. Hun efterlader dog et helt særligt indtryk på ham, som påvirker både hans skæbne, og har stor indflydelse på, hvordan terrorangrebet vil ende. Filmen fokuserer på en terrorists tanker og tvivl, og er skudt i et langt ”one take” uden klip. Selv i en persons mørke indre kan være et håb om at finde en lysende engel.",
		kortResume: "En terrorist planlægger at begå et terrorangreb. Manden er nervøs og anspændt, og da han møder en mystisk kvinde, undgår han hende og løber væk.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Tobias Scavenius"
		],
		produktionsselskab: [
			"M&M Productions"
		],
		emneord: [
			"terrorisme",
			"tog",
			"kortfilm",
			"danske film"
		],
		ratingFilmstriben: "4",
		ratingAntal: "9",
		ratingIMDb: "",
		point: "1",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Dark angel",
		alt: ""
	},
	{
		filmTitel: "Bjørn på Langeland",
		slug: "bjørn-på-Langeland",
		originalTitel: "",
		aarstal: "2022",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "31 min",
		instruktor: [
			"Joachim Morre"
		],
		manusforfatter: [
			"Joachim Morre"
		],
		medvirkende: [
			"Kian Lawson-Khalili",
			"Therese Glahn",
			"Johan Bech Jespersen"
		],
		langResume: "Bjørn er i sommerhus med sin mor. Han er teenager og har det lidt svært i livet. Da en gruppe unge flytter ind i sommerhuset ved siden af, starter en sommer for Bjørn, som han aldrig vil glemme.",
		kortResume: "Bjørn er i sommerhus med sin mor. Han er teenager og har det lidt svært i livet. Da en gruppe unge flytter ind i sommerhuset ved siden af, starter en sommer for Bjørn, som han aldrig vil glemme.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Søren Kahr"
		],
		produktionsselskab: [
			"Isaac"
		],
		emneord: [
			"ensomhed",
			"ferie",
			"mobning",
			"venskab",
			"unge",
			"Langeland",
			"Danmark",
			"2020-2029",
			"kortfilm",
			"for unge"
		],
		ratingFilmstriben: "4",
		ratingAntal: "11",
		ratingIMDb: "7.7",
		point: "3",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Bjorn på Langeland",
		alt: ""
	},
	{
		filmTitel: "Én svale gør ingen sommer",
		slug: "en-svale-gør-ingen-sommer",
		originalTitel: "",
		aarstal: "2021",
		genre: "Kortfilm",
		underGenre: [
			"drama"
		],
		type: "Kortfilm",
		varighed: "21 min",
		instruktor: [
			"Emilie Fabricius Hacke"
		],
		manusforfatter: [
			"Emilie Fabricius Hacke",
			"Astrid Plesner Hansen"
		],
		medvirkende: [
			"Pia Jondal",
			"Clara Dessau",
			"Waage Sandø"
		],
		langResume: "",
		kortResume: "",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Søren Kahr"
		],
		produktionsselskab: [
			"Isaac"
		],
		emneord: [
			"alderdom",
			"undertrykkelse",
			"Danmark",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "4",
		ratingAntal: "21",
		ratingIMDb: "",
		point: "2",
		alder: "15",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "En svale gor ingen sommer",
		alt: ""
	},
	{
		filmTitel: "Palle alene i verden",
		slug: "palle-alene-i-verden",
		originalTitel: "",
		aarstal: "1949",
		genre: "Kortfilm",
		underGenre: [
			"Børn"
		],
		type: "Kortfilm",
		varighed: "24 min",
		instruktor: [
			"Astrid Henning-Jensen"
		],
		manusforfatter: [
			""
		],
		medvirkende: [
			"Lars Henning-Jensen",
			"Lily Broberg"
		],
		langResume: "Lille Palle vågner en morgen til en verden uden andre mennesker. Han kan gøre lige, hvad han vil: styre en sporvogn, køre i brandbil, spise alt slikket i en slikbutik. Der er bare ingen at fortælle det til. Til sidst sætter han sig ind i en flyvemaskine og flyver helt op til månen - og vågner i sin seng. Var det hele bare en drøm?",
		kortResume: "Lille Palle vågner en morgen til en verden uden andre mennesker. Han kan gøre lige, hvad han vil: styre en sporvogn, køre i brandbil, spise alt slikket i en slikbutik.",
		sprog: [
			"Dansk"
		],
		land: [
			"Danmark"
		],
		undertekst: "Dansk",
		filmfotograf: [
			"Annelise Reenberg"
		],
		produktionsselskab: [
			"Dansk Kulturfilm",
			"Nordisk Films Kompagni"
		],
		emneord: [
			"drømme",
			"alene",
			"danske film",
			"kortfilm"
		],
		ratingFilmstriben: "4",
		ratingAntal: "5",
		ratingIMDb: "7.5",
		point: "3",
		alder: "a",
		tema: "Danske kortfilm",
		imgTema: "Danske kortfilm",
		imgTitel: "Palle alene i verden",
		alt: ""
	}
];

const $$Astro$5 = createAstro();
const $$Heart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Heart;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="heart"${addAttribute(variant, "data-variant")} class="astro-KVI4WCV4">
  <p class="lightIcon text-white hover:text-gold-400 astro-KVI4WCV4">heart</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/heart.astro");

const $$Astro$4 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Info;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button id="infoKnap"${addAttribute(variant, "data-variant")} class=" astro-NDM4YBYO">
  <p class="lightIcon text-white hover:text-gold-500 astro-NDM4YBYO">circle-info</p></button>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/ikoner/info.astro");

const $$Astro$3 = createAstro();
const $$Moviecard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Moviecard;
  const { aarstal, filmTitle, slug, varighed, genre, imgSrc, undergenre, point } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<article class="card aspect-ratio relative w-full flex flex-col-reverse h-[60vw] md:h-[40vw] lg:h-[20vw] bg-no-repeat bg-cover bg-top rounded-[3px] astro-BGKXZW3I"${addAttribute(`background-image: url("${imgSrc}")`, "style")}>
  <div class="w-full bottom-0 relative h-full flex flex-col-reverse astro-BGKXZW3I">
    <div class="bg-black info astro-BGKXZW3I"><span class="astro-BGKXZW3I"></span></div>

    <div class="bg-black w-full absolute z-[1] flex flex-col px-5 pb-3 astro-BGKXZW3I">
      <a${addAttribute(`${slug}`, "href")} class="w-fit h-fit astro-BGKXZW3I">
        <p class="titel font-display text-xs astro-BGKXZW3I">${filmTitle}</p>
      </a>
      <div class="flex justify-between astro-BGKXZW3I">
        <div class="infoBar text-grey-100 flex gap-2 items-center body-sm astro-BGKXZW3I">
          <p class="varrighed body-xs astro-BGKXZW3I">${varighed}</p>|<p class="aarstal body-xs astro-BGKXZW3I">
            ${aarstal}
          </p>|<p class="genre body-xs astro-BGKXZW3I">${genre}</p>|<p class="genre body-xs astro-BGKXZW3I">
            ${point} point
          </p>
        </div>
        <div class="gap-4 flex w-fit astro-BGKXZW3I">
          ${renderComponent($$result, "Heart", $$Heart, { "variant": "small", "class": "astro-BGKXZW3I" })}
          ${renderComponent($$result, "Info", $$Info, { "variant": "small", "class": "astro-BGKXZW3I" })}
        </div>
      </div>
    </div>
  </div>
  <a${addAttribute(`${slug}`, "href")} class="w-fit h-fit astro-BGKXZW3I">
    <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full hover:bg-black hover:opacity-25 ease-out duration-300 astro-BGKXZW3I">
    </div>
  </a>
</article>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Moviecard.astro");

const $$Astro$2 = createAstro();
const $$Filtrering = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Filtrering;
  return renderTemplate`${renderComponent($$result, "Button", $$Button, { "btnClass": "filtreringsKnap", "variant": "secondary", "tekst": "Filtrering", "typeIcon": "sliders", "class": "astro-VWNWF6YN" })}

${maybeRenderHead($$result)}<div class="absolute filtreringsMenu hidden bg-black px-14 w-1/4 h-screen justify-between flex flex-col right-0 top-0 z-[200] overflow-scroll py-4 pb-28 astro-VWNWF6YN">
  <div class="filtreringsOverlay fixed bg-black bg-opacity-70 items-cente top-0 left-0 w-screen h-screen -z-40 astro-VWNWF6YN">
  </div>
  <div class="lukFiltrering flex w-full justify-end astro-VWNWF6YN">${renderComponent($$result, "Kryds", $$Kryds, { "class": "astro-VWNWF6YN" })}</div>
  <form class="flex flex-col h-4/5 justify-between overflow-scroll gap-8 astro-VWNWF6YN" action="">
    <fieldset class="relevans astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm astro-VWNWF6YN">Sortere efter <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden overflow-scroll astro-VWNWF6YN">
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="mest-relevante" class="astro-VWNWF6YN">Mest relevante</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="mest-relevante" name="mest-relevante">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="spilletid-longest" class="astro-VWNWF6YN">Spilletid <span class="body-lg font-light astro-VWNWF6YN">|</span> længest først</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="spilletid-longest" name="spilletid-longest">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="spilletid-shortest" class="astro-VWNWF6YN">Spilletid <span class="body-lg font-light astro-VWNWF6YN">|</span> kortes først</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="spilletid-shortest" name="spilletid-shortest">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="titel aToz" class="astro-VWNWF6YN">Titel A <span class="lightIcon text-[10px] astro-VWNWF6YN">arrow-right-long</span>
            Å</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="titel aToz" name="titel aToz">
        </div>

        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="titel zToa" class="astro-VWNWF6YN">Titel Å <span class="lightIcon text-[10px] astro-VWNWF6YN">arrow-right-long</span>
            A</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="titel zToa" name="titel zToa">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="year-newest" class="astro-VWNWF6YN">Årstal <span class="body-lg font-light astro-VWNWF6YN">|</span> nyeste først</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="year-newest" name="year-newest">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="year-eldest" class="astro-VWNWF6YN">Årstal <span class="body-lg font-light astro-VWNWF6YN">|</span> ældste først</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="year-eldest" name="year-eldest">
        </div>
      </div>
    </fieldset>

    <fieldset class="genre astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm astro-VWNWF6YN">Genre <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden overflow-scroll astro-VWNWF6YN">
        ${filmgenre.map((genre) => renderTemplate`<div class="checkboxWrapper  astro-VWNWF6YN">
              <label${addAttribute(genre, "for")} class="text-grey-300 peer-checked:text-white  astro-VWNWF6YN">
                ${genre}
              </label>
              <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2  rounded-sm  astro-VWNWF6YN"${addAttribute(genre, "id")}${addAttribute(genre, "name")}>
            </div>`)}
      </div>
    </fieldset>
    <fieldset class="kategori astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm flex gap-2 astro-VWNWF6YN">Kategori <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden astro-VWNWF6YN">
        ${filmkategori.map((kategori) => renderTemplate`<div class="checkboxWrapper astro-VWNWF6YN">
              <label${addAttribute(kategori, "for")} class="astro-VWNWF6YN">${kategori}</label>
              <input class=" astro-VWNWF6YN" type="checkbox"${addAttribute(kategori, "id")}${addAttribute(kategori, "name")}>
            </div>`)}
      </div>
    </fieldset>
    <fieldset class="point astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm astro-VWNWF6YN">Antal point <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden overflow-scroll astro-VWNWF6YN">
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="0" class="astro-VWNWF6YN">0 point</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="0" name="0">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="1" class="astro-VWNWF6YN">1 point</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="1" name="1">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="2" class="astro-VWNWF6YN">2 point</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="2" name="2">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="3" class="astro-VWNWF6YN">3 point</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="3" name="3">
        </div>

        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="4" class="astro-VWNWF6YN">4 point</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="4" name="4">
        </div>
      </div>
    </fieldset>
    <fieldset class="varighed astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm astro-VWNWF6YN">Varighed <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden overflow-scroll astro-VWNWF6YN">
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="<30m" class="astro-VWNWF6YN">under 30 minutter</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="<30m" name="<30m">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="30m-1t" class="astro-VWNWF6YN">30 minutter - 1 time</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="30m-1t" name="30m-1t">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="1t-2t" class="astro-VWNWF6YN">1 time - 2 timer</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="1t-2t" name="1t-2t">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="2t-3t" class="astro-VWNWF6YN">2 timer - 3 timer</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="2t-3t" name="2t-3t">
        </div>

        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="+3t" class="astro-VWNWF6YN">+3 timer</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="+3t" name="+3t">
        </div>
      </div>
    </fieldset>
    <fieldset class="varighed astro-VWNWF6YN">
      <legend class="pb-2 mb-2 border-b-[1px] w-full text-white font-display text-sm astro-VWNWF6YN">Sprog <p class="lightIcon text-[16px] astro-VWNWF6YN">chevron-down</p>
      </legend>
      <div class="filtreringsListe hidden flex-col overflow-scroll astro-VWNWF6YN">
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="dansk" class="astro-VWNWF6YN">Dansk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="dansk" name="dansk">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="engelsk" class="astro-VWNWF6YN">Engelsk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="engelsk" name="engelsk">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="fransk" class="astro-VWNWF6YN">Fransk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="fransk" name="fransk">
        </div>
        <div class="checkboxWrapper astro-VWNWF6YN">
          <label for="japansk" class="astro-VWNWF6YN">Japansk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="japansk" name="japansk">
        </div>

        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="norsk" class="astro-VWNWF6YN">Norsk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="norsk" name="norsk">
        </div>
        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="svensk" class="astro-VWNWF6YN">Svensk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="svensk" name="svensk">
        </div>
        <div class="checkboxWrapper align-middle astro-VWNWF6YN">
          <label for="Spansk" class="astro-VWNWF6YN">Spansk</label>
          <input type="checkbox" class="text-gold-400 bg-grey-200 focus:ring-gold-400 focus:ring-2 rounded-sm astro-VWNWF6YN" id="spansk" name="spansk">
        </div>
      </div>
    </fieldset>
  </form>
  ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "typeIcon": "sliders", "tekst": "Anvend filtre", "class": "astro-VWNWF6YN" })}
</div>

`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/components/Filtrering.astro");

const $$Astro$1 = createAstro();
const $$UndersideLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UndersideLayout;
  const { undersideTitel, antaltTitler } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<main class="min-h-[70vh]">
  <div class="flex w-full justify-between items-center py-4 sticky top-16 z-40 px-20 bg-black bg-opacity-90">
    <div class="flex gap-2 items-baseline">
      <h1 class="text-gold-400 font-display text-lg">
        ${undersideTitel}
      </h1><p class="text-grey-500 font-display text-md">
        ${antaltTitler} titler
      </p>
    </div>
    ${renderComponent($$result, "Filtrering", $$Filtrering, {})}
  </div>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-4 px-20 z-0 relative">
    ${renderSlot($$result, $$slots["default"])}
  </section>
</main>`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/layouts/UndersideLayout.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  return bornunge.map((ting) => {
    return {
      params: { alder: ting.kategori },
      props: { valgtGruppe: ting }
    };
  });
}
const $$alder = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$alder;
  Astro2.params;
  const { valgtGruppe } = Astro2.props;
  console.log(valgtGruppe.kategori);
  const filtretFilm = filmdatabase.filter(
    (film) => film.alder === valgtGruppe.aldersGruppe || valgtGruppe.aldersgruppe.includes(film.alder)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": valgtGruppe.kategori }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "UndersideLayout", $$UndersideLayout, { "undersideTitel": valgtGruppe.kategori, "antaltTitler": filtretFilm.length }, { "default": ($$result3) => renderTemplate`${filtretFilm.map(
    (film) => (console.log(filtretFilm.length), renderTemplate`${renderComponent($$result3, "MovieCard", $$Moviecard, { "varighed": film.varighed, "genre": film.genre, "aarstal": film.aarstal, "filmTitle": film.filmTitel, "imgSrc": `../img/${film.imgTema}/${film.imgTitel}/imgCard.webp`, "slug": film.slug, "point": film.point })}`)
  )}` })}
` })}`;
}, "/Users/charlottefranciska/Documents/KEA/4. semster /Vi pr\xF8ver igen/filmstriben/src/pages/[alder].astro");

const $$file = "/Users/charlottefranciska/Documents/KEA/4. semster /Vi prøver igen/filmstriben/src/pages/[alder].astro";
const $$url = "/[alder]";

const _alder_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$alder,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$UndersideLayout as $, _alder_ as _, filmdatabase as a, $$Moviecard as b, $$Layout as c, filmkategori as d, $$Button as e, filmgenre as f, $$Kryds as g, $$Heart as h, $$Info as i, $$HeaderHeart as j, $$HeaderUser as k, $$Procesbar as l, $$Sogbar as m, $$Filtrering as n, $$Sog as o, $$Facebook as p, $$Instagram as q, $$Twitter as r };
