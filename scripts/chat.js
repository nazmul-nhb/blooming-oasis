
const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const sendButton = document.getElementById("send-message");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

chatButton.addEventListener("click", function () {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

sendButton.addEventListener("click", function () {
    const message = chatInput.value;
    if (message.trim()) {
        // Add user's message to chat
        const userMessage = document.createElement("div");
        userMessage.textContent = `You: ${message}`;
        chatMessages.appendChild(userMessage);

        // Simulate plant specialist response
        const botMessage = document.createElement("div");
        botMessage.textContent = `Plant Specialist: Thank you for reaching out! We'll get back to you soon with plant care advice.`;
        chatMessages.appendChild(botMessage);

        // Scroll to bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input field
        chatInput.value = "";
    }
});
