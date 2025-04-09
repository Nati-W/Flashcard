document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = ()=>{
        const card = document.querySelector('#card').value;
        alert(`${card}`);
    }
})