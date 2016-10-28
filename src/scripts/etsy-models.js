const Backbone = require('backbone');

//setting up a model
const EtsyModel = Backbone.Model.extend({
	url: "https://openapi.etsy.com/v2/listings/active?api_key=d0prraz2b63xy0odvjf6u0ir&includes=MainImage&callback=?", //we'll probably add this back in later with ETSY info
})

const EtsyCollection = Backbone.Collection.extend({
	model: EtsyModel, //MUST REFERENCE THE MODEL

	url: "https://openapi.etsy.com/v2/listings/active?api_key=d0prraz2b63xy0odvjf6u0ir&includes=MainImage&callback=?", //this will also be added later with ETSY info

	parse: function(rawJSONResponse) {
		return rawJSONResponse.results; //might need to be different depending on the structure of the API
	},



  initialize: function(queryStringParameters = "active"){
    let addedQueryString = '';
  //  if (typeof queryStringParameters !== 'undefined' {addedQueryString = `&${queryStringParameters}`})
    this.url = `https://openapi.etsy.com/v2/listings/${queryStringParameters}.js?api_key=d0prraz2b63xy0odvjf6u0ir&includes=MainImage&callback=?`;
  }
})

//need to export to the other files which reference them
module.exports = {
  EtsyCollection : EtsyCollection,
  EtsyModel : EtsyModel
}
