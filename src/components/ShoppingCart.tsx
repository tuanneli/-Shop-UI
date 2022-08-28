import React, {Dispatch} from 'react';
import {IProducts} from "../styles/IProducts";
import ShoppingCartItem from "./ShoppingCartItem";

interface IShoppingCart {
    shoppingCart: IProducts[] | undefined
    setShowShoppingCart: Dispatch<boolean>
    moreItemsHandler: (itemId: number) => void
    lessItemsHandler: (itemId: number) => void
}

const ShoppingCart = ({setShowShoppingCart, shoppingCart, moreItemsHandler, lessItemsHandler}: IShoppingCart) => {
    return (
        <>
            <div className={"fixed left-0 right-0 top-0 bottom-0 bg-black/50"}
                 onClick={() => setShowShoppingCart(false)}/>
            <div
                className={"h-full fixed sm:w-[420px] w-[240px] bg-white right-0 flex flex-col items-center overflow-y-scroll p-3"}>
                <h1 className={"font-bold text-2xl mt-3"}>Your shopping cart</h1>

                {shoppingCart?.map((shoppingCartItem) =>
                    <ShoppingCartItem moreItemsHandler={moreItemsHandler} lessItemsHandler={lessItemsHandler}
                                      key={shoppingCartItem.id}
                                      shoppingCartItem={shoppingCartItem}/>)}

                <hr className={'bg-black border-black border w-full my-3'}/>
                <p className={"font-bold self-start text-2xl"}>Total: {(shoppingCart?.reduce((acc, item) => {
                    return acc + (item.amount * item.price)
                }, 0))?.toFixed(2)} $</p>
            </div>

        </>
    );
};

export default ShoppingCart;