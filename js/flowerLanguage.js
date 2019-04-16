//nav
{
    let nav = document.querySelector(".nav");
    window.addEventListener("scroll",function () {
        let st = document.documentElement.scrollTop;
        if (st > 0) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    })
}
//返回
{
    let back=document.querySelector(".back");
    back.onclick=function () {
        let l=document.documentElement.scrollTop;
        let s=25*l/600; //变换速度
        let st=setInterval(function () {
            l-=s;
            if (l<=0){
                l=0;
                clearInterval(st);
            }
            document.documentElement.scrollTop=l;
        },25);
    };
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>500){
            back.classList.add("active");
        }else{
            back.classList.remove("active");
        }
    }
}
//底部
{
    let chat=document.querySelector(".chat");
    let ewm=document.querySelector(".ewmBottom");
    chat.onmouseenter=function () {
        ewm.style.display="block";
    }
    chat.onmouseleave=function () {
        ewm.style.display="none";
    }
}