import React, { useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        let error;
        let paymentIntent;
        try {
            error, paymentIntent = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `if_required`
                },
            })
        } catch (error) {
            toast.error(
                `Error: ${error}`,
            )

            setIsProcessing(false);
        }

        if (error) {
            console.log(error)
            toast(
                `${error.error.message}`,
                { type: 'error' }
            )
        } else if (paymentIntent) {
            console.log(paymentIntent);
            toast.success(
                `Payment status: ${paymentIntent.payment_intent.status}`
            )
            setIsProcessing(false);
        } else {
            toast(
                'Unexpected state',
                { type: 'warning' }
                )
            setIsProcessing(false);
        }

        setIsProcessing(false)
    }

    return (
        <form className='mt-3' id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={isProcessing} id='submit' className='mt-5 button '>
                <span id='button-text'>
                    {isProcessing ? "Processing ..." : "Pay now"}
                </span>
            </button>
        </form>
    )
}

export default CheckoutForm
