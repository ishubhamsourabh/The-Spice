import {initializeApp} from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration (make sure to keep this private!)
const firebaseConfig = {
    apiKey: "AIzaSyDEX6DyzmjYYKpeIUTzehYQLsgihMBoe4U",
      authDomain: "the-spice-243e3.firebaseapp.com",
      projectId: "the-spice-243e3",
      storageBucket: "the-spice-243e3.appspot.com",
      messagingSenderId: "200491320458",
      appId: "1:200491320458:web:d9e34dd4aaee24a1381973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const writeUserData = async (name, phoneNo, noOfPersons, date, time, message) => {
  try {
      await addDoc(collection(db, "customers"), {
          name: name,
          phoneNo: phoneNo,
          noOfPersons: noOfPersons,
          date: date,
          time: time,
          message: message
      });
      console.log("Document written successfully.");
  } catch (error) {
      console.error("Error adding document: ", error);
  }
};

// Select the form element
const form = document.getElementById("booking-form");

// Add submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form values
  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const person = document.getElementById("total-person").value;
  const date = document.getElementById("reserve-date").value;
  const time = document.getElementById("reserve-time").value;
  const message = document.getElementById("customer-msg").value;

  // Write form data to Firestore
  writeUserData(name, phone, person, date, time, message);
});