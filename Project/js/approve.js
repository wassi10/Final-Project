
const approveBtns = document.querySelectorAll('.approve-btn');
console.log(approveBtns)

const ids = document.querySelectorAll('.student_id');
console.log(ids)


for(let i=0; i<approveBtns.length; i++){
    approveBtns[i].addEventListener('click', () => {
        console.log(ids[i].innerText);
    });
}


