import Fruits from "./components/Fruits.jsx";
import Animals from "./components/Animals.jsx";
export default function Home() {
  const choice = "animals";
  return choice === "fruits" ? <Fruits /> : <Animals />;
}
