const bill = document.querySelector('#bill')
const tips = document.querySelectorAll('input[name="tip"]')
const tipFree = document.querySelector('#free')
const totalPeople = document.querySelector('#total_people')
const error = document.querySelector('.error')
const totalTipPerson = document.querySelector('#total_tip_person')
const totalPerPerson = document.querySelector('#total_person')
const reset = document.querySelector('#reset')

totalPeople.addEventListener('keydown', (e)=>{
  const billValidate = bill.value.length === 0
  const totalPeopleValidate = totalPeople.value.length === 0
  console.log(billValidate, totalPeopleValidate)

  let selectedTip
  let totalPerson
  let tipPerson
  let totalTip
  if(e.keyCode === 13 && !billValidate && !totalPeopleValidate){
    console.log('enter')
    for (const tip of tips) {
        if (tip.checked) {
            selectedTip = parseInt(tip.value);
            break;
        }else{
          selectedTip = parseInt(tipFree.value)
        }
    }
    totalPerson = ((parseInt(bill.value)+(parseInt(bill.value)*(selectedTip/100)))/(parseInt(totalPeople.value)))
    totalTip = (parseInt(bill.value)*(selectedTip/100))
    tipPerson = (totalTip/parseInt(totalPeople.value))

    console.log(totalPerson, tipPerson, totalTip)

    totalTipPerson.innerText = tipPerson.toFixed(2)
    totalPerPerson.innerText = totalPerson.toFixed(2)

  }
  else{
    bill.className = billValidate ? 'error_input' : ''
    totalPeople.className = totalPeopleValidate ? 'error_input' : ''
    error.className = totalPeopleValidate ? 'error' : ''
  }
})

reset.addEventListener('click',()=>{
  for (const tip of tips) {
    if (tip.checked) {
        tip.removeAttribute('checked')
        console.log('quitado')
    }
  }
  bill.value = ''
  totalPeople.value = ''
  totalTipPerson.innerText = '0.0'
  totalPerPerson.innerText = '0.0'
})



// propina = tips.forEach(tip => {
//   let propina = tip.addEventListener('click', () =>{
//     return tip.value
//   })
//   console.log(propina)
// })


// console.log(propina)