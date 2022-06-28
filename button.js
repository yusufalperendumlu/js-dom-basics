var div = document.createElement('div')
div.setAttribute("id", "root");

document.body.appendChild(div);

var button = document.createElement("button")
button.setAttribute("id", "alperen");
button.setAttribute("class", "dumlu");
button.innerHTML = "Hover in to Me";
button.setAttribute("style", "background-color: orange;color:white; border:2px solid red");

button.addEventListener("mouseenter", function () {
    button.innerHTML = "Hover out to Me";
    button.setAttribute("style", "background-color:blue;color:black;padding:5px 8px 3px;border-radius:5px")
})

button.addEventListener("mouseleave", function () {
    button.innerHTML = "Hover in to Me";
    button.setAttribute("style", "background-color: orange;color:white; border:2px solid red");
})

div.appendChild(button);


button.addEventListener("click", function () {
    button.innerHTML = "Click Again";
    if (button.style.backgroundColor === "blue" || button.style.backgroundColor === "orange") {
        button.setAttribute('style', 'background-color:red')
    } else {
        button.setAttribute("style", "background-color: blue;color:white; border:2px solid red");
    }

})






//id = root
//button id =ad class= soyad
//bgc=truun color=wht
//brnim uzerime gel
//geldiğinde çık yazısı
//çekşnce eski haline dön
