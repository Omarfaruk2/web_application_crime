import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CheckoutForm = ({ main }) => {
    const navigate = useNavigate()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("")

    const { totalprice, email, _id } = main

    useEffect(() => {

        fetch("https://limitless-inlet-11731.herokuapp.com//create-payment-intent", {
            method: "POST",
            body: JSON.stringify({ totalprice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalprice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })


        setCardError(error?.message || "")
        setSuccess("")
        setProcessing(true)
        // conform card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    },
                },
            },
        )

        if (intentError) {
            setCardError(error?.message)
            setProcessing(false)

        }
        else {
            setCardError("")
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess("Congragats ! Your Payment is  Completed")

            // paymet backend
            // store payment on database

            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }

            fetch(`https://limitless-inlet-11731.herokuapp.com/loginuser/${email}`, {
                method: "PATCH",
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })

        }

        navigate("/")

    }
    console.log(transactionId, "transactionId")

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={() => navigate("/")} className='btn btn-success btn-sm my-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }

            {
                success && <div className='text-green-500'>
                    <p>   {success}</p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }

        </>
    )
}

export default CheckoutForm