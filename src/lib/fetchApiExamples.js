// Showing two ways for fetch api calls. The newer way is using
// async/await. Older way is after this code.
//

// The following simulates having a button and when clicked, calling
// an api to get a set of users. This is done with and event listener
// to listen for the button click and then a method for handling the
// click action
//const btnEl = document.querySelector(".btn");
//
//const clickHandler = async () => {
//  try {
//    const res = await fetch("https://reqres.in/api/users");
//    const data = await res.json();
//
//    if (!res.ok) {
//      console.log(data.description);
//      return;
//    }
//
//    console.log(data.data[3].first_name);
//  } catch (error) {
//    console.log(error);
//  }
//};
//
//btnEl.addEventListener("click", clickHandler);

// The following simulates having a button and when clicked, calling
// an api to update a users information. This is done with and event listener
// to listen for the button click and then a method for handling the
// click action
//const btnEl = document.querySelector(".btn");
//const newUser = {
//  name: 'John',
//  job: 'Carpenter'
//};
//
//const clickHandler = async () => {
//  try {
//    const res = await fetch("https://reqres.in/api/users", {
//      method: 'POST',
//      headers: {
//          'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(newUser)
//    });
//    const data = await res.json();
//
//    if (!res.ok) {
//      console.log(data.description);
//      return;
//    }
//
//    console.log(data);
//  } catch (error) {
//    console.log(error);
//  }
//};
//
//btnEl.addEventListener("click", clickHandler);

// Using a free website to practice fetch api calls.
// https://jsonplaceholder.typicode.com/
//fetch("https://jsonplaceholder.typicode.com/todos")
//  //Deal with the response from the server.
//  .then((res) => {
//    if (!res.ok) {
//      console.log("Problem");
//    }
//
//    //Convert the response data from json. You must return
//    //the response data so you can access it. You also return
//    //it because it might take a bit for all the data to be returned.
//    //This is a promise which is why we attach a .then to it to access
//    //the data once all data has been received.
//    return res.json();
//  })
//  .then((data) => {
//    console.log(data);
//  })
//  .catch((error) => {
//    console.log(error);
//  });

//Another example, this shows us doing some stuff with the data.
//Look in App.jsx for this live.
//fetch("https://jsonplaceholder.typicode.com/users")
//    .then((resp) => {
//      if (!resp) {
//        console.log("Problem!");
//        return;
//      }
//      return resp.json();
//    })
//    .then((data) => {
//      data.forEach((user) => {
//        const markup = `<li>${user.name}</li>`;
//
//        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
//      });
//    })
//    .catch((error) => console.log(error));

//POST
//Create a new data object
//const newUser = {
//  name: "Maria",
//  job: "Teacher",
//};
//
//Specify this is a Post, specify the header content, specify
//the body content and convert it into json
//fetch("https://jsonplaceholder.typicode.com/users", {
//  method: "POST",
//  headers: {
//    "Content-Type": "application/json",
//  },
//  body: JSON.stringify(newUser),
//})
//  .then((resp) => {
//    if (!resp) {
//      console.log("Problem!");
//      return;
//    }
//    return resp.json();
//  })
//  .then((data) => {
//    console.log("Success");
//  })
//  .catch((error) => console.log(error));

//PUT - update a record
//fetch("https://reqes.in/api/users/55", {
//  method: "PUT",
//  headers: {
//    "Content-Type": "application/json",
//  },
//  body: JSON.stringify(newUser),
//})
//  .then((resp) => {
//    if (!resp) {
//      console.log("Problem!");
//      return;
//    }
//    return resp.json();
//  })
//  .then((data) => {
//    console.log("Success");
//  })
//  .catch((error) => console.log(error));

//DELETE
//fetch("https://reqes.in/api/users/55", {
//  method: 'DELETE'
//})
//  .then((resp) => {
//    if (!resp) {
//      console.log("Problem!");
//      return;
//    }
//    return resp.json();
//  })
//  .then((data) => {
//    console.log("Success");
//  })
//  .catch((error) => console.log(error));
