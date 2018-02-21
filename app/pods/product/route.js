import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params) {
      Ember.Logger.log('got product', params.product_id);
      return this.get('store').findRecord('product', params.product_id);
    }
});
