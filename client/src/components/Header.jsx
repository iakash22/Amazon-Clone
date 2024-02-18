import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex bg-[#131921] justify-between items-center z-[100] sticky top-0 h-[60px] text-white '>
            <img 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon" 
                className='object-contain mt-[18px] mx-5 cursor-pointer'
                width={100}
                height={50}
                onClick={() => navigate('/')}
            />

            <div className='flex flex-1 items-center rounded-[24px]'>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    className='h-[12px] p-[10px] border-none w-full text-black'
                    // onChange={e => console.log(e.target.value)}
                />
                <SearchIcon className='bg-[#cd9042] p-[5px] text-[#131921]' style={{height : '22px'}}/>
            </div>

            <div className='flex justify-evenly cursor-pointer'>
                <div className='flex flex-col mx-[10px] text-white'>
                    <span className='text-[10px]'>
                        Hello Guest
                    </span>
                    <span className='text-[13px] font-extrabold'>
                        Sign In
                    </span>
                </div >
                <div className='flex flex-col mx-[10px] text-white cursor-pointer'>
                    <span className='text-[10px]'>Return</span>
                    <span className='text-[13px] font-extrabold'>& Orders</span>
                </div>
                <div className='flex flex-col mx-[10px] text-white cursor-pointer'>
                    <span className='text-[10px]'>
                        Your
                    </span >
                    <span className='text-[13px] font-extrabold'>Prime</span>
                </div>
                <div className='flex items-center text-white cursor-pointer' >
                    <ShoppingBasketIcon onClick={() => navigate('/checkout')}/>
                    <span className=' mx-[10px]'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
