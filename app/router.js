import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import ENV from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  console.log(ENV.API_URL);
});

export default Router;
