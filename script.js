document.addEventListener("DOMContentLoaded", function () {
    fetch("http://ip-api.com/json/")
        .then(response => response.json())
        .then(data => {
            const userIP = data.query;
            const country = data.country;
            const city = data.city;

            document.getElementById("ip-address").textContent = userIP;
            document.getElementById("location").textContent = city + ", " + country;
        })
        .catch(error => console.error("Failed to fetch IP and location data: " + error));

    const currentDate = new Date().toLocaleString();
    document.getElementById("date").textContent = currentDate;
});
