import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className='flex justify-center mx-auto max-w-[1500px]'>
            <div>
                <img
                    src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                    alt="Shop Kitchen favorites"
                    className='home-image'
                />

                <div className='flex z-[1] mx-5'>
                    <Product 
                        title={"The new startup Cpu"}
                        price={40000}
                        currency='₹'
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"}
                        star={3}
                    />
                    <Product 
                        title={"HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop"}
                        price={500.49}
                        currency='$'
                        image={"https://m.media-amazon.com/images/I/414nVwHlf9L._AC_UF226,226_FMjpg_.jpg"}
                        star={4}
                    />
                </div>
                <div className='flex z-[1] mx-5'>
                    <Product 
                        title={"Rupa Women Cotton Panty"}
                        price={269}
                        currency='₹'
                        image={"https://m.media-amazon.com/images/I/41aDihI5QEL._AC_SR400,600_.jpg"}
                        star={5}
                    />
                    <Product 
                        title={"Amazon Brand - Symbol"}
                        price={749}
                        currency='₹'
                        image={"https://m.media-amazon.com/images/I/71hwlMimtRL._AC_SR175,263_FMwebp_QL65_.jpg"}
                        star={2}
                    />
                    <Product 
                        title={"Monjolika Fashion \n Women's Banarasi Silk Blend Zari Woven Work With Tussles Saree and Embroidered Work Blouse Piece(37769 color)"}
                        price={1711}
                        currency='₹'
                        image={"https://m.media-amazon.com/images/I/71tgc9X-usL._AC_SR175,263_FMwebp_QL65_.jpg"}
                        star={1}
                    />
                </div>
                <div className='flex z-[1] mx-5'>
                    <Product 
                        title={" VAS COLLECTION 300 TC All Season Solid/Plain Lightweight Polar Fleece Single Bed Blanket (152 x 230 cm, Maroon & Red)"}
                        price={329}
                        currency='$'
                        image={"https://m.media-amazon.com/images/I/31but5t+UxL._AC_SR400,600_.jpg"}
                        star={3}
                    />
                    <Product 
                        title={"Shalimar Premium Eco - Friendly Garbage Bags Size 24 X 32 Inches (Large) 60 Bags (4 rolls) Dustbin Bag/Trash Bag - Black Color"}
                        price={9}
                        currency='$'
                        image={"https://m.media-amazon.com/images/I/41HUZxlF1xL._AC_SR400,600_.jpg"}
                        star={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
