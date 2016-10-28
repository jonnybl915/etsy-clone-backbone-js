const Backbone = require('backbone');

//implementing destructuring to import the model and collections from etsy-models.js
const {EtsyCollection, EtsyModel} = require('./etsy-models.js');
const PlaceHolderEtsyView = require('./views-multi.js');

const AppRouter = Backbone.Router.extend({
	routes: {
		"": "showHomePage",
	},

	showHomePage: function(){
		document.querySelector('#app-container').innerHTML = `<h4>START HER UP<h4>`;
		let etsyCollectionInstance = new EtsyCollection();
		etsyCollectionInstance.fetch().then(function(){
			console.log(etsyCollectionInstance);

		//this will be where we instantiate the model and collection to get the data on the page.
		let placeHolderEtsyViewInstance = new PlaceHolderEtsyView();
		placeHolderEtsyViewInstance.render(etsyCollectionInstance);
		})
	},

	initialize: function(){
		console.log('AllesGut');
		Backbone.history.start();
	}
})

var app = new AppRouter();
