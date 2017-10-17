// 选择分类
function xuanze(n,m,f) {
    var con1=$(n);
    var con2=$(m);
    con1.click(function () {
        if(con1.hasClass("xuanz1")){
            con1.removeClass("xuanz1")
            con2.removeClass("xuanz")
        }else {
            con1.addClass("xuanz1")
            con2.addClass("xuanz")
        }
        setTimeout(fn(),500)
        qxbc()
    })
    con2.each(function (i,v) {
        con2.eq(i).click(function () {

            if(con2.eq(i).hasClass("xuanz")){

                con2.eq(i).removeClass("xuanz")
                qx.removeClass("qx-icon");
            }else {
                con2.eq(i).addClass("xuanz")

            }
            var jc=$(f)
            if(con2.length==1){
                console.log("456")
                if (jc.length!=con2.length) {
                    // console.log("123")
                    con1.removeClass("xuanz1")
                    qxbc()
                }else{
                    // console.log("321")
                    con1.addClass("xuanz1")
                    qxbc()
                }
                setTimeout(fn(),500)
            }else {
                // console.log(159)
                if (jc.length==con2.length) {
                    // console.log(con2.length)
                    con1.addClass("xuanz1")
                    qxbc()
                }else {
                    con1.removeClass("xuanz1")
                    // console.log(1254)
                    qxbc()
                }
setTimeout(fn(),500)

            }

        })
        if(con2.eq(i).hasClass("xuanz")){
            $(".heji-q").html($(".car-danjia").eq(i).html())
        }

    })
}
// 全选
var qx=$(".jiesuan-icon");
qx.click(function () {
    if(qx.hasClass("qx-icon")){
        qx.removeClass("qx-icon");
        $(".jc-weixuan").removeClass("xuanz1");
        $(".jc-shop-icon").removeClass("xuanz");
      /*  $(".shanchu").click(function () {
            $(".shop-one").css({"display": "block"});
            $(".shop-two").css({"display": "block"});
        })*/
    }else {
        qx.addClass("qx-icon");
        $(".jc-weixuan").addClass("xuanz1");
        $(".jc-shop-icon").addClass("xuanz");
        // $(".shanchu").click(function () {
        //     $(".shop-one").css({"display": "none"});
        //     $(".shop-two").css({"display": "none"});
        //     $(".jiesuan-icon").removeClass("qx-icon")
        // })
    }
    setTimeout(fn(),500)
        })
// 数量变化及价钱对应变化
$(".shop-bj").each(function (i,v) {
    // var num = $(".input").eq(i).val();
    const ex1=$(".danjia").eq(i).html();
    $(".yy").eq(i).click(function () {

        var num = $(".input").eq(i).val();

        if ((num >= 2&&num<=999&&num!=0)&&(num!='')&&(isNaN(num)!=true)) {
            num--;
            $(".input").eq(i).val(num)
        } else {
            return false;
        }
        if(num!=''&&num!=0&&(isNaN(num)!=true)) {
            $(".jc-sl").eq(i).html(parseFloat($(".input").eq(i).val()))
            $(".shop-jqc").eq(i).html(ex1 * parseFloat($(".input").eq(i).val()))
            setTimeout(fn(),500)
        }else {
            $(".shop-jqc").eq(i).html(0)
            $(".jc-sl").eq(i).html(0)
        }
        // input()
    })
    $(".jj").eq(i).click(function () {
        var num = $(".input").eq(i).val();
        if ((num >= 1&&num<999&&num!=0)&&(num!='')&&(isNaN(num)!=true)) {
            num++;
            $(".input").eq(i).val(num)
        } else {
            return false;
        }
        if(num!=''&&num!=0&&(isNaN(num)!=true)){
        $(".jc-sl").eq(i).html(parseFloat($(".input").eq(i).val()))
            $(".shop-jqc").eq(i).html(ex1 * parseFloat($(".input").eq(i).val()))
            setTimeout(fn(),500)
        }else {
            $(".shop-jqc").eq(i).html(0)
            $(".jc-sl").eq(i).html(0)
        }
        // input()
    })
    $(".input").eq(i).blur(function () {
        var num = $(".input").eq(i).val();
        if(num!=''&&num!=0&&(isNaN(num)!=true)) {
            $(".shop-jqc").eq(i).html(ex1 * parseFloat($(".input").eq(i).val()))
            $(".jc-sl").eq(i).html(parseFloat($(".input").eq(i).val()))
            setTimeout(fn(),500)
        }else {
                $(".shop-jqc").eq(i).html(0)
                $(".jc-sl").eq(i).html(0)
        }
        // input()
    })
})
// 编辑展现
$(".shop-bj").each(function (i,v) {
    $(".shop-bj").eq(i).click(function () {
        $(".shop-bj-1").eq(i).css({"display":"block"});
        $(".jc-jiabian").eq(i).css({"display":"block"});
    })
    $(".shop-bj-1").eq(i).click(function () {
        $(".shop-bj-1").eq(i).css({"display":"none"});
        $(".jc-jiabian").eq(i).css({"display":"none"});
    })
})
// 加入购物车
$(".jc-jrshop").click(function () {
    $(".spxq-mask").css({"display":"block"});
})
$(".jc-re").click(function () {
    $(".spxq-mask").css({"display":"none"});
})
//单品详情数量加减及价钱对应变化
// var onenum=$(".input-con1").val();
const spxq=$(".mask-no-jia").html();
$(".mask-yy").click(function () {
    var onenum=$(".input-con1").val();
    if ((onenum >= 2&&onenum <= 999&&onenum!=0)&&(onenum!='')&&(isNaN(onenum)!=true)) {
        onenum--;
        $(".input-con1").val(onenum)
    } else {
        return false;
    }
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia").html(spxq * parseFloat($(".input-con1").val()))
    }else {
        $(".spxq-mask-jia").html(0)
    }
})
$(".mask-jj").click(function () {
    var onenum=$(".input-con1").val();
    if ((onenum >= 1&&onenum<999&&onenum!=0)&&(onenum!='')&&(isNaN(onenum)!=true)) {
        onenum++;
        $(".input-con1").val(onenum)
    } else {
        return false;
    }
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia").html(spxq * parseFloat($(".input-con1").val()))
    }else {
        $(".spxq-mask-jia").html(0)
    }
})
$(".input-con1").blur(function () {
    var onenum=$(".input-con1").val();
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia").html(spxq * parseFloat($(".input-con1").val()))
    }else {
        $(".spxq-mask-jia").html(0)
    }
   var ty=parseFloat($(".input-con1").val())
    $(".mask-yy").click(function () {
        if ((ty>= 2&&ty<=999&&ty!=0)&&(ty!='')&&(isNaN(ty)!=true)) {
            ty--;
            $(".input-con1").val(ty)
        } else {
            return false;
        }
        if(ty!=''&&ty!=0&&(isNaN(ty)!=true)) {
            $(".spxq-mask-jia").html(spxq * parseFloat($(".input-con1").val()))
        }else {
            $(".spxq-mask-jia").html(0)
        }
    })
    $(".mask-jj").click(function () {
        if ((ty>= 1&&ty<999&&ty!=0)&&(ty!='')&&(isNaN(ty)!=true)) {
            ty++;
            $(".input-con1").val(ty)
        } else {
            return false;
        }
        if(ty!=''&&ty!=0&&(isNaN(ty)!=true)) {
            $(".spxq-mask-jia").html(spxq * parseFloat($(".input-con1").val()))
        }else {
            $(".spxq-mask-jia").html(0)
        }

    })
    $(".jc-sl").html(parseFloat($(".input").val()))
})
//删除地址
$(".addr-set-r").each(function (i,v) {
    // console.log(i)
    $(".addr-set-r").eq(i).click(function () {
        $(".addr-shou").eq(i).css({"display":"none"});
    })
})
//添加联系人
$(".addr-new").click(function () {
    $(".addr-mask").css({"display":"block"});
})
$(".addr-re").click(function () {
    $(".addr-mask").css({"display":"none"});
})
//选择地址
$(".m-t").each(function (i,v) {
    $(".m-t").eq(i).click(function () {
        $(".m-t").removeClass("xuanz");
        if($(".m-t").eq(i).hasClass("xuanz")){
            $(".m-t").eq(i).removeClass("xuanz");
        }else {
            $(".m-t").eq(i).addClass("xuanz");
        }
    })
})
//shoped 数量修改及价钱对应变化
$(".jc-jiabian-1").each(function (i,v) {
    const ex=$(".edit-jia").eq(i).html();
    // var num = $(".text-w-b").val();
    // console.log(num)
    $(".shoped-yy").eq(i).click(function () {
        var num = $(".text-w-b").eq(i).val();
        if ((num >= 2&&num<=999&&num!=0)&&(num!='')&&(isNaN(num)!=true)) {
            num--;
            $(".text-w-b").eq(i).val(num)
        } else {
            return false;
        }
        if(num!=''&&num!=0&&(isNaN(num)!=true)) {
            // $(".shop-jqc").eq(i).html(ex * parseFloat($(".input").eq(i).val()))
            $(".shoped-qian").eq(i).html(ex * parseFloat($(".text-w-b").eq(i).val()))
        }else {
            $(".shoped-qian").eq(i).html(0)
        }
    })

    $(".shoped-jj").eq(i).click(function () {
        var num = $(".text-w-b").eq(i).val();

        if ((num >= 1&&num<999&&num!=0)&&(num!='')&&(isNaN(num)!=true)) {
            num++;
            $(".text-w-b").eq(i).val(num)
        } else {
            return false;
        }
        if(num!=''&&num!=0&&(isNaN(num)!=true)) {
            // $(".shop-jqc").eq(i).html(ex * parseFloat($(".input").eq(i).val()))
            $(".shoped-qian").eq(i).html(ex * parseFloat($(".text-w-b").eq(i).val()))
        }else {
            $(".shoped-qian").eq(i).html(0)
        }
    })
    $(".text-w-b").eq(i).blur(function () {
        var num = $(".text-w-b").eq(i).val();
        if(num!=''&&num!=0&&(isNaN(num)!=true)) {
            // $(".shop-jqc").eq(i).html(ex * parseFloat($(".input").eq(i).val()))
            $(".shoped-qian").eq(i).html(ex * parseFloat($(".text-w-b").eq(i).val()))
        }else {
            $(".shoped-qian").eq(i).html(0)
        }
        // $(".shoped-qian").eq(i).html(ex * parseFloat($(".text-w-b").eq(i).val()))
        // $(".jc-sl").eq(i).html(parseFloat($(".input").eq(i).val()))
        // console.log(parseFloat($(".text-w-b").eq(i).val()))

    })
})
//价钱对应变化融入数量变化中
// 删除购物车货物
function shanchu(q,w,e,d,fen) {
    var con1=$(q);
    var con2=$(w);
    var shanchu=$(e)
    var flag=true;
    con1.click(function () {
            if(flag==true){
                if((con1.hasClass("xuanz"))&&(con2.hasClass("xuanz"))){
                    shanchu.click(function () {
                        $(d).css({"display": "none"})
                        $(fen).css({"display": "none"});
                    })
                }else {
                    shanchu.click(function () {
                        $(d).css({"display": "block"})
                        $(fen).css({"display": "block"})
                    })
                    return false;
                }
            }else if(flag==false) {
                if (flag == true) {
                    if ((con1.hasClass("xuanz")) && (con2.hasClass("xuanz"))) {
                        shanchu.click(function () {
                            $(d).css({"display": "block"})
                            $(fen).css({"display": "block"});
                        })
                    } else {
                        shanchu.click(function () {
                            $(d).css({"display": "none"})
                            $(fen).css({"display": "none"})
                        })
                        return false;
                    }
                }
                flag = false;
            }
        })
    con2.each(function (i,v) {
        con2.eq(i).click(function () {
            if(flag==true){
                if(con2.eq(i).hasClass("xuanz")){
                    shanchu.click(function () {
                        $(d).eq(i).css({"display": "none"})
                    })
                    console.log(con2.length)
                }else {
                    shanchu.click(function () {
                        $(d).eq(i).css({"display":"block"})
                        if(con1.hasClass("xuanz")){
                            $(fen).eq(i).css({"display": "block"});
                        }

                    })
                    return false;
                }
            }else if(flag==false) {
                if (flag == true) {
                    if(con2.eq(i).hasClass("xuanz")){
                        shanchu.click(function () {
                            $(d).eq(i).css({"display": "block"})
                            $(fen).css({"display": "block"});
                        })
                    }else {
                        shanchu.click(function () {
                            $(d).eq(i).css({"display":"none"})
                            $(fen).css({"display": "none"});
                        })
                        return false;
                    }
                }
                flag = false;
            }
        })
    })
}
/*
if(!($(".jiesuan-icon").hasClass("qx-icon"))) {
    $(".jiesuan-icon").click(function () {
        if ($(".jiesuan-icon").hasClass("qx-icon")) {
            $(".shanchu").click(function () {
                $(".shop-one").css({"display": "none"});
                $(".shop-two").css({"display": "none"});
                $(".jiesuan-icon").removeClass("qx-icon")
            })
        } else {
            return false;
        }
    })
}
*/
// function shanchu(n,m,e,d) {
//     var con1=$(n);
//     var con2=$(m);
//     var shanchu=$(e)
//     con1.click(function () {
//         if(con1.hasClass("xuanz")){
//             con1.removeClass("xuanz")
//             con2.removeClass("xuanz")
//             shanchu.click(function () {
//                 $(d).css({"display": "block"})
//             })
//         }else {
//             con1.addClass("xuanz")
//             con2.addClass("xuanz")
//             shanchu.click(function () {
//                 $(d).css({"display": "none"})
//             })
//         }
//     })
//     con2.each(function (i,v) {
//         con2.eq(i).click(function () {
//             if(con2.eq(i).hasClass("xuanz")){
//                 con2.eq(i).removeClass("xuanz")
//                 qx.removeClass("qx-icon");
//                 shanchu.click(function () {
//                     $(d).eq(i).css({"display":"block"})
//                 })
//             }else {
//                 con2.eq(i).addClass("xuanz")
//                 shanchu.click(function () {
//                     $(d).css({"display": "none"})
//                 })
//             }
//         })
//
//     })
// }
//index-js
$(".weui-navbar a").each(function (i,v) {
    $(".weui-navbar a").eq(i).click(function () {
        $(".weui-navbar a").css({"color":"#B3B3B3"})
        $(".weui-navbar a").eq(i).css({"color":"#fff"})
        $(".tab").css({"display":"none"});
        $(".tab").eq(i).css({"display":"block"});
    })
})
//总计价钱
function fn() {
    // var sum=0;
    // var arr=[];
    var aaa=0;
    $(".jc-shop-icon").each(function (i,v) {
        if ($(".jc-shop-icon").eq(i).hasClass("xuanz")&&$("input").eq(i).val()!='') {
            /*console.log(parseFloat($(".shop-jqc").eq(i).html()))*/
            return aaa+=parseFloat($(".shop-jqc").eq(i).html());
        }else {
            $(".heji-qian").html()
            // console.log("0123")
        }
    })
  $(".heji-qian").html(aaa)
}

// 删除函数
function sc(a,b,c,d,e,f) {
    var con1=$(a);
    var con2=$(b);
    con1.click(function () {
        if(con1.hasClass("xuanz1")){
            con1.removeClass("xuanz1")
            con2.removeClass("xuanz")
        }else {
            con1.addClass("xuanz1")
            con2.addClass("xuanz")
        }
        qxbc()
    })
    con2.each(function (i,v) {
    con2.eq(i).click(function () {
        if (con2.eq(i).hasClass("xuanz")) {
            con2.eq(i).removeClass("xuanz");
        } else {
            con2.eq(i).addClass("xuanz");
        }
        var jc=$(f)
        if(con2.length==1){
            console.log("456")
            if (jc.length!=con2.length) {
                // console.log("123")
                con1.removeClass("xuanz1")
                qxbc()
            }else{
                // console.log("321")
                con1.addClass("xuanz1")
                qxbc()
            }

        }else {
                // console.log(159)
                    if (jc.length==con2.length) {
                        // console.log(con2.length)
                        con1.addClass("xuanz1")
                        qxbc()
                    }else {
                        con1.removeClass("xuanz1")
                        // console.log(1254)
                        qxbc()
                    }


        }

    })
    })
   /* jc3.click(function () {
        var aaa=$(b);
       console.log(aaa.length)
        if(con1.hasClass("xuanz1")){
            jc6.remove();
        }
        if(aaa.length==1){
            jc6.remove();
        }else{
            con2.each(function (i,v) {
                if(con2.eq(i).hasClass("xuanz")){
                    jc4.eq(i).remove();
                }
            })
        }
    })*/
}

// 输入0，字符串不执行
//全选补充
function qxbc(){
    $(".jc-weixuan").each(function (i1,v) {
        if($(".jc-weixuan").length==1){
            console.log(5468)
            console.log($(".jc-weixuan").length)
            console.log($(".xuanz1").length)
            if(($(".jc-weixuan").length)!=($(".xuanz1").length)){
                console.log(987)
                $(".jiesuan-icon").removeClass("qx-icon")
            }else {
                console.log(789)
                $(".jiesuan-icon").addClass("qx-icon")
            }
        }else {
            console.log(5559)
            if ($(".jc-weixuan").length==$(".xuanz1").length) {
                // console.log(con2.length)
                $(".jiesuan-icon").addClass("qx-icon")
            }else {
                $(".jiesuan-icon").removeClass("qx-icon")
            }
        }


})}
// 加
var m3=$(".spxq-song2"),m4=$(".spxq-song3"),m3d=$(".spsx-mask-3"),m4d=$(".spsx-mask-4"),m3q=$(".zwqx1"),m4q=$(".zwqx");
m3.click(function () {
    m4d.show()
})
m3q.click(function () {
    m4d.hide()
})
m4.click(function () {
    m3d.show()
})
m4q.click(function () {
    m3d.hide()
})

$(".jc-ljgm").click(function () {
    $(".spxq-mask-12").show()
})
$(".spxq-mask-12 .jc-re").click(function () {
    $(".spxq-mask-12").hide()
})

// 立即购物加
const spxq1=$(".mask-no-jia-1").html();
/*$(".mask-yy-1").click(function () {
    var onenum=$(".input-con1-1").val();
    if (onenum >= 2&&onenum<=999) {
        onenum--;
        $(".input-con1-1").val(onenum)
    } else {
        return false;
    }

    $(".spxq-mask-jia-1").html(spxq1*parseFloat($(".input-con1-1").val()))

})
$(".mask-jj-1").click(function () {
    var onenum=$(".input-con1-1").val();
    if (onenum >= 1&&onenum<999) {
        onenum++;
        $(".input-con1-1").val(onenum)
    } else {
        return false;
    }

    $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))

})
$(".input-con1-1").blur(function () {
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
    var ty=parseFloat($(".input-con1-1").val())
    $(".mask-yy-1").click(function () {
        if (ty>= 2&&ty<=999) {
            ty--;
            $(".input-con1-1").val(ty)
        } else {
            return false;
        }
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))

    })
    $(".mask-jj-1").click(function () {
        if (ty>= 1&&ty<999) {
            ty++;
            $(".input-con1").val(ty)
        } else {
            return false;
        }
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))

    })
    // $(".jc-sl").html(parseFloat($(".input").val()))
})*/
$(".mask-yy-1").click(function () {
    var onenum=$(".input-con1-1").val();
    if ((onenum >= 2&&onenum <= 999&&onenum!=0)&&(onenum!='')&&(isNaN(onenum)!=true)) {
        onenum--;
        $(".input-con1").val(onenum)
    } else {
        return false;
    }
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
    }else {
        $(".spxq-mask-jia-1").html(0)
    }
})
$(".mask-jj-1").click(function () {
    var onenum=$(".input-con1-1").val();
    if ((onenum >= 1&&onenum<999&&onenum!=0)&&(onenum!='')&&(isNaN(onenum)!=true)) {
        onenum++;
        $(".input-con1-1").val(onenum)
    } else {
        return false;
    }
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
    }else {
        $(".spxq-mask-jia-1").html(0)
    }
})
$(".input-con1-1").blur(function () {
    var onenum=$(".input-con1-1").val();
    if(onenum!=''&&onenum!=0&&(isNaN(onenum)!=true)) {
        $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
    }else {
        $(".spxq-mask-jia-1").html(0)
    }
    var ty=parseFloat($(".input-con1-1").val())
    $(".mask-yy-1").click(function () {
        if ((ty>= 2&&ty<=999&&ty!=0)&&(ty!='')&&(isNaN(ty)!=true)) {
            ty--;
            $(".input-con1-1").val(ty)
        } else {
            return false;
        }
        if(ty!=''&&ty!=0&&(isNaN(ty)!=true)) {
            $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
        }else {
            $(".spxq-mask-jia-1").html(0)
        }
    })
    $(".mask-jj-1").click(function () {
        if ((ty>= 1&&ty<999&&ty!=0)&&(ty!='')&&(isNaN(ty)!=true)) {
            ty++;
            $(".input-con1-1").val(ty)
        } else {
            return false;
        }
        if(ty!=''&&ty!=0&&(isNaN(ty)!=true)) {
            $(".spxq-mask-jia-1").html(spxq1 * parseFloat($(".input-con1-1").val()))
        }else {
            $(".spxq-mask-jia-1").html(0)
        }

    })
    // $(".jc-sl").html(parseFloat($(".input").val()))
})