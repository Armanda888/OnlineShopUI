import ApplicationAdapter from './application';

const namespace = 'api/users'
export default ApplicationAdapter.extend({
  findRecord (store, type, id, snapshot) {
    const url = `/${namespace}/${id}`
    return this._findRecord(url, snapshot)
  }
});
