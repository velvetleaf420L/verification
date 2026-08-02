async function loadVerification() {
    try {
        const response = await fetch("code.txt?t=" + Date.now());
        const text = await response.text();

        const lines = text.trim().split("\n");

        document.getElementById("code").innerText = lines[0];
        document.getElementById("updated").innerText = lines[1];

    } catch (e) {
        document.getElementById("code").innerText = "ERROR";
        document.getElementById("updated").innerText = "Unable to load";
    }
}

loadVerification();
