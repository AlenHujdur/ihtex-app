import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return ["etison1","etison2",["etison3"]];
    }
});
