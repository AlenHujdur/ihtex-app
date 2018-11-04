import Component from '@ember/component';
// import Ember from 'ember';
import Etison from "../models/etison"
// import EmberObject from '@ember/object'

export default Component.extend({}).reopenClass({
  positionalParams: ['etisonName', 'image', 'id']
});

// export default Component.extend({
//         helloEtisons(){
//           console.log(`Hello dear customer! Greetings from shop: ${this.get('number')}`);
//           return true;
//         }
// });
// etison = Etison.create({

// });
// let visoko = Etison.create({
//   number: 137
// });
// etison.helloEtisons();