var carousel={
    "lis":document.getElementsByClassName("bannerUl")[0].children,
    "btns":document.getElementsByClassName("banner")[0].getElementsByTagName("button"),
    "imgs":document.getElementsByClassName("container")[0].getElementsByTagName("img"),
    "index":0,
    "unit":function(){
       this.bind(this.btns);
       this.bind(this.lis);
       this.setproperty(this.lis);
       var timer=setInterval(() => {
           this.move("&gt;");
       }, 3000);
       var banners=document.getElementsByClassName("banner")[0];
       banners.onmouseover=()=>clearInterval(timer);
       banners.onmouseout=function(){
           timer=(setInterval(()=>{ carousel.move("&gt;");},1000));
       }
    },
    "bind":function(ele){
        for(let i=0;i<ele.length;i++){
            ele[i].onclick=function(){
                carousel.move(this.innerHTML,this.getAttribute("cz"));
                if(this.innerHTML==""){
                    carousel.clearActive(carousel.lis);
                    this.className="active";
                }
            }
        }
    },
    "setproperty":function(ele){
        for(let i=0;i<ele.length;i++){
            ele[i].setAttribute("cz",i);
        }
    },
    "move":function(val,index){
         var container=document.getElementsByClassName("container")[0];
         var x=0;
         if(val=="&gt;"){
            this.index++;
             if(this.index==6){
                 this.index=0;
             }
             x=this.index*1519.2;
         }
         else if(val=="&lt;"){
             this.index--;
             if(this.index==-1){
                 this.index=5;
             }
             x=this.index*1519.2;
        }
         else{
             x=parseInt(index)*1519.2;
             this.index=index;
         }
         container.style.left=-x+"px";
         this.clearActive(this.lis);
         this.lis[this.index].className="active";
    },
    "clearActive":function(ele){
        for(let i=0;i<ele.length;i++){
            ele[i].className="";
        }
    },
};
carousel.unit();