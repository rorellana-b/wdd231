document.addEventListener("DOMContentLoaded", function () {
    // take the URL
    const params = new URLSearchParams(window.location.search);
    const displayElement = document.getElementById("displayData");
    if (!displayElement) return;

    // take the values 
    const firstName = params.get("username") || "Not provided";
    const lastName = params.get("userlastname") || "Not provided";
    const organizationTitle = params.get("organization") || "Not provided";
    const email = params.get("email") || "Not provided";
    const phone = params.get("phone") || "Not provided";
    const businessName = params.get("businessName") || "Not provided";
    const membership = params.get("membership") || "Not selected";
    const timestamp = params.get("timestamp") || new Date().toLocaleString();

    // Create the HTML
    displayElement.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Organizational Title:</strong> ${organizationTitle}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Membership Level:</strong> ${membership}</p>
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

const membershipDetails = document.querySelector("#open-details");

// Information about membership levels
const membershipInfo = {
    "Non Profit": {
        title: "Non Profit Membership Level",
        description: "Ideal for community organizations and NGOs. Get access to events, resources, and networking opportunities at a discounted rate."
    },
    "Bronze": {
        title: "Bronze Membership Level",
        description: "Perfect for small businesses starting to grow their network. Includes basic promotional benefits."
    },
    "Silver": {
        title: "Silver Membership Level",
        description: "Includes additional promotional opportunities, training programs, and event discounts."
    },
    "Gold": {
        title: "Gold Membership Level",
        description: "Premium package with full promotional support, priority event participation, and VIP networking."
    }
};

// Funtion to show details
function displayMembershipDetails(level) {
    const info = membershipInfo[level];

    membershipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${info.title}</h2>
        <p>${info.description}</p>
    `;


    membershipDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        membershipDetails.close();
    });
}

// events fot learn more buttons
document.querySelectorAll(".bt_learn").forEach(button => {
    button.addEventListener("click", () => {
        const level = button.getAttribute("data-level");
        displayMembershipDetails(level);
    });
});