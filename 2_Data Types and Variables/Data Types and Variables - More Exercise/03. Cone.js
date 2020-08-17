function cone(radius, height) {
    let volume = (height * Math.PI * radius * radius) / 3;
    let area =
      Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
  }
  cone(3, 5);
  cone(3.3, 7.8);