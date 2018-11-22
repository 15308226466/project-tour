$(function() {
    var i = 0; //记录点击次数
    var first = $('.imgs li:first-child').clone();
    $('.imgs').append(first);
    var total = $('.imgs li').size();
    for (let i = 0; i < total - 1; i++) {
        $('.circle').append("<li></li>");
    }
    $('.circle li:first-child').addClass('active').siblings().removeClass('active');
    $('.btn_left').click(function() {
        i++;
        move();

    });
    $('.btn_right').click(function() {
        i--;
        move();

    });
    $('.circle li').click(function() {
        var index = $(this).index();
        i = index;
        $(this).addClass('active').siblings().removeClass('active');
        $('.imgs').stop().animate({ left: -400 * i }, 500);
    });

    function move() {
        if (i == total) {
            $('.imgs').css('left', 0);
            i = 1;
        }
        if (i == -1) {
            $('.imgs').css('left', -(total - 1) * 400);
            i = total - 2;
        }
        if (i == total - 1) {
            $('.circle li').eq(0).addClass('active').siblings().removeClass('active');
        }
        $('.circle li').eq(i).addClass('active').siblings().removeClass('active');
        $('.imgs').stop().animate({ left: -400 * i }, 500);
    }
    var interval = setInterval(function() {
        i++;
        move();
    }, 1000);
    $('.banner').hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(function() {
            i++;
            move();
        }, 1000);
    });
});