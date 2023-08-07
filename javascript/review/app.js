const reviews = [
    {
        id:1,
        name:"Rashed",
        job:"Laravel Developer",
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        text:
        "I am a laravel developer. I am a laravel developer. I am a laravel developer. I am a laravel developer. I am a laravel developer.",

    },
    {
        id:2,
        name:"Rashedul Aziz",
        job:"Web Developer",
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        text:
        "I am a learning JS. I am a laravel developer. I am a laravel developer. I am a laravel developer. I am a laravel developer.",

    },
    {
        id:3,
        name:"Rakib",
        job:"UX/UI Designer",
        img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        text:
        "I am a learning JS. I am a laravel developer. I am a laravel developer. I am a laravel developer. I am a laravel developer.",

    }
]
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem);
});
//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent =item.name;
    job.textContent =item.job;
    info.textContent =item.text;
}
//show next person

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});