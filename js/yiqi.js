// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("再考虑一下呗");
	   }else if(Dianji==2){
		   		alert("蓝是你的");
		   		
	   }else if(Dianji==3){
		   		alert("红也是你的");
		   		
	   }else if(Dianji==4){
		   		alert("人头也是");
		   		
	  }else if(Dianji==5){
		   		alert("伤害我来扛");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("终于同意了");
	}
	

}