import EmberObject from '@ember/object';
import WithRootMixin from 'bundle-ui/mixins/with-root';
import { module, test } from 'qunit';

module('Unit | Mixin | with root');

// Replace this with your real tests.
test('it works', function(assert) {
  let WithRootObject = EmberObject.extend(WithRootMixin);
  let subject = WithRootObject.create();
  assert.ok(subject);
});
