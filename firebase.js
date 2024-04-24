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

/**
 * Write user data to Firestore
 * @param {string} name 
 * @param {string} phoneNo 
 * @param {number} noOfPersons 
 * @param {string} date 
 * @param {string} time 
 * @param {string} message 
 * @returns {Promise<void>}
 */

// export async function writeUserData(customerId, name, phoneNo, noOfPersons, date, time, message) {
//   try {
//     const docRef = await addDoc(collection(db, "customers" + customerId), {
//       name: name,
//       phoneNo: phoneNo,
//       noOfPersons: noOfPersons,
//       date: date,
//       time: time,
//       message: message
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// }
