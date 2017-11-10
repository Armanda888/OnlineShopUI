import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  category: DS.attr(),
  sizes: DS.attr(),
  image: DS.attr()
});
