import Link from "next/link";
import Image from "next/image";

type StockLiProps = {
  name: string;
};

export default function StockLi({ name }: StockLiProps) {
  return (
    <li className="flex h-8 w-24 rounded-md border border-zinc-500 bg-[#00000075]">
      <Link
        href={`/stock/${name}`}
        className="flex w-full items-center justify-around"
      >
        {name}
        <Image
          src={"/triangle.png"}
          alt="ticker"
          height={12}
          width={12}
          className="shrink-0"
        />
      </Link>
    </li>
  );
}

{
  /* <ul className="grid grid-cols-3 grid-rows-2 sm:grid-cols-5 sm:grid-rows-1 sm:gap-2">
            {names.map((name, index) => (
              <StockLi key={index} name={name} />
            ))}
          </ul> */
}
