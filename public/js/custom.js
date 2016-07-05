
// Get latest contribution graph from github
$(document).ready(function(){
	$.get("/getGithubContributions",function(data){
		$("#activityImage").html(data);
	});
});
