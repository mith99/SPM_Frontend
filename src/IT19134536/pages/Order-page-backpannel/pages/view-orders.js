import { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "reactstrap";
import { GET_ALL_ORDERS, VIEW_SINGLE_ORDER_BACK_PANEL } from '../../../constants'
import ViewCategoryBackPanelCss from '../order-pages-backpannel.css';

class ViewOrdersBackPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
    this.navigateToSingleViewPage = this.navigateToSingleViewPage.bind(this);
  }

  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASE_BE_URL}:${process.env.REACT_APP_BASE_BE_PORT}${GET_ALL_ORDERS}`).then((response) => {
      console.log(response.data)
      this.setState({ orders: response.data.data });
    });
  }


  navigateToSingleViewPage(order) {
    console.log(order)
    this.props.history.push(VIEW_SINGLE_ORDER_BACK_PANEL, order)
  }

  render() {
    return (
      <div className="backgroundRowImageCategory">
        <Row>
          <Col sm="4"></Col>
          <Col sm="6">
            <Row >
              <div className="container">
                <h1 className="topicviewCategory">View Meals</h1>
                <table className="table">
                  <tr style={{ borderBottom: '3px solid #ddd', background: '#a2a2a3', color: 'black' }}>
                    <th>Order</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  {this.state.orders.length > 0 ? this.state.orders.map((item, index) => (
                    index % 2 == 0 ? <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#FFFF' }} className='rowHover'>
                      <td>{item.orderId}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button className='submitbtn' onClick={() => this.navigateToSingleViewPage(item)} style={{ backgroundColor: '#14608c', borderRadius: '25px', width: '100px', float: 'right' }}>
                          <span className='btnTxt'>View</span>
                        </Button>
                      </td>


                    </tr> : <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#a2a2a3' }} className='rowHover'>
                      <td>{item.orderId}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button className='submitbtn' onClick={() => this.navigateToSingleViewPage(item)} style={{ backgroundColor: '#14608c', borderRadius: '25px', width: '100px', float: 'right' }}>
                          <span className='btnTxt'>View</span>
                        </Button>
                      </td>

                      <hr /> <hr />
                    </tr>
                  )) : <tr style={{ background: 'white' }}>
                    <th></th>
                    <th><h3 style={{ color: 'black' }}>No data Available</h3></th>
                    <th></th>
                  </tr>}


                </table>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewOrdersBackPanel;