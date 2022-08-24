var hacker = {
	firstname: 'Bhaskar',
	lastname: 'Ram',
	gethackerName: function() {
		var hackername = this.firstname + ' ' + this.lastname;
		return hackername;
	}
};

var hackername = function() {
	console.log(this.gethackerName() + ' ' + '- Advent of Cyber 2021');
};

var logHacker = hackername.bind(hacker);
logHacker();