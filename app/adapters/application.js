import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8080',
  namespace: 'api',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
});
