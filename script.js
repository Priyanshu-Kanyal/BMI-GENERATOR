// Select the form element
const form = document.querySelector('form');

// Listen for the submit event on the form
form.addEventListener('submit', function(event) {
    // This is the most important line. It stops the form submission and the 405 error.
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const results = document.getElementById('results');

    // Validate the input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        results.textContent = "Please enter a valid height and weight.";
        results.style.backgroundColor = 'transparent'; // Clear previous styling
        results.style.border = 'none';
        return;
    }

    // Perform the BMI calculation
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";

    if (bmi < 18.6) {
        category = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal Range";
    } else {
        category = "Overweight";
    }

    // Apply styles to the results div
    results.style.display = "block";
    results.style.color = "#00008b"; // Dark blue for better readability
    results.style.fontSize = "20px";
    results.style.fontWeight = "bold";
    results.style.textAlign = "center";
    results.style.marginTop = "20px";
    results.style.padding = "10px";
    results.style.border = "2px solid black";
    results.style.backgroundColor = "#f0f8ff";

    // Display the final result
    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are classified as: ${category}.`;
});