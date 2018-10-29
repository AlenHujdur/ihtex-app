import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('shop');
        // return [
        //     { name: 'Yehuda' },
        //     { name: 'Tom' },
        //     { name: 'Trek' }
        //   ]
    }
});
