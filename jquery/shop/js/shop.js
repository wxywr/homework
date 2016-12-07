//数量增加
$('.p').click(numP);
function numP(){
	//console.log(123);
	var num = Number($(this).prev('input').val());
	num++;
	$(this).prev('input').val(num);
	getxj($(this),num);
}

//数量减少
$('.s').click(numS);
function numS(){
	var num = Number($(this).next('input').val());
	if(num<=1){
		return;
	}
	num--;
	$(this).next('input').val(num);
	getxj($(this),num);
}

//小计功能
function getxj(obj,num){
	var xjNum = Number(obj.parents('.sl').prev().html())*num;
	obj.parent().parent().next().html(xjNum.toFixed(1));
	gethj();
}

//合计功能
gethj();
function gethj(){
	var hjNum = 0;
	var xjArr = $('.content .xj');
	for(var i=0;i<xjArr.length;i++){
		hjNum+=Number(xjArr.eq(i).html())
	}
	$('strong').html(hjNum.toFixed(1));
}

//删除一行
$('.del').click(delRow);
function delRow(){
	$(this).parent().parent().remove();
	gethj();
}

//增加一行
$('.addRow').click(function(){
	$('.content').append('<ul class="sp-list"><li class="sp"><img src="img/4.jpg"><span>Casio/卡西欧 EX-TR350</span></li><li class="dj">640.6</li><li class="sl"><div><span class="s">-</span><input type="text" value="1" readonly="readonly"><span class="p">+</span></div></li><li class="xj redColor">640.6</li><li class="cz"><span class="del">删除</span></li></ul>');
	$('.del').unbind('click').click(delRow);
	$('.s').unbind('click').click(numS);
	$('.p').unbind('click').click(numP);
	gethj();
});