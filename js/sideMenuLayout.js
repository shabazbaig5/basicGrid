window.onload = () => {

    console.log("locked and loaded");

}

document.querySelector("#showModal").addEventListener('click' , () => {

    console.log("clicked");

    document.querySelector('.modalContainer').style.display = "grid";

});

document.querySelector('#modalClose i').addEventListener('click', () => {

    document.querySelector('.modalContainer').style.display = "none";


});


// document.querySelector')


