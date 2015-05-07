/**
 * Created by lcoertje on 21/04/2015.
 */

var _ = require('lodash');

module.exports= function represCompare(representations) {
    var repCompare = [];
  _.each(representations, function (representations) {
       if (representations._id=== "rep01")
       {
      repCompare.push(representations.compared );
    }
  });

  console.log("repCompare");
  console.log(repCompare);
// werkt niet


};
