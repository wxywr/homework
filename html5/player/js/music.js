var musicList=[
		{
			name:"感恩的心",
			author:"欧阳菲菲",
			url:"music/感恩的心.mp3"
		},
		{
			name:"偷偷的爱",
			author:"丁当",
			url:"music/偷偷的爱.Mp3"
		},
		{
			name:"最后一页",
			author:"江语晨",
			url:"music/最后一页.mp3"
		},
		{
			name:"爱要坦荡荡",
			author:"萧潇",
			url:"music/爱要坦荡荡.mp3"
		}
	];
//添加歌曲列表
var ul = document.getElementsByTagName('ul')[0];
console.log(ul);
var list=[];
for(var i = 0;i<musicList.length;i++){
	list[i]=document.createElement('li');
	list[i].innerHTML=musicList[i].name+'-'+musicList[i].author;
	ul.appendChild(list[i]);
 }

var INDEX=0;
var audio= document.getElementById('musicbox');
var mList = document.querySelectorAll('li');
//播放函数
function playMusic(index){
	n=0;
	audio.setAttribute("src",musicList[index].url);
	audio.play();
	for(var i=0;i<musicList.length;i++){
		mList[i].className="";  
	}
	mList[index].className="isplay";
	console.log(musicList[index]);
	INDEX=index;
}

//双击播放所选歌曲
for(i=0;i<mList.length;i++){
	mList[i].index=i;
	mList[i].ondblclick=function(){
		playMusic(this.index);
		play.className="playing";
	}
}

var play = document.getElementById('play');
function playclick(){
	if(play.className!=""){
		play.className="";
		audio.pause();
	}else{
		play.className="playing";
		audio.play();
	}
}

playMusic(INDEX);

//下一曲
var next = document.getElementById('next');
next.onclick = function(){
	nextmusic();
}
function nextmusic(){
	if(INDEX==musicList.length-1){//让INDEX下标和li的length相等
		INDEX=-1;
	}
	INDEX+=1;//从第一首歌开始播放
	playMusic(INDEX);
	play.className="playing";
}