type StockData = {
  name: string;
  price: string;
  volume: string;
  bg: number;
};

export default function StockRow({ name, price, volume, bg }: StockData) {
  const bgc = bg % 2 == 0 ? "bg-[#00000095]" : "bg-zinc-500/25";
  return (
    <div>
      <ul className={`grid w-full grid-cols-6 grid-rows-1 ${bgc}`}>
        <li className="w-fit border-r border-zinc-500/40 md:px-3">{name}</li>
        <li>{price}</li>
        <li>{volume}</li>
        <li>{bg}</li>
      </ul>
    </div>
  );
}
