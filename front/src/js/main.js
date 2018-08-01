console.log(`Week3-Class-Node-HW`);

/*  
	Create  -post /message
	Create  -get /message
	Read	-get  /message
	Update	-patch	/message1
	Delete	-delete /message1
*/


// user types, presses send, message appears

// user types, presses send, send message to server, message appears
// user types, presses send, get message from field,send message to server, message appears
// user types, presses send, get message from field,send message to server, get message list from server, message appears




let showMessagesOnDOM = function(messages) {
	console.log('gonna show messages' , messages)

	let messagesUL = document.querySelector('ul.messages');

	messagesUL.innerHTMl = '';


	messages.forEach( function(message) {
		let newMessage = document.createElement('li');
		newMessage.innerText = message.text
		messagesUL.appendChild( newMessage )
	})
	

}



let sendMessage = function() {
	let field = document.querySelector('input[name="new-message"]');
	if (field.value) {
		console.log("send to server", field.value);

		axios
			.post("http://localhost:1337/message", {
				text: field.value
			})
			.then(function(response) {
				console.log("Wooooorrkiiing")
				field.value = "";
				console.log('server responded', response)
				showMessagesOnDOM(response.data)
			})
			.catch(function(error) {
				console.log("broookkkeen", error)
			})
	}
}



document.querySelector('button.send').addEventListener('click', sendMessage)