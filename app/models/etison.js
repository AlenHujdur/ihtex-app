import DS from 'ember-data';
import EmberObject from '@ember/object'

export default DS.Model.extend({
  etisonName: DS.attr('string'),
  image: DS.attr('string')
});
// const Etison = EmberObject.extend({
//   helloEtisons(){
//     console.log(`Hello dear customer! Greetings from shop: ${this.get('number')}`);
//   }
// })

// let visoko = Etison.create({
//   number: 137
// });
// etison.helloEtisons();