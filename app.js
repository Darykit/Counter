let count = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function(item){
 item.addEventListener('click', function(e){
 if(e.currentTarget.classList.contains('decrease')){
  count--;
 }
 else if (e.currentTarget.classList.contains("increase")){
  count++;
 }
 else{
  count = 0;
 }
 if (count > 0) {
   value.style.color = "green"
 }
 else if(count < 0){
  value.style.color = 'red'
 }
 else{
  value.style.color = '#222'
 }
 value.textContent = count;
 })
 })