import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


import API from '../../../api';

const Payment = (props) => {
    const appearance = {
        theme: 'night',
        variables: {
            fontFamily: 'Sohne, system-ui, sans-serif',
            fontWeightNormal: '500',
            borderRadius: '8px',
            colorBackground: '#0A2540',
            colorPrimary: '#EFC078',
            accessibleColorOnColorPrimary: '#1A1B25',
            colorText: 'white',
            colorTextSecondary: 'white',
            colorTextPlaceholder: '#727F96',
            tabIconColor: 'white',
            logoColor: 'dark'
        },
        rules: {
            '.Input, .Block': {
                backgroundColor: 'transparent',
                border: '1.5px solid var(--colorPrimary)'
            }
        }
    };

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    // get stripe publishable key
    useEffect(() => {
        API.get('/fx/stripe_config/')
            .then(async (response) => {
                const pulishableKey = await response.data;

                setStripePromise(loadStripe(pulishableKey));
            })


        API.post('/fx/stripe_payment_intent/', {
            amount: props.amount,
            payment_token: localStorage.getItem('paymentToken'),
        })
            .then(async (r) => {
                const clientSecret = await r.data.client_secret;

                setClientSecret(clientSecret);
                // save payment token for use in updating
                const payment_token = r.data.payment_token
                if (payment_token) {
                    localStorage.setItem('paymentToken', r.data.payment_token);
                }
            })
    }, [props.amount]);


    return (
        <div>
            {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}

export default Payment;
