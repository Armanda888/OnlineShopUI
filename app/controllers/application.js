import Controller from '@ember/controller';

export default Controller.extend({

  choices: ['foo', 'bar', 'baz'],
  navItems: [
    {
      title: 'Hair Wearve',
      iconClass: 'octicon-credit-card',
      route: 'products',
      capability: 'invoices',
      subnav: [
        {
          title: 'Malaysian virgin hair ',
          iconClass: 'octicon-chevron-right',
          route: 'products.malaysian',
          capability: 'invoices'
        },
        {
          title: 'Brazilian virgin hair ',
          iconClass: 'octicon-plus',
          route: 'products.brazilian',
          capability: 'invoices'
        },
        {
          title: 'Peruvian virgin hair ',
          iconClass: 'octicon-chevron-right',
          route: 'products.peruvian',
          capability: 'pricing'
        },
        {
          title: 'Indian virgin hair s',
          iconClass: 'octicon-chevron-right',
          route: 'products.indian',
          capability: 'pricing'
        }
      ]
    }
  ],


  actions: {
    myAction(choice) {
      console.log(choice);
    },
    foo() {}
  }
});
