const chatBox = document.getElementById("chatBox");

/* Load chat */
window.onload = () => {
    let data = localStorage.getItem("chat");
    if (data) {
        chatBox.innerHTML = data;
    } else {
        addMessage("Hello 😊 How are you feeling today?", "bot");
    }
};

/* Save chat */
function saveChat() {
    localStorage.setItem("chat", chatBox.innerHTML);
}

/* Add message */
function addMessage(text, type) {
    let msg = document.createElement("div");
    msg.className = "message " + type;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    saveChat();
}

/* Bot replies */
function botReply(input) {
    input = input.toLowerCase();

    if (input.includes("happy")) return "That's great 😊 Keep smiling!";
    if (input.includes("sad")) return "I'm here for you 💙 Things will get better.";
    if (input.includes("stressed")) return "Take a deep breath 🌿 Relax for a moment.";
    if (input.includes("anxious")) return "You are safe 💙 Try slow breathing.";
    if (input.includes("tired")) return "You need rest 😴 Take a break.";
    if (input.includes("lonely")) return "You are not alone 💙 Talk to someone you trust.";
    if (input.includes("angry")) return "Take a deep breath 😌 Stay calm.";
    if (input.includes("bored")) return "Try something fun 🎵 or go for a walk!";
    if (input.includes("motivation")) return "You are strong 💪 Keep going!";
    if (input.includes("quote")) return "🌟 'Every day is a new beginning.'";

    return "Tell me more 💭 I'm here to listen.";
}

/* Send */
function sendMessage() {
    let input = document.getElementById("userInput").value;
    if (input === "") return;

    addMessage(input, "user");
    document.getElementById("userInput").value = "";

    setTimeout(() => {
        addMessage(botReply(input), "bot");
    }, 500);
}

/* Quick buttons */
function quickMsg(text) {
    addMessage(text, "user");
    setTimeout(() => {
        addMessage(botReply(text), "bot");
    }, 500);
}

/* Dark mode */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* Voice input */
function startVoice() {
    let recog = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recog.start();
    recog.onresult = function(e) {
        document.getElementById("userInput").value = e.results[0][0].transcript;
    };
}
