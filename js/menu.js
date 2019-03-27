
$(function(){

	$("#BTN").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("nav").slideToggle(300);
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("nav").removeAttr("style");
		}
	}
	
});


//JQ 的功能指令主要是直接用程式產生 CSS 寫入到 HTML 內部的 style 之內
//然而 JQ 產生的 HTML 內部 style CSS 容易跟我們寫的外部 CSS 產生衝突
//使用removeAttr("style") 就可以把 JQ 產生的 style CSS 清除乾淨
		

