
class Contact {
    constructor(subject, message, gender, name, phone, email) {
        this.subject = subject;
        this.message = message;
        this.gender = gender;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
class UI {
    static displayContacts() {
        const contacts = Store.getContacts();
        contacts.forEach((contact) => UI.addContactToList(contact));
    }
    static addContactToList(contact) {
        const list = document.querySelector('#contact-list');
        const row = document.createElement('tr');
        row.innerHTML = `       
      <td>${contact.subject}</td>
      <td>${contact.name}</td>
      <td>${contact.message}</td>
      <td>${contact.gender}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
    `;

        list.appendChild(row);
    }

    static deleteContact(el) {

        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#contact-form');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#subject').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#message').value = '';
        // document.querySelector('#gender').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#email').value = '';

    }
}

class Store {
    static getContacts() {
        let contacts;
        if (localStorage.getItem('contacts') === null) {
            contacts = [];
        } else {
            contacts = JSON.parse(localStorage.getItem('contacts'));
        }

        return contacts;
    }

    static addContact(contact) {
        const contacts = Store.getContacts();
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    static removeContact(isbn) {
        const contacts = Store.getContacts();

        contacts.forEach((contact, index) => {
            if (contact.isbn === isbn) {
                contacts.splice(index, 1);
            }
        });

        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayContacts);
document.querySelector('#contact-form').addEventListener('submit', (e) => {

    e.preventDefault();
    const subject = document.querySelector('#subject').value;
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const gender = document.querySelector('.form-chk');
    const phone = document.querySelector('#phone').value;
    const malechk = document.querySelector('#gender1');
    const email = document.querySelector('#email').value;

    if (subject === '' || name === '' || message === '' || phone === '' || email === '') {
        UI.showAlert('Please fill in all blanks', 'danger');
    } else {
        if (malechk.checked === true) {
            gender.value = "Male";
        } else {
            gender.value = "Female";
        }

        const contact = new Contact(subject, message, gender.value, name, phone, email);
        UI.addContactToList(contact);
        Store.addContact(contact);
        UI.showAlert('Contact Added', 'success');
        UI.clearFields();
    }

});

document.querySelector('#contact-list').addEventListener('click', (e) => {
    UI.deleteContact(e.target);
    Store.removeContact(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Contact Removed', 'success');
});

 
