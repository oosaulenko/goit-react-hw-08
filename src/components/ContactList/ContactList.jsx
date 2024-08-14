import css from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';

export default function ContactList() {
    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact => (
                <div key={contact.id} className={css['contact-list-item']}>
                    <Contact contact={contact} />
                </div>
            )))}
        </ul>
    )
}
