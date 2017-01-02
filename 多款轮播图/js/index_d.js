$(function(){

    // 按钮序列号
    var btn = 0;

    // 图片序列号
    var img = 0;

    // 定时器
    var timer;

     //实现无缝的关键就是：请临时工
    var firstLi = $('.banner_img li:first').clone(true);

    $('.banner_img').append(firstLi);


    // 右边按钮执行函数
    var next = function(){

        btn++;

        if(btn > 3){btn = 0;}

        $('.banner_btn li').eq(btn).addClass('cur').siblings('li').removeClass('cur');

        img++;

        if(img > 4){

            img = 1;

            $('.banner_img').css('left',0);
        }
        // 图片移动公式
        // s 等于 某张图片 乘以 -650px 的宽度
        var s = img * -650;

        // 图片以500ms 的速度向左移动 650px停止
        $('.banner_img').stop().animate({'left':s},500);
    }


    // 左边按钮执行函数
    var prev = function(){

        btn--;

        if(btn < 0){btn = 3;}

        $('.banner_btn li').eq(btn).addClass('cur').siblings('li').removeClass('cur');

        img--;

        if(img < 0){

            img = 3;

            $('.banner_img').css('left',-2600);
        }

        // 图片移动公式
        // s 等于 某张图片 乘以 -650px 的宽度
        var s = img * -650;

        // 图片以500ms 的速度向左移动 650px停止
        $('.banner_img').stop().animate({'left':s},500);
    }
    // 点击左右按钮时执行以上函数
    $('.next').click(next);
    $('.prev').click(prev);




    // 底部按钮点击事件
    $('.banner_btn li').click(function(event){

        // 获取序列号
        var i = $(this).index();

        // 图片走动宽度
        var s = i * -650;

        // 底部按钮走动
        $('.banner_btn li').eq(i).addClass('cur').siblings('li').removeClass('cur');

        // 图片走动
        $('.banner_img').stop().animate({'left':s},500);

        //为了让当前这个序号能够影响到上一张和下一张，
        //还有一个很重要的步骤：序号同步（两个全局变量都需要同步）
        img = i;
        btn = i;
    });



    // 使用定时器实现自动轮播
    timer = setInterval(next,1500);

    //鼠标悬停时，停止定时器
    $('.banner').hover(function(){

        clearInterval(timer);
    },
    function(){

        clearInterval(timer);

        timer = setInterval(next,1500);
    });
})