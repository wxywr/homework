var form=document.querySelector('form');
var bd=document.querySelectorAll('form input');
var shu=document.querySelectorAll('form p .shu');
console.log(bd);
console.log(shu);
for (var i = 0; i < bd.length; i++) {
	bd[i].index=i;
	bd[i].onfocus=function(){
		for (var j = 0; j < shu.length; j++) {
			shu[j].style.display="none"
			bd[j].style.border="1px solid #ccc"
		}
		this.style.border='1px solid red'
		shu[this.index].style.display="block"
	}
}
var dj=document.querySelector('.submit');
var jg=document.querySelectorAll('form p .jing');
console.log(jg);
	dj.onclick=function(){
		for (var i = 0; i < jg.length; i++){
			jg[i].style.display='block';
		}
	}
// dengluyanzhengma画布
var canvas=document.getElementById('canvas');
	var ctx=canvas.getContext('2d');
	draw();
var colors=document.querySelector('.colors');
	colors.onclick=function(){
		ctx.clearRect(0,0,84,35);//清除画布
		draw();
	}
	canvas.onclick=function(){
		ctx.clearRect(0,0,84,35);//清除画布
		draw();
	}
	//绘制验证码图片
	function draw(){
		//绘制一个随机的背景颜色--填充一个矩形
		ctx.fillStyle=randColor(170,250);
		ctx.fillRect(0,0,84,35);
	//绘制四个随机的字符
		var data="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789";
		for(var i=0;i<=84;i+=21){
			var c=data[randNum(0,data.length)];
			ctx.fillStyle=randColor(60,160);
			ctx.font=randNum(15,40)+'px SimHei'
			ctx.fillText(c,i+randNum(0,15),randNum(15,30))
		}
		//绘制颜色随机的干扰线
		for(var i=0;i<10;i++){
			ctx.beginPath();//开始
			ctx.moveTo(randNum(0,84),randNum(0,35));
			ctx.lineTo(randNum(0,84),randNum(0,35));
			ctx.strokeStyle=randColor(60,160);
			ctx.stroke();//轮廓线
		}	
		//绘制颜色随机的干扰线
		for(var i=0;i<10;i++){
			ctx.beginPath();//开始
			ctx.arc(randNum(0,84),randNum(0,350),randNum(0,5),0,2*Math.PI);
			ctx.strokeStyle=randColor(60,160);
			ctx.stroke();//轮廓线
		}
	}	
	//产生一个随机的颜色值
	function randColor(min,max){
		var r=Math.floor(Math.random()*(max-min)+min);
		var g=Math.floor(Math.random()*(max-min)+min);
		var b=Math.floor(Math.random()*(max-min)+min);
		return 'rgb('+r+','+g+','+b+')';
	}
	//产生一个随机的整数
	function randNum(min,max){
		var num=Math.floor(Math.random()*(max-min)+min);
		return num;
	}