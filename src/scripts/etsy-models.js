const Backbone = require('backbone');

//setting up a model
const EtsyModel = Backbone.Model.extend({
	url: "https://openapi.etsy.com/v2/listings/active?api_key=d0prraz2b63xy0odvjf6u0ir&callback=?", //we'll probably add this back in later with ETSY info
})

const EtsyCollection = Backbone.Collection.extend({
	model: EtsyModel, //MUST REFERENCE THE MODEL

	url: "https://openapi.etsy.com/v2/listings/active?api_key=d0prraz2b63xy0odvjf6u0ir&callback=?", //this will also be added later with ETSY info
	// dataType: "jsonp",
	//overwriting the datatype:
	// sync : function(method, collection, options) {
  //   // By setting the dataType to "jsonp", jQuery creates a function
  //   // and adds it as a callback parameter to the request, e.g.:
  //   // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
  //   // If you want another name for the callback, also specify the
  //   // jsonpCallback option.
  //   // After this function is called (by the JSONP response), the script tag
  //   // is removed and the parse method is called, just as it would be
  //   // when AJAX was used.
  //   options.dataType = "jsonp";
  //   return Backbone.sync(method, collection, options);
	// },
	parse: function(rawJSONResponse) {
		return rawJSONResponse.results //might need to be different depending on the structure of the API
	},



  initialize: function(queryStringParameters){
    let addedQueryString = '';
    //if(typeof queryStringParameters !== 'undefined' {addedQueryString = `&${queryStringParameters}`})
    this.url = `https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?`;
  }
})

//need to export to the other files which reference them
module.exports = {
  EtsyCollection : EtsyCollection,
  EtsyModel : EtsyModel
}
