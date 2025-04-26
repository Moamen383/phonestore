const scriptURL = "https://script.google.com/macros/s/AKfycbwvYm8F154lzdS36s9xKwLSUyVNilp5x1mpsyVAUNdMk3oNdr0OFEPtCdiA7hblqcb0/exec"

let form = document.getElementById("form_contact");


form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method: "POST",
        body: new FormData(form),
    })
    .then((response) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error) => console.error("eroor!" , error.message))
})