const hamburgerButton=document.getElementById("hamburger")
const navList=document.getElementById("navList")

function toggleButton(){
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener("click",toggleButton)

const switchBtn=document.querySelector('.switch');
switchBtn.addEventListener("click",()=>{
   document.body.classList.toggle("dark");
   console.log("click");
})