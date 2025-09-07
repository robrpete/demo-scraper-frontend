import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const name = "ONE";
  const eman = "TWO";
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#020658] to-[#00010c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Web <span className="text-[hsl(280,100%,70%)]">scraper</span>
        </h1>
        <div className="">
          <ul className="grid grid-cols-5 grid-rows-1 gap-2">
            <li>
              <Link href={`/stock/${name}`}>one</Link>
            </li>
            <li>
              <Link href={`/stock/${eman}`}>two</Link>
            </li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
          </ul>
          <ul className="grid grid-cols-5 grid-rows-1 gap-2">
            <li>
              <Link href={`/stock/${name}`}>six</Link>
            </li>
            <li>
              <Link href={`/stock/${eman}`}>seven</Link>
            </li>
            <li>eight</li>
            <li>nine</li>
            <li>ten</li>
          </ul>
        </div>
        <div>table</div>
      </div>
      <div className="flex w-3/4 flex-col gap-2">
        <div className="text-2xl font-bold">STOCK NEWS</div>
        <div className="rounded-lg border border-zinc-500 p-2">
          <div className="flex items-start">
            <div className="h-24 w-24 shrink-0 bg-white">
              <Image src={"/la71f.png"} alt="la7" height={96} width={96} />
            </div>
            <div className="h-full w-4"></div>
            <div className="">
              <h4 className="font-semibold">Artcile ONE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi ex quos assumenda veniam repellat ipsum non expedita
                autem quas sequi.
              </p>
              <p className="text-zinc-500">Sept 7</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-500 p-2">
          <div className="flex items-start">
            <div className="h-24 w-24 shrink-0 bg-white">
              <Image src={"/la71f.png"} alt="la7" height={96} width={96} />
            </div>
            <div className="h-full w-4"></div>
            <div className="">
              <h4 className="font-semibold">Artcile ONE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi ex quos assumenda veniam repellat ipsum non expedita
                autem quas sequi.
              </p>
              <p className="text-zinc-500">Sept 7</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-500 p-2">
          <div className="flex items-start">
            <div className="h-24 w-24 shrink-0 bg-white">
              <Image src={"/la71f.png"} alt="la7" height={96} width={96} />
            </div>
            <div className="h-full w-4"></div>
            <div className="">
              <h4 className="font-semibold">Artcile ONE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi ex quos assumenda veniam repellat ipsum non expedita
                autem quas sequi.
              </p>
              <p className="text-zinc-500">Sept 7</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-500 p-2">
          <div className="flex items-start">
            <div className="h-24 w-24 shrink-0 bg-white">
              <Image src={"/la71f.png"} alt="la7" height={96} width={96} />
            </div>
            <div className="h-full w-4"></div>
            <div className="">
              <h4 className="font-semibold">Artcile ONE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi ex quos assumenda veniam repellat ipsum non expedita
                autem quas sequi.
              </p>
              <p className="text-zinc-500">Sept 7</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
