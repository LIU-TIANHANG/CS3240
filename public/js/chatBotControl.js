$('#chatbotTextBox').on('keypress', (e)=>{
    if(e.which == 13) {
        e.preventDefault();
        handleKeyPress();
    }
});
$('#chatBotEnterButton').click(function() {
  handleKeyPress();
});
var handleKeyPress = (e)=>{
        var today = new Date();
        var time = () =>{
            if(today.getHours()>11){
                let minute = today.getMinutes(); 
                if(minute < 9){
                    minute  = "0" + today.getMinutes();
                }
                return today.getHours()-12 + ":" + minute + "pm";

            }
        }
        $('#chat-content').append(`<span class="you">`+
                                      $('#chatbotTextBox').val() 
                                      + `<span class="time">`
                                      + time() +
                                      `</span>
                                    </span>`);
        $('#chat-content').append(`<span class="friend last">
                                      Sry, I am learning more instructions
                                      <span class="time">
                                        `+ time() +
                                      `</span>
                                    </span>`);
        $('#chatbotTextBox').val('');
        var elem = document.getElementById('chat');
            elem.scrollTop = elem.scrollHeight;
}