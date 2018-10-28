import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('etisons', {path:'/etisons'});
  this.route('shops', {path:'/shops'});
});

export default Router;
