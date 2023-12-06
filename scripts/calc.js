
let result =JSON.parse(localStorage.getItem('result')) || {
  val: ''
};
document.querySelector('.p1').innerHTML = `${result.val}`;
function disp(n){
  result.val+=n;
  document.querySelector('.p1').innerHTML = `${result.val}`;
  localStorage.setItem('result',JSON.stringify(result));
}
function calcul(){
  if(result.val === '1+'){
    document.querySelector('.p1').innerHTML = 'Never Settle';
  }
  else{
  document.querySelector('.p1').innerHTML = `${eval(result.val)}`;
  result.val = eval(result.val);
  localStorage.setItem('result',JSON.stringify(result));
  }
}



function cleara(){
  localStorage.removeItem('result');
  result.val = '';
  document.querySelector('.p1').innerHTML = `${result.val}`;
  
}