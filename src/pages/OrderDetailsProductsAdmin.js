import React from 'react';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';
import {NavigationHeader} from '../components/NavigationHeader';
import OrderDetailsProductsListItem from '../components/OrderDetailsProductsListItem';




class OrderDetailsProductsAdmin extends React.Component {

    constructor(props) {
      super(props)

      this.state = {

        productsByCategory:this.props.productsByCategory

      };
    };

    handleButtonClicked = () => {

    }
    componentWillMount() { //didmount
        this.setState(()=>{productsByCategory:this.props.productsByCategory});
      };


    render() {
      return (

        <div>
        <NavigationHeader title={this.props.categoryName} />
        {
            this.props.productsByCategory.length === 0
            ? (
              <div >
                <span>No expenses</span>
              </div>
            )
            : (
                this.state.productsByCategory.map((product) => {
              return <OrderDetailsProductsListItem key={product.ProductName} {...product}/>;
            }))
          }


        </div>
      )
    };

  };




  const mapStateToProps = (state, props) => ({
    productsByCategory: state.weeklyOrder.filter((weeklyOrder) => weeklyOrder.CategoryID === props.match.params.id),
    categoryName: state.categories.CategoryName
  });

  export default connect(mapStateToProps)(OrderDetailsProductsAdmin);