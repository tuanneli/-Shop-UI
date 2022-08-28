import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchProducts} from "./api/API";
import {IProducts} from "./styles/IProducts";
import ProductItem from "./components/ProductItem";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import {AxiosError} from "axios";
import Error from "./components/Error";
import DropdownMenu from "./components/DropdownMenu";

function App() {

    const [products, setProducts] = useState<IProducts[]>([])
    const [descriptionProduct, setDescriptionProduct] = useState<IProducts>()
    const [showDescription, setShowDescription] = useState<boolean>(false)
    const [showShoppingCart, setShowShoppingCart] = useState<boolean>(false)
    const [showDropdownMenu, setShowDropdownMenu] = useState<boolean>(false)
    const [shoppingCart, setShoppingCart] = useState<IProducts[]>([])
    const [error, setError] = useState<AxiosError>()
    const [amountItemsInCart, setAmountItemsInCart] = useState<number>(0)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            setProducts(await fetchProducts())
        } catch (e: any) {
            const Error: AxiosError = e
            setError(Error)
        }
    }

    const showDescriptionHandler = (product: IProducts) => {
        setDescriptionProduct(product)
        setShowDescription(true)
    }

    const addToCardHandler = (product: IProducts) => {
        setAmountItemsInCart(prev => prev + 1)
        setShoppingCart(prev => {
            const isInCart = prev.find(item => item.id === product.id)

            if (isInCart) {
                return prev.map(item =>
                    item.id === product.id ? {...item, amount: item.amount + 1} : item)
            }
            return [...prev, {...product, amount: 1}]
        });
    };


    const lessItemsHandler = (itemId: number) => {
        setAmountItemsInCart(prev => prev - 1)
        setShoppingCart(prev => (
            prev.reduce((ack, item) => {
                if (item.id === itemId) {
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}]
                } else {
                    return [...ack, item]
                }
            }, [] as IProducts[])
        ))
    }

    console.log(shoppingCart)

    const moreItemsHandler = (itemId: number) => {
        setAmountItemsInCart(prev => prev + 1)
        setShoppingCart(prev => {
            return prev.map(item => item.id === itemId ? {...item, amount: item.amount + 1} : item)
        })
    }

    console.log(products)

    const [categoryName, setCategoryName] = useState<string>('all')

    return (
        <div className="w-full min-h-[100vh] h-full bg-gray-200 flex flex-wrap justify-center">
            <Navbar setShowDropdownMenu={setShowDropdownMenu}
                    setShowShoppingCart={setShowShoppingCart}
                    number={amountItemsInCart}/>
            {error && <Error error={error}/>}
            {showDropdownMenu &&
              <DropdownMenu setCategoryName={setCategoryName} setShowDropdownMenu={setShowDropdownMenu}/>}
            <div className={"max-w-screen-2xl w-full flex flex-wrap justify-center mt-14"}>
                {products.map((product) => (
                    categoryName === 'all' ?
                        <ProductItem key={product.id}
                                     product={product}
                                     addToCardHandler={addToCardHandler}
                                     showDescriptionHandler={showDescriptionHandler}/> : categoryName === product.category
                            ? <ProductItem key={product.id}
                                           product={product}
                                           addToCardHandler={addToCardHandler}
                                           showDescriptionHandler={showDescriptionHandler}/> : null
                ))}
            </div>
            {
                showShoppingCart && <ShoppingCart lessItemsHandler={lessItemsHandler}
                                                  moreItemsHandler={moreItemsHandler}
                                                  shoppingCart={shoppingCart}
                                                  setShowShoppingCart={setShowShoppingCart}/>
            }
            {showDescription &&
              <Description setShowDescription={setShowDescription} descriptionProduct={descriptionProduct}/>}
        </div>
    );
}

export default App;
