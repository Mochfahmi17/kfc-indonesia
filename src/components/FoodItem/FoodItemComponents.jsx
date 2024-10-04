import { useContext } from "react";
import { food_list } from "../../data/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItemComponents = ({ category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <div className="mt-8 grid grid-cols-1 justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {food_list.map((item, i) => {
        if (category == item.category) {
          return (
            <div
              key={i}
              className="animate__animated animate__fadeIn group flex w-full flex-col justify-between overflow-hidden rounded-3xl transition-all hover:shadow-md"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-full object-cover duration-300 ease-in group-hover:scale-105"
                />
              </div>
              <div className="flex h-full flex-col justify-between gap-4 overflow-hidden px-6 py-2 pb-6">
                <h3 className="text-3xl md:text-base lg:text-xl">
                  {item.name}
                </h3>
                <p className="overflow-hidden overflow-ellipsis font-poppins text-base md:text-xs">
                  {item.description}
                </p>
                <div className="price mt-4 flex items-center justify-between">
                  <h3 className="text-xl md:text-base lg:text-xl">
                    {rupiah(item.price).split(",00")}
                  </h3>
                  {!cartItems[item.id] ? (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="rounded-full border-2 border-merah px-8 py-2 font-poppins text-xl font-semibold text-hitam transition-all hover:bg-merah hover:text-white md:px-3 md:py-1 md:text-sm lg:px-6"
                    >
                      Order
                    </button>
                  ) : (
                    <div className="flex items-center gap-4 md:gap-2">
                      <button onClick={() => removeFromCart(item.id)}>
                        <i className="ri-subtract-line rounded-full border-2 border-merah text-4xl transition-all hover:bg-merah hover:text-white md:text-2xl"></i>
                      </button>
                      <p className="text-xl">{cartItems[item.id]}</p>
                      <button onClick={() => addToCart(item.id)}>
                        <i className="ri-add-line rounded-full border-2 border-merah text-4xl transition-all hover:bg-merah hover:text-white md:text-2xl"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FoodItemComponents;
