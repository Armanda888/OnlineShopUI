import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact')

  //this.route('about')
  this.route('products', function() {
    this.route('malaysian', {'path': '/malaysian'});
    this.route('brazilian', {'path': '/brazilian'});
    this.route('peruvian', {'path': '/peruvian'});
    this.route('indian', {'path': '/indian'});
  });

  this.route('search', function() {
  this.route('products', {'path': '/products'});
    this.route('malaysian', {'path': '/malaysian'});
    this.route('brazilian');
    this.route('peruvian');
    this.route('indian');
   });

  this.route('index', {'path': '/'});

  this.route('admin', function() {
    this.route('users');
    this.route('user', {'path': '/user/:user_id'});
    this.route('sales');
    this.route('dashboard');
    this.route('invoices');
  });

  this.route('checkout');
  this.route('home');
});

export default Router;
