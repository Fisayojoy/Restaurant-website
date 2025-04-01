document.addEventListener("DOMContentLoaded", function () {
    // Handle Apply Button Clicks
    const applyButtons = document.querySelectorAll(".apply-btn");
    const jobTitleInput = document.getElementById("job-title");
    const applicationForm = document.getElementById("application-form");

    applyButtons.forEach(button => {
        button.addEventListener("click", function () {
            const jobTitle = this.dataset.job;
            jobTitleInput.value = jobTitle; // Auto-fill job title in form
            applicationForm.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle Form Submission
    document.getElementById("application-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get Form Values
        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const resume = document.getElementById("resume").value.trim();

        // Simple Validation
        if (fullName === "" || email === "" || resume === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Show Success Message
        alert("Thank you! Your application has been submitted successfully.");
        this.reset(); // Reset the form after submission
    });
});
