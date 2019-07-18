var lis=document.querySelectorAll(".sectionMiddle>ul.left>li");
var ul=document.querySelector(".sectionMiddle>ul.left");
var circus=ul.querySelector("img");
var divs=document.querySelectorAll(".sectionMiddle>div.left>div");
var topSpan=document.querySelector(".sectionTop>span");
console.log(topSpan);
ul.onclick=(e)=>{
	e=e||window.event;
	var tag=e.target||e.srcElement;
	if(tag.nodeName=="LI"){
		for(var i=0;i<lis.length;i++){
			lis[i].children[0].innerHTML="+";
			lis[i].style.color="#333333";
			lis[i].setAttribute("cz",i);
			divs[i].className="";
		}
		var index=tag.getAttribute("cz");
		tag.children[0].innerHTML="-";
		tag.style.color="#aa2c2d";
		circus.style.top=41*index+14+"px";
		divs[index].className="active";
		topSpan.innerHTML=tag.innerHTML.slice(0,3);
	}
	
}
