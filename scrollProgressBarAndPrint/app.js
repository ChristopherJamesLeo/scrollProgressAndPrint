console.log("hello world");
let progress= document.querySelector(".progress");
let progressBar = document.querySelector(".progress-bar");
window.onscroll = function(){
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const getClientHeight = document.documentElement.clientHeight;
    // console.log(scrollTop , scrollHeight);
    let calScroll = scrollHeight - getClientHeight ;
    let progressWidth = Math.floor(scrollTop / calScroll * 100); 
    progressBar.style.width = `${progressWidth}%`;
}
let printBtn = document.querySelector(".print-btn");
printBtn.addEventListener("click",e=()=>{
    window.print();
})