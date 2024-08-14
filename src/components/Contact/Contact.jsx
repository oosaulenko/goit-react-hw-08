import css from './Contact.module.css';

import {FaUser} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    return (
        <li className={css.card}>
            <div>
                <p><FaUser/>{contact.name}</p>
                <p><FaPhone/>{contact.number}</p>
            </div>
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
    )
}
