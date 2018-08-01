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
	messagesUL.innerHTML = '';



	let deleteBtn = document.createElement('button');

	messages.forEach( function(message) {	
		let newMessage = document.createElement('li');
		newMessage.innerHTML = `${message.username} sent: ${message.text} @ ${message.timestamp}`
		deleteBtn.appendChild( messagesUL );
		messagesUL.appendChild( newMessage )
	})
	

};


let sendMessage = function() {
	let field = document.querySelector('input[name="new-message"]');
	let userName = document.querySelector('input[name="user-name"]')
	console.log(userName)
	if (field.value) {
		console.log("send to server", userName.value);

		axios
			.post("http://localhost:1337/message", {
				text: field.value,
				timestamp: moment(new Date().getTime()).format('h:mm a'),
				username: userName.value,
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


// let loadSite = function() {
// 	axios.get('http://localhost:1337/message')
// 	console.log("page loaded")
// }


document.querySelector('button.send').addEventListener('click', sendMessage)