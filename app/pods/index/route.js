import Route from '@ember/routing/route';

export default Route.extend({

  model() {
      let products = this.get('store').findAll('product');
      return products;
  }


});
