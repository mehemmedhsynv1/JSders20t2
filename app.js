let span = document.querySelector("span");
span.style.paddingLeft = "20px"
span.innerHTML = "0";
span.style.fontSize = "32px";
let c = Number(span.style.fontSize.replace("px", ""));
let btn = document.querySelectorAll("button");
btn.forEach((a) => {
        a.addEventListener("click", () => {
            if(a.classList.contains("btn1")){
                span.innerHTML++;
            }else if(a.classList.contains("btn2")){
                span.innerHTML--;
            }else if(a.classList.contains("btn3")){
                span.innerHTML = +span.innerHTML + 5;
            }else if(a.classList.contains("btn4")){
                span.innerHTML -= 5;
            }else if(a.classList.contains("btn5")){
                let d1 = Math.floor(255*(Math.random()));
                let d2 = Math.floor(255*(Math.random()));
                let d3 = Math.floor(255*(Math.random()));
                span.style.color = "rgb("+ `${d1}` +","+ `${d2}`+ "," + `${d3}` + ")";
            }else if(a.classList.contains("btn6")){
                span.style.fontSize = ++c + "px";
            }else if(a.classList.contains("btn7")){
                span.style.fontSize = --c + "px";
            }
        })
})