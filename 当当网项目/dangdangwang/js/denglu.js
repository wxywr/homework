var yao=document.querySelectorAll('.yao_shu_ru');
var wei=document.querySelectorAll('.wei_shu_ru');
var input=document.querySelectorAll('.ml');
var submit=document.querySelector('.submit');
var checkbox=document.querySelector('.checkbox');

console.log(checkbox)
for(var i=0;i<input.length;i++){
	input[i].index=i;
	input[i].onfocus=function(){
		for (var j = 0; j < yao.length; j++) {
			yao[j].style.display='none';
			input[j].style.border='1px solid #999';
			wei[j].style.display='none'
		}
		yao[this.index].style.display='block';
		input[this.index].style.border='1px solid blue';
	}
}
submit.onclick=function(){
	for(var i=0;i<input.length;i++){
		input[i].index=i;
		yao[i].style.display='none';
		wei[i].style.display='block'
	}
}
checkbox.onclick=function(){
	if(none.style.display=='none'){
		none.style.display='block'
		block.style.display='none'
	}else{
		none.style.display='none'
		block.style.display='block'
	}
}
// dengluyanzhengma画布
var canvas=document.getElementById('canvas');
	var ctx=canvas.getContext('2d');
	draw();
var dengluyanzhengma=document.querySelector('.dengluyanzhengma');
	dengluyanzhengma.onclick=function(){
		ctx.clearRect(0,0,200,40);//清除画布
		draw();
	}
	//绘制验证码图片
	function draw(){
		//绘制一个随机的背景颜色--填充一个矩形
		ctx.fillStyle=randColor(170,250);
		ctx.fillRect(0,0,200,40);
	//绘制四个随机的字符
		var data="这是开发就离开过安装发给你拉客户给啥地方看见老公回家时召开了敬爱火锅看见这个份看见对方";
		for(var i=0;i<=200;i+=50){
			var c=data[randNum(0,data.length)];
			ctx.fillStyle=randColor(60,160);
			ctx.font=randNum(15,40)+'px SimHei'
			ctx.fillText(c,i+randNum(0,15),randNum(15,30))
		}
		//绘制颜色随机的干扰线
		for(var i=0;i<10;i++){
			ctx.beginPath();//开始
			ctx.moveTo(randNum(0,200),randNum(0,40));
			ctx.lineTo(randNum(0,200),randNum(0,40));
			ctx.strokeStyle=randColor(60,160);
			ctx.stroke();//轮廓线
		}	
		//绘制颜色随机的干扰线
		for(var i=0;i<10;i++){
			ctx.beginPath();//开始
			ctx.arc(randNum(0,200),randNum(0,40),randNum(0,5),0,2*Math.PI);
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