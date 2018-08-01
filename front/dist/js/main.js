'use strict';

console.log('Week3-Class-Node-HW');

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


var showMessagesOnDOM = function showMessagesOnDOM(messages) {
	console.log('gonna show messages', messages);

	var messagesUL = document.querySelector('ul.messages');
	messagesUL.innerHTML = '';

	messages.forEach(function (message) {
		var newMessage = document.createElement('li');
		newMessage.innerHTML = message.username + ' sent: ' + message.text + ' @ ' + message.timestamp;
		messagesUL.appendChild(newMessage);
	});
};

var sendMessage = function sendMessage() {
	var field = document.querySelector('input[name="new-message"]');
	var userName = document.querySelector('input[name="user-name"]');
	console.log(userName);
	if (field.value) {
		console.log("send to server", userName.value);

		axios.post("http://localhost:1337/message", {
			text: field.value,
			timestamp: moment(new Date().getTime()).format('h:mm a'),
			username: userName.value
		}).then(function (response) {
			console.log("Wooooorrkiiing");
			field.value = "";
			console.log('server responded', response);
			showMessagesOnDOM(response.data);
		}).catch(function (error) {
			console.log("broookkkeen", error);
		});
	}
};

document.querySelector('button.send').addEventListener('click', sendMessage);
//# sourceMappingURL=main.js.map
