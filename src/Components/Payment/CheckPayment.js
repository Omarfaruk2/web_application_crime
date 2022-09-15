import React, { useEffect, useState } from 'react'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from '../../Hooks/Loading'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'

// import CheckoutForm from './CheckoutForm'






const stripePromise = loadStripe('pk_test_51LeXLzL5n1xpiLWTlF6rrENWjtWxLkXSWYutMlZtdJlooW1pKVoS2CgwImrGfCIdOlOCPchsTQYxPr8NRWiq6VHi00JEeo3nmY')


const CheckPayment = () => {

    const [items, setItems] = useState({})
    const [user, loading,] = useAuthState(auth)

    useEffect(() => {
        const url = `https://limitless-inlet-11731.herokuapp.com/loginuser/${user?.email}`
        // const url = `https://limitless-inlet-11731.herokuapp.com/loginuser/`

        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [user?.email])

    if (loading) {
        return <Loading></Loading>
    }

    const main = items[0]

    const { email, totalprice } = main || {}

    console.log(email, totalprice, "hello")



    return (
        <div>
            <div className=''>
                <div className="bg-no-repeat   min-h-screen bg-center  bg-cover" style={{ backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/7c3d21d9-d34b-4c4c-9ee9-c9f0e36364bf/BD-en-20220905-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`, backgroundColor: "#cccccc" }}>

                    <div className='singup-head h-[100vh]'>
                        <div className='flex justify-between item-center pt-5 px-2'>
                            <div className="logo">
                                <img className='w-2/5' src="https://i.ibb.co/x83r36T/0868dcacc7c50ca2c7d35b27be81e5a9-removebg-preview-1.png" alt="logo" />
                            </div>
                        </div>



                        <div>
                            <h1 className='text-center text-4xl'>

                                <span className='text-white'>  Pay </span>
                                <span className='text-red-600'>$20</span>
                                <span className='text-white'>/month  For Subscripttions</span>
                                <h2 className='text-5xl text-white'>Loeel</h2>
                            </h1>




                            <div className=''>
                                <div className="card w-50 max-w-md mx-auto  bg-base-100 shadow-xl my-12">
                                    <div className="card-body">
                                        <p>Hello, <span className='text-primary text-2xl'>{email}</span></p>

                                        <p>Best Wish For you .........</p>
                                        <p className='font-bold'>Please Pay: ${totalprice}</p>
                                    </div>
                                </div>

                                <div className="card w-50 mx-auto max-w-md shadow-2xl bg-base-100">

                                    <div className="card-body">

                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm
                                                main={main}
                                            />
                                        </Elements>

                                    </div>

                                </div>

                            </div>







                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}

export default CheckPayment