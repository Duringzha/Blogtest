/**
 * Created by Administrator on 2014/12/11.
 */
$(document).ready(function () {
    $.fn.fullpage({
        slidesColor: ['', '#343932',''],
        anchors: ['page1', 'page2','page3'],
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.section2').find('.mid .Menulist').delay(500).animate({
                    left: '-22%'
                }, 1000, 'easeOutExpo');
                $('.section2').find('.mid .midContent').delay(500).animate({
                    right: '-20%'
                }, 1000, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('#f1').delay(800).animate({
                    left: '50px'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#f2').delay(700).animate({
                    left: '270px'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#f3').delay(600).animate({
                    left: '490px'
                }, 1000, 'easeOutExpo');
                $('.section3').find('#f4').delay(500).animate({
                    left: '710px'
                }, 1000, 'easeOutExpo')
            }
        },
        onLeave: function (index, direction) {
            if (index == '2') {
                $('.section2').find('.mid .Menulist').delay(500).animate({
                    left: '-120%'
                }, 1000, 'easeOutExpo');
            }
            if (index == '2') {
                $('.section2').find('.mid .midContent').delay(500).animate({
                    right: '-150%'
                }, 1000, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('#f1').delay(500).animate({
                    left: '-80%'
                },1000,'easeOutExpo');
                $('.section3').find('#f2').delay(600).animate({
                    left: '-80%'
                },1000,'easeOutExpo');
                $('.section3').find('#f3').delay(700).animate({
                    left: '-80%'
                },1000,'easeOutExpo');
                $('.section3').find('#f4').delay(800).animate({
                    left: '-80%'
                },1000,'easeOutExpo');
            }
        }
    });
    //判断屏幕宽度
    var w = $(window).width()
    if (w < 1000) {
        $(".title2").css("margin-top", "20px")
    } else if (w >= 1000) {
        $(".span1").css("border-bottom", "2px #ffffff solid")
    }
    //字数限制
    var text = document.getElementById('text'),
        str = text.innerHTML,
        textLeng = 120;
    if(str.length > textLeng ){
        text .innerHTML = str.substring(0,textLeng )+" ......";
    }
    $(".imgBox1").hover(function(){
        $(".midContent>.imgBox1>.imgTitle").fadeToggle()
    })
    $(".imgBox2").hover(function(){
        $(".midContent>.imgBox2>.imgTitle").fadeToggle()
    })
    $(".imgBox3").hover(function(){
        $(".midContent>.imgBox3>.imgTitle").fadeToggle()
    })
    $(".imgBox4").hover(function(){
        $(".midContent>.imgBox4>.imgTitle").fadeToggle()
    })
});
$(window).resize(function () {
    autoScrolling();
});
function autoScrolling() {
    var $ww = $(window).width();
    if ($ww < 1024) {
        $.fn.fullpage.setAutoScrolling(false);
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
}
autoScrolling();