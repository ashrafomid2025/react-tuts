function Animal(props) {
  return (
    <div className="py-5 px-9 bg-gray-500 text-white text-center rounded-md">
      <h1 className="p-4 bg-white rounded-md text-4xl">{props.emoji}</h1>
      <h1 className="font-bold text-3xl hover:blur-xs">{props.name}</h1>
      <h1>{props.price} AFG</h1>
    </div>
  );
}
export default Animal;
