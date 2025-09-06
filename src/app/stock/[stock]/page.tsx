export default async function StockPage({
  params,
}: {
  params: Promise<{ stock: string }>;
}) {
  const { stock } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Ticker: <span className="text-[hsl(280,100%,70%)]">{stock}</span>
        </h1>
        <div>
          list
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
