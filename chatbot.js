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

let rules = [];

        function addRule() {
            const keyword = document.getElementById('keyword').value.trim();
            const response = document.getElementById('response').value.trim();

            if (keyword && response) {
                rules.push({ keyword: keyword.toLowerCase(), response: response });
                document.getElementById('keyword').value = '';
                document.getElementById('response').value = '';
                displayRules();
            } else {
                alert('Harap isi kedua kolom sebelum menambah aturan!');
            }
        }

        function displayRules() {
            const rulesDisplay = document.getElementById('rulesDisplay');
            rulesDisplay.innerHTML = '';
            rules.forEach((rule, index) => {
                rulesDisplay.innerHTML += `<li>${index + 1}. Jika: "${rule.keyword}", Respon: "${rule.response}"</li>`;
            });
        }

        function exportChatbot() {
            const chatbotHTML = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot AIGONOMETRI</title>
    <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet">
    <style>
        body { font-family: Arial, sans-serif; background-color: #e0f2ff; padding: 20px; }
        .chatbot { position: fixed; bottom: 15px; right: 20px; width: 350px; }
        .chataigonometri { background: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden; }
        header { background-color: #1a73e8; color: white; padding: 15px; text-align: center; }
        .chatbox { list-style: none; padding: 15px; height: 300px; overflow-y: scroll; background: #f9f9f9; }
        .chat { display: flex; margin-bottom: 10px; }
        .incoming span { color: #1a73e8; margin-right: 10px; }
        .outgoing { justify-content: flex-end; }
        .chat p { background: #e0f2ff; padding: 10px; border-radius: 10px; max-width: 70%; }
        .outgoing p { background: #1a73e8; color: white; }
        .chat-input { display: flex; border-top: 1px solid #ddd; }
        .chat-input textarea { flex: 1; border: none; padding: 10px; border-radius: 0; resize: none; }
        .chat-input span { background: #1a73e8; color: white; padding: 15px; cursor: pointer; }
    </style>
</head>
<body>
    <section class="chatbot">
        <div class="chataigonometri">
            <header><h2>AIGONOMETRI</h2></header>
            <ul class="chatbox">
                <li class="chat incoming">
                    <span><i class="bx bxs-user"></i></span>
                    <p>Hai, ayo uji chatbot yang kamu buat!</p>
                </li>
            </ul>
            <div class="chat-input">
                <textarea placeholder="Ketik disini..." required></textarea>
                <span><i class="bx bx-send"></i></span>
            </div>
        </div>
    </section>

    <script>
        let rules = ${JSON.stringify(rules)};

        function setupChatbot() {
            const textarea = document.querySelector(".chat-input textarea");
            const sendBtn = document.querySelector(".chat-input span");
            const chatbox = document.querySelector(".chatbox");

            sendBtn.addEventListener("click", () => {
                const userInput = textarea.value.trim().toLowerCase();
                if (userInput === "") return;

                chatbox.innerHTML += '<li class="chat outgoing"><p>' + textarea.value + '</p></li>';
                textarea.value = "";

                let botResponse = "Maaf, saya tidak mengerti.";
                for (let rule of rules) {
                    if (userInput.includes(rule.keyword)) {
                        botResponse = rule.response;
                        break;
                    }
                }

                setTimeout(() => {
                    chatbox.innerHTML += '<li class="chat incoming"><span><i class="bx bxs-user"></i></span><p>' + botResponse + '</p></li>';
                    chatbox.scrollTop = chatbox.scrollHeight;
                }, 500);
            });
        }

        window.onload = setupChatbot;
    </script>
</body>
</html>
`;

            const blob = new Blob([chatbotHTML], { type: "text/html" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "chatbot_aigonometri.html";
            link.click();
        }