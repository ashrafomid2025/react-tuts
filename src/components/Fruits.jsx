import Fruit from "./Fruit";
function Fruits() {
  const fruits = [
    {
      name: "Mango",
      emoji: "🥭",
      price: 100,
    },
    {
      name: "Pear",
      emoji: "🍐",
      price: 50,
    },
    {
      name: "Kiwi",
      emoji: "🥝",
      price: 200,
    },
    {
      name: "Apple",
      emoji: "🍎",
      price: 220,
    },
  ];
  const minPrice = [];
  for (let item of fruits) {
    if (item.price === 100 || item.price === 200) {
      minPrice.push(item);
    }
  }
  return (
    <div className="w-full flex justify-between gap-1.5 flex-wrap">
      {minPrice.map((fruit) => (
        <Fruit
          key={fruit.emoji}
          emoji={fruit.emoji}
          name={fruit.name}
          price={fruit.price}
        />
      ))}
    </div>
  );
}
export default Fruits;
