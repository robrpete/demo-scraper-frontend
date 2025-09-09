export default function StockList() {
  const items = Array.from({ length: 150 }).map((_, i) => `test ${i + 1}`);
  const rows = [];
  const cols = 6;

  for (let i = 0; i < items.length; i += cols) {
    rows.push(items.slice(i, i + cols));
  }

  return (
    <div>
      <ul className="w-full">
        {rows.map((row, rowIndex) => (
          <li
            key={rowIndex}
            className={`grid grid-cols-6 border-b ${rowIndex === 0 ? "border-t" : ""}`}
          >
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className={`p-2 ${colIndex === 0 ? "border-l" : ""} ${colIndex === cols - 1 ? "border-r" : ""}`}
              >
                {item}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
