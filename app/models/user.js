import DS from 'ember-data';

export default DS.Model.extend({
  gender: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  lastAccess: DS.attr('date'),
  shoppingCartId: DS.attr('string')
});
