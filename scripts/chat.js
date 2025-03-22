// @ts-expect-error

/** @type {HTMLButtonElement} */
const chatButton = document.getElementById("chat-button");
/** @type {HTMLElement} */
const chatBox = document.getElementById("chat-box");
/** @type {HTMLButtonElement} */
const sendButton = document.getElementById("send-message");
/** @type {HTMLElement} */
const chatMessages = document.getElementById("chat-messages");
/** @type {HTMLInputElement} */
const chatInput = document.getElementById("chat-input");

chatButton.addEventListener("click", function () {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

function sendMessage() {
    const message = chatInput.value;

    if (!message.trim()) {
        /** @type {HTMLDialogElement} */
        const errorToast = new bootstrap.Toast(document.getElementById('error-toast'));
        return errorToast.show()
    }

    if (message.trim()) {
        // Add user's message to chat
        const userMessage = document.createElement("div");
        userMessage.textContent = `You: ${message}`;
        userMessage.style.fontStyle = "italic";
        userMessage.style.color = "green";
        userMessage.style.textAlign = "right"
        chatMessages.appendChild(userMessage);

        // Simulate plant specialist response
        const botMessage = document.createElement("div");
        botMessage.textContent = `Plant Specialist: Thank you for reaching out! We'll get back to you soon with plant care advice.`;
        chatMessages.appendChild(botMessage);

        // Scroll to bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input field
        chatInput.value = "";
        chatInput.focus({ preventScroll: true })
    }
}

sendButton.addEventListener("click", sendMessage);

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
})
