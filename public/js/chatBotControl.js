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
        let userInput = $('#chatbotTextBox').val();
        userInput = userInput.replace(/^\s+|\s+$/g, "");
        console.log(userInput);
        if(userInput.toLocaleLowerCase() == "unofficialtranscipt"){
            $('#chat-content').append(`<span class="you">`+
                $('#chatbotTextBox').val()
                + `<span class="time">`
                + time() +
                `</span></span>`
                +`<span class="friend last">
                      <a href="/assets/img/unofficalTranscipt.jpg" download>Link</a>
                      <span class="time">
                        `+ time() +
                 `</span> </span>`);

        }else {

            $('#chat-content').append(`<span class="you">` +
                $('#chatbotTextBox').val()
                + `<span class="time">`
                + time() +
                `</span>
                                    </span>`);
            $('#chat-content').append(`<span class="friend last">
                                      Sry, I am learning more instructions
                                      <span class="time">
                                        ` + time() +
                `</span>
                                    </span>`);
        }
         $('#chatbotTextBox').val('');
        var elem = document.getElementById('chat');
            elem.scrollTop = elem.scrollHeight;
}