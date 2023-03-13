import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import PaymentContext from './PaymentContext';

const PaymentState = props => {
  const [payment, setPayment] = useState({
    width: 0,
    height: 0,
    background: 'hidden',
  });
  const [cardDetails, setCardDetails] = useState([]);
  const [clickPayment, setClickPayment] = useState(false);
  const addPaymentCard = (paymentDetails,error) => {
    if (
      paymentDetails.cardNumber == '' &&
      paymentDetails.cvv == '' &&
      paymentDetails.Exp == ''
    ) {
      Alert.alert("Above filed cant be empty")
    }
    else if(error.cardError||error.ExpError||error.CvvError){
      Alert.alert("Please Enter valid")
    }
    else{
    console.log('paymentDetails', paymentDetails);
    setPayment({...payment, width: 0, height: 0}), setClickPayment(false);
    setCardDetails([...cardDetails, paymentDetails]);
    }
  };
  const cancelPaymentCard=()=>{
    setPayment({...payment, width: 0, height: 0}), setClickPayment(false);
  }
  return (
    <PaymentContext.Provider
      value={{
        addPaymentCard,
        cardDetails,
        payment,
        clickPayment,
        setPayment,
        setClickPayment,
        clickPayment,
        cancelPaymentCard
      }}>
      {props.children}
    </PaymentContext.Provider>
  );
};

export default PaymentState;
