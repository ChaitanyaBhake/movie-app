import React from 'react';
import notFound from '/404.gif';

const Error404 = () => {
    return (
        <div className='w-screen h-full flex justify-center items-center bg-black'>
            <img className='h-[50%] object-cover' src={notFound} alt=""  />
        </div>
    );
};

export default Error404;
 