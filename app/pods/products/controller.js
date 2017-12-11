import Controller from '@ember/controller';

export default Controller.extend({

  productsCount: Ember.computed('model.products.length', function() {
      return this.get('model.products.length');
  })
});
