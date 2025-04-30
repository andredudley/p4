function init() {
    // Add event listeners for buttons
    document.getElementById('button1').addEventListener('click', actionOne);
    document.getElementById('button2').addEventListener('click', actionTwo);
    document.getElementById('join-form').addEventListener('submit', handleSubmit);
}

function actionOne() {
    alert('Action 1 triggered!');
}

function actionTwo() {
    alert('Action 2 triggered!');
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from the input fields
    const name = document.getElementById('name').value;
    const selection = document.getElementById('selection').value;

    // Update the congratulations message
    const congratulationMessage = `Congratulations, ${name}! You have successfully joined and selected ${selection}.`;
    document.getElementById('congratulations-message').innerText = congratulationMessage;

    // Hide the form and show the congratulations section
    document.getElementById('join-form').style.display = 'none'; // Hide form
    document.querySelector('.action-buttons').style.display = 'none'; // Hide action buttons
    document.querySelector('.congratulations').style.display = 'block'; // Show congratulations message
}

function goBack() {
    // Hide the congratulations message
    document.querySelector('.congratulations').style.display = 'none';
    // Show the form and action buttons again
    document.getElementById('join-form').style.display = 'block'; // Show form
    document.querySelector('.action-buttons').style.display = 'block'; // Show action buttons
    // Reset the form (optional)
    document.getElementById('join-form').reset();
}