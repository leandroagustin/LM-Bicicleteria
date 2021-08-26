// import React from "react";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ItemDetailContainer = ({ match }) => {
//     let id = match.params.id;
//     const [products, SetProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)
//     console.log("que hay aca", products);
//     useEffect(() => {
//         axios(`https://fakestoreapi.com/products/1${id}`)
//             .then((res) => SetProducts(res.data))

//         setTimeout(() => {
//             setIsLoading(false);

//         }, 2000);
//     }, [id]);
//     return (

//         <div>
//             <ItemDetail key={e.id} Item={e} />
//         </div>

//     );
// };

// export default ItemDetailContainer;

import axios from "axios";
import React, { useEffect, useState } from "react";

//compoenentes
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from "../Loading/Loading";


const ItemDetailContainer = ({ match }) => {
    let id = match.params.id;

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setData(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [id]);

    return (
        <>
            {
                isLoading ? <Loading /> : <ItemDetail Item={data} />
            }

        </>
    );
};

export default ItemDetailContainer;