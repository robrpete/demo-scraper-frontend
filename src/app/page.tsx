"use client";
import { useEffect, useRef, useState } from "react";
import StockLi from "~/components/stockBar";
import StockChart from "~/components/stockChart";
import NewsArticle from "~/components/newsArticle";
import StockList from "~/components/stockList";

export default function HomePage() {
  const allNames = ["OPEN", "GOOGL", "NVDA", "GTHP", "APPL"];
  const listRef = useRef<HTMLUListElement>(null);
  const [listWidth, setListWidth] = useState(0);

  // measure one list’s width
  useEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.scrollWidth);
    }
  }, []);

  // Pick a speed (px/sec). Duration = listWidth / speed
  const speed = 20; // px per second
  const duration = listWidth > 0 ? listWidth / speed : 20;

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#020658] to-[#00010c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Web <span className="text-[hsl(253,100%,70%)]">scraper</span>
        </h1>

        {/* 🔥 ticker */}
        <div className="w-3/5 overflow-hidden whitespace-nowrap">
          <div
            className="animate-marquee flex"
            style={{
              animationDuration: `${duration}s`,
            }}
          >
            {/* first copy */}
            <ul ref={listRef} className="mr-2 flex gap-2">
              {allNames.map((name, i) => (
                <StockLi key={`a-${i}`} name={name} />
              ))}
            </ul>

            {/* second copy */}
            <ul className="mr-2 flex gap-2">
              {allNames.map((name, i) => (
                <StockLi key={`b-${i}`} name={name} />
              ))}
            </ul>

            {/* ✅ third copy ensures no gap at reset */}
            <ul className="mr-2 flex gap-2">
              {allNames.map((name, i) => (
                <StockLi key={`c-${i}`} name={name} />
              ))}
            </ul>
          </div>
        </div>

        <div className="h-64 w-2/4">
          <StockChart />
        </div>
        <div className="h-fit w-3/4 bg-black">
          <StockList />
        </div>
      </div>
      <div className="flex w-3/4 flex-col gap-2">
        <div className="text-2xl font-bold">STOCK NEWS</div>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="rounded-lg border border-zinc-500 p-2">
            <NewsArticle n={n} />
          </div>
        ))}
      </div>
    </main>
  );
}
