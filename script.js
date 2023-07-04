// const _ = require("lodash");

async function getDataTwo() {
  const result = await fetch("https://dummyjson.com/users");
  const data = await result.json();

  let tab = "";
  console.log(data);

  data.users.forEach(function (user) {
    tab += `<tr> 
     <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.age}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
    
    </tr>`;
  });

  document.getElementById("tbody").innerHTML = tab;

  $("#userTable").DataTable({
    data: data.users,
    columns: [
      { data: "firstName" },
      { data: "lastName" },
      { data: "age" },
      { data: "gender" },
      { data: "email" },
    ],
  });
}

async function getData() {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await result.json();

  let tab = "";

  //   console.log(data);

  data.forEach((item) => {
    console.log(item);
    tab += `<tr>
              <td>${item.postId}</td>
              <td>${item.id}</td>
              <td>${item.name}</td>
              <td>${item.email}</td>
               <td>${item.body}</td>
              </tr>`;
  });

  document.getElementById("tbody").innerHTML = tab;

  $("#userTable").DataTable({
    data: data,
    columns: [
      { data: "postId" },
      { data: "id" },
      { data: "name" },
      { data: "email" },
      { data: "body" },
    ],
  });
}
