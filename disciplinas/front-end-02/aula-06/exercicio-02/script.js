function darkMode() {

    let bodyDm = document.querySelector('body')
    bodyDm.classList.toggle('body-dm')

    let titulo = document.querySelector('h1')
    titulo.classList.toggle('h1-dm')

    let itens = document.querySelectorAll('.item')
    itens.forEach(itens => {
        itens.classList.toggle('item-dm')
    });

    let itensH2 = document.querySelectorAll('.item > h2')
    itensH2.forEach(itensH2 => {
        itensH2.classList.toggle('item-dm-h2')
    });

}

// let h4 = document.createElement("h4")
// h4.innerHTML = "Título 4"
// console.log(h4);

// let h4ElementoTextual = document.createTextNode("Título 4")
// h4.appendChild(h4ElementoTextual)

// let container1 = document.getElementById("container1")
// container1.appendChild(h4)

// container1.removeChild(h4)

// console.log(h4.parentElement);


var listaFelinos = document.querySelectorAll(".item")

listaFelinos.forEach(item => {
    var felinos = []
    felinos.push(felinos[item])

    console.log(listaFelinos);
})

function mostrarCard() {

    var botao = document.getElementById("mostrarCard");
    if (botao.style.display === "none") {
        listaFelinos.style.display = "block";
    } else {
        listaFelinos.style.display = "none";
    }

}


// container2.firstElementChild.remove()
// container2.firstElementChild.remove()
// container2.removeChild(listaFelinos[0])


// novaDiv.innerHTML = `
// <div  id="container2" class="container">
//     <div class="item">
//       <img src="./imagens/tiger.jpg">
//       <h2>O tigre</h2>
//       <p>
//         O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)
//         pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador
//         carnívoro e
//         é a maior espécie de felino do mundo junto com o leão.
//       </p>
//     </div>
// `
// container2.appendChild(novaDiv)
container2.insertBefore

// console.log(container2)
// window.onload = () => {
// }
