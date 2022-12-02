//https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

//Create a function which translates a given DNA string into RNA.

//For example:

//"GCAT"  =>  "GCAU"

// replace all 'T' with 'U'

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/T/g, "U");
  }