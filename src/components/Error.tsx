import React, {FC} from 'react';
import {AxiosError} from "axios";

interface IError {
    error: AxiosError
}

const Error: FC<IError> = ({error}) => {
    return (
        <div
            className={'w-full h-[100vh] flex justify-center items-center text-red-600 text-5xl font-bold'}>{error?.message}
        </div>
    );
};

export default Error;