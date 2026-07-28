export default function Filters({

    category,
    setCategory,

    sortBy,
    setSortBy

}) {

    return (

        <div className="filters">

            <select
                value={category}
                onChange={(e) =>
                    setCategory(
                        e.target.value
                    )
                }
            >

                <option value="all">
                    All Categories
                </option>

                <option value="electronics">
                    Electronics
                </option>

                <option value="jewelery">
                    Jewelry
                </option>

                <option value="men's clothing">
                    Men's Clothing
                </option>

                <option value="women's clothing">
                    Women's Clothing
                </option>

            </select>

            <select
                value={sortBy}
                onChange={(e) =>
                    setSortBy(
                        e.target.value
                    )
                }
            >

                <option value="latest">
                    Latest
                </option>

                <option value="price-low">
                    Price Low
                </option>

                <option value="price-high">
                    Price High
                </option>

            </select>

        </div>
    );
}

// export default function Filters({
//     category,
//     setCategory,
//     sortBy,
//     setSortBy
// }) {
//     return (
//         <aside className="filters">

//             <h2>
//                 Filters
//             </h2>

//             <h3>
//                 Category
//             </h3>

//             <select
//                 value={category}
//                 onChange={(e) =>
//                     setCategory(
//                         e.target.value
//                     )
//                 }
//             >
//                 <option value="all">
//                     All
//                 </option>

//                 <option value="electronics">
//                     Electronics
//                 </option>

//                 <option value="jewelery">
//                     Jewelry
//                 </option>

//                 <option value="men's clothing">
//                     Men
//                 </option>

//                 <option value="women's clothing">
//                     Women
//                 </option>

//             </select>

//             <h3>
//                 Sort By
//             </h3>

//             <select
//                 value={sortBy}
//                 onChange={(e) =>
//                     setSortBy(
//                         e.target.value
//                     )
//                 }
//             >
//                 <option value="latest">
//                     Latest
//                 </option>

//                 <option value="price-low">
//                     Price Low
//                 </option>

//                 <option value="price-high">
//                     Price High
//                 </option>

//             </select>

//         </aside>
//     );
// }