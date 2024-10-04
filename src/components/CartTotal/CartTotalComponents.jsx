import { useNavigate } from "react-router-dom";

const CartTotalComponents = ({ getTotalCartAmount, rupiah }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-8 font-poppins">
        <h2 className="border-b-2 border-slate-300 py-4 text-2xl font-semibold">
          Cart totals
        </h2>
        <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
          <p>Subtotal</p>
          <p>{rupiah(getTotalCartAmount).split(",00")}</p>
        </div>
        <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
          <p>Delivery fee</p>
          <p>{rupiah(getTotalCartAmount == 0 ? 0 : 15000).split(",00")}</p>
        </div>
        <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
          <p>Total</p>
          <p>
            {rupiah(
              getTotalCartAmount == 0 ? 0 : getTotalCartAmount + 15000,
            ).split(",00")}
          </p>
        </div>
        <button
          onClick={() => navigate("/order")}
          className="bg-hitam py-4 text-sm uppercase text-white md:text-base"
        >
          Proceed to checkout
        </button>
      </div>
    </>
  );
};

export default CartTotalComponents;
