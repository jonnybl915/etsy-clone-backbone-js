const Backbone = require('backbone');

const PlaceHolderEtsyView = Backbone.View.extend({
  el: '#app-container',


//=========================
// BUILDING BLOCKS FOR HTML
//=========================

  _builderHTMLTemplate: function(collData){
    let htmlBuilderString = collData.models.map(function(model){
      return //return some thing via ${model.get(**variablename)}
    }).join('')
    return htmlBuilderString;
  },

  render: function(collectionData){
    this.el.innerHTML = this._builderHTMLTemplate(collectionData);
  }
})

module.exports = PlaceHolderEtsyView;
