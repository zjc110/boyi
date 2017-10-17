     var item = document.querySelector(".jc-jp-m")
    var con = document.querySelector(".jc-con-1")
    var t = setInterval(move, 2000)
    var num = 0;

    function move() {
        item.style.transition = "all 1s"
        num++;
        item.style.marginLeft = -1.96 * num + "rem";
    }

    item.addEventListener("transitionend", function () {
        if (num == 11) {
            item.style.transition = "none"
            num = 0;
            item.style.marginLeft = -1.96 * num + "rem";
        } else if (num == 0) {
            item.style.transition = "none"
            num = 7;
            item.style.marginLeft = -1.96 * num + "rem";
        }
    })

// var mySwiper = new Swiper('.jc-jp-m',{
//         onTouchStart: function(){
//             item.style.marginLeft=-2.04+"rem";
//         }
//     })

