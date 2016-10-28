const Backbone = require('backbone');

const SingleEtsyView = Backbone.View.extend({
  el: '#app-container',


//=========================
// BUILDING BLOCKS FOR HTML
//=========================

  _builderHTMLTemplate: function(collData){
    let htmlBuilderString = collData.models.map(function(model){
      return //return some thing via ${model.get(**variablename)}
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

module.exports = SingleEtsyView;
