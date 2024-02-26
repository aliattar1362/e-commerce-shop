import { useState } from "react";
import { baseUrl } from "../data/data";
import useFetch from "../hook/useFetch";
import {Cart} from"../misc/type";

interface Props {
    cart: Cart[]
}

const Cart = ({cart} : Props) => {
    const {data, loading, error} = useFetch(baseUrl)

    const [basket, setBasket] = useState<Cart[]>([])

    return ( null );
}
 
export default Cart;