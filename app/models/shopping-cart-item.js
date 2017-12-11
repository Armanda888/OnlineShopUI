import DS from 'ember-data';

export default DS.Model.extend({
  productId: DS.attr('string'),
  quantity: DS.attr(),
  price: DS.attr(),
  name: DS.attr('string'),
  salePrice: DS.attr(),
  description: DS.attr('string')
});
