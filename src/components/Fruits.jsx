import Fruit from "./Fruit";
function Fruits() {
  const fruits = [
    {
      name: "Apple",
      emoji: "🍎",
      price: 120,
    },
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
      name: "Banana",
      emoji: "🍌",
      price: 180,
    },
  ];
  return (
    <div className="w-full flex justify-between gap-1.5 flex-wrap">
      {fruits.map((fruit) => (
        <Fruit emoji={fruit.emoji} name={fruit.name} price={fruit.price} />
      ))}
    </div>
  );
}
export default Fruits;
