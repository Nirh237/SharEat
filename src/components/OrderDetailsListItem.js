import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';
import {connect} from 'react-redux';
import {startSetCategoty} from '../actions/categoryName';

const OrderDetailsListItem = ({ CategoryID , CategoryName }) => (

    <Link className="list-item"  to={`/OrderDetailsProductsAdmin/${CategoryID}`}>
        <div className="litem-Rectangle-Copy">

                <img src="icons/groceries-icon.png"
                 srcSet="icons/groceries-icon@2x.png 2x,
                 icons/groceries-icon@3x.png 3x"
                 className="litem-groceries_icon" />

            <div className="litem-CategoryName">{CategoryName}</div>


                 <img src="icons/chevron-right.svg"
                 className="litem-Chevron-Right" />




        </div>
    </Link>

);

const mapStateToProps = (state) => ({

    });


export default OrderDetailsListItem;
