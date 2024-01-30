const form = document.getElementById("form")
const emailInput = document.getElementById("email")
const errText = document.getElementById("error")
const main = document.getElementById("main")
const article = document.getElementById("article")
function submitFunc(event) {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(!emailRegex.test(emailInput.value)) {
    errText.style.display = "block"
    emailInput.style.borderColor = "hsl(4, 100%, 67%)"
    emailInput.style.color = "hsl(4, 100%, 67%)"
    return;
  }
  main.style.display = "none"
  article.style.display = "block"
}

function dismiss() {
  main.style.display = "flex"
  article.style.display = "none"
  emailInput.value = ""
  errText.style.display = "none"
}
