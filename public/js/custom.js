

$(document).ready(function(){
	$.get("/activity.html",function(data){
		console.log(data);
		$("#activityImage").html(data);
	});
});
