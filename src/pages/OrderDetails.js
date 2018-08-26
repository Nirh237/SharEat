import React from 'react';
import { startSetWeeklyOrder } from '../actions/weeklyOrder';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';
import {NavigationHeader} from '../components/NavigationHeader';
import OrderDetailsListItem from '../components/OrderDetailsListItem';



class OrderDetails extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        OrderDetails: this.props.OrderDetails

      };
    };

    handleButtonClicked = () => {

    }


    componentWillMount() { //didmount
      this.setState(()=>{OrderDetails:this.props.OrderDetails});

    };

    render() {
      return (

        <div>
        <NavigationHeader title={"OrderDetails"} />
        {
          this.state.OrderDetails.length === 0
          ? (
            <div >
              <span>No expenses</span>
            </div>
          )
          : (
            this.state.OrderDetails.map((order) => {
            return <OrderDetailsListItem key={order.CategoryID} {...order}/>;
          }))
        }

        <OrderDetailsListItem CatagoryName="test" ID="1" />
        <OrderDetailsListItem CatagoryName="asf" ID="12" />
        </div>
      )
    };

  };



  const mapStateToProps = (state) => ({
        OrderDetails:state.categories
    });

  export default connect(mapStateToProps)(OrderDetails);
