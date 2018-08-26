import React from 'react';



const OrderDetailsProductsListItem = ({ ProductName , Quantity }) => (

        <div className="litem-Rectangle-Copy">



            <div className="litem-CategoryName">{ProductName}</div>

                 <div className="litem-Chevron-Right">{Quantity}</div>



        </div>


);

export default OrderDetailsProductsListItem;