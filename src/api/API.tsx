import React from 'react';
import axios from "axios";
import {IProducts} from "../styles/IProducts";

export const fetchProducts = async () => {
    const result = await axios.get<IProducts[]>('https://fakestoreapi.com/products')
    return result.data;
}