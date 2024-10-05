import { useContext } from "react";
import { food_list } from "../../data/assets";
import { StoreContext } from "../../context/StoreContext";
import CartTotalComponents from "../../components/CartTotal/CartTotalComponents";

const CartPage = () => {
  const { cartItems, getTotalCartAmount, addToCart, removeFromCart } =
    useContext(StoreContext);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <>
      <section
        id="cart"
        className="animate__animated animate__fadeIn px-4 pb-20 pt-28 md:px-12 md:pt-32"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-hitam dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {food_list.map((item, i) => {
                  if (cartItems[item.id] > 0) {
                    return (
                      <tr
                        key={i}
                        className="border-b bg-white font-poppins dark:border-gray-700 dark:bg-gray-800"
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 whitespace-nowrap py-4 pr-36 font-medium text-gray-900 lg:px-6 dark:text-white"
                        >
                          <img
                            className="w-24 md:w-12"
                            src={item.image}
                            alt={item.name}
                          />
                          <div className="flex flex-col gap-2">
                            <p className="text-xs font-bold">{item.name}</p>
                          </div>
                        </th>
                        <td className="px-6 py-4 text-xs">
                          {rupiah(item.price).split(",00")}
                        </td>
                        <td className="px-6 py-4">
                          <button onClick={() => removeFromCart(item.id)}>
                            <i className="ri-subtract-line text-sm hover:text-hitam"></i>
                          </button>
                          <span className="mx-2 text-xs">
                            {cartItems[item.id]}
                          </span>
                          <button onClick={() => addToCart(item.id)}>
                            <i className="ri-add-line text-sm hover:text-hitam"></i>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-xs">
                          {rupiah(item.price * cartItems[item.id]).split(",00")}
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-36 px-2 md:mt-0 md:px-6 lg:px-14">
            <CartTotalComponents
              getTotalCartAmount={getTotalCartAmount()}
              rupiah={rupiah}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
