const Backbone = require('backbone');

const SingleEtsyView = Backbone.View.extend({
  el: '#app-container',


//=========================
// BUILDING BLOCKS FOR HTML
//=========================

  _builderHTMLTemplate: function(collData){

    let htmlBuilderString = collData.models.map(function(model){
    var imageUrlGrabber = model.get('MainImage');
    console.log("Model: ", model);
    console.log(imageUrlGrabber);
     var imageUrl = imageUrlGrabber.url_570xN;

        return ` <div class="row etsy-card large-listing-card" id="${model.get('listing_id')}">
                    <h2>${model.get('title')}...</h2>
                    <img class='listing-image' src='${imageUrl}'/>
                    <ul class='single-view-item-specs'>
                      <li>${model.get('currency_code')}</li>
                      <li>${model.get('price')}</li>
                      <li>${model.get('price')}</li>
                      <li>${model.get('price')}</li>
                      <li>${model.get('price')}</li>
                    </ul>


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

  render: function(collectionData, i){
    this.el.innerHTML = this._builderHTMLTemplate(collectionData, i);
  }
})

module.exports = SingleEtsyView;
