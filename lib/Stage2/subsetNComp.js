var _ = require( 'lodash' );

function subsetCloseTo( representations,
                        cuttingPoint ){
  //check input
  if( !representations || !_.isArray( representations ) || representations.length < 2 ){
    throw new Error( "representations should be an array with a minimum length of 2" )
  }
  if( !cuttingPoint || !_.isString( cuttingPoint ) ){
    throw new Error( "cuttingPoint should be a string" )
  }
  //cuttingPoint bestaat en is character
  var candidateOppos = [];
  _.forEach( representations, function( representation ){//select representations closeto cuttingPoint
    if( representation.closeTo == cuttingPoint ){
      candidateOppos.push( representation )
    }
  } );
  return candidateOppos;
}

function subsetNcomp( candidateOpponents ){
  //check input
  if( !candidateOpponents || !_.isArray( candidateOpponents ) || candidateOpponents.length < 2 ){
    throw new Error( "candidateOpponents should be an array with a minimum length of 2" )
  }
  _.forIn( candidateOpponents, function( candOppo ){
    if( candOppo.compared && !_.isArray( candOppo.compared ) ){
      throw new Error( "the 'compared' field must be an array" )
    }
  } );

  var smallestNcomp = _.min( _.map( candidateOpponents, function( oppo ){
    if( !oppo.compared ){
      return 0;
    }
    return oppo.compared.length;
  } ) );//find and store smallest number of comparionsonNum in representations
  var result = _.filter( candidateOpponents, function( opponent ){
    if( !opponent.compared ){
      return 0 == smallestNcomp;
    }
    return opponent.compared.length == smallestNcomp;
  } );
  return (_.filter( candidateOpponents, function( opponent ){
      if( !opponent.compared ){
        return 0 == smallestNcomp;
      }
      return opponent.compared.length == smallestNcomp;
    } )
  );//filter representations on minimum value and return this

}

module.exports = {
  subsetCloseTo: subsetCloseTo,
  subsetNcomp: subsetNcomp
};
