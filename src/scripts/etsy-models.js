const Backbone = require('backbone')

//setting up a model
const EtsyModel = Backbone.Model.extend({
	url: "" //we'll probably add this back in later with ETSY info
})

const EtsyCollection = Backbone.Collection.extend({
	model: EtsyModel, //MUST REFERENCE THE MODEL
	parse: function(rawJSONResponse) {
		return rawJSONResponse.results //might need to be different depending on the structure of the API
	},
	url: "" //this will also be added later with ETSY info

  initialize: function(queryStringParameters){
    let addedQueryString = '';
    if(typeof queryStringParameters !== 'undefined' {addedQueryString = `&${queryStringParameters}`})
    this.url = `http://whateverwhatever/blahblahblah/${}`
  }
})

//need to export to the other files which reference them
module.exports = {
  EtsyCollection : EtsyCollection,
  EtsyModel : EtsyModel
}
