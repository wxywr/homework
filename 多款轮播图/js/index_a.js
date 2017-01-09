$(function(){
	var b = 0;
	var timer
	// 底部按钮
	$('.banner_btn li').click(function(){
		$(this).addClass('cur').siblings('li').removeClass('cur');
		var a = $(this).index();
		$('.banner_img li').eq(a).fadeIn(2000).siblings('li').fadeOut(1500);
		b = a
	});

	// 右边按钮
	$('.next').click(function(){
		b++;
		if( b > 4){ b = 0};
		$('.banner_img li').eq(b).fadeIn(2000).siblings('li').fadeOut(1500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur')
	});

	// 左边按钮
	$('.prev').click(function(){
		b--;
		if(b < 0){b = 4};
		$('.banner_img li').eq(b).fadeIn(2000).siblings('li').fadeOut(1500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur');
	});
	
	// 使用定时器实现自动轮播
	var time = function(){
		b++;
		if( b > 4){ b = 0};
		$('.banner_img li').eq(b).fadeIn(2000).siblings('li').fadeOut(1500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur')
	}
	timer=setInterval(time,2000)
	$('.banner').hover(function(){
		clearInterval(timer)
	},
	function(){
		timer=setInterval(time,2000)
	});
})

















	// // banner样式
	// var banner = {
	// 	width:'992px',
	// 	height:'420px',
	// 	margin:'100px auto 0',
	// 	position:'relative',
	// 	border:'1px solid red'
	// };
	// $(".banner").css(banner);

	// // 图片样式
	// var img = {
	// 	width:'992px',
	// 	height:'420px',
	// 	position:'relative'
	// };
	// $(".banner_img").css(img);
	// var pic = {
	// 	width:'992px',
	// 	height:'420px',
	// 	position:'absolute',
	// 	left:'0px',
	// 	top:'0px',
	// 	// display:'none'
	// };
	// $(".banner_img li").css(pic);

	// // 底部按钮样式
	// var wrap = {
	// 	position:'absolute',
	// 	right:'10px',
	// 	bottom:'10px'
	// };
	// $(".banner_btn").css(wrap);

	// // 左右按钮样式
	// var prev = {
	// 	width:'30px',
	// 	height:'100px',
	// 	position:'absolute',
	// 	top:'50%',
	// 	left:'0px',
	// 	marginTop:'-50px',
	// 	background:'url(../images/index.png) -5px 0',
	// 	cursor:'pointer'
	// }
	// $(".prev").css(prev);

	// var next = {
	// 	width:'30px',
	// 	height:'100px',
	// 	position:'absolute',
	// 	top:'50%',
	// 	right:'0px',
	// 	marginTop:'-50px',
	// 	background:'url(../images/index.png) -55px 0',
	// 	cursor:'pointer'
	// }
	// $(".next").css(next);


