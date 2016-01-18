
function raschProb( a,
                    b ){   //the Rasch probability or Bradley-Terry-Luce probability
  var expon = Math.exp( a - b );
  return expon / (1 + expon);
}

function fischerI( aF,
                   bF ){      //the Fischer information
  var rprob = raschProb( aF, bF );
  var fischInf = rprob * (1 - rprob);
  return Number( fischInf.toFixed( 3 ) );
}

module.exports = {
  raschProb: raschProb,
  fischerI: fischerI
};
