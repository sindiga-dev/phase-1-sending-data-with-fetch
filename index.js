// Add your code here
// Add your code here
function submitData(name, email) {
	let users = {
		name: name,
		email: email,
	};
	return fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(users),
	})
		.then((response) => response.json())
		.then((fetchedobject) => {
			document.body.innerHTML = fetchedobject["id"];
		})
		.catch((error) => {
			document.body.innerHTML = error.message;
		});
}