$(function(){
	
	// 图片序列号
	var left = 0;

	// 定时器
	var timer;

	// li 等于 图片盒子前两个li 克隆为真
	var li = $('.banner_img li:lt(2)').clone(true);

	// 图片盒子追加 li
	$('.banner_img').append(li);

	// 滚动方向
	var fangXiang = 'left';



	// 左边按钮执行函数
	var prev = function(){

		// 方向为左
		fangXiang = 'left';

		// 图片位置 = 图片减3
		left = left - 3;

		// 如果 图片位置 小于或等于 -1600，那么图片位置回到0
		if(left <= -1600){left = 0;}

		// 图片盒子的样式向左
		$('.banner_img').css('left',left);
	}


	// 右边按钮执行函数
	var next = function(){

		// 方向为右
		fangXiang = 'right';

		// 图片位置 = 图片加3
		left = left + 3;

		// 如果图片位置 小于0，那么图片位置等于 -1600
		if(left > 0){left = -1600;}

		// 图片盒子的样式向左
		$('.banner_img').css('left',left);
	}



	// 默认往左走
	timer = setInterval(prev,30);

	// 点击next时清除定时器
	$('.next').click(function(){

		clearInterval(timer);

		// 然后以30ms的速度执行next函数
		timer = setInterval(next,30);
	});

	// 点击prev时清除定时器
	$('.prev').click(function(){

		clearInterval(timer);

		// 然后以30ms的速度执行prev函数
		timer = setInterval(prev,30);
	});


	// 鼠标经过时清除定时器
	$('.banner').hover(function(){

		clearInterval(timer);
	},
	// 鼠标离开时
	function(){

		clearInterval(timer);

		// 如果方向是往左
		if(fangXiang == 'left'){

			// 那么继续以 30ms 的速度执行 prev 函数
			timer = setInterval(prev,30);
		}
		else{
			// 否则以 30ms 的速度执行 next 函数
			timer = setInterval(next,30);
		}
	});


	// 鼠标经过图片时
	$('.banner_img li').hover(function(){

		// 当前相邻的图片颜色以 200ms 的速度过渡 透明度为 0.4 停止
		$(this).siblings().stop().fadeTo(200,0.4);
	},
	// 鼠标离开时
	function(){

		// 当前图片的颜色以 200ms 的速度过渡 透明度为 1 停止
		$('.banner_img li').stop().fadeTo(200,1);
	});
})