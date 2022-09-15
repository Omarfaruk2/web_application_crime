import { Icon } from '@iconify/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import "./Signup.css"
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom'

const GoSingup = () => {
    let navigate = useNavigate('')
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)


    let location = useLocation()
    let from = location.state?.from?.pathname || "/"

    const onSubmit = (data) => {
        console.log(data, 'data')
        signInWithEmailAndPassword(data?.email, data?.password)

    }



    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }
    if (loading) {
        return <p>Loading...</p>
    }


    if (user) {
        // navigate(from, { replace: true })
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

                    </div>

                    <div className=" text-neutral-content">
                        <div className="">
                            <div>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='signup-form'>
                                        <span className='text-2xl text-white font-bold'>Sing In</span> <br />

                                        <input type="text" placeholder="Email or Phone number" className="input input-bordered w-full input-color " {...register("name", { required: true })} />
                                        {errors.firstName?.type === 'required' && "First name is required"}
                                        <br />

                                        <input type="email" placeholder="email" className="input  input-bordered w-full max-w-xs input-color " {...register("email", { required: true })} />
                                        {errors.firstName?.type === 'required' && "First name is required"}
                                        <br />
                                        <input type="password" placeholder="password" className="input  input-bordered w-full max-w-xs input-color " {...register("password", { required: true })} />
                                        {errors.firstName?.type === 'required' && "First name is required"}

                                        <br />
                                        <input type="submit" value="Sign In" className="input  bg-red-700 text-white font-bold input-bordered w-full max-w-xs" />

                                        <br /><br />
                                        <div>
                                            <span className='new'>
                                                <span className='text-black-500'> New to Netflix?</span> <span onClick={() => navigate("/signup")} className='text-white underline pointer'> Sign up now.</span>
                                            </span>
                                        </div>

                                        <small>This page is protected by Google reCAPTCHA to ensure you're not a <span className="text-blue-600 underline"> Learn more.</span></small>


                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div >
    )
}

export default GoSingup