// src/GooglePayButton.js
import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const GooglePayButtonComponent = () => {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4TXL2XNL4G',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  };

  const onLoadPaymentData = (paymentData) => {
    console.log('Payment Data:', paymentData);
    // Handle the payment data here, e.g., send it to your server
  };

  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={paymentRequest}
      onLoadPaymentData={onLoadPaymentData}
      buttonType="buy"
      buttonColor="black"
      buttonLocale="en"
    />
  );
};

export default GooglePayButtonComponent;