import { news_list } from "../../data/assets";

const NewsComponents = () => {
  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {news_list.map((item, i) => {
          return (
            <div
              className="cursor-pointer overflow-hidden rounded-3xl transition-all hover:shadow-xl"
              key={i}
            >
              <img
                className="w-full rounded-3xl"
                src={item.image}
                alt={item.name}
              />
              <div className="mt-4 flex h-full flex-col items-center gap-4 p-4 font-poppins">
                <h2 className="text-2xl font-bold md:text-3xl">{item.name}</h2>
                <p className="font-poppins text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-20 flex justify-center">
        <a
          href=""
          className="rounded-full border-2 border-merah px-4 py-2 font-poppins text-base font-semibold text-hitam transition-all hover:bg-merah hover:text-white lg:px-4 lg:py-2"
        >
          More news
        </a>
      </div>
    </>
  );
};

export default NewsComponents;
