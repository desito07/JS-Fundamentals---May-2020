function rightPlace(strA, charAB, strB) {
    let strAR = strA.replace("_", charAB);
    if (strAR === strB) {
      console.log("Matched");
    } else {
      console.log("Not Matched");
    }
  }
  rightPlace("Str_ng", "I", "Strong");
  rightPlace("Str_ng", "i", "String");