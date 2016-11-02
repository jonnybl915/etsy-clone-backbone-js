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
        let htmlBuilderString = ` <nav class="nav">
                                    <div class="nav-wrapper">
                                      <a href="#" class="brand-logo"><h4>Can't Shop, Won't Shop</h4></a>
                                      <ul id="nav-mobile" class="right hide-on-med-and-down">
                                        <li><a href="sass.html">Sass</a></li>
                                        <li><a href="badges.html">Components</a></li>
                                        <li><a href="collapsible.html">JavaScript</a></li>
                                      </ul>
                                    </div>
                                  </nav>

                                  <div class="row">
                                `
        htmlBuilderString += collData.models.map(function(model) {
            var title = model.get('title')
                //console.log("models: ", model);
                //console.log("main image url: ", model.get('MainImage'));
            var imageUrlGrabber = model.get('MainImage');
            //console.log("IMAGE GRABBER: ", imageUrlGrabber);
            var imageUrl = imageUrlGrabber.url_fullxfull;

              return `    <div class="col s6 m4 l3 listing-card" data-id="${model.get('listing_id')}">
                            <div class="card small">
                              <div class="card-image small">
                                <img src="${imageUrl}">
                                <span class="card-title">${(title.length > 40 ? title.slice(0, 30) : title)}...</span>
                              </div>
                              <div class="card-content">
                              <hr></hr>
                                 <p>${model.get('price')} :: ${model.get('currency_code')}</p>
                                 <p>Quantity: ${model.get('quantity')}</p>
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
        return htmlBuilderString += `</div>`; 
    },

    render: function(collectionData) {
        this.el.innerHTML = this._builderHTMLTemplate(collectionData);
    }
})

module.exports = MultipleListingView;
