import { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "reactstrap";
import { GET_ALL_ORDERS, VIEW_SINGLE_ORDER_BACK_PANEL } from '../../../constants'
import ViewCategoryBackPanelCss from '../order-pages-backpannel.css';

class ViewMealsBackPanel extends Component {
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
          <Col sm="2"></Col>
          <Col sm="10">
            <Row >
              <div className="container">
                <h1 className="topicviewCategory">View Meals</h1>
                <table className="table">
                  <tr style={{ borderBottom: '3px solid #ddd', background: '#a2a2a3', color: 'black' }}>
                    <th>View Orders</th>
                    <th>Status</th>
                    <hr /><hr />
                  </tr>
                  {this.state.orders.length > 0 && this.state.orders.map((item, index) => (
                    index % 2 == 0 ? <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#FFFF' }} className='rowHover'>
                      <td>{item.orderId}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button className='submitbtn' onClick={() => this.navigateToSingleViewPage(item)} style={{ backgroundColor: '#14608c', borderRadius: '25px' }}>
                          <span className='btnTxt'>View</span>
                        </Button>
                      </td>

                      <hr /> <hr />
                    </tr> : <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#a2a2a3' }} className='rowHover'>
                      <td>{item.orderId}</td>
                      <td>{item.status}</td>
                      <td>
                        <Button className='submitbtn' onClick={() => this.navigateToSingleViewPage(item)} style={{ backgroundColor: '#14608c', borderRadius: '25px' }}>
                          <span className='btnTxt'>View</span>
                        </Button>
                      </td>

                      <hr /> <hr />
                    </tr>
                  ))}


                </table>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ViewMealsBackPanel;