const submitButton = document.getElementById("bookbtn");
const time = document.getElementById("reserve-time");

//For automatic entry
// let tables = [];
// for (let i = 0; i < 12; i++) {
// 	tables.push(10);
// }

//For manual entry
let tables = [];
tables[0] = 15;
tables[1] = 14;
tables[2] = 0;
tables[3] = 12;
tables[4] = 11;
tables[5] = 10;
tables[6] = 0;
tables[7] = 11;
tables[8] = 12;
tables[9] = 13;
tables[10] = 0;
tables[11] = 15;

function checkAvailability(n) {
	if (tables[n] > 0) {
		submitButton.addEventListener("click", () => {
			tables[n] = tables[n] - 1;
			// alert("Table Booked Successfully! Tables left: " + tables[n]);
			// location.href = "payment.html";
		});
	} else if (tables[n] == 0) {
		submitButton.addEventListener("click", () => {
			alert("No Tables left. Please try another timings.");
		});
	}
}

if (time.value === "11:00am") {
	checkAvailability(0);
} else if (time.value === "12:00am") {
	checkAvailability(1);
} else if (time.value === "01:00pm") {
	checkAvailability(2);
} else if (time.value === "02:00pm") {
	checkAvailability(3);
} else if (time.value === "03:00pm") {
	checkAvailability(4);
} else if (time.value === "04:00pm") {
	checkAvailability(5);
} else if (time.value === "05:00pm") {
	checkAvailability(6);
} else if (time.value === "06:00pm") {
	checkAvailability(7);
} else if (time.value === "07:00pm") {
	checkAvailability(8);
} else if (time.value === "08:00pm") {
	checkAvailability(9);
} else if (time.value === "09:00pm") {
	checkAvailability(10);
} else if (time.value === "10:00pm") {
	checkAvailability(11);
}
