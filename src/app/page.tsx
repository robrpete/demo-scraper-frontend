"use client";
import { useEffect, useRef, useState } from "react";
import StockLi from "~/components/stockBar";
import StockChart from "~/components/stockChart";
import NewsArticle from "~/components/newsArticle";
import StockRow from "~/components/stockRow";

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

        <div className="flex h-84 w-2/3 items-center justify-center rounded-xl border border-zinc-500 bg-[#00000095] pr-10">
          <div className="h-5/6 w-5/6">
            <StockChart />
          </div>
        </div>
        <div className="h-fit w-3/4 rounded-md border border-zinc-500 bg-[#00000045]">
          <ul className="grid w-full grid-cols-6 grid-rows-1 border border-zinc-500 pt-2 font-semibold">
            <li className="pl-2">Name</li>
            <li>Price</li>
            <li>Volume</li>
            <li>Var</li>
            <li>Var</li>
            <li>Var</li>
          </ul>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25,
          ].map((i) => (
            <StockRow key={i} name={"OPEN"} price={"12.99"} volume={"1M"} />
          ))}
        </div>
      </div>
      <div className="flex w-3/4 flex-col gap-2">
        <div className="text-2xl font-bold">STOCK NEWS</div>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="border-b border-zinc-500 pt-4 pb-4">
            <NewsArticle n={n} />
          </div>
        ))}
      </div>
    </main>
  );
}
