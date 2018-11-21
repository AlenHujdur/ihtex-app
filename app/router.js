import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('shops', {path:'/shops'});
  this.route('etisons', {path:'/etisons'});
  this.route('etisons', function(){
    this.route('debugEtison');
  });
  this.route('etison', { path: '/etison/:etison_id'});
});

export default Router;
