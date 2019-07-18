var lis=document.querySelectorAll(".sectionMiddle>ul>li");
var spans=document.querySelectorAll(".sectionMiddle>ul>li>span");
var uls=document.querySelector(".sectionMiddle>ul")
var divs=document.querySelectorAll(".sectionMiddle>ul>li>div");
var divs1=document.querySelectorAll(".sectionMiddle>ul>li>div>div");
var imgs=document.querySelector(".sectionMiddle>ul>img");
var topSpan=document.querySelector(".sectionTop>span");
var toph4=document.querySelector(".sectionTop>h4");
var legend=document.querySelector("legend");
var legendH2=document.querySelector("fieldset>h2");
var imgs1=document.querySelectorAll(".sectionMiddle>.right>div img");
var divs2=document.querySelectorAll(".sectionMiddle>.right>div>div");
setCz(divs1);
uls.onclick=function(e){
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName=="LI"&&target.children[0].innerHTML=="+"){
		clearActive(divs);
		clearActive(lis);
		clearActive(divs1);
		clearActive(imgs1);
		clearActive(divs2);
		for(let i=0;i<spans.length;i++){
			spans[i].innerHTML="+";
			lis[i].setAttribute("cz",i);
		}
		target.className="active";
		target.children[1].className="active";
		target.children[0].innerHTML="-";
		target.children[1].children[0].className="active";
	    var index=parseInt(target.getAttribute("cz"));
	    imgs.style.top=index*44+25+"px";
	    var str=target.innerHTML;
	    var i=str.indexOf("\s");
	    str=str.slice(0,i-1);
	    str=str.replace("•","");
	    topSpan.innerHTML=str+" >";
	    var j=0;
	    for(var i=0;i<index;i++){
	    	if(index==0){
	    		j=i;
	    	}else{
	    		j+=lis[i].children[1].children.length;
	    	}
	    }
	    divs2[j].className="active";
	    for(var i=0;i<target.children[1].children.length;i++){
		if(target.children[1].children[i].className){
			toph4.innerHTML=setStr("<",target.children[1].children[i].innerHTML);
		}
		legend.innerHTML=toph4.innerHTML;
		legendH2.innerHTML=target.children[1].children[0].firstElementChild.innerHTML;
		//获取相应图片
		for(var i=0;i<imgs1.length;i++){
			var j=parseInt(target.getAttribute("cz"))+1;
			if((imgs1[i].src[imgs1[i].src.length-6])==j){
				imgs1[i].className="active";
				return;
			}
		}
	  }
	}
	if(target.children[0].nodeName=="H5"&&target.nodeName=="DIV"){
		clearActive(divs1);
		clearActive(divs2);
		target.className="active";
		toph4.innerHTML=setStr("<",target.innerHTML);
	    legend.innerHTML=toph4.innerHTML;
	    legendH2.innerHTML=target.children[0].innerHTML;
	    let i=target.getAttribute("cz");
	    clearActive(imgs1);
	    imgs1[i].className="active";
	    divs2[i].className="active";
	}
}
function clearActive(ele){
	for(let i=0;i<ele.length;i++){
		ele[i].className="";
	}
}
function setStr(tag,str){
	var i=str.indexOf(tag);
	str=str.slice(0,i);
	return str;
}
function setCz(ele){
	for(let i=0;i<ele.length;i++){
		ele[i].setAttribute("cz",i);
	}
}

/carousel 轮播/
var btns=document.querySelectorAll(".big>button");
var container=document.querySelector(".carousel .container");
var index1=0;
var carousel=document.querySelector(".carousel");
console.log(btns[1]);
btns[1].onclick=function(){
	index1++;
	console.log(this);
	if(index1==4){
		index1=0;
	}
	container.style.left=-300*index1+"px";
}
btns[0].onclick=function(){
	index1--;
	console.log(1);
	if(index1==-1){
		index1=3;
	}
	container.style.left=-300*index1+"px";
}
var timer=setInterval(btns[1].onclick,1000);
carousel.onmouseover=()=>{
	clearInterval(timer);
}
carousel.onmouseout=()=>{
	timer=setInterval(btns[1].onclick,2000);
}
