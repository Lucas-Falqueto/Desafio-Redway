const inputEmail = document.getElementById("inputEmail")
const alert = document.querySelector(".alert")
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailUser = {
        email: inputEmail.value,
    }
    fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(emailUser),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert.innerHTML = data.error
                alert.classList.remove('alert-success');
                alert.classList.add('alert-warning');
                alert.style.display = "block"
                setTimeout(() => alert.style.display = "none", 5000)
            } else {
                alert.innerHTML = data.success
                alert.classList.remove('alert-warning');
                alert.classList.add('alert-success');
                alert.style.display = "block"
                setTimeout(() => alert.style.display = "none", 5000)
                inputEmail.value = ""
            }
        })
});