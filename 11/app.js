const _ = require('lodash');
let example = _.fill(['a', 'b' , 'c', 'd', 'e'], 'lion', 1, 4);
console.log(example);

/* 
    Output: [ 'a', 'lion', 'lion', 'lion', 'e' ]
    _.fill(
        Array,
        ChangeWith,
        FromIndex,
        ToIndex
    )
*/