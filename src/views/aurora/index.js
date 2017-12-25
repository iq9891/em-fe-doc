import random from 'em-underline/random';
import Point from '@/views/aurora/point';

const aurora = {
  init(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
    this.mx = null;
    this.my = null;
    this.points = [];
    this.max = 400;
    this.fl = {
      x: this.cx,
      y: this.cy,
      vx: 0,
      vy: 0,
    };
    this.color = random(0, 360);
    this.colorBorder = random(0, 360);
    // 绑定 body 事件
    this.bind();
  },
  draw(color, size, allPoints) {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = size;
    this.ctx.beginPath();
    allPoints.forEach((point, pointIndex) => {
      if (pointIndex === 0) {
        this.ctx.moveTo(point.x, point.y);
      } else {
        this.ctx.lineTo(point.x, point.y);
      }
    });
    this.ctx.stroke();
  },
  bind() {
    document.addEventListener('mousemove', (e) => {
      const r = this.canvas.getBoundingClientRect();
      this.mx = e.clientX - r.left;
      this.my = e.clientY - r.top;
    });
  },
  loop() {
    this.ctx.globalCompositeOperation = 'lighter';
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (this.mx === null || this.mx === null) {
      this.fl.vx += random(-2, 4, false);
      this.fl.vy += random(-2, 4, false);
      this.fl.x += this.fl.vx;
      this.fl.y += this.fl.vy;
      if (Math.abs(this.fl.vx) > 10 || Math.abs(this.fl.vy) > 10) {
        this.fl.vx = 0;
        this.fl.vy = 0;
      }
      if (this.fl.x > this.width) {
        this.fl.x = this.width;
        this.fl.vx *= -1;
      }
      if (this.fl.x < 0) {
        this.fl.x = 0;
        this.fl.vx *= -1;
      }
      if (this.fl.y > this.height) {
        this.fl.y = this.height;
        this.fl.vy *= -1;
      }
      if (this.fl.y < 0) {
        this.fl.y = 0;
        this.fl.vy *= -1;
      }
    } else {
      this.fl.x += (this.mx - this.fl.x) * 0.1;
      this.fl.y += (this.my - this.fl.y) * 0.4;
    }

    this.points.push(new Point(this.fl.x, this.fl.y));
    // 如果到了极值，就从头删除
    if (this.points.length > this.max) {
      this.points.shift();
    }

    this.points.forEach(point => point.update());

    this.draw(`hsla(${++this.color},100%, 50%, 1)`, 4, this.points);
    this.draw(`hsla(${++this.colorBorder},100%, 50%, 1)`, 2, this.points);
  },
  anim() {
    const self = this;
    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);

      self.loop();
    });
  },
};

export default (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 初始化
  aurora.init(canvas);
  // 不断的更新
  aurora.anim();
};
