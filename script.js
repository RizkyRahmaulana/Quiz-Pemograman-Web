// Pesan Selamat Datang

window.onload = function(){

alert("Selamat Datang di Website Kebudayaan Melayu");

}

// Efek Klik Menu

const menu = document.querySelectorAll("nav a");

menu.forEach(item=>{

item.addEventListener("click",function(){

console.log("Membuka : "+this.innerHTML);

});

});

// Form

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Terima kasih telah mengirim pesan.");

form.reset();

});