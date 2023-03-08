import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import React, { useContext, useState } from 'react';
import PaymentContext from '../Context/Payment/PaymentContext';

const PaymentMethod = () => {
    const [paymentDetails,setPaymentDetails]=useState({
        name:"",
        cardNumber:"",
        cvv:"",
        Exp:''
    })
    const {addPaymentCard,payment}=useContext(PaymentContext)
    const [error,setError]=useState({
        cardError:false,
        NameError:false,
        ExpError:false,
        CvvError:false
    })
    const handleCardNumber=(val)=>{
        if(!/^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/.test(val)){
             setError({...error,cardError:true})
        }
        else{
            setError({...error,cardError:false})
        setPaymentDetails({
            ...paymentDetails,cardNumber:val
        })
    }
    }
      const handleName=(val)=>{
        if(!/^[a-zA-Z ]+$/.test(val)){
            setError({...error,NameError:true})
        }
          else{
            setError({...error,NameError:false})
            setPaymentDetails({...paymentDetails,name:val})
          }   
      }
      const handleExp=(val)=>{
        if(!val){
            setError({...error,ExpError:true})
        }
          else{
            setError({...error,ExpError:false})
            setPaymentDetails({...paymentDetails,Exp:val})
          }   
      }
      const handleCvv=(val)=>{
        if(!val){
            setError({...error,CvvError:true})
        }
          else{
            setError({...error,CvvError:false})
            setPaymentDetails({...paymentDetails,cvv:val})
          }   
      }
      console.log('paymentDetails.cardNumber', paymentDetails.cardNumber)
  return (
    <View>
      <View style={{padding: 48}}>
        <TextInput
          placeholder="**** **** **** ****"
          aria-label="Card Number"
          style={[
            {borderWidth: payment.width == 0 ? 0 : 1, width: 270},
            style.textInput,
          ]}
          keyboardType="number-pad"
          onChangeText={handleCardNumber}
        />
         <View>{error.cardError&& <Text style={{color:'red'}}>Enter valid Card Number</Text>}</View>
      </View>
     
      <View style={{marginLeft: 46}}>
        <TextInput
          placeholder="Enter Your name"
          aria-label="name"
          style={[
            {borderWidth: payment.width == 0 ? 0 : 1, width: 270},
            style.textInput,
          ]}
          keyboardType="number-pad"
          onChangeText={handleName}
        />
           <View>{error.NameError&& <Text style={{color:'red'}}>Enter valid Name</Text>}</View>
      </View>
      <View
        style={{
          padding: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
            <View>
        <TextInput
          placeholder="****"
          aria-label="Card Number"
          style={[
            {borderWidth: payment.width == 0 ? 0 : 1},
            style.textInputExp,
          ]}
          keyboardType="numeric"
          maxLength={4}
          onChangeText={handleExp}
        />
           <View>{error.ExpError&& <Text style={{color:'red'}}> invalid Exp </Text>}</View>
           </View>
           <View>
        <TextInput
          placeholder="***"
          aria-label="Cvv"
          maxLength={3}
          style={[
            {borderWidth: payment.width == 0 ? 0 : 1},
            style.textInputExp,
          ]}
          keyboardType="numeric"
          onChangeText={handleCvv}
        />
           <View>{error.CvvError && <Text style={{color:'red'}}>invalid Cvv</Text>}</View>
           </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable
          style={{
            width: 80,
            alignItems: 'center',
            height: 30,
            justifyContent: 'center',
            backgroundColor: 'green',
          }}
          onPress={()=>addPaymentCard(paymentDetails,error)}>
          <Text style={{color: '#ffff'}}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  textInput: {
    height: 40,
    backfaceVisibility: 'hidden',
  },
  textInputExp: {
    width: 50,
    height: 40,
    backfaceVisibility: 'hidden',
  },
});
export default PaymentMethod;
