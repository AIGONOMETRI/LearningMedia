var keatas = document.querySelector('.kembali-keatas');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        keatas.classList.add("active");
    } else {
        keatas.classList.remove("active");
    }
});
function updateJam() {
    var skr = new Date();
    var ha = skr.getDay(),
        bul = skr.getMonth(),
        tgl = skr.getDate(),
        thn = skr.getFullYear(),
        ho = skr.getHours(),
        mnt = skr.getMinutes(),
        dtk = skr.getSeconds(),
        pe = "AM";
    if (ho == 0) {
        ho = 12;
    }
    if (ho > 12) {
        ho = ho - 12;
        pe = "PM";
    }
    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var ids = ["hari", "bulan", "tanggal", "tahun", "hour", "menit", "detik", "AMPM"];
    var values = [hari[ha], bulan[bul], tgl, thn, ho.pad(2), mnt.pad(2), dtk.pad(2), pe];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).textContent = values[i];
}

function initJam() {
    updateJam();
    window.setInterval(updateJam, 1000);
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

var nvb = document.getElementById("nvb")
function showMenu(){
    nvb.style.right = "0";
}
function hideMenu(){
    nvb.style.right = "-200px";
}
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
draggables.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.textContent);
    });
});
dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => e.preventDefault());
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        zone.textContent = data;
    });
});
const draggablesSpecial = document.querySelectorAll('.draggable-special');
const dropzonesSpecial = document.querySelectorAll('.dropzone-special');

draggablesSpecial.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.textContent);
    });
});

dropzonesSpecial.forEach(zone => {
    zone.addEventListener('dragover', (e) => e.preventDefault());
    zone.addEventListener('drop', (e) => {
        const data = e.dataTransfer.getData('text');
        if (data === zone.dataset.answer) {
            zone.textContent = data;
            zone.classList.add('filled');
        } else {
            alert('Jawaban salah, coba lagi!');
        }
    });
});
function checkAnswers() {
    let score = 0;
    // Check drag-and-drop
    dropzones.forEach(zone => {
        if (zone.textContent === zone.dataset.answer) {
            score++;
            zone.style.backgroundColor = '#d4edda';
        } else {
            zone.style.backgroundColor = '#f8d7da';
        }
    });
    // Check fill-in-the-blank
    document.querySelectorAll('.fill-blank').forEach(input => {
        if (input.value === input.dataset.answer) {
            score++;
            input.style.backgroundColor = '#d4edda';
        } else {
            input.style.backgroundColor = '#f8d7da';
        }
    });
    document.getElementById('result').textContent = `Skor Anda: ${score}/7`;
}
function checkDropdownAnswer() {
    const dropdown = document.getElementById('answer-dropdown');
    const result = document.getElementById('dropdown-result');
    const selectedAnswer = dropdown.value;

    if (selectedAnswer === "30") {
        result.textContent = "✅ Jawaban benar! Tinggi menara adalah 30 meter.";
        result.style.color = "green";
    } else if (selectedAnswer === "") {
        result.textContent = "⚠️ Silakan pilih jawaban terlebih dahulu.";
        result.style.color = "orange";
    } else {
        result.textContent = "❌ Jawaban salah. Coba lagi!";
        result.style.color = "red";
    }
}
function checkDropdownAnswer21() {
    const correctAnswers = ["21", "32", "13", "14", "15", "16"];
    const selects = document.querySelectorAll(".question .drop-down1");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultdr21 = document.getElementById("dropdown-result21");
    if (score === correctAnswers.length) {
        resultdr21.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultdr21.style.color = "green";
    } else {
        resultdr21.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultdr21.style.color = "orange";
    }
}
function checkDropdownAnswer22() {
    const correctAnswers = ["41", "32", "23", "14", "25", "36"];
    const selects = document.querySelectorAll(".question .drop-down2");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultdr21 = document.getElementById("dropdown-result22");
    if (score === correctAnswers.length) {
        resultdr21.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultdr21.style.color = "green";
    } else {
        resultdr21.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultdr21.style.color = "orange";
    }
}
function checkDropdownAnswer23() {
    const correctAnswers = ["41", "12", "13", "14", "35", "16"];
    const selects = document.querySelectorAll(".question .drop-down3");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultdr21 = document.getElementById("dropdown-result23");
    if (score === correctAnswers.length) {
        resultdr21.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultdr21.style.color = "green";
    } else {
        resultdr21.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultdr21.style.color = "orange";
    }
}
function checkDropdownAnswer24() {
    const correctAnswers = ["41", "32", "13", "44", "25", "36", "37"];
    const selects = document.querySelectorAll(".question .drop-down4");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultdr21 = document.getElementById("dropdown-result24");
    if (score === correctAnswers.length) {
        resultdr21.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultdr21.style.color = "green";
    } else {
        resultdr21.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultdr21.style.color = "orange";
    }
}
function checkDropdownAnswer25() {
    const correctAnswers = ["11", "12", "13"];
    const selects = document.querySelectorAll(".question .drop-down5");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultdr21 = document.getElementById("dropdown-result25");
    if (score === correctAnswers.length) {
        resultdr21.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultdr21.style.color = "green";
    } else {
        resultdr21.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultdr21.style.color = "orange";
    }
}
function checkAnswersE() {
    const correctAnswers = ["O(0, 0)", "(x,y)", "sisi samping", "sisi depan", "sisi miring"];
    const selects = document.querySelectorAll(".wrapper-activity select");
    let score = 0;

    selects.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            score++;
            select.style.border = "2px solid green";
        } else {
            select.style.border = "2px solid red";
        }
    });

    const resultE = document.getElementById("resultE");
    if (score === correctAnswers.length) {
        resultE.innerHTML = "🎉 Jawabanmu benar semua! Hebat! 🎯";
        resultE.style.color = "green";
    } else {
        resultE.innerHTML = `Kamu benar ${score} dari ${correctAnswers.length} jawaban. Coba periksa lagi ya! 😊`;
        resultE.style.color = "orange";
    }
}
// Fitur Chatbot
const nlpToggler = document.querySelector(".chat-toggler");
nlpToggler.addEventListener("click", () => document.body.classList.toggle("show-chataigonometri"));

const rules = {
    "sin(180-a)": ["sin(a)", "sina"],
    "cos(180-a)": ["-cos(a)", "-cosa"],
    "tan(180-a)": ["-tan(a)", "-tana"],
    "sin(180+a)": ["-sin(a)", "-sina"],
    "cos(180+a)": ["-cos(a)", "-cosa"],
    "tan(180+a)": ["tan(a)", "tana"],
    "sin(360-a)": ["-sin(a)"],
    "cos(360-a)": ["cos(a)"],
    "tan(360-a)": ["-tan(a)"],
    "sin(0)": ["sin(180)", "sin(360)", "-sin(180)", "-sin(360)"],
    "cos(0)": ["cos(180)", "cos(360)", "-cos(180)"],
    "tan(0)": ["tan(180)", "tan(360)", "-tan(180)", "-tan(360)"],
    "sin(30)": ["sin(150)", "-sin(210)", "-sin(330)"],
    "cos(30)": ["-cos(150)", "-cos(210)", "cos(330)"],
    "tan(30)": ["-tan(150)", "tan(210)", "-tan(330)"],
    "sin(45)": ["sin(135)", "-sin(225)", "-sin(315)"],
    "cos(45)": ["-cos(135)", "-cos(225)", "cos(315)"],
    "tan(45)": ["-tan(135)", "tan(225)", "-tan(315)"],
    "sin(60)": ["sin(120)", "-sin(240)", "-sin(300)"] ,
    "cos(60)": ["cos(300)", "-cos(120)", "-cos(240)"],
    "tan(60)": ["-tan(120)", "tan(240)", "-tan(300)"],
    "sin(90)": ["-sin(270)"],
    "cos(90)": ["-cos(270)"],
    "tan(90)": ["tan(270)"]
};

const chatbox = document.querySelector('.chatbox');
const chatInput = document.querySelector('.chat-input textarea');
const sendButton = document.querySelector('.chat-input span');

let chatHistory = [];
const correctFeedbacks = [
    "Mantap! Kamu benar! 😊", "Keren, jawabanmu tepat! 🎯", "Bagus banget, lanjutkan! 💪", 
    "Yes! Itu jawaban yang benar! 🎉", "Jawabanmu betul, tetap semangat! 🔥", "Hebat, kamu paham konsepnya! 👍", 
    "Nice! Jawabanmu pas banget! 👌", "Wuihh, benar sekali! 🚀", "Kamu jenius, itu benar! 🧠", 
    "Sip! Jawabanmu sudah oke! ✅", "Luar biasa! Tetap lanjutkan! 🌟", "Jawabanmu tepat, lanjut terus! 💯", 
    "Benar sekali! Kamu makin paham nih! 🏆", "Asik! Kamu menjawab dengan benar! 🎊", "Kamu keren! Jawabanmu tepat! 🔥"
];

function addMessage(content, sender) {
    const messageElement = document.createElement('li');
    messageElement.classList.add('chat', sender === 'Siswa' ? 'outgoing' : 'incoming');
    if (sender !== 'Siswa') {
        const icon = document.createElement('span');
        icon.innerHTML = `<img src="icon.png" alt="">`;
        messageElement.appendChild(icon);
    }

    const messageText = document.createElement('p');
    messageText.textContent = content;
    messageElement.appendChild(messageText);
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;

    chatHistory.push({ sender: sender, message: content });
}

function preprocessInput(input) {
    return input.replace(/\s+/g, '').replace(/°/g, '').toLowerCase();
}

function processInput() {
    const userInput = chatInput.value.trim();
    if (!userInput) return;
    const processedInput = preprocessInput(userInput);

    if (!processedInput.includes('=')) {
        addMessage(userInput, 'Siswa');
        addMessage('Maaf, format jawabanmu salah! Gunakan format "sin(A) = sin(A)".', 'AIGONOMETRI');
        chatInput.value = '';
        return;
    }

    const [lhs, rhs] = processedInput.split('=').map(s => s.trim());
    if (!lhs || !rhs) {
        addMessage(userInput, 'Siswa');
        addMessage('Maaf, format jawabanmu salah! Pastikan tidak ada bagian yang kosong.', 'AIGONOMETRI');
        chatInput.value = '';
        return;
    }

    addMessage(userInput, 'Siswa');
    
    const thinkingMessage = document.createElement('li');
    thinkingMessage.classList.add('chat', 'incoming');
    thinkingMessage.innerHTML = `<span><img src="icon.png" alt=""></span><p>Sedang berpikir...</p>`;
    chatbox.appendChild(thinkingMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
    
    setTimeout(() => {
        chatbox.removeChild(thinkingMessage);
        if (Array.isArray(rules[lhs]) && rules[lhs].includes(rhs) || rules[lhs] === rhs) {
            const randomFeedback = correctFeedbacks[Math.floor(Math.random() * correctFeedbacks.length)];
            addMessage(randomFeedback, 'AIGONOMETRI');
        } else {
            addMessage('Yah, Maaf Jawabanmu salah. Cek kembali lalu ketikkan lagi jawabanmu di sini ya!', 'AIGONOMETRI');
        }
    }, Math.floor(Math.random() * 1000) + 1000);
    
    chatInput.value = '';
}

function downloadChatAsTXT() {
    const chatContent = chatHistory.map(item => `${item.sender}: ${item.message}`).join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat_history.txt';
    link.click();
}

function downloadChatAsJSON() {
    const blob = new Blob([JSON.stringify(chatHistory, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat_history.json';
    link.click();
}

sendButton.addEventListener('click', processInput);

chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        processInput();
    }
});
document.getElementById('download-txt').addEventListener('click', downloadChatAsTXT);
document.getElementById('download-json').addEventListener('click', downloadChatAsJSON);

function downloadAnswers() {
    const answers = document.querySelectorAll('.answer-box');
    let content = "Jawaban Kegiatan Trigonometri:\n\n";

    answers.forEach((answer, index) => {
        content += `Pertanyaan ${index + 1}: ${answer.value}\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'jawaban kegiatan 1.txt';
    link.click();
}
function downloadAnswers2() {
    const answers = document.querySelectorAll('.answer-box');
    const dropdowns = document.querySelectorAll('select');
    let content = "Jawaban Kegiatan Trigonometri:\n\n";

    // Mengambil jawaban dari input teks
    answers.forEach((answer, index) => {
        content += `Pertanyaan ${index + 1}: ${answer.value}\n`;
    });

    // Mengambil jawaban dari dropdown
    dropdowns.forEach((dropdown, index) => {
        const selectedOption = dropdown.options[dropdown.selectedIndex].text;
        content += `Dropdown ${index + 1}: ${selectedOption}\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'jawaban kegiatan 2.txt';
    link.click();
}

function periksaJawaban() {
    document.querySelectorAll('.pembahasan').forEach(el => {
        el.style.display = 'block';
    });
}