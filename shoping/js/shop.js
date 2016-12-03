function addRow(){
	var footer1=document.getElementsByClassName("footer")[0];
	var div1=document.createElement("div");
	footer1.parentNode.insertBefore(div1,footer1);
	div1.innerHTML='<div class="five"><ul><li class="shop"  class="shop-1"><img src="images/5.jpg"><p>Fujifilm/富士 instaxmini 25</p></li><li li class="price" class="price-1"><p>640.6</p></li><li class="numb"><input type="button" value="-"><input type="text" value="1" class="number"><input type="button" value="+"></li><li class="alls"><p>640.6</p></li><li class="dele"><p>删除</p></li></ul></div>'
}