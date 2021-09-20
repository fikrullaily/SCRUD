import React from 'react';
import styles from '../styles/Home.module.scss'

const Item = (props) => {
    const { item, handleEdit, handleDelete } = props;
    return (
        <div>
            <div className={styles.tabItem}>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{item.title} </td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>
                    <button type="button" onClick={() => handleEdit(item)} value="Edit"> Edit </button>
                    <button type="button" onClick={() => handleDelete(item)} value="Delete"> Delete </button>
                    </td>
                </tr>
            </div>
        </div>
    );
};

export default Item;


