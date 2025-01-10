// Define interfaces
interface Pizza {
    name: string;
    price: number;
  }
  
  interface Order {
    name: string;
    status: string;
  }
  
  // Define menu and other variables with types
  const menu: Pizza[] = [
    { name: "Margherita", price: 5 },
    { name: "Marinara", price: 6 },
    { name: "Pepperoni", price: 7 },
  ];
  
  let cashInRegister: number = 100;
  const orderQueue: Order[] = [];
  
  // Function to add a new pizza to the menu
  const addPizza = (name: string, price: number): void => {
    menu.push({ name, price });
  };
  
  // Function to place an order
  const placeOrder = (name: string): { msg: string; netIncome: number; orderQueue: Order[] } | string => {
    const pizza = menu.find((pizza) => pizza.name === name);
  
    if (pizza) {
      cashInRegister += pizza.price;
      orderQueue.push({ name, status: "ordered" });
      const msg = `Order placed successfully for ${name} pizza for Rs ${pizza.price}!!`;
      return { msg, netIncome: cashInRegister, orderQueue };
    }
  
    return "Order failed!! No pizza found with the given name.";
  };
  
  // Testing the functions
  console.log(placeOrder("Margherita"));
  console.log(placeOrder("Marinara"));
  