import {View, Text, Alert} from 'react-native';
import {useState, useRef} from 'react';
import CartContext from './CartContext';

const CartState = props => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProductCount, setCartProductCount] = useState(0);

  const addToCart = item => {
    Alert.alert(`${item.Pname} add to cart`);
    console.log('item', item);
    console.log('hii');
    const existingItem = data.find(food => food.id == item.id);
    console.log('existingItem', existingItem);
    if (existingItem) {
      setData(
        data.map(existingFood =>
          existingFood.id === item.id
            ? {...existingFood, quantity: existingFood.quantity + 1}
            : existingFood,
        ),
      );
    } else {
      setData([...data, {...item, quantity: 1}]);
    }
  };
  const increases = item => {
    // const existingItem = data.find(food => food.id == item.id);
    // if(existingItem)
    console.log('item.id', item.id);
    setData(
      data.map(existingFood =>
        existingFood.id === item.id
          ? {...existingFood, quantity: existingFood.quantity + 1}
          : existingFood,
      ),
    );
  };
  const decrease = item => {
    // const existingItem = data.find(food => food.id == item.id);
    // if(existingItem)
    console.log('item.id', item.id);
    if (item.quantity <= 1) {
      setData(existingFood =>
        existingFood.id === item.id
          ? {...existingFood, quantity: 1}
          : existingFood,
      );
    } else {
      setData(
        data.map(existingFood =>
          existingFood.id === item.id
            ? {...existingFood, quantity: existingFood.quantity - 1}
            : existingFood,
        ),
      );
    }
  };
  const deleteItem = item => {
    setData(data.filter(foodItem => foodItem.id != item.id));
  };
  const SubTotalMoney = () => {
    let subTotal = 0;
    if (data != '') {
      data.forEach(item => (subTotal += item.Price * item.quantity));
    }
    console.log('SubTotal', subTotal);
    return subTotal;
  };
  const totalQuantity = () => {
      
      let Total=0
     data.forEach(
      (item) => (Total += item.quantity),
    );
    return Total;
  };
  return (
    <CartContext.Provider
      value={{
        data,
        addToCart,
        cartProductCount,
        totalPrice,
        increases,
        deleteItem,
        decrease,
        cartProductCount,
        SubTotalMoney,
        totalQuantity
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
