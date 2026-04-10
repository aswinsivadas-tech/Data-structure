// an Anagram is a word or phrase formed by rearranging the letters of a dissferent word or phrase using all the original letters exactly once

// input: (s ="anagram"), (t = "nagaram"); ------>>>>> output: true
// input: (s ="rat"), (t = "car");         ------>>>>> output: false

// 1st approach

const isAnagram1 = function(s, t) {
    s = s.split("").sort().join("")
     t = t.split("").sort().join("")

     return s === t;

};
console.log(isAnagram1("anagram", "nagaram"));


// 2nd approach

const isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let obj1 ={};
    let obj2 ={};

    for( let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0)+1;
        obj2[t[i]] = (obj2[t[i]] || 0)+1;
    }

    for (const key in obj1) {
        if(obj1[key] !==obj2[key])  return false;
    }

    return true;
};

console.log(isAnagram("anagram","nagram"));