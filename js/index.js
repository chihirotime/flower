
{
    let nav = document.querySelector(".nav");
    window.addEventListener("scroll",function () {
        let st = document.documentElement.scrollTop;
        if (st > 0) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
        
        let flower=document.querySelectorAll(".flowerItem");
        flower.forEach(function (ele,index) {
            if (index%2===0) {
                let target=flower[index].offsetTop-window.innerHeight;
                if (st>target){
                    ele.classList.add("bounceInLeft");
                }
            }else {
                let target=flower[index].offsetTop-window.innerHeight;
                if (st>target){
                    ele.classList.add("bounceInRight");
                }
            }
        });
    });
}
//banner
{
    let pre = document.querySelector(".pre");
    let next = document.querySelector(".next");
    let inner = document.querySelector(".inner");
    let banner = document.querySelector(".banner");
    let now = 1;  // 默认所在的位置 margin-left是几屏
    function move() {
        inner.style.transition = "all 1s";
        now++;
        inner.style.marginLeft = now * -100 + "vw";
    }

    let st = setInterval(move, 3000);

    inner.addEventListener("transitionend", function () {
        flag = true;
        if (now === 3) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-100vw";
            now = 1;
        }
        ;
        if (now === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = "-200vw";
            now = 2;
        }
    });  // 过渡效果结束，触发事件

    banner.onmouseenter = function () {
        clearInterval(st);
    };
    banner.onmouseleave = function () {
        st = setInterval(move, 3000);
    };
    window.onblur = function () {
        clearInterval(st);
    };
    window.onfocus = function () {
        clearInterval(st);
        st = setInterval(move, 3000);
    };
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    pre.onclick = function () {
        if (flag) {
            flag = false;
            now -= 2;
            move();
        }
    }
}
// 素馨花语
{
    let middle=document.querySelector(".middle-content");
    let preLeft=document.querySelector(".preLeft");
    let nextRight=document.querySelector(".nextRight");
    let wrapper=document.querySelector(".swiper");
    let now=3;
    function goods(){
        middle.style.transition="all 1s";
        now++;
        middle.style.marginLeft=now*-350+"px";
    }
    let st=setInterval(goods,3000);
    middle.addEventListener("transitionend",function () {
        flag=true;
        if (now===8){
            middle.style.transition="none";
            middle.style.marginLeft="-1050px";
            now=3;
        }
        if (now===0){
            middle.style.transition="none";
            middle.style.marginLeft="-1750px";
            now=5;
        }
    });
    wrapper.onmouseenter=function () {
        clearInterval(st);
    };
    wrapper.onmouseleave=function () {
        st=setInterval(goods,3000);
    };
    window.addEventListener("blur",function () {
        clearInterval(st);
    });
    window.addEventListener("focus",function () {
        clearInterval(st);
        st=setInterval(goods,3000);
    });
    let flag=true;
    nextRight.onclick=function () {
        if (flag) {
            flag=false;
            goods();
        }
    };
    preLeft.onclick=function () {
        if (flag) {
            flag=false;
            now-=2;
            goods();
        }
    }
}
//返回顶部
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

//标题进入
{
    let art1=document.querySelector(".art1");
    let art2=document.querySelector(".art2");
    let art3=document.querySelector(".art3");
    let foot=document.querySelector(".foot");
    let more1=document.querySelector(".more1");
    let more2=document.querySelector(".more2");
    window.addEventListener("scroll",function () {
        let st=document.documentElement.scrollTop;
        let target1=art1.offsetTop-window.innerHeight;
        let target2=art2.offsetTop-window.innerHeight;
        let target3=art3.offsetTop-window.innerHeight;
        if (st>target1) {
            art1.classList.add("bounceInDown");
            more1.classList.add("bounceInDown");
        }
        if (st>target2) {
            art2.classList.add("bounceInDown");
            more2.classList.add("bounceInDown");
        }
        if (st>target3) {
            art3.classList.add("bounceInDown");
            foot.classList.add("bounceInUp");
        }
    });
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

