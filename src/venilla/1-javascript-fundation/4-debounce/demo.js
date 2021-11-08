import { debounce } from './index.js'
const box = document.querySelector('.box')
let count = 0
const callback = e => {
  e = e || window.event
  box.innerHTML = ++count
  console.log(e)
}

box.addEventListener(
  'mousemove',
  debounce(callback, {
    wait: 1000,
    leading: true,
    trailing: true,
  }),
)
