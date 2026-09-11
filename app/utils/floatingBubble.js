/**
 * Legacy metaball background animation adapted for Vue mount/unmount.
 * @param {HTMLCanvasElement} canvas
 * @returns {() => void} cleanup
 */
export function startFloatingBubble(canvas) {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return () => {}
  }

  let lava0
  let frame = 0
  let running = true

  const screen = {
    elem: canvas,
    ctx,
    width: 0,
    height: 0,
    resize() {
      this.width = this.elem.offsetWidth
      this.height = this.elem.offsetHeight
      this.elem.width = this.width
      this.elem.height = this.height
      lava0 = new LavaLamp(this.width, this.height, 6, '#ffb7de', '#cbd6ff')
    }
  }

  function Point(x, y) {
    this.x = x
    this.y = y
    this.magnitude = x * x + y * y
    this.computed = 0
    this.force = 0
  }

  Point.prototype.add = function add(p) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  function Ball(parent) {
    const min = 0.1
    const max = 1.5
    this.vel = new Point(
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random() * 0.25),
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
    )
    this.pos = new Point(
      parent.width * 0.2 + Math.random() * parent.width * 0.6,
      parent.height * 0.2 + Math.random() * parent.height * 0.6
    )
    this.size = (parent.wh / 15) + (Math.random() * (max - min) + min) * (parent.wh / 15)
    this.width = parent.width
    this.height = parent.height
  }

  Ball.prototype.move = function move() {
    if (this.pos.x >= this.width - this.size) {
      if (this.vel.x > 0) this.vel.x = -this.vel.x
      this.pos.x = this.width - this.size
    } else if (this.pos.x <= this.size) {
      if (this.vel.x < 0) this.vel.x = -this.vel.x
      this.pos.x = this.size
    }

    if (this.pos.y >= this.height - this.size) {
      if (this.vel.y > 0) this.vel.y = -this.vel.y
      this.pos.y = this.height - this.size
    } else if (this.pos.y <= this.size) {
      if (this.vel.y < 0) this.vel.y = -this.vel.y
      this.pos.y = this.size
    }

    this.pos = this.pos.add(this.vel)
  }

  function LavaLamp(width, height, numBalls, c0, c1) {
    this.step = 5
    this.width = width
    this.height = height
    this.wh = Math.min(width, height)
    this.sx = Math.floor(this.width / this.step)
    this.sy = Math.floor(this.height / this.step)
    this.paint = false
    this.metaFill = createRadialGradient(width, height, width, c0, c1)
    this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0]
    this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1]
    this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0]
    this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1]
    this.grid = []
    this.balls = []
    this.iter = 0
    this.sign = 1

    for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i += 1) {
      this.grid[i] = new Point(
        (i % (this.sx + 2)) * this.step,
        Math.floor(i / (this.sx + 2)) * this.step
      )
    }

    for (let k = 0; k < numBalls; k += 1) {
      this.balls[k] = new Ball(this)
    }
  }

  LavaLamp.prototype.computeForce = function computeForce(x, y, idx) {
    let force
    const id = idx || x + y * (this.sx + 2)

    if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
      force = 0.6 * this.sign
    } else {
      force = 0
      const cell = this.grid[id]
      let i = 0
      let ball
      while ((ball = this.balls[i++])) {
        force += ball.size * ball.size
          / (-2 * cell.x * ball.pos.x - 2 * cell.y * ball.pos.y + ball.pos.magnitude + cell.magnitude)
      }
      force *= this.sign
    }
    this.grid[id].force = force
    return force
  }

  LavaLamp.prototype.marchingSquares = function marchingSquares(next) {
    const x = next[0]
    const y = next[1]
    const pdir = next[2]
    const id = x + y * (this.sx + 2)
    if (this.grid[id].computed === this.iter) {
      return false
    }

    let dir
    let mscase = 0

    for (let i = 0; i < 4; i += 1) {
      const idn = (x + this.ix[i + 12]) + (y + this.ix[i + 16]) * (this.sx + 2)
      let force = this.grid[idn].force
      if ((force > 0 && this.sign < 0) || (force < 0 && this.sign > 0) || !force) {
        force = this.computeForce(
          x + this.ix[i + 12],
          y + this.ix[i + 16],
          idn
        )
      }
      if (Math.abs(force) > 1) mscase += Math.pow(2, i)
    }

    if (mscase === 15) {
      return [x, y - 1, false]
    }

    if (mscase === 5) dir = (pdir === 2) ? 3 : 1
    else if (mscase === 10) dir = (pdir === 3) ? 0 : 2
    else {
      dir = this.mscases[mscase]
      this.grid[id].computed = this.iter
    }

    const ix = this.step / (
      Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 2]) + (y + this.ply[4 * dir + 2]) * (this.sx + 2)].force) - 1)
      / Math.abs(Math.abs(this.grid[(x + this.plx[4 * dir + 3]) + (y + this.ply[4 * dir + 3]) * (this.sx + 2)].force) - 1) + 1
    )

    ctx.lineTo(
      this.grid[(x + this.plx[4 * dir]) + (y + this.ply[4 * dir]) * (this.sx + 2)].x + this.ix[dir] * ix,
      this.grid[(x + this.plx[4 * dir + 1]) + (y + this.ply[4 * dir + 1]) * (this.sx + 2)].y + this.ix[dir + 4] * ix
    )
    this.paint = true

    return [
      x + this.ix[dir + 4],
      y + this.ix[dir + 8],
      dir
    ]
  }

  LavaLamp.prototype.renderMetaballs = function renderMetaballs() {
    let i = 0
    let ball
    while ((ball = this.balls[i++])) ball.move()
    this.iter += 1
    this.sign = -this.sign
    this.paint = false
    ctx.fillStyle = this.metaFill
    ctx.beginPath()
    i = 0
    while ((ball = this.balls[i++])) {
      let next = [
        Math.round(ball.pos.x / this.step),
        Math.round(ball.pos.y / this.step),
        false
      ]
      do {
        next = this.marchingSquares(next)
      } while (next)
      if (this.paint) {
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        this.paint = false
      }
    }
  }

  function createRadialGradient(w, h, r, c0, c1) {
    const gradient = ctx.createRadialGradient(w / 1, h / 1, 0, w / 1, h / 1, r)
    gradient.addColorStop(0, c0)
    gradient.addColorStop(1, c1)
    return gradient
  }

  const run = () => {
    if (!running) return
    frame = requestAnimationFrame(run)
    ctx.clearRect(0, 0, screen.width, screen.height)
    lava0.renderMetaballs()
  }

  const onResize = () => screen.resize()

  screen.resize()
  run()
  window.addEventListener('resize', onResize)

  return () => {
    running = false
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', onResize)
  }
}
