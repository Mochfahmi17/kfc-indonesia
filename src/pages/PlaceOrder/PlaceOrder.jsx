import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <div className="animate__animated animate__fadeIn px-0 pb-28 pt-20 font-poppins md:px-12 md:pb-32 md:pt-36">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <form
          action=""
          className="flex flex-col gap-4 px-8 pt-14 md:px-4 md:pt-0 lg:px-8"
        >
          <h2 className="mb-10 text-2xl font-bold">Delivery information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="fitst">
                First name
              </label>
              <input
                type="text"
                id="first"
                className="rounded-md border-2 px-4 py-2"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="last">
                Last name
              </label>
              <input
                type="text"
                id="last"
                className="rounded-md border-2 px-4 py-2"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="address">
                Street address
              </label>
              <input
                type="text"
                id="address"
                className="rounded-md border-2 px-4 py-2"
                placeholder="Address"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                className="rounded-md border-2 px-4 py-2"
                placeholder="City"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                className="rounded-md border-2 px-4 py-2"
                placeholder="State"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="code">
                Zip code
              </label>
              <input
                type="text"
                inputMode="number"
                id="code"
                className="rounded-md border-2 px-4 py-2"
                placeholder="Code"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="rounded-md border-2 px-4 py-2"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </form>
        <div className="-mt-4 flex flex-col gap-7 px-8 pt-24 font-poppins md:px-4 md:pt-0 lg:px-8">
          <h2 className="border-b-2 border-slate-300 py-4 text-2xl font-semibold">
            Cart totals
          </h2>
          <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
            <p>Subtotal</p>
            <p>{rupiah(getTotalCartAmount()).split(",00")}</p>
          </div>
          <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
            <p>Delivery fee</p>
            <p>{rupiah(getTotalCartAmount() == 0 ? 0 : 15000).split(",00")}</p>
          </div>
          <div className="flex justify-between border-b-2 border-slate-300 py-4 text-sm md:text-base">
            <p>Total</p>
            <p>
              {rupiah(
                getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 15000,
              ).split(",00")}
            </p>
          </div>
          <button className="rounded-md bg-hitam py-4 text-sm font-semibold uppercase text-white md:text-base">
            Pay{" "}
            {getTotalCartAmount() == 0
              ? ""
              : rupiah(getTotalCartAmount() + 15000).split(",00")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
