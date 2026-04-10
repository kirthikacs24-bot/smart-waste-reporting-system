document.getElementById("wasteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let type = document.getElementById("wasteType").value;
    let description = document.getElementById("description").value;

    let reportDiv = document.createElement("div");
    reportDiv.classList.add("report");

    reportDiv.innerHTML = `
        <h3>${name}</h3>
        <p><b>Location:</b> ${location}</p>
        <p><b>Waste Type:</b> ${type}</p>
        <p><b>Description:</b> ${description}</p>
    `;

    document.getElementById("reportList").appendChild(reportDiv);

    document.getElementById("wasteForm").reset();
});