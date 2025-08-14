import { formatCLP } from "../utils/formatCLP";

const CardPizza = ({name, price, ingredients, img }) => {
  return (
    <div className="border border-gray-400 rounded-lg">
      <img className="w-full object-cover rounded-t-lg" src={img} alt={name} />
      <div>
        <h3 className="flex pl-6 py-3.5 text-lg font-medium">{name}</h3>
        <div className="border-y border-gray-400 overflow-hidden block py-3">
          <p className="font-light pb-2">Ingredientes:</p>
          <p className="text-sm text-gray-700 ">🍕 {ingredients.join(", ")}</p>
        </div>
        <p className="text-lg font-bold block py-3">Precio: ${formatCLP(price)}</p>
        <div className="flex justify-evenly pb-5">
          <button className="border border-black px-5 rounded-lg py-1">Ver más 👀 </button>
          <button className="bg-black text-white px-5 py-1 rounded-lg" >Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

