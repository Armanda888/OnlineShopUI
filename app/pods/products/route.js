import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
      this.transitionTo('products.malaysian'); // Implicitly aborts the on-going transition.
    }
});
