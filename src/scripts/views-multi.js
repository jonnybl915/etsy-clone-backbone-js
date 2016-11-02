const Backbone = require('backbone');

const MultipleListingView = Backbone.View.extend({
    el: '#app-container',

    events: {
        //type of event and the corresponding route
        "click .listing-card": 'routeToIndividual'
    },

    routeToIndividual: function(evt) {
        console.log("Current Target: ", evt);
        // console.log("Current HOPE: ", evt.target.dataset.listing_id);
        //
        // console.log("Trying Again: ", evt.target.dataset.idOfSingleItem);
        //****** Changes The Hash Based On the Click ***********//
        window.location.hash = `#details/${evt.currentTarget.dataset.id}`;

    },

    //=========================
    // BUILDING BLOCKS FOR HTML
    //=========================

    _builderHTMLTemplate: function(collData) {
        let htmlBuilderString = `<h1>Can't Shop, Won't Shop</h1>`
        htmlBuilderString += collData.models.map(function(model) {
            var title = model.get('title')
                console.log("models: ", model);
                //console.log("main image url: ", model.get('MainImage'));
            var imageUrlGrabber = model.get('MainImage');
            //console.log("IMAGE GRABBER: ", imageUrlGrabber);
            var imageUrl = imageUrlGrabber.url_75x75;

              return `  <div class="row">
                          <div class="col s12 m7">
                            <div class="card medium">
                              <div class="card-image small">
                                <img src="${imageUrl}">
                                <span class="card-title">${(title.length > 40 ? title.slice(0, 30) : title)}...</span>
                              </div>
                              <div class="card-content">
                                 <p>${model.get('price')} :: ${model.get('currency_code')}</p>
                                 <p>Quantity: ${model.get('quantity')}</p>
                              </div>
                              <div class="card-action">
                                <a href="#">Individual View</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      `;


            //Initial Card idea. Now im trying with materialize above
            // return `<div class='listing-card l-4 m-2 s-1' data-id='${model.get('listing_id')}'>
            //             <h3>${(title.length > 40 ? title.slice(0, 30) : title)}...</h3>
            //               <img class='listing-image-small' src='${imageUrl}'>
            //                 <p>$ ${model.get('price')} :: ${model.get('currency_code')}</p>
            //                   <p>Quantity: ${model.get('quantity')}</p>
            //         </div>
            //         `;

            //return some thing via ${model.get(**variablename)}
            //NEED TO GRAB THE UNIQUE ID HERE FOR ROUTING TO PARTICULAR OBJECTS
            // something like<div class="etsy-card" id="model.get(lalala_id)"></div>
            //here I can link up and change the hash to hit my different routes
            //without an anchor tag. we can do this employing Backbone events
        }).join('')
        return htmlBuilderString; 
    },

    render: function(collectionData) {
        this.el.innerHTML = this._builderHTMLTemplate(collectionData);
    }
})

module.exports = MultipleListingView;
