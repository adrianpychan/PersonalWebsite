document.addEventListener('DOMContentLoaded', () => {
	// Add New Card

	// A function named addCard with three parameters

	const addCard = (title, progress, description) =>
		`<div class = "col-12 col-md-6 col-lg-3">
			<div class="card">
				<div class = "card-header">
					<h5>${title}</h5>
					<span class="badge ${progress == 100 ? "badge-success": "badge-warning"}">${progress == 100 ? "Completed": "In Progress"}</span>
				</div>
			  
				 <div class="card-body">
				    <p class="card-text">${description}</p>
				 </div>

				 <ul class = "list-group list-group-flush">
				 	<li class = "list-group-item">
				 		<p>Progress ${parseInt(progress)}%</p>
				 		<div class="progress">
							<div class="progress-bar" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
				 	</li>
				 </ul>
			</div>
		</div>
		`

	document.getElementById("new-task").addEventListener("click", () => {
		// ? Operator
		// Make sure the form disappears when task_button = "Close", appears when task_button = "New"

		let task_button = document.getElementById("new-task");
		task_button.innerText == "New Task" ? task_button.innerText = "Close Task" : task_button.innerText = "New Task";
	
		let form = document.getElementById("input-task");
		form.style.display == "none" || form.style.display == "" ? form.style.display = "block" : form.style.display = "none";


	})

	// Function to create when we click on the submit button
	// When we click on the submit button, it will either: do nothing (success), it will send an alert
	// Alerts: Please fill in the blanks! and Alert: Please put a number between 0 and 100.

	document.getElementById("submit-btn").addEventListener("click", () => {
		let task_name = document.getElementById("task-name").value;
		let progress = document.getElementById("progress").value;
		let description = document.getElementById("description").value;

		// If else statement to fulfill our alert criterias
		// if. Cannot be empty, 
		// else. Progress cannot be a string, it has to be a number between 0-100

		if (task_name == "" || progress == "" || description == "") {
			alert("Please fill in all the required fields!")
		} else {
			if (parseInt(progress) >= 0 && parseInt(progress) <= 100) {
				progress = parseInt(progress);
				document.getElementById("cardholder").innerHTML += addCard(task_name, progress, description);
			} else {
				alert("Please input an appropriate perecentage!");
			}
		}


		document.getElementById("task-name").value = "";
		document.getElementById("progress").value = "";
		document.getElementById("description").value = "";

	})

})

document.addEventListener("mouseover", () => {
	let cards = document.getElementsByClassName("card")

	for (let i = 0; i < cards.length; i ++) {
		cards[i].addEventListener("dblclick", () => {
			cards[i].getElementsByClassName("badge")[0].innerHTML = cards[i].getElementsByClassName('badge')[0].innerHTML == "On hold" ? "In Progress" : (cards[i].getElementsByClassName('progress-bar')[0].getAttribute('aria-valuenow') != 100 ? 'On hold' : 'Finished')

			// Change the colour of the class name: badge.

			if (cards[i].getElementsByClassName("badge")[0].innerHTML == "On hold") {
				cards[i].getElementsByClassName("badge")[0].classList.remove("badge-warning")
				cards[i].getElementsByClassName("badge")[0].classList.add("badge-danger")
			} else if (cards[i].getElementsByClassName("badge")[0].innerHTML == "In Progress") {
				cards[i].getElementsByClassName("badge")[0].classList.remove("badge-danger")
				cards[i].getElementsByClassName("badge")[0].classList.add("badge-warning")	
			}
		});
	};
});
















// Whenever I click the button, I want it to change to CLose task and vice-versa


// Adding New Cards upon Submit

