import {
    RiSearchLine
}
from "react-icons/ri";

export default function SearchBar({

    search,
    setSearch

}) {

    return (

        <section className="search-section">

            <div className="search-box">

                <RiSearchLine />

                <input
                    value={search}
                    onChange={(e)=>
                        setSearch(
                            e.target.value
                        )
                    }
                    placeholder="
                    Search products..."
                />

            </div>

        </section>
    );
}


// import { RiSearchLine } from "react-icons/ri";

// export default function SearchBar({
//     search,
//     setSearch
// }) {

//     return (

//         <section className="search-section">

//             <div className="search-box">

//                 <RiSearchLine />

//                 <input
//                     value={search}
//                     onChange={(e)=>
//                         setSearch(
//                             e.target.value
//                         )
//                     }
//                     placeholder="
//                     Search products..."
//                 />

//             </div>

//         </section>
//     );
// }


// import {
//     RiSearchLine
// } from "react-icons/ri";

// export default function SearchBar(){

//     return(

//         <section className="search-section">

//             <div className="search-box">

//                 <RiSearchLine />

//                 <input
//                     placeholder=
//                     "Search products..."
//                 />

//             </div>

//         </section>

//     );
// }