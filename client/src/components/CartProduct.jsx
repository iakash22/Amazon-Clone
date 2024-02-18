import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cart';

const CartProduct = ({ item }) => {
    const dispatch = useDispatch();
    console.log("Cart", item.id);
    return (
        <div className='flex my-5'>
            <img src={item.image} className='object-contain w-[180px] h-[180px]' />
            <div className='pl-5'>
                <p className='text-[17px] font-extrabold'>{item.title}</p>
                <p>
                    <small>{item.currency}</small>
                    <strong>{item.price}</strong>
                </p>
                <div>
                    {
                        Array(item.star).fill().map((_, index) => (
                            <span key={index}>⭐</span>
                        ))
                    }
                </div>
                <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className='bg-[#f0c14b] border border-solid border-t-[#a88734] border-r-[#9c7e31] border-b-[#846a29] mt-[10px] text-[#111]'
                >
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CartProduct
