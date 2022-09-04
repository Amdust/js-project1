let countEl = document.querySelector('#count-el')
  let count = 0;
  function increment () {
  count ++;
  countEl.innerText= count
  if(count>60){
    count = 0;
    count ++
    countEl.innerText = count; 
  }
}
  countEl.onclick = () => { 
    count--;
    countEl.innerText = count 
    if(count<=0){
      count = 0;
    countEl.innerText = count;
    alert('The queue cannot be less than 0!')
    }
  }

  let saveFn = document.querySelector('#save-btn')
  let saveEl = document.querySelector('#save-el')
saveFn.onclick = () => {
  saveEl.textContent += ` - ${count}`
}
saveEl.ondblclick= () => { 
  saveEl.textContent = 'Previous entires:'
}

let resetFn = document.querySelector('#reset-btn')

resetFn.onclick = () => { 
  count = 0
  countEl.innerText = count; 
}