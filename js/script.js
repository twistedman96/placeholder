const cont = document.getElementById('data');

let news = [
    {
        img_path: "./img/halo_infinite_keyart.jpg",
        header: "Why Halo Infinite doesn't look nextgen?",
        text: "Key points from the newest DF analysis",
        date: "Jul 25, 2020"
    },
    {
        img_path: "./img/127274-Farcry-6-7.jpg",
        header: "Ubisoft confirmed Far Cry 6 will run at 4K",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "Jul 25, 2020"
    },
    {
        img_path: "./img/e652b02e3e2cbe3c_848x477.jpg",
        header: "Ghost of Tsushima has sold more than 2.4M copies",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "Jul 24, 2020"
    },
    {
        img_path: "./img/psychonauts-2-na-sozdanie-igry-pozhertvovano-bolee-2-mln-750x420.jpg",
        header: "New Psyconauts 2 trailer with Jack Black's song",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "Jul 23, 2020"
    },
    {
        img_path: "./img/03.jpg",
        header: "14 minutes of Mafia Remake gameplay",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        date: "Jul 22, 2020"
    }
];

function init() {
    cont.innerHTML = '';
    for (let i = 0; i < news.length; i++) {
        cont.innerHTML += `
            <div class="card" style="width: 18rem;">
                <a href="">
                    <img src="${news[i].img_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${news[i].header}</h5>
                    <p class="card-text">${news[i].text}</p>
                    <p class="card-text">${news[i].date}</p>
                    </div>
                </a>
            </div>
        `;
    }
}

init();