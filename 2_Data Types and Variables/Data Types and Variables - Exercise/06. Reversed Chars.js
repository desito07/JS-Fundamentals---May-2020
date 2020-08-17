function reversedChars(a, b, c) {
    a = String(a);
    b = String(b);
    c = String(c);
    console.log(
      c.split("").reverse().join("") +
        " " +
        b.split("").reverse().join("") +
        " " +
        a.split("").reverse().join("")
    );
  }
  reversedChars("A", "B", "C");