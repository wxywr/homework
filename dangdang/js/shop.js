var num = document.querySelectorAll('#father input');
var dangTotal=[];//总价
var marTotal=[];//总市场价
var SCORE=[];//积分

for(var i = 0;i<num.length;i++){
	num[i].index = i;
	firstCount(num[i]);
	num[i].onchange = function(){
		firstCount(this);
	}
}
function firstCount(aaa){
	var ul = aaa.parentNode.parentNode;
	// console.log(ul);
	var val = aaa.value;
	var score = ul.querySelector('.dp').innerHTML;
	var marketPrice = ul.querySelector('.sc label').innerHTML;
	var dangPrice = ul.querySelector('.dang label').innerHTML;
	console.log(score,marketPrice,dangPrice);
	dangTotal[aaa.index] = parseInt(dangPrice)*val;
	marTotal[aaa.index] = parseInt(marketPrice)*val;
	SCORE[aaa.index] = parseInt(score)*val;
	console.log(dangTotal,marTotal,SCORE);
	Count();
	jifen();
	market();
}
function Count(){
	//计算当当总价
	var alldangTotal = 0;
	for(var i = 0;i<dangTotal.length;i++){
		console.log(dangTotal[i]);
		alldangTotal+=dangTotal[i];
	}
	// console.log(alldangTotal);
	var z = document.querySelector('.bottom .right span').innerHTML = '￥'+alldangTotal;
	console.log(z);	
}
function jifen(){
	//计算商品积分
	var allScore = 0;
	for(var i = 0;i<SCORE.length;i++){
		console.log(SCORE[i]);
		allScore+=SCORE[i];
	}
	var jf = document.querySelector('.bottom .jifen').innerHTML = allScore;
	console.log(jf);
}
function market(){
	//计算总市场价
	var allMarket = 0;
	for(var i = 0;i<marTotal.length;i++){
		allMarket+=marTotal[i];
		console.log(marTotal[i]);
	}
	var mar = document.querySelector('.bottom .market').innerHTML = allMarket;
	console.log(mar);
}
