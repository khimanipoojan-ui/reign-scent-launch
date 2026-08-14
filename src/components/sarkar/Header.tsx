import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const links = ["SHOP", "COLLECTION", "THE NOTES", "ABOUT", "CONTACT"];

export function Header({ cartCount }: { cartCount: number }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-ml-2 p-2 text-foreground transition-opacity hover:opacity-60"
        >
          {open ? <Menu className="h-5 w-5 rotate-90" /> : <Menu className="h-5 w-5" />}
        </button>

        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-sm font-bold tracking-[0.42em] text-foreground md:text-base md:tracking-[0.55em]"
        >
          SARKAR
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            type="button"
            className="bg-foreground px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-background transition-opacity hover:opacity-80 md:px-7 md:py-3 md:text-xs"
          >
            Buy Now
          </button>
          <button
            type="button"
            aria-label={`Cart, ${cartCount} items`}
            className="relative p-1 text-foreground transition-opacity hover:opacity-60"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.4} />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1 min-w-4 bg-foreground px-1 text-center text-[10px] font-semibold leading-4 text-background">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background">
          <div className="mx-auto max-w-[1400px] px-5 py-6 md:px-10">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="mb-4 text-muted-foreground transition-opacity hover:opacity-60"
            >
              <X className="h-4 w-4" />
            </button>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="/"
                    className="text-xl font-semibold tracking-[0.08em] text-foreground transition-opacity hover:opacity-60 md:text-2xl"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
