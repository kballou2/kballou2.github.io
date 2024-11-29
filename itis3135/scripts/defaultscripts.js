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
    const greeting = `${userName} welcomes you! We're glad you are doing ${userFeeling}!`;
    document.getElementById('user-greeting').innerText = greeting;
}

function showPolygon() {
    const favoriteNumber = Math.abs(Math.round(document.getElementById('favorite-number').value));
    const polygons = [
        'Digon', 'Trigon', 'Tetragon', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon', 'Hendecagon'
    ];
    const polygonName = polygons[favoriteNumber] || `A polygon with ${favoriteNumber} sides`;
    alert(`A polygon with ${favoriteNumber} sides is called: ${polygonName}`);
}

function provideInsult() {
    alert("You're slower than a sloth on a lazy day!");
}

function calculateTax() {
    const amount = prompt("Enter the amount to calculate tax:");
    const taxRate = 0.1;
    const tax = (parseFloat(amount) * taxRate).toFixed(2);
    alert(`The tax on $${amount} is $${tax}`);
}

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Your random number is: ${randomNumber}`);
}

function calculateSum() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is: ${sum}`);
}

function showAnimalMessage() {
    alert("Our animal brand is the fastest and most loyal in the jungle!");
}

window.onload = displayDateTime;
