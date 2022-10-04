// main.js
// 현재시간
const span = document.querySelectorAll("header>h1>span");

let timer = setInterval(()=>{
    let today = new Date ();
    let nowHour = today.getHours();
    let nowMin = today.getMinutes();
    let nowSec = today.getSeconds();
    
    //0~9 -> 00~09
    if(nowHour<10){
        nowHour = "0" + nowHour;
    }
    if(nowMin<10){
        nowMin = "0" + nowMin;
    }
    if(nowSec<10){
        nowSec = "0" + nowSec;
    }

    span[0].innerText = nowHour;
    span[1].innerText = nowMin;
    span[2].innerText = nowSec;
},1000);

const articles=document.querySelectorAll("section>article");
const snbs=document.querySelectorAll(".gnb>li");

window.addEventListener('scroll',() =>{
    // var scroll = window.pageYOffset;
    var scroll =document.querySelector('html').scrollTop;
    console.log(scroll);

    

    for(let i=0; i<articles.length; i++){
        articles[i].style.transform =`translateZ(${(i*-2300)+scroll}px)`;
        if(scroll>= (i*2300) && scroll< (i+1)*2300){
            activation(i,snbs);   
            activation(i,articles); 
        }
    }
    function activation(index, list){
        for(let el of list){
            el.classList.remove("on");
        }
        list[index].classList.add("on");
    }
    });

    // .snb>li 클릭시
    for(let k=0; k<snbs.length; k++){
        snbs[k].addEventListener("click",e=>{
            e.preventDefault();
            console.log(k);
            window.scroll({
                top: 2300*k,
                left: 0,
                behavior:'smooth'
            });
        });
    };
    

    //마우스 움직일때
    const body = document.querySelector("body");
    body.addEventListener("mousemove", e => {
        let posX = e.pageX/100;
        let posY = e.pageY/150;
        console.log(posY);

       //-반대방향 , +같은방향
       let obj1 = document.querySelector(".left_circle");
       obj1.style.left = 200+posX+"px";
       obj1.style.bottom = -100+posY+"px";

       let obj2 = document.querySelector(".right_circle");
       obj2.style.right = 150+posX+"px";
       obj2.style.bottom = -100+posY+"px";

    
       let obj21 = document.querySelector(".obj21");
       obj21.style.right = -710+posX+"px";
       obj21.style.bottom = -420+posY+"px";

       let obj22 = document.querySelector(".obj22");
       obj22.style.right = -50+-posX+"px";
       obj22.style.bottom = -100+posY+"px";

    });

