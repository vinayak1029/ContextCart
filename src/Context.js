import { createContext, useContext, useState } from "react";
import faker from "faker";

const Cart = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const array=[{"id":1,"name":"HeadPhones","price":"2000","image":"https://www.shutterstock.com/image-photo/white-wireless-headphones-on-pink-260nw-1612296739.jpg"},{"id":2,"name":"Iphone","price":"8000","image":"https://www.shutterstock.com/image-photo/white-wireless-headphones-on-pink-260nw-1612296739.jpg"},{"id":3,"name":"Ipad","price":"3000","image":"https://www.shutterstock.com/image-photo/white-wireless-headphones-on-pink-260nw-1612296739.jpg"},{"id":4,"name":"MacBook","price":"12000","image":"https://s.yimg.com/ny/api/res/1.2/tC7sBPVvvSSghCaELd89jg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwNA--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0"},{"id":5,"name":"Watch","price":"1500","image":"https://www.shutterstock.com/image-photo/white-wireless-headphones-on-pink-260nw-1612296739.jpg"},{"id":6,"name":"Charger","price":"500","image":"https://www.shutterstock.com/image-photo/white-wireless-headphones-on-pink-260nw-1612296739.jpg"}];
  const productsArray = [...array].map((p) => ({
    id: p.id,
    name: p.name,
    image:p.image,
    price:p.price,
    // price: faker.commerce.price(),
    // image: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
