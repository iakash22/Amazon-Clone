import React from 'react'
import { useSelector } from 'react-redux'

const Subtotal = () => {
    const {totalItems, items, totalAmount} = useSelector(state => state.cart);
    // console.log(totalItems);
    const f = new Intl.NumberFormat('en-us', {
        currency : "INR",
        style : "currency",
        // notation : "compact"
    })
    return (
        <div className=' flex flex-col gap-1 justify-between w-[300px] p-[20px] bg-[#f3f3f3] border border-[#dddddd] rounded'>
            <p>Subtotal ({totalItems} items): <strong>{f.format(totalAmount)}</strong></p>
            <small className='flex items-center capitalize'>
                <input 
                    type="checkbox" 
                    className='mr-[5px]'
                />
                this order contains gift
            </small>

            <button 
                type='button'
                className='bg-[#f0c14b] h-[30px] rounded-sm w-full border btn text-[#111] my-[10px]'
            >
                Proceed to checkout
            </button>
        </div>
    )
}

export default Subtotal
