// 运动器械轮播1
$('#gong .b li').eq(0).css('backgroundColor','#666');
var n=0;
function b1() {
	n++;
	$('#gong .b li').eq(n).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.b .imgchang img').eq(0);
			
		$('.b .imgchang').animate({'left':'-393px'},1000,function(){
			$('.b .imgchang img').eq(0).remove();
			$('.b .imgchang').append(a);
			$('.b .imgchang').css('left','0px');
		})
	if (n>=1) {
		n=-1;
	}
}
setInterval(b1,2000);
// 运动器械轮播2
$('#gong .c li').eq(0).css('backgroundColor','#666');
var z=0;
function b2() {
	z++;
	$('#gong .c li').eq(z).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.c .imgchang img').eq(0);
			
		$('.c .imgchang').animate({'left':'-393px'},1000,function(){
			$('.c .imgchang img').eq(0).remove();
			$('.c .imgchang').append(a);
			$('.c .imgchang').css('left','0px');
		})
	if (z>=3) {
		z=-1;
	}
}
setInterval(b2,2000);
// 运动器械轮播3
$('#gong .d li').eq(0).css('backgroundColor','#666');
var q=0;
function b3() {
	q++;
	$('#gong .d li').eq(q).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.d .imgchang img').eq(0);
			
		$('.d .imgchang').animate({'left':'-393px'},1000,function(){
			$('.d .imgchang img').eq(0).remove();
			$('.d .imgchang').append(a);
			$('.d .imgchang').css('left','0px');
		})
	if (q>=3) {
		q=-1;
	}
}
setInterval(b3,2000);
// 运动器械轮播4
$('#gong .e li').eq(0).css('backgroundColor','#666');
var w=0;
function b4() {
	w++;
	$('#gong .e li').eq(w).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.e .imgchang img').eq(0);
			
		$('.e .imgchang').animate({'left':'-393px'},1000,function(){
			$('.e .imgchang img').eq(0).remove();
			$('.e .imgchang').append(a);
			$('.e .imgchang').css('left','0px');
		})
	if (w>=3) {
		w=-1;
	}
}
setInterval(b4,2000);
// 无缝滚动
function lunbo(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(0);
		$('#gong #tz3 .ydqx_cen_bot ul').animate({'left':'-1198px'},1500,function(){
			$('#gong #tz3 .ydqx_cen_bot li').eq(0).remove();
			$('#gong #tz3 .ydqx_cen_bot ul').append(a);
			$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
		});
	}
var time=setInterval(lunbo,3000);
// 悬停暂停计时器
$('#gong .ydqx_cen_bot').mouseover(function(){
	$('#jiantou').css('display','block');
	clearInterval(time)
})
$('#gong .ydqx_cen_bot').mouseout(function(){
	$('#jiantou').css('display','none');
	time=setInterval(lunbo,3000)
})
// 轮播前进后退
$('#gong #jiantou .zuo').click(function(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(0);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','-1198px');
	$('#gong #tz3 .ydqx_cen_bot li').eq(0).remove();
	$('#gong #tz3 .ydqx_cen_bot ul').append(a);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
})
$('#gong #jiantou .you').click(function(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(2);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','1198px');
	$('#gong #tz3 .ydqx_cen_bot li').eq(2).remove();
	// 在ul的开头插入
	$('#gong #tz3 .ydqx_cen_bot ul').prepend(a);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
})
// tz4育婴童
var e=0;
	var r=0;
	$('#gong #tz4 .cen1_left li').eq(e).css('background','red').siblings().css('background','#666');
	var one=$('#gong #tz4 .imgchang img').eq(0).clone();//克隆第一张图片
	$('#gong #tz4 .imgchang').append(one);//把第一张图片加到最后面
	$('#gong #tz4 .imgchang').width($('#gong #tz4 .imgchang img').width()*$('#gong #tz4 .imgchang img').length);//改变imaAll的宽度=img*img的个数
	$('#gong #tz4 .you').click(function(){//右边箭头的触发点击事件
		e++;//影响无缝滚动的参数
		
		if(e==$('#gong #tz4 .imgchang img').length){ //当在最后一组图上点击时，偏移量归零，也就是7
			e=1;//跳过伪装的前1个
			$('#gong #tz4 .imgchang').css({left:0});//当最后一张出现的时候，让它的left值迅速变为0
		}
		//点击时，整个ul的偏移量向左移动i个图片的宽度
		$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000)//图片left 值改变事件
		
		if(r>=2){
			r=-1;
		}
		r++;//影响数字按钮的参数
		$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');
	});
$('#gong #tz4 .zuo').click(function(){//左箭头
	e--;
	
	if(e==-1){
		e=$('#gong #tz4 .imgchang img').length-2;//跳过伪装的最后一个1个
		$('#gong #tz4 .imgchang').css({left:-($('#gong #tz4 .imgchang img').length-1)*314});
	}
	$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000);
	
	
		if(r<=0){
			r=3;
			}
	r--;
	$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');	
})
//数字按钮的触发事件
	$('#gong #tz4 .cen1_left li').click(function(){
		var index=$(this).index();
		$(this).css('background','red').siblings().css('background','#666');
		$('#gong #tz4 .imgchang').stop().animate({'left':-index*314+'px'},1000);
		e=index;
		r=index;
	})
//自动轮播事件
function tz4(){
	e++;
	if(e==$('#gong #tz4 .imgchang img').length){ //当在最后一组图上点击时，偏移量归零
			e=1;//跳过伪装的前1个
			$('#gong #tz4 .imgchang').css({left:0});
		}
		//点击时，整个ul的偏移量向左移动i个图片的宽度
		$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000);
		if(r>=2){
			r=-1;
		}
		r++;
		$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');
}

var timer=setInterval(tz4,2000);

$('#gong #tz4 .cen1_left').hover(function(){
	$('#gong #tz4 .cen1_left .an').css('display','block');
	clearInterval(timer)
},function(){
	timer=setInterval(tz4,2000);

})

