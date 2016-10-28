const Backbone = require('Backbone');

//setting up a model
const EtsyModel = Backbone.Model.extend({
	url: "" //we'll probably add this back in later with ETSY info
})

const EtsyCollection = Backbone.Collection.extend({
	url: "" //this will also be added later with ETSY info
})

var AppRouter = Backbone.Router.extend({
	routes: {
		"": "showHomePage",
	},

	showHomePage: function(){
		document.querySelector('#app-container').innerHTML = `<h4>START HER UP<h4>`;

		//this will be where we instantiate the model and collection to get the data on the page.

	},

	initialize: function(){
		console.log('AllesGut');
		Backbone.history.start();
	}
})

var app = new AppRouter();
