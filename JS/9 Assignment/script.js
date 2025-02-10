const chatbotMessagePara = document.getElementById('chatbot-message');
const userInputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', () => {
    const userMessage = userInputElement.value.trim();
    if (userMessage !== "") {
        const chatbotResponse = getChatbotResponse(userMessage);
        chatbotMessagePara.textContent += `\n\nYou: ${userMessage}\nChatbot: ${chatbotResponse}`;
        userInputElement.value = "";
    }
});

function getChatbotResponse(userMessage) {
    if (userMessage.toLowerCase() === "hello") {
        return "Hi! How can I assist you today?";
    } else if (userMessage.toLowerCase() === "how are you") {
        return "I'm doing great, thanks for asking!";
    } else {
        return "I didn't understand that. Can you please rephrase?";
    }
}
