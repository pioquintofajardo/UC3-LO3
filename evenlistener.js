  //delete element
  const delBtns = document.querySelector('#book-list ul');
       
  delBtns.addEventListener('click',function(e){
       if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      delBtns.removeChild(li);
  }
   });

  const addForm = document.forms['add-book'];

  //create listener
  addForm.addEventListener('submit',function(e){
  e.preventDefault();
  const getValues = addForm.querySelector('input[type="text"]').value; 

  //create element the li, spans
  const li = document.createElement('li');
  const bkName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //get the content from the input
  deleteBtn.textContent ='delete';
  bkName.textContent = getValues;

  //to add or append an item from the input
  li.appendChild(bkName);
  li.appendChild(deleteBtn);
  delBtns.appendChild(li);
   });