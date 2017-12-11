import DS from 'ember-data';
const {String: EmberString} = Ember

export default DS.JSONAPISerializer.extend({

  keyForAttribute(attr) {
    return EmberString.camelize(attr)
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
