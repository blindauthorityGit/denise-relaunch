import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// SANITY
import client from "../client";

// COMPS
import { MainButton } from "../components/buttons";
import BG from "../components/layout/bg";
import { Menu1 } from "../components/menues";
import { Contact } from "../components/sections";
import { Element } from "../components/quickLinks";
import { PageChangeFX } from "../components/transitionFX";

// ASSETS
import { RxHamburgerMenu } from "react-icons/rx/index.js";
import { FaFacebookF, FaGlobe, FaInstagram } from "react-icons/fa/index.js";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import Favicon from "../assets/favicon.svg";
import KinderHero from "../assets/kinder-knaecki-hero-lifestyle.png";
import KinderProductSquare from "../assets/kinder-knaecki-product-square.png";
import KinderProduct from "../assets/kinder-knaecki-product.png";
import KinderMutkarten from "../assets/kinder-knaecki-mutkarten.jpg";
import YogiHeart from "../assets/yogi-heart.svg";
import YogiGlueck from "../assets/yogi-glueck.png";

const SHOP_URL = "https://shop.baeckerin.at/produkt/kinderknaecki/";
const RESELLER_URL = "https://shop.baeckerin.at/registration/";
const OG_IMAGE_PLACEHOLDER =
  "https://www.baeckerin.at/kinder-knaecki-og-placeholder.jpg";
const YOGI_WEBSITE_URL = "https://www.derkleineyogi.com/";
const YOGI_FACEBOOK_URL = "https://www.facebook.com/derkleineyogi/";
const YOGI_INSTAGRAM_URL = "https://www.instagram.com/derkleineyogi/";

const uspItems = [
  "Vegan",
  "Laktosefrei",
  "Hefefrei",
  "Mit Traubenkernmehl",
  "Gemeinsam mit dem Kleinen Yogi entwickelt",
  "In jeder Packung eine Mutkarte",
];

const yogiLinks = [
  { label: "Website", href: YOGI_WEBSITE_URL, icon: <FaGlobe /> },
  { label: "Facebook", href: YOGI_FACEBOOK_URL, icon: <FaFacebookF /> },
  { label: "Instagram", href: YOGI_INSTAGRAM_URL, icon: <FaInstagram /> },
];

export default function KinderKnaecki({ dataSetting, dataHome }) {
  const quickLinkData =
    dataHome?.section?.filter(
      (item) => item.buttonLink !== "/kinder-knaecki"
    ) || [];

  return (
    <PageChangeFX>
      <Head>
        <title>Kinder Knäcki mit Traubenkernmehl | Denise Bäckerin</title>
        <meta
          name="description"
          content="Kinder Knäcki ist der knusprige Snack für kleine Entdecker. Gemeinsam mit dem Kleinen Yogi entwickelt, vegan, laktosefrei, hefefrei und mit Traubenkernmehl gebacken."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={Favicon.src} />
        <meta
          property="og:title"
          content="Kinder Knäcki mit Traubenkernmehl | Denise Bäckerin"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.baeckerin.at/kinder-knaecki"
        />
        <meta property="og:image" content={OG_IMAGE_PLACEHOLDER} />
        <meta
          property="og:description"
          content="Kinder Knäcki ist der knusprige Snack für kleine Entdecker. Gemeinsam mit dem Kleinen Yogi entwickelt, vegan, laktosefrei, hefefrei und mit Traubenkernmehl gebacken."
        />
        <meta
          property="og:site_name"
          content="Denise Bäckerin - Die Bäckerei"
        />
        <meta property="og:locale" content="de_DE" />
      </Head>

      <Menu1
        logoLight={LogoLight.src}
        logoDark={LogoDark.src}
        menuItems={menuItems}
        socialMedia={socialMedia}
        burgerIcon={<RxHamburgerMenu />}
      />

      <BG />
      <div className="overflow-x-hidden">
        <section className="containerXL container mx-auto mt-20 overflow-hidden bg-[#FBFBF5] md:mt-24 2xl:mx-auto">
          <Image
            src={KinderHero}
            alt="Kinder Knäcki Packung auf hellem Tisch mit Trauben und Getreide"
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </section>

        <section
          id="produkt"
          className="containerXL container mx-auto grid grid-cols-12 gap-8 px-6 py-16 md:px-12 lg:py-24 xl:px-20 2xl:mx-auto"
        >
          <div className="col-span-12 lg:col-span-6">
            <p className="font-barlow text-sm uppercase tracking-[0.28em] text-[#2FADE0]">
              Kinder Knäcki
            </p>
            <h2 className="mt-4 font-freight !text-4xl font-thin text-darkText md:!text-5xl xl:!text-6xl">
              Knusperleichter Genuss für zwischendurch
            </h2>
            <div className="mt-8 space-y-5 font-freight text-lg leading-relaxed tracking-wider text-darkText xl:text-xl xl:leading-9">
              <p>
                Gemeinsam mit dem Kleinen Yogi haben wir ein Knäckebrot
                entwickelt, das speziell auf kleine Genießer abgestimmt ist.
                Kinder Knäcki verbindet ausgewählte Zutaten mit einer leichten,
                knusprigen Textur und einem milden Geschmack, den Kinder lieben.
              </p>
              <p>
                Die Rezeptur basiert auf wenigen, sorgfältig ausgewählten
                Zutaten: Dinkelmehl, Traubenkernmehl, Olivenöl, Wasser und Salz.
                Dadurch entsteht ein unkomplizierter Snack für zwischendurch -
                knusprig, bekömmlich und ohne unnötige Zusätze.
              </p>
              <p>
                Die liebevollen Illustrationen des Kleinen Yogi begleiten Kinder
                auf ihrer Entdeckungsreise und machen jede Packung zu einem
                kleinen Abenteuer. Inspiriert von Bewegung, Achtsamkeit und
                Freude am Leben entstand ein Produkt, das Genuss und
                spielerische Leichtigkeit miteinander verbindet.
              </p>
            </div>
          </div>
          <div className="relative col-span-12 aspect-square overflow-hidden bg-[#EAF8FE] lg:col-span-6">
            <Image
              src={KinderProductSquare}
              alt="Kinder Knäcki Packung mit Trauben und Getreide auf hellblauem Hintergrund"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="bg-[#32A9DE] py-14 lg:py-20">
          <div className="containerXL container mx-auto px-6 md:px-12 xl:px-20 2xl:mx-auto">
            <p className="mb-9 font-barlow text-sm uppercase tracking-[0.28em] text-white/80">
              Gute Zutaten, gutes Gefühl
            </p>
            <div className="grid grid-cols-12 gap-x-8 gap-y-8 lg:gap-y-12">
              {uspItems.map((item) => (
                <div
                  key={item}
                  className="col-span-12 flex items-center gap-4 sm:col-span-6 lg:col-span-4"
                >
                  <Image
                    src={YogiHeart}
                    alt=""
                    aria-hidden="true"
                    className="h-11 w-12 shrink-0 object-contain"
                  />
                  <span className="font-freight text-xl leading-tight tracking-wider text-white xl:text-2xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="containerXL container mx-auto grid grid-cols-12 gap-8 px-6 py-16 md:px-12 lg:items-center lg:py-24 xl:px-20 2xl:mx-auto">
          <div className="relative col-span-12 aspect-[4/5] overflow-hidden bg-white lg:col-span-6">
            <Image
              src={KinderMutkarten}
              alt="Mutkarten vom Kleinen Yogi mit positiven Botschaften"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:px-8">
            <p className="font-barlow text-sm uppercase tracking-[0.28em] text-[#2FADE0]">
              In jeder Packung enthalten
            </p>
            <h2 className="mt-4 font-freight !text-4xl font-thin text-darkText md:!text-5xl xl:!text-6xl">
              Kleine Mutkarten vom Kleinen Yogi
            </h2>
            <p className="mt-8 font-freight text-lg leading-relaxed tracking-wider text-darkText xl:text-xl xl:leading-9">
              Jede Packung enthält eine liebevoll gestaltete Karte mit einer
              Mutbotschaft vom Kleinen Yogi. Zum Sammeln, Entdecken, Verschenken
              oder einfach als kleine Erinnerung daran, wie viel Stärke bereits
              in uns steckt.
            </p>
            <Link href={SHOP_URL}>
              <MainButton klasse="!bg-[#2FADE0] hover:!bg-[#168FC0]">
                Jetzt bestellen
              </MainButton>
            </Link>
          </div>
        </section>

        <section className="bg-[#F7F8F4] py-16 lg:py-24">
          <div className="containerXL container mx-auto grid grid-cols-12 items-center gap-8 px-6 md:px-12 xl:px-20 2xl:mx-auto">
            <div className="relative col-span-12 aspect-square lg:col-span-6">
              <Image
                src={KinderProduct}
                alt="Freigestellte Kinder Knäcki Packung mit Traubenkernmehl"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:px-8">
              <p className="font-barlow text-sm uppercase tracking-[0.28em] text-[#2FADE0]">
                Shop
              </p>
              <h2 className="mt-4 font-freight !text-4xl font-thin text-darkText md:!text-5xl">
                Kinder Knäcki mit Traubenkernmehl 80g
              </h2>
              <p className="mt-5 font-freight text-xl tracking-wider text-darkText">
                vegan, laktosefrei, hefefrei
              </p>
              <p className="mt-5 max-w-xl font-freight text-lg leading-relaxed tracking-wider text-darkText xl:text-xl">
                Knuspriges Kinder Knäcki aus Dinkelmehl, Olivenöl, Wasser,
                Traubenkernmehl und Salz. Mild im Geschmack, unkompliziert für
                zwischendurch und ohne unnötige Zusätze.
              </p>
              <div className="mt-6 font-freight text-5xl text-primaryColor-700">
                4,90 €
              </div>
              <p className="mt-4 font-barlow text-sm uppercase tracking-[0.22em] text-darkText/60">
                Haltbarkeit: 8 Monate
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <Link href={SHOP_URL}>
                  <MainButton klasse="!m-0 !bg-[#2FADE0] hover:!bg-[#168FC0]">
                    Zum Onlineshop
                  </MainButton>
                </Link>
                <Link
                  href={RESELLER_URL}
                  className="inline-flex min-h-[60px] items-center border border-darkText px-7 font-freight text-lg uppercase tracking-widest text-darkText transition-colors duration-300 hover:border-[#2FADE0] hover:text-[#2FADE0]"
                >
                  Für Wiederverkäufer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="kleiner-yogi" className="border-b border-darkText/10 bg-white py-14 lg:py-20">
          <div className="containerXL container mx-auto grid grid-cols-12 items-center gap-8 px-6 md:px-12 xl:px-20 2xl:mx-auto">
            <div className="col-span-12 text-center lg:col-span-8 lg:text-left">
              <p className="font-barlow text-sm uppercase tracking-[0.28em] text-[#2FADE0]">
                Gemeinsam stark
              </p>
              <h2 className="mt-4 font-freight !text-4xl font-thin text-darkText md:!text-5xl">
                Mehr vom Kleinen Yogi
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {yogiLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[54px] items-center gap-3 border border-darkText/30 px-6 font-freight text-lg uppercase tracking-widest text-darkText transition-colors duration-300 hover:border-[#2FADE0] hover:text-[#2FADE0]"
                  >
                    <span className="text-xl" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-12 flex justify-center lg:col-span-4 lg:justify-end">
              <Image
                src={YogiGlueck}
                alt="Der Kleine Yogi mit einem vierblättrigen Kleeblatt"
                className="h-auto w-[190px] object-contain sm:w-[230px] lg:w-[270px]"
                sizes="(min-width: 1024px) 270px, 230px"
              />
            </div>
          </div>
        </section>

        {quickLinkData.length > 0 ? (
          <>
            <div className="h-8 sm:h-24"></div>
            <div className="containerXL container mx-auto grid grid-cols-12 gap-4 2xl:mx-auto">
              {quickLinkData.map((item) => (
                <Element
                  key={item.buttonLink}
                  length={quickLinkData.length}
                  link={item.buttonLink}
                  linkText={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </>
        ) : null}
        <div className="lg:h-24"></div>
        <Contact data={dataSetting}></Contact>
      </div>
    </PageChangeFX>
  );
}

export const getStaticProps = async () => {
  const dataSetting = await client.fetch(`
  *[_type == "setting"][0]
`);

  const dataHome = await client.fetch(`
    *[_type == "home"][0]
  `);

  return {
    props: {
      dataSetting,
      dataHome,
    },
    revalidate: 1,
  };
};
