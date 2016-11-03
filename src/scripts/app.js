const Backbone = require('backbone');
const $ = require('jquery');

const Materialize = require('materialize-css/js/materialize.js')
//implementing destructuring to import the model and collections from etsy-models.js
const {EtsyCollection, EtsyModel} = require('./etsy-models.js');

const MultipleListingView = require('./views-multi.js');
const SingleEtsyView = require('./view-single.js');

const AppRouter = Backbone.Router.extend({

	routes: {
		"" : "showHomePage",
		"details/:id" : "showSingleItem",
	},

	showSingleItem: function(idOfSingleItem){
		let etsyCollectionOfOneInstance = new EtsyCollection(`${idOfSingleItem}`);
		let singleEtsyViewInstance = new SingleEtsyView();

		etsyCollectionOfOneInstance.fetch().then(function(){
		//console.log("Collection Of 1 Instance", etsyCollectionOfOneInstance);

			if (typeof this.etsyColl === 'undefined'){
				etsyCollectionOfOneInstance.fetch().then(function(){
					//console.log(etsyCollectionOfOneInstance);
					// document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${daterCollOfOneInstance.models[0].get('first_name')}</h1>`
					singleEtsyViewInstance.render(etsyCollectionOfOneInstance, 0)
				})
			} else {
				   var selectedIndex = this.etsyColl.findIndex(function(modl, i){
					// console.log(modl)
					return modl.get('listing_id') === idOfSingleItem;
				})


			singleEtsyViewInstance.render(this.etsyColl, selectedIndex);
		}
		console.log("ETSY COLL: ", this.etsyColl);
		singleEtsyViewInstance.render(this.etsyColl);
	}
)},

	showHomePage: function(){
		let self = this;
		document.querySelector('#app-container').innerHTML = `<h4>START HER UP<h4>`;
		let etsyCollectionInstance = new EtsyCollection();
		etsyCollectionInstance.fetch().then(function(){
			//console.log(etsyCollectionInstance);

		//this will be where we instantiate the model and collection to get the data on the page.
		self.etsyColl = etsyCollectionInstance;
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
