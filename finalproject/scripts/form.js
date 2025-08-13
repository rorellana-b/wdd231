document.addEventListener("DOMContentLoaded", function () {
    // take the URL
    const params = new URLSearchParams(window.location.search);
    const displayElement = document.getElementById("displayData");
    if (!displayElement) return;

    // take the values 
    const firstName = params.get("username") || "Not provided";
    const lastName = params.get("userlastname") || "Not provided";
    const email = params.get("email") || "Not provided";
    const phone = params.get("phone") || "Not provided";
    const timestamp = params.get("timestamp") || new Date().toLocaleString();

    // Create the HTML
    displayElement.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Submission Time:</strong> ${timestamp}</p>
    `;
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (!form) return;

    form.addEventListener("submit", function () {
        const timestampInput = document.getElementById("timestamp");
        if (timestampInput) {
            timestampInput.value = new Date().toISOString();
        }
    });
});
