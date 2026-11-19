const form = document.getElementById("fosterForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const animal = document.getElementById("animal").value;
    const space = document.getElementById("space").value;

    const message = document.getElementById("message");
    const requestList = document.getElementById("requestList");

    message.textContent =
        "Registration submitted successfully!";

    if (requestList.querySelector("p")) {
        requestList.innerHTML = "";
    }

    const request = document.createElement("div");

    request.innerHTML = `
        <h3>Foster Request</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Animal: ${animal}</p>
        <p>Space: ${space}</p>
        <p>Status: Pending</p>
        <hr>
    `;

    requestList.appendChild(request);

    form.reset();
});