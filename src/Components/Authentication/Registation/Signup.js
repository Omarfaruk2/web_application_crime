import { Icon } from '@iconify/react'
import { signOut } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase.init'
import "./Signup.css"

const Signup = () => {
    const navigate = useNavigate('')
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data?.email, data?.password)

        const email = data?.email
        const totalprice = 20

        const send = {
            email, totalprice
        }



        const url = "https://limitless-inlet-11731.herokuapp.com/loginuser"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(send)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    data = {}
                    // navigate('/inventory')
                    console.log("result.insertedId", result.insertedId)
                }

            })

    }







    if (loading) {
        return <p>loading</p>
    }
    console.log(user)

    if (user) {
        navigate("/")
    }




    return (
        <div className=''>
            <div className="bg-no-repeat   min-h-screen bg-center  bg-cover" style={{ backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/7c3d21d9-d34b-4c4c-9ee9-c9f0e36364bf/BD-en-20220905-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`, backgroundColor: "#cccccc" }}>

                <div className='singup-head h-[100vh]'>
                    <div className='flex justify-between item-center pt-5 px-2'>
                        <div className="logo">
                            <img className='w-2/5' src="https://i.ibb.co/x83r36T/0868dcacc7c50ca2c7d35b27be81e5a9-removebg-preview-1.png" alt="logo" />
                        </div>

                        <div className="button-singout">
                            <button onClick={() => signOut(auth)} className='bg-red-600 text-white px-5 py-2'>Log out</button>
                            <button onClick={() => navigate("/login")} className='bg-red-600 text-white px-5 py-2'>Sign In</button>
                        </div>

                    </div>

                    <div className=" text-center text-neutral-content">
                        <div className="mt-20">

                            <span className='text-5xl  text-white font-bold'>Unlimited movies, TV <br /> shows, and more.</span> <br /> <br />
                            <span className='text-2xl font-bold text-white mt-10'>Watch anywhere. Cancel anytime.</span> <br /> <br />
                            <span className='text-xl text-white my-20'>Ready to watch? Enter your email to create or restart your membership.</span><br /> <br />
                            {/* ------------------------- */}

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className=''>

                                    <input type="email" placeholder="email" className="input inline input-bordered w-full max-w-xs input-color " {...register("email", { required: true })} />
                                    {errors.firstName?.type === 'required' && "First name is required"}
                                    <br />
                                    <input type="password" placeholder="password" className="input inline my-2 input-bordered w-full max-w-xs input-color " {...register("password", { required: true })} />
                                    {errors.firstName?.type === 'required' && "First name is required"}

                                    <br />
                                    <input type="submit" value="Get Start" className="input  bg-red-700 text-white font-bold input-bordered w-full max-w-xs" />


                                </div>


                            </form>




                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Signup
