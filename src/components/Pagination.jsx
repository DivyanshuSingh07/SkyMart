export default function Pagination({

    total,
    itemsPerPage,

    currentPage,
    setCurrentPage

}) {

    const pages =
        Math.ceil(
            total /
            itemsPerPage
        );

    return (

        <div className="pagination">

            <button
                disabled={
                    currentPage === 1
                }
                onClick={() =>
                    setCurrentPage(
                        currentPage - 1
                    )
                }
            >
                ←
            </button>

            {
                [...Array(pages)]
                .map((_, index) => (

                    <button
                        key={index}
                        className={
                            currentPage ===
                            index + 1
                            ?
                            "active-page"
                            :
                            ""
                        }
                        onClick={() =>
                            setCurrentPage(
                                index + 1
                            )
                        }
                    >
                        {index + 1}
                    </button>
                ))
            }

            <button
                disabled={
                    currentPage === pages
                }
                onClick={() =>
                    setCurrentPage(
                        currentPage + 1
                    )
                }
            >
                →
            </button>

        </div>
    );
}


// export default function Pagination({
//     total,
//     itemsPerPage,
//     currentPage,
//     setCurrentPage
// }) {
//     const pages =
//         Math.ceil(
//             total /
//             itemsPerPage
//         );

//     return (
//         <div className="pagination">

//             <button
//                 disabled={
//                     currentPage === 1
//                 }
//                 onClick={() =>
//                     setCurrentPage(
//                         currentPage - 1
//                     )
//                 }
//             >
//                 Previous
//             </button>

//             {[
//                 ...Array(pages)
//             ].map((_, index) => (
//                 <button
//                     key={index}
//                     onClick={() =>
//                         setCurrentPage(
//                             index + 1
//                         )
//                     }
//                 >
//                     {index + 1}
//                 </button>
//             ))}

//             <button
//                 disabled={
//                     currentPage === pages
//                 }
//                 onClick={() =>
//                     setCurrentPage(
//                         currentPage + 1
//                     )
//                 }
//             >
//                 Next
//             </button>

//         </div>
//     );
// }