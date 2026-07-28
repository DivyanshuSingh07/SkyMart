import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import API from "../services/api";

const ProductContext =
createContext();

export function ProductProvider({
    children
}){

    const [products,
    setProducts] =
    useState([]);

    const [loading,
    setLoading] =
    useState(true);

    useEffect(()=>{

        async function fetchProducts(){

            try{

                const response =
                await API.get(
                    "/products"
                );

                setProducts(
                    response.data
                );
            }

            catch(error){

                console.log(
                    error
                );
            }

            finally{

                setLoading(
                    false
                );
            }
        }

        fetchProducts();

    },[]);

    return(

        <ProductContext.Provider
        value={{
            products,
            loading
        }}
        >

            {children}

        </ProductContext.Provider>
    );
}

export function useProducts(){

    return useContext(
        ProductContext
    );
}