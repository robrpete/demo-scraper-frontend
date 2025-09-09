import Image from "next/image";

type StockLiProps = {
  n: number;
};

export default function NewsArticle({ n }: StockLiProps) {
  return (
    <div className="flex items-start">
      <div className="h-24 w-24 shrink-0 bg-white">
        <Image src={"/la71f.png"} alt="la7" height={96} width={96} />
      </div>
      <div className="h-full w-4"></div>
      <div>
        <h4 className="font-semibold">Article {n}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ex
          quos assumenda veniam repellat ipsum non expedita autem quas sequi.
        </p>
        <p className="text-zinc-500">Sept 7</p>
      </div>
    </div>
  );
}
