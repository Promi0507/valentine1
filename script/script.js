const messages = [
    "Are You Sure?",
    "Really sure?",
    "Are You Positive?",
    "Pookie Please...",
    "Just Think About It!",
    "If You Say No, I Will Be Really Sad...",
    "I Will be very sad...",
    "It Will be very very sad...",
    "Ok fine I will stop asking..."
    "Just kidding, say yes please!  "

];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noBUtton.textContent = messages[messageIndex];
    messageIndex =(messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.computedStyleMap.fontSize = `${currentSize * 1.5}px`;

}

function handleYesClick() {
    window.location.href = "yes_page.html";
    
}


   



