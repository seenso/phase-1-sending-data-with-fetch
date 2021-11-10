// Add your code here
const submitData = (userName, userEmail) => {
  //TEST 1 - Send Data
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: userName, 
      email: userEmail
    })
  })
  //TEST 2 - Handle the Response
  .then(response => response.json())
  .then(data => {
    // data = { id: 132, name: 'Sam', email: 'sam@sam.com' }

    //append id to DOM
    document.body.append(data.id);
  })
  //TEST 3 - Handle Errors
  .catch((err) => {
    document.body.append(err.message);
  });
};

