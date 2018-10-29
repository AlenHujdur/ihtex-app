import {helper} from '@ember/component/helper';

Template.registerHelper("log", function(something) {
    console.log(something);
});

export default helper(Template.registerHelper);