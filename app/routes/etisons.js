import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        testEtison: function(){
        }
    },
    model(){
        return this.store.findAll('etison');
    }
});
