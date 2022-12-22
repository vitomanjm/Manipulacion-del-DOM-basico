const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pid = document.querySelector('#pid');

const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event) {
   console.log("Escuchando JS");
   event.preventDefault();
   console.log(input1.value + input2.value);

    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado es igual a: " + sumaInputs;
}


/*

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

/*h1.innerHTML = 'Hola World <br> Feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'puta');
h1.classList.add('rojo');
h1.classList.add('verde');
h1.classList.toggle("rojo");
h1.classList.contains("verde");

input.value ="ola";

const img = document.createElement("img");
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2022/12/03/13/01/butterfly-7632646_960_720.jpg')
console.log(img);

pid.append(img);*/