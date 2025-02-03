import React, { useEffect } from 'react';

const GooglePay = () => {
  useEffect(() => {
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

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });

    paymentsClient
      .isReadyToPay(paymentRequest)
      .then((response) => {
        if (response.result) {
          const button = paymentsClient.createButton({
            onClick: () => {
              paymentsClient
                .loadPaymentData(paymentRequest)
                .then((paymentData) => {
                  console.log('Payment Data:', paymentData);
                  // Handle payment data here
                })
                .catch((err) => {
                  console.error('Error loading payment data:', err);
                });
            },
          });
          document.getElementById('google-pay-button').appendChild(button);
        }
      })
      .catch((err) => {
        console.error('Error checking readiness to pay:', err);
      });
  }, []);

  return <div id="google-pay-button"></div>;
};

export default GooglePay;