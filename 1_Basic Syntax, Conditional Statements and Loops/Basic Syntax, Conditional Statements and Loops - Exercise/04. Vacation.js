function vacation(people, type, day) {
    let price = 0;
    if (day === "Friday") {
      if (type === "Students") {
        if (people >= 30 && people < 100) {
          price = 8.45 * people * 0.85;
        } else {
          price = 8.45 * people;
        }
      } else if (type === "Business") {
        if (people >= 100) {
          price = (people - 10) * 10.9;
        } else {
          price = people * 10.9;
        }
      } else if (type === "Regular") {
        if (people >= 10 && people < 30) {
          price = people * 15 * 0.95;
        } else {
          price = people * 15;
        }
      }
    } else if (day === "Saturday") {
      if (type === "Students") {
        if (people >= 30 && people < 100) {
          price = 9.8 * people * 0.85;
        } else {
          price = 9.8 * people;
        }
      } else if (type === "Business") {
        if (people >= 100) {
          price = (people - 10) * 15.6;
        } else {
          price = people * 15.6;
        }
      } else if (type === "Regular") {
        if (people >= 10 && people < 30) {
          price = people * 20 * 0.95;
        } else {
          price = people * 20;
        }
      }
    } else if (day === "Sunday") {
      if (type === "Students") {
        if (people >= 30 && people < 100) {
          price = 10.46 * people * 0.85;
        } else {
          price = 10.46 * people;
        }
      } else if (type === "Business") {
        if (people >= 100) {
          price = (people - 10) * 16;
        } else {
          price = people * 16;
        }
      } else if (type === "Regular") {
        if (people >= 10 && people < 30) {
          price = people * 22.5 * 0.95;
        } else {
          price = people * 22.5;
        }
      }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
  }
  vacation(30, "Students", "Sunday");
  vacation(40, "Regular", "Saturday");