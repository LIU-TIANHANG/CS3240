
$('#chatBotButton').click(function(){
	document.getElementById("myForm").style.display = "block";
		document.getElementById("chatBotButton").style.display = "none";
		var elem = document.getElementById('chat');
    elem.scrollTop = elem.scrollHeight;
})
$('#chatbotMinButton').click(function(){
	document.getElementById("myForm").style.display = "none";
		document.getElementById("chatBotButton").style.display = "block";
})