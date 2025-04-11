import Count from "./Count.jsx";
import Button from "./Button.jsx";
import { useState, useEffect } from "react";
import "./index.css";
//import "./lib/arrays.js";
import "./lib/fetchApiExamples.js";
//e import the custom hook we created for quantity.
import { useQuantity } from "./lib/hooks";

//All code with the following comment style: "//a"
//is code that goes together when uncommenting.

//d We now want to take the code from "//c" and convert it into a custom
//d hook. Since useState and useEffect are closely related, it makes sense
//d to refactor it into a custom hook. This could also be moved into it's
//d own file.
//d const useQuantity = () => {
//d   const [quantity, setQuantity] = useState(0);
//d
//d   useEffect(() => {
//d     const fetchProducts = async () => {
//d       const response = await fetch("https://dummyjson.com/products");
//d       const data = await response.json();
//d       setQuantity(data.total);
//d     };
//d
//d     fetchProducts();
//d   }, []);
//d
//d   //We don't have to return an object here. If all we need is the
//d   //quantity, just "return quantity;". Here we return both so that
//d   //we can set the quantity in another component.
//d   return {
//d     quantity: quantity,
//d     setQuantity: setQuantity,
//d   };
//d };

//e We now want to refactor the customer hook "//d" and put it in it's own
//e file/component "hooks.js". .js since there is not jsx in it.
function App() {
  //c const [quantity, setQuantity] = useState(0);
  //b const [number, setNumber] = useState(0);
  //a fetch("https://jsonplaceholder.typicode.com/users")
  //a   .then((resp) => {
  //a     if (!resp) {
  //a       console.log("Problem!");
  //a       return;
  //a     }
  //a     return resp.json();
  //a   })
  //a   .then((data) => {
  //a     data.forEach((user) => {
  //a       const markup = `<li>${user.name}</li>`;

  //a       document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
  //a     });
  //a   })
  //a   .catch((error) => console.log(error));

  //c The following is demonstrating the useEffect hook. Think of it
  //c as a side effect. Something we are doing outside of React. We are fetching
  //c data when the page is first loaded and do the fetch only
  //c once(specified by the empty array []). data.total is showing how
  //c many records have been returned by our fetch statement.
  //c useEffect(() => {
  //c   const fetchProducts = async () => {
  //c     const response = await fetch("https://dummyjson.com/products");
  //c     const data = await response.json();
  //c     setQuantity(data.total);
  //c   };

  //c   fetchProducts();
  //c }, []);

  //d //We could use the setQuantity useState to pass it to
  //d //the Button component to update the count if we wanted.
  //d const { quantity, setQuantity } = useQuantity();

  //e
  const { quantity, setQuantity } = useQuantity();

  return (
    <div className="app">
      {/*b number < 3 ? <Count number={number} /> : null*/}
      {/*b <Count number={number} />*/}
      {/*b <Button setNumber={setNumber} /> */}
      {/*a <h2>Users:</h2> */}
      {/*a <ul></ul> */}
      {/*c <Count number={quantity} /> */}
      {/*d <Count number={quantity} /> */}
      {/*e */}
      <Count number={quantity} />
    </div>
  );
}

export default App;
