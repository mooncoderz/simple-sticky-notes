const li = document.querySelectorAll('.all-notes ul li'),
    newTitle = document.querySelector('#new-note-title'),
    newDesc = document.querySelector('#new-note-desc'),
    submit = document.querySelector('#submit'),
    errorMsg = document.querySelector('#error-msg'),
    newNote = document.querySelector('.all-notes ul');

// Add New Notes
submit.addEventListener('click',() =>{
    if(newTitle.value == "" || newDesc.value == ""){
        errorMsg.innerHTML = 'All Fields are required';
    }else{
        let newli = document.createElement('li');
        newNote.insertAdjacentElement('afterbegin', newli);
        // Add div Tag
        let noteShortDesc = document.createElement('div');
        noteShortDesc.classList.add('note-short-desc');
        newli.insertAdjacentElement('afterbegin', noteShortDesc);
        // Add P Tag
        let noteShortDescP = document.createElement('p');
        noteShortDescP.innerHTML = newTitle.value;
        noteShortDesc.insertAdjacentElement('afterbegin', noteShortDescP);
        // Add span tag for images
        let imgSpan = document.createElement('span');
        noteShortDesc.insertAdjacentElement("beforeend", imgSpan);
        // Add Image Tag
        let noteShortDescImg1 = document.createElement('img');
        let noteShortDescImg2 = document.createElement('img');
        noteShortDescImg1.src = 'img/down.png';
        noteShortDescImg2.src = 'img/cross.png';
        noteShortDescImg1.className = 'drop';
        noteShortDescImg2.className = 'delete';
        imgSpan.insertAdjacentElement('beforeend', noteShortDescImg1);
        imgSpan.insertAdjacentElement('beforeend', noteShortDescImg2);

        // Add div for description
        let noteDescription = document.createElement('div');
        noteDescription.classList.add('note-description');
        noteDescription.classList.add('showHide');
        newli.insertAdjacentElement('beforeend', noteDescription);
        // // Add p tag in description tag
        let noteDescriptionP = document.createElement('p');
        noteDescription.insertAdjacentElement('afterbegin', noteDescriptionP);
        noteShortDesc.insertAdjacentElement('afterbegin', noteShortDescP);
        noteDescriptionP.innerHTML = newDesc.value;
    }
    crosBtn()
    drop();
});


// Delete A Note
function crosBtn(){
    let del = document.querySelectorAll('.all-notes ul li .delete');
    for( let i = 0; i < del.length; i++){
        del[i].addEventListener('click', (e) =>{
            e.target.parentElement.parentElement.parentElement.style.opacity = 0;
            setTimeout(()=>{
                e.target.parentElement.parentElement.parentElement.style.display = 'none';
            }, 500)
        })
    }
}
crosBtn()
// DropDown A Note
function drop(){
    let drop = document.querySelectorAll('.all-notes ul li .drop');
    for( let i = 0; i < drop.length; i++){
        drop[i].addEventListener('click', (e) =>{
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle('showHide'); 
        })
    }
}
drop()
