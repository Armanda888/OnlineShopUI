import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  sizes: DS.attr(),
  productImages: DS.attr(),
  prices: DS.attr(),
  reviews: DS.attr(),

  images: Ember.computed('productImages', function() {
    let result = []
    if (this.get('productImages').length > 0) {
      this.get('productImages').forEach((image) => {
        result.push(image)
      })
      return result;
    }
    return this.get('productImages');
  }),
  coverImage: Ember.computed('productImages', function() {
      let result = null
      if (this.get('productImages').length > 0) {
        this.get('productImages').forEach((image, index) => {
          if (index == 0) {
            result = image
          }
        })
      }
      return result;
    }),
    originPrice: Ember.computed('productImages', function() {
       return 120;
    }),
    salePrice: Ember.computed('productImages', function() {
        return 60;
    })
});
