function displayDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleString('en-US', options);
    const timeString = now.toLocaleTimeString();
    document.getElementById('date-time').innerHTML = `Today is ${timeString} on ${dateString}`;
}

function greetUser() {
    const userName = document.getElementById('user-name').value;
    const userFeeling = document.getElementById('user-feeling').value;
    const greeting = `Welcom ${userName}! We're glad you are doing ${userFeeling}!`;
    document.getElementById('user-greeting').innerText = greeting;
}

function showPolygon() {
    const favoriteNumber = Math.abs(Math.round(document.getElementById('favorite-number').value));
    const polygons = [
        'Digon', 'Trigon', 'Tetragon', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon', 'Hendecagon'
    ];
    const polygonName = polygons[favoriteNumber] || `A polygon with ${favoriteNumber} sides`;
    const polygonText = `A polygon with ${favoriteNumber} sides is called: ${polygonName}`;
    document.getElementById('polygon-output').innerText = polygonText;
}

function provideInsult() {
    const insults = [
        "You're like a cloud — when you disappear, it’s a beautiful day.",
        "I'd agree with you, but then we'd both be wrong.",
        "You're the human version of a participation trophy.",
        "You have the perfect face for radio.",
        "I'd explain it to you, but I left my English-to-Dingbat dictionary at home.",
        "You're proof that even a broken clock is right twice a day.",
        "I would’ve given you a nasty look, but you already have one.",
        "You're like a software update — always popping up when I’m least ready for you.",
        "You're like a phone with no signal — I can’t connect with you.",
        "If ignorance is bliss, you must be the happiest person alive."
      ];
    document.getElementById('function-output').textContent = insults[Math.floor(Math.random() * insults.length)];
}

function calculateTax() {
    const amount = prompt("Enter the amount to calculate tax:");
    const taxRate = 0.1;
    const tax = (parseFloat(amount) * taxRate).toFixed(2);
    const taxText = `The tax on $${amount} is $${tax}`;
    document.getElementById('function-output').textContent = taxText;
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const randomNumberText = `Your random number is: ${randomNumber}`;
    document.getElementById('function-output').textContent = randomNumberText;
}

function calculateSum() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    const sumText = `The sum of ${num1} and ${num2} is: ${sum}`;
    document.getElementById('function-output').textContent = sumText;
}

function showAnimalMessage() {
    const messageText = "Our animal brandThe kind bear is a gentle giant of the forest, whose warm heart and calm presence bring comfort to all who encounter it, proving that strength can coexist with compassion. is the fastest and most loyal in the jungle!";
    document.getElementById('function-output').textContent = messageText;
}

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', greetUser);

    const submitNumberButton = document.getElementById('submit-number');
    submitNumberButton.addEventListener('click', showPolygon);

    const insultButton = document.getElementById('insult-button');
    insultButton.addEventListener('click', provideInsult);

    const taxButton = document.getElementById('tax-button');
    taxButton.addEventListener('click', calculateTax);

    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener('click', generateRandomNumber);

    const sumButton = document.getElementById('sum-button');
    sumButton.addEventListener('click', calculateSum);

    const animalMessageButton = document.getElementById('animal-message-button');
    animalMessageButton.addEventListener('click', showAnimalMessage);
});

window.onload = displayDateTime;
