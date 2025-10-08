// function printPrimes(n){
//     for ( let i =2; i <= n; i++){
//         let isPrime = true;
//         for (let j =2; j <=Math.sqrt(i); j++){
//             if (i % j == 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime){
//             console.log(i);
//         }
//     }
// }
// printPrimes(100);





fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users);
    const updatedUsers = users.map(user => {
      const newGeo = { lat: "student", lng: "in grow tech" };
          const newAddress = {
        ...user.address,
        vineet: newGeo, 
      };
      delete newAddress.geo;
      return { ...user, address: newAddress };
    });
    const updatePromises = updatedUsers.map(user =>
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: user.address }),
      }).then(res => res.json())
    );
    return Promise.all(updatePromises);
  })
  .then(updatedUsers => {
    console.log(updatedUsers);
  })
  .catch(error => {
    console.error("Error:", error);
  });
