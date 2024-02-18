import React from 'react'

const Product = ({title, price, currency="$", star, image}) => {
    return (
        <div className='flex flex-col justify-end items-center bg-white m-[10px] p-[20px] w-full min-w-[100px] max-h-[400px] z-[1]'>
            <div className='h-[100px] mb-[15px]'>
                <p className=''>{title}</p>
                <p className='mt-[5px]'>
                    <small>{currency}</small>
                    <strong>{price}</strong>
                </p>
                <div>
                    {
                        Array(star).fill().map((_,index) => (
                            <span key={index}>⭐</span>
                        ))
                    }                   
                </div>
            </div>
            <img
                src={image}
                alt=""
                className='max-h-[200px] w-full object-contain mb-[15px]'
            />

            <button className='bg-[#f0c14b] border-[1px] border-solid p-1 border-t-[#a88734] border-r-[#9c7e31] border-b-[#846a29] text-[#111] mt-[10px]'>
                Add to Basket
            </button>
        </div>
    )
}

export default Product
