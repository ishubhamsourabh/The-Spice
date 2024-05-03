// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
	getDatabase,
	ref,
	set,
	get,
	child,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEX6DyzmjYYKpeIUTzehYQLsgihMBoe4U",
  authDomain: "the-spice-243e3.firebaseapp.com",
  databaseURL: "https://the-spice-243e3-default-rtdb.firebaseio.com",
  projectId: "the-spice-243e3",
  storageBucket: "the-spice-243e3.appspot.com",
  messagingSenderId: "200491320458",
  appId: "1:200491320458:web:d9e34dd4aaee24a1381973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("bookbtn").addEventListener("click",async function (e) {
	e.preventDefault();
  const data = await getData();
  console.log(data);
  if (data.length>=0 && data.length<=14){
    const s = data.length;
    console.log(s.toString());
    await set(ref(db, "tables/" + document.getElementById("reserve-date").value + "/" + s), {
      name: document.getElementById("customer-name").value,
      phone: document.getElementById("customer-phone").value,
      person: document.getElementById("total-person").value,
      date: document.getElementById("reserve-date").value,
      time: document.getElementById("reserve-time").value,
      message: document.getElementById("customer-msg").value,
    }).then(()=>{
      alert("Table is available for booking!");
      window.location.href = "./payment.html";
    })
  }
  else {
    alert("Table is not available for booking!");
  }
});

// Reference to the documents in the database
// function getData(){
//   const dbRef = ref(db);
//   // get(child(dbRef,'tables/')).then((snapshot)=>{
//   //   if(snapshot.exist()){
//   //     console.log(snapshot.val());
//   //   }
//   // }).catch((err)=>{
//   //   console.log(err.code);
//   // })
//   const tablesRef = db.ref("tables/");
//   tablesRef.once("value")
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//     });
// }
// Reference to the documents in the database
async function getData(){
  const dbRef = db;
  const data=[];
  const tablesRef = ref(dbRef, 'tables/'+ document.getElementById("reserve-date").value);
  await get(tablesRef).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val()); // Push each document's value individually
      });
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error("Error fetching data: ", error);
  });
  return data;
}



// Fetch documents once