const formElement = document.querySelector('.form');
const information = document.querySelector('.info');

formElement.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const name = document.getElementById("username").value;
    const emailId = document.getElementById("email").value;
    const mob = document.getElementById("mobile").value;
    const metropolis = document.getElementById("city").value;

    const html = `STUDENT INFORMATION <br> <br>
    Student Name : ${name} <br>
    Student Email : ${emailId} <br>
    Student Mobile Number : ${mob} <br>
    Student City : ${metropolis} <br> <br> `

    information.insertAdjacentHTML('afterbegin',html);
    
    document.querySelector('form').onsubmit = e => {
        e.target.reset();
    }; 
});




