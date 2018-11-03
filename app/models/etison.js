import DS from 'ember-data';

export default DS.Model.extend({
  etisonName: DS.attr('string'),
  image: DS.attr('string')
});