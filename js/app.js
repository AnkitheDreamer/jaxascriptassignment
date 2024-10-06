// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = ''; // This will hold the full sentence
var storyParts = {
    subject: '',
    verb: '',
    adjective: '',
    object: '',
    place: ''
};

// Arrays for the random word selection
var subjects = ['The cat', 'A dog', 'The teacher', 'An astronaut', 'The doctor'];
var verbs = ['jumps', 'runs', 'flies', 'sings', 'dances'];
var adjectives = ['quickly', 'happily', 'angrily', 'elegantly', 'gracefully'];
var objects = ['a ball', 'the car', 'a spaceship', 'the computer', 'the phone'];
var places = ['in the park', 'on the moon', 'at home', 'in the office', 'at school'];

/* Functions */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Function to select a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Update the story parts and display the sentence in the paragraph
function updateStoryPart(part, value) {
    storyParts[part] = value;
    var fullStory = `${storyParts.subject} ${storyParts.verb} ${storyParts.adjective} with ${storyParts.object} ${storyParts.place}.`;
    document.getElementById('story-output').textContent = fullStory;
    textToSpeak = fullStory;
}

/* Event Listeners */
document.getElementById('subject-btn').onclick = function() {
    updateStoryPart('subject', getRandomWord(subjects));
};

document.getElementById('verb-btn').onclick = function() {
    updateStoryPart('verb', getRandomWord(verbs));
};

document.getElementById('adjective-btn').onclick = function() {
    updateStoryPart('adjective', getRandomWord(adjectives));
};

document.getElementById('object-btn').onclick = function() {
    updateStoryPart('object', getRandomWord(objects));
};

document.getElementById('place-btn').onclick = function() {
    updateStoryPart('place', getRandomWord(places));
};

document.getElementById('speak-btn').onclick = function() {
    speakNow(textToSpeak);
};
