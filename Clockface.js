class Clockface {
  constructor(bg = "white", fg = "black") {
    this.bgcolor = bg;
    this.fgcolor = fg;
  }

  showTime() {
    angleMode(DEGREES);
    background(this.bgcolor);
    stroke(this.fgcolor);
    translate(width / 2, height / 2);
    textSize(30);

    this.drawHand(second() * 6, 100, 2);
    this.drawHand(minute() * 6, 90, 4);
    this.drawHand((hour() % 12) * 30, 60, 4);

    this.drawNumbers();
    // this.drawLetters();

    circle(0, 0, 10);
  }

  drawHand(rotation, length, weight) {
    strokeWeight(weight);
    push(); // stop everything 
    rotate(rotation); // rotate drawing surface

    line(0, 0, 0, length); //draw
    pop(); // return to normal
  }

  drawNumbers() {
    let clockRadius = 130;
    
    for (let i = 1; i <= 12; i++) {
      noStroke();
      fill(this.fgcolor);
      /*
      i the number from 1 to 12
      30 degrees
      - 90 rotate counterclockwise, so the 12 is on top
      x, y 
      */
      text(
        i,
        map(cos(i * 30 - 90), -1, 1, -clockRadius, clockRadius),
        map(sin(i * 30 - 90), -1, 1, -clockRadius, clockRadius)
      );
    }
  }
  
  drawLetters() {
    let clockRadius = 200;
    let lineOfText = "Line of text here Hello World!!!!";
    let deg = 360 / lineOfText.length;
    
    for (let i = 0; i <= lineOfText.length; i++) {
      noStroke();
      fill(this.fgcolor);
      /*
      i the number from 1 to 12
      deg degrees
      - 90 rotate counterclockwise, so the 12 is on top
      x, y 
      */
      text(
        lineOfText[i],
        map(cos(i * deg), -1, 1, -clockRadius, clockRadius),
        map(sin(i * deg), -1, 1, -clockRadius, clockRadius)
      );
    }
  }
}
