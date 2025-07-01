import Fruit from "./Fruit";
function Animals() {
  const animals = [
    {
      name: "Cat",
      emoji: "😹",
      price: 500,
    },
    {
      name: "Dog",
      emoji: "🐶",
      price: 12000,
    },
    {
      name: "Rabbit",
      emoji: "🐰",
      price: 200,
    },
    {
      name: "Panda",
      emoji: "🐼",
      price: 1800,
    },
  ];
  return (
    <div className="w-full flex justify-between gap-1.5 flex-wrap">
      {animals.map((fruit) => (
        <Fruit emoji={fruit.emoji} name={fruit.name} price={fruit.price} />
      ))}
    </div>
  );
}
export default Animals;
