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

	showSingle: function(bioId){
			let daterCollOfOneInstance = new DaterCollection(`bioguide_id=${bioId}`)
			let singleDaterViewInstance = new SingleDaterView()

			if (typeof this.datersColl === 'undefined'){
				daterCollOfOneInstance.fetch().then(function(){
					console.log(daterCollOfOneInstance)
					// document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${daterCollOfOneInstance.models[0].get('first_name')}</h1>`
					singleDaterViewInstance.render(daterCollOfOneInstance, 0)
				})
			} else {
				   var selectedIndex = this.datersColl.findIndex(function(modl, i){
					// console.log(modl)
					return modl.get('bioguide_id') === bioId
				})

				console.log(selectedIndex)
				singleDaterViewInstance.render(this.datersColl, selectedIndex)
			}
		},



	showSingleItem: function(idOfSingleItem){
		let etsyCollectionOfOneInstance = new EtsyCollection(`listing_id=${idOfSingleItem}`);
		etsyCollectionOfOneInstance.fetch().then(function(){
			console.log(etsyCollectionOfOneInstance);

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
