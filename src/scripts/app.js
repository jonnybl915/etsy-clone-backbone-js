const Backbone = require('backbone');

//implementing destructuring to import the model and collections from etsy-models.js
const {EtsyCollection, EtsyModel} = require('./etsy-models.js');

const MultipleListingView = require('./views-multi.js');
const SingleEtsyView = require('./view-single.js');

const AppRouter = Backbone.Router.extend({

	routes: {
		"home" : "showHomePage",
		"details/:id" : "showSingleItem",
	},


	showSingleItem: function(idOfSingleItem){
		document.querySelector('#app-container').innerHTML = `<h4>START HER UP<h4>`;
		let etsyModelInstance = new EtsyModel();
		etsyModelInstance.fetch().then(function(){
			console.log(etsyModelInstance);

			let singleEtsyViewInstance = new SingleEtsyView();
			singleEtsyViewInstance.render(etsyModelInstance);
		})
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
