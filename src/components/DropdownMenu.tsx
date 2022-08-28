import React, {Dispatch} from 'react';

interface IDropdownMenu {
    setShowDropdownMenu: Dispatch<boolean>
    setCategoryName: Dispatch<string>
}

const DropdownMenu = ({setShowDropdownMenu, setCategoryName}: IDropdownMenu) => {
    return (
        <>
            <div className={"fixed left-0 right-0 top-0 bottom-0 bg-black/0"}
                 onClick={() => setShowDropdownMenu(false)}
            />
            <div className={"bg-gray-100 w-60 fixed mt-12 left-2 rounded-md border shadow-md"}>
                <p className={"p-2 flex justify-center"}>Categories</p>
                <hr/>
                <div className={"p-2 cursor-pointer select-none"}>
                    <p className={"pl-1 hover:bg-blue-300 rounded active:opacity-70"}
                       onClick={() => setCategoryName('all')}>All</p>
                    <p className={"pl-1 hover:bg-blue-300 rounded active:opacity-70"}
                       onClick={() => setCategoryName("men's clothing")}>Men's clothing</p>
                    <p className={"pl-1 hover:bg-blue-300 rounded active:opacity-70"}
                       onClick={() => setCategoryName("jewelery")}>Jewelries</p>
                    <p className={"pl-1 hover:bg-blue-300 rounded active:opacity-70"}
                       onClick={() => setCategoryName("electronics")}>Electronics</p>
                    <p className={"pl-1 hover:bg-blue-300 rounded active:opacity-70"}
                       onClick={() => setCategoryName("women's clothing")}>Women's clothing</p>
                </div>
            </div>
        </>
    );
};

export default DropdownMenu;