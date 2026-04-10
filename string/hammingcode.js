// q 3: hamming distance
//  given two strings x and y returns the hamming distance between them
//  input x = "hello", y = "hwllr"


function hammingDistance(x,y) {
    if (x.length !==y.length) {
        throw new Error("String must be of same length")
    }

    let distance = 0;
    for(let i = 0; i < x.length; i++ ) {
        if (x[i] !=y[i]) {
            distance++
        }
    }
    return distance

}

console.log(hammingDistance("hello","hwtlr"));


// leetcode version
// hamming distance btw two intergers

function hammingDistance(x,y) {
   x=x.toString(2)
   y=y.toString(2)

   if(x.length < y.length ){
    while( x.length !== y.length) x="0"+x
}else {
    while(x.length!==y.length) y="0"+y
}

    let distance = 0;
    for(let i = 0; i < x.length; i++ ) {
        if (x[i] !=y[i]) {
            distance++
        }
    }
    return distance

}

console.log(hammingDistance(1,4));
