import React, {Dispatch, FC} from 'react';
import {IProducts} from "../styles/IProducts";

interface IDescription {
    descriptionProduct: IProducts | undefined
    setShowDescription: Dispatch<boolean>
}

const Description: FC<IDescription> = ({descriptionProduct, setShowDescription}) => {
    return (
        <>
            <div className={"fixed left-0 right-0 top-0 bottom-0 bg-black/50"}
                 onClick={() => setShowDescription(false)}/>
            <div
                className={"md:w-[400px] w-[240px] md:h-fit h-[600px] bg-white fixed overflow-y-auto rounded-2xl top-1/2 -translate-y-1/2"}>
                <div
                    className={"flex flex-col items-center p-3 m-3"}>
                    <h1 className={'font-bold mb-2 flex-grow'}>{descriptionProduct?.title}</h1>
                    <img className={"w-[200px] h-[200px]"} src={descriptionProduct?.image}
                         alt={descriptionProduct?.title}/>
                    <p className={"w-full left-0 font-bold mt-2"}>Rating: {descriptionProduct?.rating.rate}</p>
                    <p className={"w-full left-0 font-bold mt-2"}>Amount: {descriptionProduct?.rating.count}</p>
                    <hr className={'bg-black border-black border w-full my-3'}/>
                    <p>{descriptionProduct?.description}</p>
                </div>
            </div>
        </>
    );
};

export default Description;