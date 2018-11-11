import DS from 'ember-data';
//import EmberObject from '@ember/object';

export default DS.Model.extend({
  //etisons: DS.hasMany('shop'),
  //house: DS.belongsTo('location'),
  City: DS.attr('string'),
  Address: DS.attr('string'),
  shopName: DS.attr('string')
});
// const Shop = EmberObject.extend({
//   helloCustomers(){
//     console.log(`Hello dear customer! Greetings from shop: ${this.get('number')}`);
//   }
// })

// let visoko = Shop.create({
//   number: 137
// });

// visoko.helloCustomers();