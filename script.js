const scriptURL = "PASTE_YOUR_GOOGLE_SCRIPT_URL";

const form = document.getElementById("form");
const btn = document.getElementById("submitBtn");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  btn.disabled = true;
  btn.innerText = "Submitting...";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    msg.innerHTML = "✅ Registration Successful!";
    form.reset();
  })
  .catch(err => {
    msg.innerHTML = "❌ Error! Try again.";
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerText = "Register";
  });
});
