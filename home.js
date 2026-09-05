const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    window.location.href = "login.html";
}

const userData = localStorage.getItem("user");

if (userData) {
    const user = JSON.parse(userData);

    document.getElementById("welcomeMessage").textContent =
        `Welcome, ${user.name}! 👋`;

    document.getElementById("navUserName").textContent =
        user.name;

    document.getElementById("userInitial").textContent =
        user.name.charAt(0).toUpperCase();
}

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "login.html";
});
