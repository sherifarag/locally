// grade-calculator.js
document.getElementById("grade-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const assignments = parseFloat(document.getElementById("assignments").value);
    const quizzes = parseFloat(document.getElementById("quizzes").value);
    const exams = parseFloat(document.getElementById("exams").value);
    const projects = parseFloat(document.getElementById("projects").value);

    // Validate inputs
    if (isNaN(assignments) || isNaN(quizzes) || isNaN(exams) || isNaN(projects)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate total marks and percentage
    const totalMarks = assignments + quizzes + exams + projects;
    const percentage = (totalMarks / 400) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display results
    document.getElementById("total-marks").textContent = totalMarks.toFixed(2);
    document.getElementById("percentage").textContent = percentage.toFixed(2) + "%";
    document.getElementById("grade").textContent = grade;
});