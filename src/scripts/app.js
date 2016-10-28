const Backbone = require('Backbone');

var AppRouter = Backbone.Router.extend({
	routes: {
		"": "showHomePage",
	},

	showHomePage: function(){
		document.querySelector('#app-container').innerHTML = `<h1>START HER UP<h1>`;
	},

	initialize: function(){
		console.log('AllesGut');
		Backbone.history.start();
	}
})

var app = new AppRouter();
