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
	apiKey: "AIzaSyALqbem-PanSc4wlD5axDz4PvOgHxY9fyU",
	authDomain: "thespice-c8fc7.firebaseapp.com",
	databaseURL: "https://thespice-c8fc7-default-rtdb.firebaseio.com",
	projectId: "thespice-c8fc7",
	storageBucket: "thespice-c8fc7.appspot.com",
	messagingSenderId: "725495548509",
	appId: "1:725495548509:web:7ff60522e91a38de3d9bb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("bookbtn").addEventListener("click", function (e) {
	e.preventDefault();
	set(ref(db, "tables/" + document.getElementById("customer-phone").value), {
		name: document.getElementById("customer-name").value,
		phone: document.getElementById("customer-phone").value,
		person: document.getElementById("total-person").value,
		date: document.getElementById("reserve-date").value,
		time: document.getElementById("reserve-time").value,
		message: document.getElementById("customer-msg").value,
	});
	alert("Table is available for booking!");
});
