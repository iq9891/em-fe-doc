import random from 'em-underline/random';

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ox = x;
    this.oy = y;
    // 周围的光芒
    this.maxk = random(0, 4, false);
    this.mink = this.maxk / 2;
  }
  // 带着光芒一起走
  update() {
    this.x = this.ox + random(this.mink, this.maxk, false);
    this.y = this.oy + random(this.mink, this.maxk, false);
  }
}
