//using find

const menu = [
    { name: "Margherita", price: 5 },
    { name: "Marinara", price: 6 },
    { name: "Pepperoni", price: 7 },
];

let cashInRegister = 100;
const orderQueue = [];

const addPizza = (name, price) => {
    menu.push({ name: name, price: price });
};

const placeOrder = (name) => {
    const pizza = menu.find(pizza => pizza.name === name);
    if (pizza) {
        cashInRegister += pizza.price;
        orderQueue.push({ name: name, status: "ordered" });
        const msg = `Order placed successfully for ${name} pizza for Rs ${pizza.price}!!`;
        return { msg, netIncome: cashInRegister, orderQueue: orderQueue };
    }
    return "Order failed!! No pizza found with the given name.";
};

console.log(placeOrder("Margherita"));
console.log(placeOrder("Marinara"));


// using for loops

// const menu = [
//     { name: "Margherita", price: 5 },
//     { name: "Marinara", price: 6 },
//     { name: "Pepperoni", price: 7 },
//   ];
  
//   let cashInRegister = 100;
//   const orderQueue = [];
  
//   const addPizza = (name, price) => {
//     menu.push({ name: name, price: price });
//   };
  
//   const placeOrder = (name) => {
//     for (let i = 0; i < menu.length; i++) {
//       if (menu[i].name === name) {
//         cashInRegister += menu[i].price;
//         orderQueue.push({ name: name, status: "ordered" });
//         const msg = `order placed succesfully for ${name} pizza for Rs ${menu[i].price}!!`;
//         return { msg, "netIncome": cashInRegister, orderQueue: orderQueue };
//       }
//     }
//     return("Order failed!!, No pizza found with the given name.");
//   };
  
//   console.log(placeOrder("Margherita"))
//   console.log(placeOrder("Marinara"))
  
  
  //using forEach
  
//   const menu = [
//       { name: "Margherita", price: 5 },
//       { name: "Marinara", price: 6 },
//       { name: "Pepperoni", price: 7 },
//   ];
  
//   let cashInRegister = 100;
//   const orderQueue = [];
  
//   const addPizza = (name, price) => {
//       menu.push({ name: name, price: price });
//   };
  
//   const placeOrder = (name) => {
//       let orderPlaced = false;
//       menu.forEach((pizza) => {
//           if (pizza.name === name) {
//               cashInRegister += pizza.price;
//               orderQueue.push({ name: name, status: "ordered" });
//               const msg = `order placed succesfully for ${name} pizza for Rs ${pizza.price}!!`;
//               orderPlaced = { msg, "netIncome": cashInRegister, orderQueue: orderQueue };
//           }
//       });
//       return orderPlaced || "Order failed!!, No pizza found with the given name.";
//   };
  
//   console.log(placeOrder("Margherita"));
//   console.log(placeOrder("Marinara"));
  
  