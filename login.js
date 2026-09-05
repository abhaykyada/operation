const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    const visible = passwordInput.type === "text";

    passwordInput.type = visible ? "password" : "text";
    togglePassword.textContent = visible ? "◉" : "◌";
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    message.textContent = "Checking your account...";
    message.className = "message";
    loginBtn.disabled = true;
    loginBtn.classList.add("loading");

    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", JSON.stringify(data.user));

            message.textContent = "✓ Login successful!";
            message.className = "message success";

            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
        } else {
            message.textContent = data.message;
            message.className = "message error";
        }
    } catch (error) {
        console.error(error);
        message.textContent = "Unable to connect to server.";
        message.className = "message error";
    } finally {
        loginBtn.disabled = false;
        loginBtn.classList.remove("loading");
    }
});
