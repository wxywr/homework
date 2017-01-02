$(function(){

	// 图片个数
	var num = 0;

	// 定时器
	var timer;

	// 运动状态
	var sport = function(){
		// 底部按钮运动时的状态
		$('.banner_btn li').eq(num).addClass('cur').siblings('li').removeClass('cur');

		// 蒙版以200ms的速度淡入停止，当前的蒙版以300ms的速度淡出
		$('.fadeCover').stop().fadeIn(200,function(){
			$(this).stop().fadeOut(300);

			// 第num 个图片显示，相邻的隐藏
			$('.banner_img li').eq(num).show().siblings('li').hide();
		});
	}

	// 下一张按钮函数
	var next = function(){
		// 图片递增
		num++;

		// 如果图片数量大于3 ，那么图片 就回到第 0 张
		if(num > 3){num = 0;}

		// 调用sport 函数
		sport();
	}


	// 上一张按钮函数
	var prev = function(){
		// 图片递减
		num--;

		// 如果图片数量小于 0  ，那么图片 就回到第 3 张
		if(num < 0){num = 3;}

		// 调用sport 函数
		sport();
	}
	// 点击时调用左右按钮函数
	$('.next').click(next);
	$('.prev').click(prev);
	// 点击时调用底部按钮函数
	$('.banner_btn li').click(function(event){

		// a 等于当前 li 的 索引值
		var a = $(this).index();

		// 图片的数量 等于 li的索引值
		num = a;

		// 调用sport 函数
		sport();
	});

	// 使用定时器实现自动轮播
	// next以2000ms 的速度自动轮播
	timer = setInterval(next,2000);

	// 鼠标悬浮在banner 时，清除定时器
	$('.banner').hover(function(){
		clearInterval(timer);
	},
	// 鼠标离开后继续以2000ms的速度自动轮播
	function(){
		clearInterval(timer);
		timer = setInterval(next,2000)
	})

})