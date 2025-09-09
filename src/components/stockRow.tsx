type StockData = {
  name: string;
  price: string;
  volume: string;
};

export default function StockRow({ name, price, volume }: StockData) {
  return (
    <div>
      <ul className="grid w-full grid-cols-6 grid-rows-1 border-b border-zinc-500/50">
        <li className="w-fit border-r border-zinc-500/40 md:px-3">{name}</li>
        <li>{price}</li>
        <li>{volume}</li>
      </ul>
    </div>
  );
}
