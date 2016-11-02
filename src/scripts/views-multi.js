const Backbone = require('backbone');
const $ = require('jquery');
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
        let htmlBuilderString = ` <nav class="nav nav-extended">
                                    <div class="nav-wrapper">
                                      <a href="#" class="brand-logo"><h4>Can't Shop, Won't Shop</h4></a>

                                      <ul class="right">
                                        <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                                        <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
                                        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
                                        <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
                                      </ul>

                                      <ul class="tabs">
                                        <li class="tab text-wrap"><a href="#test1">Clothing</a></li>
                                        <li class="tab text-wrap"><a href="#test2">Jewlery</a></li>
                                        <li class="tab text-wrap"><a href="#test3">Arts and Crafts</a></li>
                                        <li class="tab text-wrap"><a href="#test4">Entertainment</a></li>
                                        <li class="tab text-wrap"><a href="#test4">Home & Living</a></li>
                                        <li class="tab text-wrap"><a href="#test4">Kids & Baby</a></li>
                                        <li class="tab text-wrap"><a href="#test4">Vintage</a></li>
                                      </ul>
                                    </div>
                                  </nav>
                                  <div class="carousel">
                                    <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></a>
                                    <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></a>
                                    <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a>
                                    <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></a>
                                    <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></a>
                                  </div>
                                  <div class="row">
                                `
        htmlBuilderString += collData.models.map(function(model) {
            var title = model.get('title')
                //console.log("models: ", model);
                //console.log("main image url: ", model.get('MainImage'));
            var imageUrlGrabber = model.get('MainImage');
            //console.log("IMAGE GRABBER: ", imageUrlGrabber);
            var imageUrl = imageUrlGrabber.url_fullxfull;

              return `    <div class="col s6 m4 l3 " data-id="${model.get('listing_id')}">
                            <div class="card small listing-card">
                              <div class="card-image small">
                                <img src="${imageUrl}">
                                <span class="card-title">${(title.length > 40 ? title.slice(0, 30) : title)}...</span>
                              </div>
                              <div class="card-content">
                              <hr></hr>
                                 <p>${model.get('currency_code')} : ${model.get('price')}</p>
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

(document).ready(function(){
     $('.carousel').carousel({
           dist:0,
           shift:0,
           padding:20,

     });

   });
