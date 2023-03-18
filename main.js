import jsonData from './data.js';

let CARD_SUMMARY = document.querySelector(".card_summary-list")

jsonData.forEach(x => {

    let summary = document.createElement("div");
    let header = document.createElement("h3")    
    let paragraph = document.createElement("p");
    let img = document.createElement("img")

    summary.classList.add("card_sumary-body")
    summary.style.background = x.background
    header.innerText = x.category
    header.style.color = x.color
    img.src = x.icon
    img.alt = "icon"
    paragraph.innerHTML =`<span>${x.score}</span> / 100`

    summary.append(img);
    summary.append(header);
    summary.append(paragraph);

    CARD_SUMMARY.append(summary);
})

console.log(jsonData);