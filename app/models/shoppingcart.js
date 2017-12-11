import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('string'),
  address: DS.attr('string'),
  items: DS.hasMany('shopping-cart-item')
});
