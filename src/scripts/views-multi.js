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
      let htmlBuilderString = `<h1>Can't Shop, Won't Shop</h1>`
      htmlBuilderString += collData.models.map(function(model){
      var title = model.get('title')
      //console.log("models: ", model);
      //console.log("main image url: ", model.get('MainImage'));
      var imageUrlGrabber = model.get('MainImage');
      var imageUrl = imageUrlGrabber.url_170x135;
      return `<div class='listing-card' id='${model.get('category_id')}'>
                  <h3>${(title.length > 40 ? title.slice(0, 30) : title)}...</h3>
                  <img class='listing-image-small' src='${imageUrl}'>
                  <p>$ ${model.get('price')} :: ${model.get('currency_code')}</p>
                  <p>Quantity: ${model.get('quantity')}</p>
              </div>
              `;
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
