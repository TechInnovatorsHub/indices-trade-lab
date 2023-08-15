# indices-trade-lab


## paypal error api
{
    "error": "invalid_token",
    "error_description": "Token signature verification failed"
}

## capture authorize payment
{
    "amount": {
        "value": "60",
        "currency_code": "USD"
    },
    "invoice_id": "{{$timestamp}}",
    "final_capture": true,
    "note_to_payer": "If the ordered color is not available, we will substitute with a different color free of charge.",
    "soft_descriptor": "Bob's Custom Sweaters"
}
