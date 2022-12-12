import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import { ShopSlice } from "../features/ShopItems/ShopSlice";
import { useState, useEffect } from "react"; 
import Pagination from "../components/Pagination";

const Shop = () => {
    const shopData = useSelector((state) => state.shop.value);
    const [items, setItems] = useState(shopData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section>
      <CardList list={currentItems} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} currentPage={currentPage} paginate={paginate} />
    </section>
  );
};

export default Shop;
