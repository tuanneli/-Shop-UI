import React, {FC} from 'react';
import {IProducts} from "../styles/IProducts";

interface IProductItem {
    product: IProducts
    showDescriptionHandler: (product: IProducts) => void
    addToCardHandler: (product: IProducts) => void
}

const ProductItem: FC<IProductItem> = ({product, showDescriptionHandler, addToCardHandler}) => {
    return (
        <div
            className={"border border-gray-300 bg-white rounded-2xl w-[22rem] h-[30rem] flex flex-col items-center p-3 m-3"}>
            <h1 className={'font-bold mb-2 flex-grow'}>{product?.title}</h1>
            <img className={"w-[200px] h-[200px]"} src={product?.image} alt={product?.title}/>
            <p className={"mt-3"}><b>{product?.price} $</b></p>
            <button onClick={() => showDescriptionHandler(product)}
                    className={"border-2 border-black rounded p-3 my-3 w-1/2 font-medium select-none"}>Show description
            </button>
            <hr className={'bg-black border-black border w-full my-3'}/>
            <p onClick={() => addToCardHandler(product)}
               className={"font-medium cursor-pointer active:opacity-60 select-none"}>Add to cart</p>
        </div>
    );
};

export default ProductItem;