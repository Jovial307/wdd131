const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');



button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        input.focus();
        const myfav = input.value;
        input.value = '';
    
        const li = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');
    
        
        li.appendChild(listText);
        listText.textContent = myfav;
        li.appendChild(deleteButton);
        deleteButton.textContent = '❌';
        list.appendChild(li);
    
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
    }
    input.focus();
});