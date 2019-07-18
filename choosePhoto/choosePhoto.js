var ul=document.querySelector(".sectionMiddle>ul.left");
var lis=ul.querySelectorAll("li");
var spans=ul.querySelectorAll("li>span");
var topSpan=document.querySelector(".sectionTop>span");
var circus=document.querySelector(".sectionMiddle>ul>img");
var divs=document.querySelectorAll(".sectionMiddle>div.left>div");
var uls=document.querySelectorAll(".sectionFoot>div>ul");
setAtt(lis);
ul.onclick=(e)=>{
	e=e||window.event;
	var tag=e.target||e.srcElement;
	if(tag.nodeName=="LI"){
	    var index=tag.getAttribute("cz");
		//改变顶部人的名字
		var str=tag.innerText;
		str=str.slice(0,-1);
		topSpan.innerHTML=str;
		//改变加减号
		if(tag.children[0].innerHTML=="+"){
			for(var i=0;i<spans.length;i++){
				divs[i].className="";
				spans[i].innerText="+";
				uls[i].className="";
				lis[i].style.color="#333333";
			}
			tag.children[0].innerHTML="-";
		}
		 tag.style.color="#aa2c2d";
		//改变圆点的位置
		circus.style.top=41*index+14+"px";
		//改变内容区
		divs[index].className="active";
		//改变底部图片
		uls[index].className="active";
	}
}
function setAtt(ele){
	for(var i=0;i<ele.length;i++){
		ele[i].setAttribute("cz",i);
	}
}
