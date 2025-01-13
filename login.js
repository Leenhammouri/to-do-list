function login() {
  const emailInput = document.getElementById("email").value;
  const errorSpan = document.getElementById("errorSpan");

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInput)) {
    sessionStorage.setItem("emailValue", emailInput);
    window.location.href = "home.html";
  } else {
    errorSpan.style.display = "block";
  }
}
