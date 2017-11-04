import Component from '@ember/component';

export default Component.extend({
  actions: {
    showDetail(product) {
      alert(product);
    }
  }
});
