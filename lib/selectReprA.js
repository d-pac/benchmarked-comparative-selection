
var _ = require('lodash');


/* SELECTION OF REPRESENTATION A
(by Liesje)
 determine representation A of the to rank representations
overzicht database structure: https://github.com/d-pac/d-pac.docs/blob/mvp2/analysis/Database%20structure.pdf

*retrieve number of comparison per to rank
*representation
*multiply by 100
*add number of comparisons done by judge
*sort descending
take lowest == last
*/

module.exports = function selectReprA(representations, comparisons) {
// new variable in which we will store the number of times the judge has seen this representation
    var reps = [];
// calculate how many comparisons per representation the judge (who requires a new pair) has already done
//for each comparison of the list comparison
// REMARK: this should only be calculated for the "toRank" representations
    _.each(comparisons, function (comparison) {

// take the representations for this comparison
        _.each(comparison.representations, function (representation) {

// if this representation does not exist in the variable reps, create it
            if (!reps[representation]) {
                reps[representation] = 0;
            }
// if it already exist, augment with one
            reps[representation]++;
        });
    });

//create variable represA
// shuffle representation as to make sure that a random selection is done in case more than 1 representation has the lowest score
// sort ascending
    var represA = _.sortBy(_.shuffle(representations), function (representation) {
// number of times a representation has been compared * 100 + (for each id) add the variable reps
// (i.e., the number of times a judge has seen this representation)
        return representation.comparedNum * 100 + reps[representation._id];
    });


// take the first element of the sorted list
    return represA.shift();
};