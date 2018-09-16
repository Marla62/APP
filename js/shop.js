$(function () {
    let tag = $(".row .left ul li");
    $(tag).click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
     let add = document.querySelectorAll(".row .right ul li .righttext .text1 .and");
     let noadd = document.querySelectorAll(".row .right ul li .righttext .num .noand img");
     let num = document.querySelectorAll(".row .right ul li .righttext .num span");
     let money =$("footer .text .text1");
     let clear =$("footer .money");
     let all=0;
     for (let i = 0; i < add.length; i++)   {
         let next =0;
         add[i].onclick =function () {
        next++;
            num[i].style.display ="block";
            num[i].innerHTML = next;
            noadd[i].style.display = "block";
            //当前商品的价格  被点击的add的查找
            let yuan =parseInt(add[i].parentNode.parentNode.nextElementSibling.nextElementSibling.lastElementChild.innerHTML);
             all = yuan*next;
            $(money).html(`<span style="font-size: 0.3rem">${all}</span> <span style="font-size: 0.18rem">RMB</span>`);
            if ((next*4)>=15){
                $(clear).css({background:"rgba(23, 255, 117, 0.77)"});
                $(clear).wrapAll("<a href='confirmorder.html'></a>");
            }
         };
        noadd[i].onclick =function () {
            next--;
            num[i].style.display ="block";
            num[i].innerHTML = next;
            noadd[i].style.display = "block";
            $(money).html(`<span style="font-size: 0.3rem">${next*4}</span> <span style="font-size: 0.18rem">RMB</span>`);
            if (next <= 0) {
                $(money).html(`<span>未选购任何商品</span>`);
                noadd[i].style.display = "none";
                num[i].style.display ="none";
            }
            if ((next*4)<15){
                $(clear).css({background:"#6a6a6a"});
            }


        };


     }
});