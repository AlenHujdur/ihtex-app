import DS from 'ember-data';

export default DS.Model.extend({
  //etisons: DS.hasMany('shop'),
  //shop: DS.belongsTo('etison'),
  etisonName: DS.attr('string'),
  image: DS.attr('string')
});