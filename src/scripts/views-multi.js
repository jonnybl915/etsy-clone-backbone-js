const Backbone = require('backbone');

const MultipleListingView = Backbone.View.extend({
  el: '#app-container',

  events: {
    //type of event and the corresponding route
    "click .etsy-card" : 'routeToIndividual'
  },

  routeToIndividual: function(evt){
    console.log(evt.currentTarget.id);
    //****** Changes The Hash Based On the Click ***********//
    window.location.hash = evt.currentTarget.id;
  },

//=========================
// BUILDING BLOCKS FOR HTML
//=========================

  _builderHTMLTemplate: function(collData){
    let htmlBuilderString = collData.models.map(function(model){
      console.log("models: ", model);
      return `<h2>${model.get('title')}</h2>`;
      //return some thing via ${model.get(**variablename)}
      //NEED TO GRAB THE UNIQUE ID HERE FOR ROUTING TO PARTICULAR OBJECTS
      // something like<div class="etsy-card" id="model.get(lalala_id)"></div>
      //here I can link up and change the hash to hit my different routes
      //without an anchor tag. we can do this employing Backbone events
    }).join('')
    return htmlBuilderString; 
  },

  render: function(collectionData){
    this.el.innerHTML = this._builderHTMLTemplate(collectionData);
  }
})

module.exports = MultipleListingView;
