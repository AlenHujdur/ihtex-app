import DS from 'ember-data'

export default DS.RESTAdapter.extend({
    urlForFindAll(modelName, snapshot){
        if(modelName == 'shop')
            return 'shops.json';
<<<<<<< HEAD
        else if(modeName == 'etison')
            return 'etisons.json';
        else
            return;
=======
        else if(modelName == 'etison')
            return 'etisons.json';
        else
            return 'No data!';
>>>>>>> 1fc69e4288cce15d5d78733508bec68cb2df77b9
    }
});