import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialData = {
    email : "",
    password : ""
};

const Login = () => {
    const [data, setData] = useState(initialData);
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setData(prev => ({...prev, [name] : value}));
    }
    const sumbitHandler = (event) => {
        event.preventDefault();
        console.log(data);
        setData(initialData);
    }
    return (
        <div className='bg-white h-screen flex flex-col items-center'>
            <Link to={'/'}>
                <img
                    className='my-5 object-contain w-[100px] mx-auto'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon"
                />
            </Link>

            <div className='w-[300px] h-fit mb-5 flex flex-col rounded-[5px] border border-solid border-[#d3d3d3] p-5'>
                <h1 className='text-[2em] font-medium mb-5'>Sign-in</h1>

                <form onSubmit={sumbitHandler}>
                    <h5 className='mb-[5px]'>Email</h5>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        value={data.email}
                        onChange={(e) => changeHandler(e)}
                        className='w-full h-[30px] mb-[10px] bg-white border-[1.5px] border-[#343434] rounded-sm'
                    />

                    <h5 className='mb-[5px]'>Password</h5>
                    <input
                        type="text"
                        name='password'
                        id='password'
                        value={data.password}
                        onChange={(e) => changeHandler(e)}
                        className='w-full h-[30px] mb-[10px] bg-white border-[1.5px] border-[#343434] rounded-sm'
                    />
                    <button
                        type="submit"
                        className='bg-[#f0c14b] mt-[10px] w-full h-[30px] border rounded-sm btn'
                    >
                        Sign In
                    </button>
                </form>

                <p className='mt-[15px] text-xs'>
                    By signing-in agree to the AMAZON FAKE CLONE
                    conditions of use & sale. Please see our privacy
                    notice, our cookies notice and our interest-based
                    ads notice.
                </p>


                <button
                    className='bg-[#a9a9a9] mt-[10px] w-full h-[30px] border rounded-sm'
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
