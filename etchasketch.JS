var rows=126;
var columns=65;
var $row=$("<div />",{class:'row'});
var $square=$("<div />", {class:'square'});


$(document).ready(function(){
	for(i=0;i<columns;i++){
		$row.append($square.clone());
	}
	for(i=0;i<rows;i++){
		$("#wrapper").append($row.clone());
	}




});
/*
$(document).ready(function(){
	if("toggle"==="click"){
	$(document).ready(function(){
		$(".square").on({
		click:function(){
			$(this).toggleClass("clicked");
		},mouseenter:function(){
			$(this).addClass("highlighted");
		},mouseleave:function(){
			$(this).removeClass("highlighted");
		}
	});
	});
	}
	*/	
	/*else if("toggle"==="hover"){*/
	$(document).ready(function(){
		$(".square").on({
		mouseenter:function(){
			$(this).addClass("clicked");
		}
		});
	});


$(document).ready(function(){
	$("button").click('button',function(){
		$(".square").removeClass("clicked")
	});
});
