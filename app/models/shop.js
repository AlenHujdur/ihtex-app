import DS from 'ember-data';

export default DS.Model.extend({
  //etisons: DS.hasMany('shop'),
  //house: DS.belongsTo('location'),
  shopName: DS.attr('string')
});