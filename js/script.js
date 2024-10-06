

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
 // Đọc dữ liệu từ file .csv and update vocabWords
 fetch('data.csv')
 .then(response => response.text())
 .then(data => {
     const rows = data.split('\n');
     vocabWords = rows.map(row => {
         const [word, definition] = row.split(',');
         return { word, definition };
     });
     // Update flashcard content with new data (if needed)
     vocabWordElement.textContent = currentWord.word; // Update word based on currentWordIndex
     vocabDefinitionElement.textContent = currentWord.definition; // Assuming you want definition on front of card (modify as needed)
 });
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

//Reponsive
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.checked = !menuToggle.checked;
});
