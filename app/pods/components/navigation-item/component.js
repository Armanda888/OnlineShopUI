import Component from '@ember/component';
import Ember from 'ember';
const {
  computed,
  get,
  set
} = Ember;

export default Component.extend({
classNames: ['navigation-item'],
  isShowing: false,
  nav: null,
  tagName: 'div',

   _setup: function() {
        let nav = get(this, 'nav');
        nav.closeSubnav = function() {
          set(this, 'isShowing', false);
        }.bind(this);
        this._setupSubNav();
      }.on('init'),

      _setupSubNav() {
        let nav = get(this, 'nav');
        nav.subnav.forEach((item) => {
          set(item, 'show', true);
          console.log("item", item);
        });

      },

  actions: {
      resetNav() {
        this.sendAction('callCloseSettings');
      },

      toggleContent() {
      console.log("switched isShowing");
        this.toggleProperty('isShowing');
        this.sendAction('callNavAction', this.nav);
      }
  }
});
