document.addEventListener('DOMContentLoaded', function() {
    const chatContainer = document.querySelector('.chat-container');
    const sendButton = chatContainer.querySelector('.send-button');
    const inputMessage = chatContainer.querySelector('.input-message');
    const messagesDiv = chatContainer.querySelector('.messages');

    let messages = [
        { text: 'Hello! Welcome to our Solar System support chat.', sender: 'AI' },
        { text: 'Hi! How can I assist you today?', sender: 'AI' }
    ];

    function updateMessages() {
        messagesDiv.innerHTML = '';
        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.sender === 'AI' ? 'sent' : 'received'}`;
            messageElement.innerHTML = `<p class="message-text">${message.text}</p>`;
            messagesDiv.appendChild(messageElement);
        });
    }

    updateMessages();

    sendButton.addEventListener('click', () => {
        const userInput = inputMessage.value.trim();
        if (userInput !== '') {
            messages.push({ text: userInput, sender: 'User' });
            updateMessages();
            inputMessage.value = '';
        }
    });

    // Simulate AI responses
    setInterval(() => {
        if (messages[messages.length - 1]?.sender === 'User') {
            const aiResponse = generateAIResponse(messages[messages.length - 1].text);
            messages.push({ text: aiResponse, sender: 'AI' });
            updateMessages();
        }
    }, 2000); // Check for user input every 2 seconds

    function generateAIResponse(userInput) {
        // Implement your AI model here
        // This is a placeholder function
        return `AI Response: ${userInput}`;
    }
});
