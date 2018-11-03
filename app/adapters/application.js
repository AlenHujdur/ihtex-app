import DS from 'ember-data'

export default DS.RESTAdapter.extend({
    urlForFindAll(modelName, snapshot){
        if(modelName == 'shop')
            return 'shops.json';
        else if(modelName == 'etison')
            return 'etisons.json';
        else
            return 'No data!';
    }
});