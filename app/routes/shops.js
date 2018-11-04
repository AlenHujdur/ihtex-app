import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('shop');
    }
    //, actions: {
    //     thingsTolog(){
    //         return console.log("ok -test 123");
    //     }
    // }
});
