import React from 'react'
import Subtotal from './Subtotal'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'

const Checkout = () => {
    return (
        <div className='flex flex-row justify-between bg-white p-[20px] h-[max-content]'>
            <CheckoutLeft />
            <CheckoutRight />
        </div>
    )
}

const CheckoutLeft = () => {
    const items = useSelector(state => state.cart.items);
    return (
        <div>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt="" 
                className='w-full mb-[10px]'
            />
            <div>
                <h2 className='text-3xl font-bold mr-[10px] p-[10px] border-b border-b-gray-200'>
                    Your Shopping Basket
                </h2>

                {/* BasketItems  */}
                {
                    items && items.length > 0 ? (
                        items.map((item) => (
                            <CartProduct item={item} key={item.id}/>
                        ))
                    ) : (
                        <div>Your cart is empty</div>
                    )
                }
            </div>
        </div>
    )
}

const CheckoutRight = () => {
    return(
        <div>
            <Subtotal />
            {/* <h2 className='text-3xl font-bold'>The sub total will go there</h2> */}

        </div>
    )
}

export default Checkout
