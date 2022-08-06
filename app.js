let people = [
  {
    username: 'zahoor',
    password: 'zahoor',
  },
  {
    username: 'josh',
    password: 'josh',
  },
]

function getInfo() {
	let username = document.getElementById('username').value
	let password = document.getElementById('password').value

	for(var i = 0; i <people.length; i++) {

		

		if(username == people[i].username && password == people[i].password) {
			console.log(username + " is logged in!!!")
		
			return
      
		}
	}
	console.log("incorrect username or password")
}