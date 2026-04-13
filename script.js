const scriptURL = "PASTE_YOUR_GOOGLE_SCRIPT_URL";

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
e.preventDefault();

btn.disabled = true;
btn.innerText = "Submitting...";

fetch(scriptURL, {
method: "POST",
body: new FormData(form)
})
.then(res => res.text())
.then(data => {
msg.innerHTML = "✅ Registration successful!";
form.reset();
})
.catch(err => {
msg.innerHTML = "❌ Something went wrong!";
})
.finally(() => {
btn.disabled = false;
btn.innerText = "Submit Registration";
});
});
