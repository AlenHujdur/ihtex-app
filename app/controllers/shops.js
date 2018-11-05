import Controller from '@ember/controller';

export default Controller.extend({
isExpanded: false,

actions: {
    toggleBody(){
        //console.log("ok -test 123");
        this.toggleProperty('isExpanded');
    },
    sum(){
        return 2+2;
    }
}

});
