$('.addRow').click(function(){
	$('.content').append('<ul class="sp-list"><li class="sp"><img src="img/4.jpg"><span>Casio/卡西欧 EX-TR350</span></li><li class="dj">640.6</li><li class="sl"><div><span class="s">-</span><input type="text" value="1" readonly="readonly"><span class="p">+</span></div></li><li class="xj redColor">640.6</li><li class="cz"><span class="del">删除</span></li></ul>');
});

$('.del').click(function(){
	$('.sp-list:first').remove();
})