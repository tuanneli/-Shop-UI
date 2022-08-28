import React, {useEffect, useState} from 'react';
import {IProducts} from "../styles/IProducts";

interface IShoppingCartItem {
    shoppingCartItem: IProducts
}

interface IItemsInCart {
    shoppingCartItem: IProducts
    moreItemsHandler: (itemId: number) => void
    lessItemsHandler: (itemId: number) => void
}


const ShoppingCartItem = ({shoppingCartItem, moreItemsHandler, lessItemsHandler}: IItemsInCart) => {


    return (
        <div className={"flex mt-3"}>
            <div className={"basis-4/5"}>
                <p className={"mb-2"}><b>{shoppingCartItem.title}</b></p>
                <div className={"flex"}>

                    <div
                        className={'basis-2/6 flex flex-col'}>
                        <div className={"pb-2 h-6"}>Price:</div>
                        <div className={"pb-2 h-8 mb-6 md:mb-0"}>{shoppingCartItem.price}$</div>
                        <div
                            className={"bg-gray-400 text-2xl cursor-pointer select-none w-full w-16 h-16 justify-center flex items-center"}
                            onClick={() => lessItemsHandler(shoppingCartItem.id)}
                        >-
                        </div>
                    </div>

                    <div className={'basis-2/6 px-3 flex items-end pb-5 pl-7'}>
                        {shoppingCartItem.amount}
                    </div>

                    <div
                        className={'basis-2/6 flex flex-col'}>
                        <div className={"md:h-6 h-12 pb-2"}>Total
                            price:
                        </div>
                        <div className={"h-8 pb-2"}>{(shoppingCartItem.price * shoppingCartItem.amount).toFixed(2)}$
                        </div>
                        <div
                            className={"bg-gray-400 text-2xl cursor-pointer select-none w-full w-16 h-16 justify-center flex items-center"}
                            onClick={() => moreItemsHandler(shoppingCartItem.id)}
                        >+
                        </div>
                    </div>

                </div>
            </div>
            <img src={shoppingCartItem.image} alt="here will be image"
                 className={"w-1/4 object-contain h-48 ml-2"}/>
        </div>
    );
};

export default ShoppingCartItem;