function edu(grades) {
    if (grades >= 2.0 && grades <= 2.99) {
      return "Fail";
    } else if (grades >= 3.0 && grades <= 3.49) {
      return "Poor";
    } else if (grades >= 3.5 && grades <= 4.49) {
      return "Good";
    } else if (grades >= 4.5 && grades <= 5.49) {
      return "Very good";
    } else if (grades >= 5.5 && grades <= 6.0) {
      return "Excellent";
    }
  }
  let education = edu(3.33);
  console.log(education);