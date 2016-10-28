const Backbone = require('backbone');

//implementing destructuring to import the model and collections from etsy-models.js
const {EtsyCollection, EtsyModel} = require('./etsy-models.js');

const MultipleListingView = require('./views-multi.js');
const SingleEtsyView = require('./view-single.js');

const AppRouter = Backbone.Router.extend({

	routes: {
		"": "showHomePage",
	},


	showSingleItem: function(/*some kind of id*/){

	},

	showHomePage: function(){
		document.querySelector('#app-container').innerHTML = `<h4>START HER UP<h4>`;
		let etsyCollectionInstance = new EtsyCollection();
		etsyCollectionInstance.fetch().then(function(){
			console.log(etsyCollectionInstance);

		//this will be where we instantiate the model and collection to get the data on the page.
		let multipleListingViewInstance = new MultipleListingView();
		multipleListingViewInstance.render(etsyCollectionInstance);
		})
	},

	initialize: function(){
		console.log('AllesGut');
		Backbone.history.start();
	}
})

var app = new AppRouter();
