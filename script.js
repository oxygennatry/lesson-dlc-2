document.querySelector(".open").addEventListener('click', openModal);
document.querySelector(".close").addEventListener('click', closeModal);

function openModal() {
    let div = document.querySelector(".b1");
    let img = document.querySelector(".open");

    div.style.display = "block";
    img.classList.add("small");
    div.style.backgroundImage = "url('kvd.jpg')";
}

function closeModal() {
    let div = document.querySelector(".b1");
    let img = document.querySelector(".open");

    div.style.display = "none";
    img.classList.remove("small");
}
