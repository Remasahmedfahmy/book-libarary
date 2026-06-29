const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}
// ///////////////////////////////////////
const cursor = document.querySelector(".magic-cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("button,a").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.fontSize="42px";
        cursor.style.color="#ffffff";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.fontSize="28px";
        cursor.style.cursor="none";

    });

});

// ///////////////////////////////////////


const words=["رواية","خيال","سحر","أسطورة","مغامرة","مستقبل"];

setInterval(()=>{

const word=document.createElement("div");

word.className="floating";

word.innerText=words[Math.floor(Math.random()*words.length)];

word.style.left=Math.random()*90+"vw";

word.style.top=Math.random()*90+"vh";

document.body.appendChild(word);

setTimeout(()=>word.remove(),5000);

},1200);
// ///////////////////////////////////////
const btn = document.getElementById("enter-btn");
const portal = document.getElementById("portal");
const hero = document.querySelector(".hero");
const background = document.getElementById("background");

btn.addEventListener("click",()=>{

    hero.style.opacity="0";

    portal.classList.add("portal-open");

    background.classList.add("world-enter");

setTimeout(()=>{

    hero.style.display="none";

    portal.style.display="none";

    document.getElementById("library-section").style.display="flex";
    document.getElementById("library-section")
        .classList.add("show-books");

},1800);
setTimeout(()=>{

    hero.style.display="none";

    document.getElementById("library-section").style.display="flex";

},1400);
setTimeout(()=>{

    portal.style.display="none";

},2600);

});

// ///////////////////////////////////////
setInterval(()=>{

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.getElementById("stars").appendChild(star);

setTimeout(()=>{
star.remove();
},4000);

},300);

// ///////////////////////////////////////
