import React from 'react';
import { startSetWeeklyOrder } from '../actions/weeklyOrder';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';
import Header from '../components/Header';
import {startSetCategoty} from '../actions/categoryName';

class DevPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: this.props.errorMassege,
      startWeek:this.props.startWeek,
      endWeek:this.props.endWeek,
      orderReceived: this.props.orderReceived,
      workersCount: this.props.workersCount
    };
  };

  handleButtonClicked = () => {

    history.push('/OrderDetails');

  }
componentDidMount() {
  this.props.startSetCategoty();
  this.props.startSetWeeklyOrder();
}


  componentDidUpdate() {
    this.setState(()=>{startWeek:this.props.startWeek}),
    this.setState(()=>{endWeek:this.props.endWeek}),
    this.setState(()=>{orderReceived: this.props.orderReceived}),
    this.setState(()=>{ workersCount: this.props.workersCount})

  };

  render() {
    return (

      <div>
      <Header />
        <div className="Rectangle">

          <div className="START-DATE">
            START-DATE
        </div>
          <div className="END-DATE">
            END-DATE
        </div>
          <div className="Line"></div>

          <div className="layer"> {this.state.startWeek} </div>
          <div className="layer2"> {this.state.endWeek} </div>

          <div className="ACTIVE">{"ACTIVE"} </div>
        </div>

        <div className="Rectangle-Copy">
          <div className="ORDERS-RECEIVED">ORDERS-RECEIVED</div>
          <div className="layer3">{this.state.orderReceived+"/"+this.state.workersCount}</div>
        </div>

        <div className="Rectangle-Copy2">
          <div className="WEEKLY-BUDGET">WEEKLY-BUDGET</div>
          <div className="layer4">{"1550₪"}</div>
        </div>

        <div className="Rectangle-Copy3" onClick={this.handleButtonClicked}>
          <div className="Order-Details">Order-Details</div>

          <img src="icons/groceries-icon.png"
               srcSet="icons/groceries-icon@2x.png 2x,
               icons/groceries-icon@3x.png 3x"
               className="groceries_icon" />


               <img src="icons/chevron-right.svg"
                className="Chevron-Right" />


        </div>

      </div>
    )
  };

};


const mapDispatchToProps = (dispatch) => ({
  startSetWeeklyOrder: () => dispatch(startSetWeeklyOrder()),
  startSetCategoty:()=> dispatch(startSetCategoty())
});

const mapStateToProps = (state) => ({
  errorMassege: state.weeklyOrder.msg,
  startWeek: state.startWeek,
  endWeek: state.endWeek,
  orderReceived: state.orderReceived,
  workersCount: state.workersCount

  });

export default connect(mapStateToProps, mapDispatchToProps)(DevPage);
