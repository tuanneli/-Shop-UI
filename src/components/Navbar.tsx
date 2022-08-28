import React, {Dispatch} from 'react';
import {LocalGroceryStore, Menu} from "@mui/icons-material";

interface INavbar {
    setShowShoppingCart: Dispatch<boolean>
    setShowDropdownMenu: Dispatch<boolean>
    number: number
}

const Navbar = ({setShowShoppingCart, setShowDropdownMenu, number}: INavbar) => {
    return (
        <div className={"bg-gray-900 max-w-screen-2xl w-full h-12 flex justify-between items-center fixed px-3"}>
            <div className={"flex items-center"}>
                <span className={"text-white text-2xl h-full self-center"}>IShop</span>
                <Menu className={"text-white ml-3 cursor-pointer"}
                      onClick={() => setShowDropdownMenu(true)}
                      style={{fontSize: "2.25rem"}}/>
            </div>
            <span className={"flex"}>

                       <LocalGroceryStore
                           onClick={() => setShowShoppingCart(true)}
                           className={"text-white cursor-pointer"}
                           style={{fontSize: "2rem"}}/>
                {number > 0 && <p
                  className={"absolute top-1 right-3 bg-red-600 text-white text-xs rounded-full pl-1 min-w-[15px] pr-1 h-4"}>{number}</p>}

                 </span>
        </div>
    );
};

export default Navbar;