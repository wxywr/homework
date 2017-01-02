$(function(){
	 // 公有变量
	var a = 0;

	// 定时器变量
	// var timer;

	//右按钮执行函数	
	var next = function(){
		$('.banner_img li').eq(a).stop().fadeOut(2000);

		a++;

		if(a > 3){a = 0;}

		$('.banner_img li').eq(a).fadeIn(2000);

		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');
	}

	//左按钮执行函数
	var prev = function(){
		$('.banner_img li').eq(a).fadeIn(2000);

		a--;

		if(a < 0){a = 3;}

		$('.banner_img li').eq(a).stop().fadeIn(2000);

		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');
	}
	// 点击时执行以上函数
	$('.next').click(next);
	$('.prev').click(prev);


	// 底部按钮执行函数
	$('.banner_btn li').click(function(event){

		var b = $(this).index();

		$('.banner_img li').eq(a).stop().fadeOut(2000);

		a = b;

		$('.banner_img li').eq(a).stop().fadeIn(2000);

		$('.banner_btn li').eq(a).addClass('cur').siblings('li').removeClass('cur');
	});

	// 设置定时器实现自动播放
	timer = setInterval(next,2000);

	// 鼠标移入移出时的状态
	$('.banner').hover(function(){
		clearInterval(timer);
	},
	function(){
		clearInterval(timer);
		timer = setInterval(next,2000);
	});
})