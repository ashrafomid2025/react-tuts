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
      name: "Peach",
      emoji: "🍑",
      price: 90,
    },
    {
      name: "Kiwi",
      emoji: "🥝",
      price: 60,
    },
    {
      name: "Apple",
      emoji: "🍎",
      price: 220,
    },
    {
      name: "apricot",
      emoji: "🍏",
      price: 90,
    },
    {
      name: "Banana",
      emoji: "🍌",
      price: 180,
    },
  ];
  // filter based on the first letter of the fruits
  const newFruits = fruits.filter((item) => {
    return item.name.slice(0, 1).toUpperCase === "A";
  });

  return (
    <div className="w-full flex justify-between gap-1.5 flex-wrap">
      {newFruits.map((fruit) => (
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
