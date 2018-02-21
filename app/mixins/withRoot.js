import Mixin from '@ember/object/mixin';
import ENV from '../config/environment';

export default Mixin.create({
  rootURL: ENV.rootURL
});
