const block = document.querySelector('.window')
const itemList = document.querySelector('.item-list')

block.addEventListener('touchstart', handleTouchStart, false)
block.addEventListener('touchend', handleTouchEnd, false)

let x1 = null
let y1 = null

let offsetSlide = 0

const widthWindow = window.innerWidth

function handleTouchStart(e) {
    const firstTouch = e.touches[0]
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
}

function handleTouchEnd(e) {

    if (!x1 || !y1) return;

    let x2 = e.changedTouches[0].clientX
    let y2 = e.changedTouches[0].clientY

    let xDiff = x2 - x1
    let yDiff = y2 - y1

    if (Math.abs(xDiff) > Math.abs(yDiff)) {

        if (xDiff > 0) {
            offsetSlide !== 0 ?
                itemList.style.transform = `translate(${offsetSlide += widthWindow}px)` :
                console.log('остановка')
        }

        else {
            offsetSlide > -(widthWindow * 2) ?
                itemList.style.transform = `translate(${offsetSlide -= widthWindow}px)`
                : console.log('сработала остановка')
        }
    }

    x1 = null
    y1 = null

}