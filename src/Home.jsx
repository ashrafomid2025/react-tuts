import Fruits from "./components/Fruits.jsx";
// import Animals from "./components/Animals.jsx";
export default function Home() {
  const choice = "fruits";
  return choice === "fruits" ? <Fruits /> : <h1>Something went wrong</h1>;
}
