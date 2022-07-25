var link=document.querySelector(".login_link");
var popup=document.querySelector(".modal_login");
var close=document.querySelector(".modal_close");
var login=popup.querySelector("[name=login]");
var password=popup.querySelector("[name=password]");
var form=popup.querySelector("form");


link.addEventListener('click', function(evt){evt.preventDefault(); popup.classList.add("modal_show");
login.focus();
});

close.addEventListener("click", function(evt){evt.preventDefault(); popup.classList.remove("modal_show");})
form.addEventListener("submit", function (evt){evt.preventDefault();
console.log("отправляем форму");})

