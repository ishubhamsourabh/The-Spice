function sendEmail(e) {
	e.preventDefault();
	(function () {
		emailjs.init("KByCRPTmFNDKz-j8X");
	})();
	var serviceID = "service_up682nl";
	var templateID = "template_rey5jm9";
	emailjs
		.send(serviceID, templateID, {
			name: document.querySelector(".name").value,
			email: document.querySelector(".email").value,
			number: document.querySelector(".number").value,
			id: document.querySelector(".id").value,
			time: new Date().toLocaleString(),
		})
		.then((res) => {
			alert("Email sent successfully");
		});
}
