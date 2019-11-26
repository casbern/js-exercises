

const toRna = (nucleotide) => {

  const NUCLEOTIDES = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  if (nucleotide === "") {

    return "";

  } else if(nucleotide.length > 1) {

    const INITIAL_ARR = nucleotide.split(""); //It'll result in an array.

    const CHANGE_TO = (nucleotide) => {

      return NUCLEOTIDES[nucleotide];

    };

    const FINAL_ARR = INITIAL_ARR.map(CHANGE_TO); //It'll result in an array with the initial values changed.
    console.log(FINAL_ARR);

    console.log(FINAL_ARR.toString());
    
    return FINAL_ARR.join("");


  } else {

    return NUCLEOTIDES[nucleotide];

  }

};

//console.log(toRna(''));

//console.log(toRna('G'));

console.log(toRna('ACGTGGTCTTAA'));