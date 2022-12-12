const Pagination = ({itemsPerPage, totalItems, currentPage, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="flex bg-gray-800 rounded-xl my-5 justify-center text-white">
            {
                pageNumbers.map((number) => (
                    <li key={number} className="p-2" style={{
                        background: number === currentPage? "rgb(255, 0, 0, 0.3)" : ""
                    }}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination