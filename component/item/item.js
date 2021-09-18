import React from 'react';
// import styles from '../public/styles/Home.module.scss';

const Item = (props) => {
    const { item, handleEdit, handleDelete } = props;
    return (
        <div>
            <div className="item">
                {item.title} <br />
                {item.quantity} <br />
                {item.price} <br />
                <div>
                    <button type="button" onClick={() => handleEdit(item)} value="Edit"> Edit </button>
                    <button type="button" onClick={() => handleDelete(item)} value="Delete"> Delete </button>
                </div>
            </div>
        </div>
    );
};

export default Item;


