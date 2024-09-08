// Các từ vựng và định nghĩa
const vocabWords = [
    { word: "abundant", definition: "Existing in large quantities; plentiful." },
    { word: "benevolent", definition: "Well meaning and kindly." },
    { word: "candid", definition: "Truthful and straightforward." },
    { word: "diligent", definition: "Showing care in one's work or duties." },
    { word: "empathy", definition: "The ability to understand and share the feelings of another." }
];

let currentWordIndex = 0;
let flipped = false;
let progress = 0;

// Lấy các phần tử từ HTML
const vocabWordElement = document.getElementById('vocabWord');
const vocabDefinitionElement = document.getElementById('vocabDefinition');
const progressBar = document.getElementById('progressBar');
const flipBtn = document.getElementById('flipBtn');
const nextBtn = document.getElementById('nextBtn');

// Cập nhật nội dung flashcard
function updateFlashcard() {
    const currentWord = vocabWords[currentWordIndex];
    vocabWordElement.textContent = currentWord.word;
    vocabDefinitionElement.textContent = "Front of the card";
    flipped = false;
}

// Chuyển sang từ tiếp theo
function nextWord() {
    if (currentWordIndex < vocabWords.length - 1) {
        currentWordIndex++;
        updateFlashcard();
        updateProgress();
    } else {
        alert("You've completed the set!");
    }
}

// Cập nhật tiến độ
function updateProgress() {
    progress = ((currentWordIndex + 1) / vocabWords.length) * 100;
    progressBar.style.width = progress + "%";
    progressBar.textContent = Math.floor(progress) + "%";
}

// Lật flashcard
flipBtn.addEventListener('click', function () {
    const currentWord = vocabWords[currentWordIndex];
    if (!flipped) {
        vocabDefinitionElement.textContent = currentWord.definition;
        flipped = true;
    } else {
        vocabDefinitionElement.textContent = "Front of the card";
        flipped = false;
    }
});

// Chuyển sang từ tiếp theo
nextBtn.addEventListener('click', nextWord);

// Khởi tạo flashcard ban đầu
updateFlashcard();
