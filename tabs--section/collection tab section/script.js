 document.getElementById("btn--1").addEventListener("click", () => {
     document.getElementById("btn--1").classList.add("active")
     document.getElementById("btn--2").classList.remove("active")
     document.getElementById("btn--3").classList.remove("active")
     console.clear();
     console.log("tab--1");
     document.getElementById("tab--1").style.display = "flex";
     document.getElementById("tab--2").style.display = "none";
     document.getElementById("tab--3").style.display = "none";




 })
 document.getElementById("btn--2").addEventListener("click", () => {
     document.getElementById("btn--1").classList.remove("active")
     document.getElementById("btn--2").classList.add("active")
     document.getElementById("btn--3").classList.remove("active")
     console.clear();
     console.log("tab--2");
     document.getElementById("tab--1").style.display = "none";
     document.getElementById("tab--2").style.display = "flex";
     document.getElementById("tab--3").style.display = "none";



 })
 document.getElementById("btn--3").addEventListener("click", () => {
     document.getElementById("btn--1").classList.remove("active")
     document.getElementById("btn--2").classList.remove("active")
     document.getElementById("btn--3").classList.add("active")
     console.clear();
     console.log("tab--3");
     document.getElementById("tab--1").style.display = "none";
     document.getElementById("tab--2").style.display = "none";
     document.getElementById("tab--3").style.display = "flex";


 })