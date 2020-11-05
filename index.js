var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var inputSection = document.getElementById("input-section")
var submit = document.getElementById("submit")
var response = document.getElementById("response")
var winResult = document.getElementById("win-result")
var looseResult = document.getElementById("loose-result")
winResult.style.display = "none"
var link = document.getElementById("answer-here")
var wrong = document.createElement("div")
var i = document.createElement("i")
wrong.appendChild(i)
i.classList.add("far", "fa-times-circle", "fa-4x", "wrong-color")

submit.addEventListener("click", () => {

    if ("motivation" === answer1.value.toLowerCase() && "innovation" === answer2.value.toLowerCase() && "transformation" === answer3.value.toLowerCase()) {
        response.innerText = "Congrats You Can Proceed"
        link.setAttribute("href", "https://www.google.com/")
        inputSection.style.display = "none"
        winResult.style.display = ""
        winResult.classList.add("animate")
    } else {
        looseResult.style.display = ""
        response.innerHTML = "<div><h4>Wrong Answer! Please Try Again</h4><i></i></div>"
        response.appendChild(wrong)

        setTimeout(() => {
            response.innerText = "Enter the answer to activate link"
        }, 3000);
    }
    answer.value = ""


})


