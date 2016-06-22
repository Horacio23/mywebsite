

$(document).ready(function(){
	$.get("https://github.com/users/horacio23/contributions", function(data){
		console.log(data);
		$("#activityImage").html(data);
	});
});
