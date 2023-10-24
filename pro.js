const pass = document.getElementById("pass")
const btn = document.getElementById("btn")
const bod = document.getElementById("body")
const inp = document.getElementById("inp")
const small = document.getElementById("small")
const btn2 = document.getElementById("btn2")
btn.addEventListener("click",()=>{
    if (pass.value == "12345" && inp.value=="arsalan") {
        btn.innerHTML=`<a href="pro.html" class="myButton d-flex justify-content-center" id="btn2">✔</a> `;
        btn.style.animation="annn 1 1s"
        small.innerHTML="correct";
        small.style.color="green";}
        else{small.innerHTML="incorrect";small.style.color="red"}
    // console.log(inp.value);
    // console.log(pass.value);
}    
)


