import React from "react";
import Item from "./item";


 const ItemList = (props) => {
  const { itemList, handleEdit, handleDelete } = props;
  return (
    <div>
      {itemList?.map((item) => {
        return (
          <Item
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
          />
        );
      })}
    </div>
  );
 };

export default ItemList;



// const ItemList = ({itemList}) => {
//     return (
//         <div>
//             {itemList.map(item => {
//                 return (
//                     <Item item={item} />
//                 )
//             })}
//         </div>
//     );
// };
