let string = "";
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if (e.target.innerText == "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerText == "C"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if (button.id == "remove"){
           string = string.slice(0,-1);
           console.log("button is clicked");
           document.querySelector("input").value = string;
        }
        else {
            console.log(e.target)
            string += e.target.innerText;
            document.querySelector("input").value = string;
        }
    })
});