import { useLocation } from "react-router-dom";
import { Rating, Typography } from "@mui/material";
import { useState } from "react";
import { addToCart } from "../features/Cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast } from "react-toastify";

const Product = () => {
  const items  = useSelector((state) => state.shop.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const [liked, isLiked] = useState(false);
  const id = Number(location.pathname.split("/")[2]);
  const selectedItem = items.find(item => item.id === id);
  return (
    // Product details page
    <section
      className="flex pt-4 flex-col space-y-16 sm:space-y-0 items-center space-x-16 justify-center sm:flex-row bg-white"
      style={{
        minHeight: "400px"
      }}
    >
      {/* main image  */}
      <div
        style={{
          maxWidth: "400px"
        }}
      >
        <img
          src={selectedItem.img}
          alt=""
          className="rounded-xl"
          style={{
            width: "100%",
            height: "auto"
          }}
        />
      </div>
      {/* Description  */}
      <article
        style={{
          maxWidth: "350px"
        }}
      >
        <div className="flex justify-between px-5 mb-6">
          <button className="bg-gray-400 rounded-lg focus:outline-none px-6 text-lg p-2">
            {selectedItem.category}
          </button>
          <button className="focus:outline-none">
            <FavoriteBorderIcon className="text-red-400" />
          </button>
        </div>
        {/* Info section  */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center">{selectedItem.name}</h2>
          <Typography component="legend">{selectedItem.rating}</Typography>
          <Rating value={selectedItem.rating} precision={0.5} readOnly />
          <p className="py-3 opacity-50">{selectedItem.desc}</p>
          <div className="flex items-center justify-evenly w-full px-4 py-5">
            <h3 className="text-bold text-2xl">${selectedItem.price}</h3>
            <button
              className="py-2 px-3 text-red-400 border-2 border-red-500 focus:outline-none font-bold hover:bg-red-500 hover:text-white rounded-full"
            onClick={() => {dispatch(addToCart(selectedItem))}}>
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
