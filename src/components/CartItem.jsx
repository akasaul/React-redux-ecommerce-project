import CloseIcon from "@mui/icons-material/Close";
const CartItem = ({ item }) => {
  return (
    <section className="p-2 flex  sm:flex-row bg-white items-center sm:items-stretch justify-evenly space-x-6">
      <div className="w-32">
        <img
          className="rounded-xl"
          style={{
            maxWidth: "100%",
            height: "auto",
            minWidth: "80px"
          }}
          src={item.img[0]}   alt=""
        />
      </div>
      <div>
        <h2 className="font-bold sm:text-3xl text-lg">Men Gucc Luiv Carpet</h2>
        <h3>{item.category}</h3>
        <div className="flex">
          <button className="bg-gray-300 font-bold px-2 py-1 m-2 focus:outline-none rounded-full">
            +
          </button>
          <button>{item.count}</button>
          <button className="bg-gray-300 font-bold px-2 py-1 m-2 focus:outline-none rounded-full">
            -
          </button>
        </div>
      </div>
      <div>
        <h3 className="sm:text-2xl text-lg font-bold mb-5">${item.price}</h3>
        <button className="p-2 bg-red-500 text-white rounded-2xl">
          Remove
        </button>
      </div>
    </section>
  );
};

export default CartItem;
