// h=154, w=221
// https://www.w3schools.com/jsref/canvas_drawimage.asp
const canvas = document.getElementById("sprite")
const ctx = canvas.getContext('2d')

const runBtn = document.getElementById('run')
const stopBtn = document.getElementById('stop')

const width = 221
const height = 154
const totalFr = 8
const speed = 100 // 100ms setTimeout

let currentFrame = 0
let sx = 0

let isAnimating = false

const spriteSheet = new Image()
spriteSheet.src = "/Week%209/animation/assets/img/sprite.png"

function updateFrame() {
    currentFrame = (currentFrame + 1) % totalFr
    sx = currentFrame * width
}

function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(spriteSheet, sx, 0, width, height, 0, 0, width, height)
}

function animate() {
    if (isAnimating) {
        setTimeout(() => {
            updateFrame()
            drawFrame()
            requestAnimationFrame(animate)
        }, speed)
    }
}

runBtn.addEventListener('click', () => {
    isAnimating = true
    animate()
})

stopBtn.addEventListener('click', () => {
    isAnimating = false
    cancelAnimationFrame(spriteSheet)
})

spriteSheet.onload = () => {
    drawFrame()
}

