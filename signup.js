const form = document.getElementById("signupForm");
const message = document.getElementById("message");
const signupBtn = document.getElementById("signupBtn");

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    const visible = passwordInput.type === "text";

    passwordInput.type = visible ? "password" : "text";
    togglePassword.textContent = visible ? "◉" : "◌";
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    message.textContent = "Creating your account...";
    message.className = "message";
    signupBtn.disabled = true;
    signupBtn.classList.add("loading");

    try {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = "✓ Account created successfully!";
            message.className = "message success";
            form.reset();
        } else {
            message.textContent = data.message;
            message.className = "message error";
        }
    } catch (error) {
        console.error(error);
        message.textContent = "Unable to connect to server.";
        message.className = "message error";
    } finally {
        signupBtn.disabled = false;
        signupBtn.classList.remove("loading");
    }
});
