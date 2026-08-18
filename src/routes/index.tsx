import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Minus, Plus, Tag } from "lucide-react";

import { Header } from "@/components/sarkar/Header";
import { Reveal } from "@/components/sarkar/Reveal";
import { collection, products } from "@/data/products";
import galleryDark from "@/assets/gallery-dark.jpg";
import galleryCap from "@/assets/gallery-cap.jpg";
import galleryNotes from "@/assets/gallery-notes.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR REIGN (100ML) — The Scent of Command" },
      {
        name: "description",
        content:
          "SARKAR REIGN, 100ML parfum. Bergamot, black pepper, cardamom, amber and vetiver. ₹1,499, incl. of all taxes.",
      },
      { property: "og:title", content: "SARKAR REIGN (100ML) — The Scent of Command" },
      {
        property: "og:description",
        content: "A fresh, spicy, woody parfum built for confidence. ₹1,499, incl. of all taxes.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const notes = [
  { name: "BERGAMOT", desc: "Fresh. Bright. Immediate." },
  { name: "CARDAMOM", desc: "Warm. Spiced. Distinctive." },
  { name: "AMBER", desc: "Deep. Smooth. Magnetic." },
  { name: "VETIVER", desc: "Earthy. Refined. Long-lasting." },
];

function Index() {
  const [selectedId, setSelectedId] = useState("reign");
  const [qty, setQty] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === selectedId) ?? products[0]!;

  const addToCart = () => {
    setCartCount((c) => c + qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[oklch(0.12_0_0)]">
          <img
            src={heroBanner}
            alt="SARKAR REIGN chess-king parfum bottle in red smoke"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0_0)]/90 via-[oklch(0.1_0_0)]/50 to-[oklch(0.1_0_0)]/95" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-[1400px] flex-col justify-end px-5 py-16 md:px-10 md:py-24">
            <p className="text-[10px] font-semibold tracking-[0.4em] text-[oklch(0.72_0.14_18)]">
              NEW LAUNCH — 2026
            </p>
            <h1 className="mt-5 text-[15vw] font-extrabold leading-[0.82] tracking-[-0.05em] text-[oklch(0.99_0_0)] md:text-[11rem]">
              REIGN
            </h1>
            <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-sm font-light leading-relaxed text-[oklch(0.85_0_0)] md:text-base">
                A chess-king cut in burgundy glass. Bergamot, black pepper, cardamom, amber and
                vetiver — the scent of command.
              </p>
              <a
                href="#buy"
                className="group inline-flex w-fit items-center gap-3 border border-[oklch(1_0_0)]/30 px-9 py-4 text-[11px] font-semibold tracking-[0.2em] text-[oklch(0.99_0_0)] backdrop-blur-sm transition-colors hover:bg-[oklch(0.99_0_0)] hover:text-[oklch(0.12_0_0)]"
              >
                SHOP REIGN — ₹1,499
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="overflow-hidden border-y border-border bg-foreground py-3">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center">
                {[
                  "25% OIL CONCENTRATION",
                  "IFRA CERTIFIED",
                  "LONG LASTING",
                  "CRUELTY FREE",
                  "FORMULATED IN FRANCE",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-8 text-[11px] font-semibold tracking-[0.3em] text-background"
                  >
                    {t} ✦
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT */}
        <section id="buy" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 md:px-10">
          <div className="grid grid-cols-1 gap-10 border-b border-border py-10 md:py-16 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-secondary lg:sticky lg:top-28">
              <img
                key={product.id}
                src={product.image}
                alt={`SARKAR ${product.name} ${product.size} parfum bottle`}
                width={1200}
                height={1400}
                className="h-full w-full animate-in fade-in object-contain p-6 duration-500 transition-transform hover:scale-[1.03] md:p-12"
              />
            </div>


            {/* Info */}
            <div className="flex flex-col justify-center lg:py-6">
              <h1 className="text-4xl font-extrabold tracking-[-0.02em] text-foreground md:text-6xl">
                {product.name}{" "}
                <span className="font-light text-muted-foreground">({product.size})</span>
              </h1>

              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-secondary px-3.5 py-1.5 text-[10px] font-medium tracking-[0.16em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
                {product.occasions}
              </p>

              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-foreground">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="text-3xl font-semibold text-foreground">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes</p>
              </div>

              {/* Variants */}
              <div className="mt-10">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-foreground">
                  CHOOSE VARIANTS
                </p>
                <div className="mt-4 grid grid-cols-4 gap-2 md:gap-3">
                  {products.map((p) => {
                    const active = p.id === selectedId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setSelectedId(p.id)}
                        className={`border p-1.5 text-left transition-colors md:p-2 ${
                          active
                            ? "border-foreground"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        <div className="aspect-square overflow-hidden bg-secondary">
                          <img
                            src={p.image}
                            alt={`SARKAR ${p.name}`}
                            loading="lazy"
                            width={800}
                            height={1000}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <p className="mt-2 text-[10px] font-semibold tracking-[0.1em] text-foreground md:text-[11px]">
                          {p.name}
                        </p>
                        <p className="text-[9px] tracking-[0.08em] text-muted-foreground md:text-[10px]">
                          ({p.size})
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Purchase */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <div className="flex items-center justify-between border border-border sm:w-36">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-3.5 text-foreground transition-opacity hover:opacity-50"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-sm font-semibold text-foreground">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="px-4 py-3.5 text-foreground transition-opacity hover:opacity-50"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={addToCart}
                  className="flex flex-1 items-center justify-center gap-2 bg-foreground px-8 py-4 text-xs font-semibold tracking-[0.18em] text-background transition-opacity hover:opacity-85 active:scale-[0.99]"
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> ADDED
                    </>
                  ) : (
                    "ADD TO CART"
                  )}
                </button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Ships within 24-36 hours of ordering.
              </p>

              {/* Offers */}
              <div className="mt-10 border-t border-border pt-8">
                <h2 className="text-sm font-semibold tracking-[0.16em] text-foreground">Offers</h2>
                <ul className="mt-4 space-y-3">
                  {[
                    ["SARKAR10", "10% off on your first order."],
                    ["FREESHIP", "Free shipping on prepaid orders."],
                  ].map(([code, text]) => (
                    <li key={code} className="flex items-start gap-3 border border-border p-4">
                      <Tag className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.4} />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-foreground">
                          {code}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <Reveal className="md:col-span-2">
              <img
                src={galleryDark}
                alt="SARKAR REIGN bottle in a deep burgundy environment"
                loading="lazy"
                width={1200}
                height={1500}
                className="h-[360px] w-full object-cover md:h-[620px]"
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              <Reveal>
                <img
                  src={galleryCap}
                  alt="Close-up of the chess-king cap of SARKAR REIGN"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[220px] w-full object-cover md:h-[302px]"
                />
              </Reveal>
              <Reveal>
                <img
                  src={galleryNotes}
                  alt="Bergamot, black pepper, cardamom, lavender, cedarwood and amber"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-[220px] w-full object-cover md:h-[302px]"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="border-y border-border">
          <Reveal>
            <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
              <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground md:text-7xl">
                THE SCENT OF <span className="text-accent-wine">COMMAND.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                REIGN opens with bright bergamot and black pepper, moves into aromatic cardamom and
                lavender, and settles into a warm base of amber, vetiver, cedarwood and musk.
              </p>
            </div>
          </Reveal>
        </section>

        {/* NOTES */}
        <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <h2 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">
            THE NOTES
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {notes.map((n) => (
              <Reveal key={n.name}>
                <div className="border-b border-border py-8 pr-6 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
                  <p className="text-xl font-bold tracking-[0.06em] text-foreground">{n.name}</p>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* COLLECTION */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <h2 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">
              CHOOSE YOUR SARKAR
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {collection.map((c) => (
                <div key={c.id} className="border border-border p-2">
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    {c.isNew && (
                      <span className="absolute left-0 top-0 z-10 bg-accent-wine px-2 py-1 text-[9px] font-semibold tracking-[0.16em] text-background">
                        NEW
                      </span>
                    )}
                    <img
                      src={c.image}
                      alt={`SARKAR ${c.name}`}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-foreground">
                    {c.name}
                  </p>
                  <p className="text-[10px] tracking-[0.08em] text-muted-foreground">(100ML)</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10 md:py-36">
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-7xl">
              RULE YOUR PRESENCE.
            </h2>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.34em] text-accent-wine">
              SARKAR REIGN
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedId("reign");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-10 bg-foreground px-12 py-4 text-xs font-semibold tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              SHOP REIGN
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-8 text-[11px] tracking-[0.14em] text-muted-foreground md:flex-row md:px-10">
          <span className="font-bold tracking-[0.4em] text-foreground">SARKAR</span>
          <span>© {new Date().getFullYear()} SARKAR. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}
