import { menu_list } from "../../data/assets";

const ExploreMenuComponents = ({ category, setCategory }) => {
  return (
    <div className="sticky top-[78px] z-10 mt-14 flex w-full items-center justify-between gap-2 overflow-x-scroll bg-white py-4 md:top-[90px] md:mt-24 md:justify-center md:gap-4 md:overflow-x-auto">
      {menu_list.map((item, i) => {
        return (
          <p
            onClick={() =>
              setCategory((prev) =>
                prev == item.menu_name ? "Special" : item.menu_name,
              )
            }
            key={i}
            className={`${category == item.menu_name ? "bg-merah text-white" : ""} cursor-pointer text-nowrap rounded-full px-4 py-2 text-sm transition-all hover:bg-merah hover:text-white md:px-6 md:py-2 md:text-base`}
          >
            {item.menu_name}
          </p>
        );
      })}
    </div>
  );
};

export default ExploreMenuComponents;
