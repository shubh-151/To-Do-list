window.onload = () => {
    let Form1 = document.querySelector('#addForm');
    let items = document.getElementById('items');
    let submit = document.getElementById('submit');
    let editItem = null;

    Form1.addEventListener('submit', addItem);
    items.addEventListener('click', removeItem);
}


function addItem(e) {
    e.preventDefault();
    if (submit.value != 'Submit') {
        console.log("Hello");
        editItem.target.parentNode.childNodes[0].data = document.getElementById('item').value;
        submit.value = 'Submit';
        document.getElementById('item').value = '';

        return false;
    }
    let newItem = document.getElementById('item').value;
    if (newItem.trim() == '' || newItem.trim() == null) {
        return false;
    } else {
        document.getElementById('item').value = '';
    }
    let li = document.createElement('li');
    li.className = 'list-group-item';

    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.className = "btn-danger btn btn-sm float-right delete"

    let editButton = document.createElement('button');
    editButton.appendChild(document.createTextNode('Edit'));
    editButton.className = "btn-success btn btn-sm float-right edit";


    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    items.appendChild(li);
}


function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure ')) {
            let li = e.target.parentNode;
            items.removeChild(li);
        }

    }
    if (e.target.classList.contains(`edit`)) {
        document.querySelector(`#item`).value = e.target.parentNode.childNodes[0].data;
        submit.value = `Edit`;
        editItem = e;
    }

}



function toggleButton(ref, btnID) {

    document.querySelector(`#${btnID}`).disabled = false;

}