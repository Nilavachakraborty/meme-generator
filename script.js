
const generatormemebtn = document.querySelector(".meme-generator. generator-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const updateDetails = (url, title) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    
}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/2").then((response) => response.json()).then((data) => {
        updateDetails(data.url, data.title);
    });
};


generatormemebtn.addEventListener("click", generateMeme); 