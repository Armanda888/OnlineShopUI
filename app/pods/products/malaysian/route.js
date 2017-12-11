import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
      let products = this.get('store').query('product', { category: 'Malaysian' })
      let length = products.get('length')
      console.log('product length', length, 'products', products)

      return RSVP.hash({
        products: products
      });
    }
});
