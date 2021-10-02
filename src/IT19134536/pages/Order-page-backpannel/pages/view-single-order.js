import { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "reactstrap";
import { ACCEPT, GET_ALL_ORDERS, DECLINE } from '../../../constants'
import ViewCategoryBackPanelCss from '../order-pages-backpannel.css';

class ViewMealsBackPanel extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            order: this.props.location.state,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(status) {
        const data = {
            id: this.state.order.id,
            status: status
        }

        axios.put(`${process.env.REACT_APP_BASE_BE_URL}:${process.env.REACT_APP_BASE_BE_PORT}${GET_ALL_ORDERS}`, data).then(res => {
            this.props.history.pop()
        })
    }

    render() {
        return (
            <div>
                <Row className="backgroundRowImage">
                    <Col sm="4"></Col>
                    <Col sm="6">
                        <Row >
                            <div className="container" style={{ alignSelf: 'flex-end', position: 'absoulte' }}>
                                <h1 className="topicviewCategory">View Meals</h1>
                                <table className="table" style={{ width: '100vh' }}>
                                    <tr style={{ background: '#FFFF', color: 'black' }}>
                                        <th>Order ID :</th>
                                        <td>{this.state.order.orderId}</td>
                                        <hr /><hr />
                                    </tr>
                                    <tr style={{ background: '#FFFF' }} className='rowHover'>
                                        <th>Customer Name :</th>
                                        <td>{this.state.order.customerName}</td>
                                    </tr>
                                    <tr style={{ background: '#FFFF' }} className='rowHover'>
                                        <th>Phone No :</th>
                                        <td>{this.state.order.phoneNumber}</td>
                                    </tr>
                                    <tr style={{ background: '#FFFF' }} className='rowHover'>
                                        <th>Address :</th>
                                        <td >{this.state.order.address}</td>
                                    </tr>
                                </table>
                                <table className="table" style={{ width: '100vh' }}>
                                    <tr style={{ borderBottom: '2px solid #ddd', background: '#FFFF' }}>
                                        <th>Item Id:</th>
                                        <th>Item Name:</th>
                                        <th>Postion:</th>
                                        <th>Quantity:</th>
                                    </tr>
                                    {this.state.order.items.length > 0 && this.state.order.items.map((item, index) => (
                                        <tr style={{ borderBottom: '2px solid #ddd', background: '#FFFF' }}>
                                            <td>{item.itemId}</td>
                                            <td>{item.itemName}</td>
                                            <td>{item.itemPotion}</td>
                                            <td>{item.itemQuantity}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <Button className='submitbtn' onClick={() => this.handleButtonClick(ACCEPT)} style={{ backgroundColor: '#14608c', borderRadius: '25px', width: '100px', float: 'right' }}>
                                                <span className='btnTxt'>Accept</span>
                                            </Button>
                                            <Button className='submitbtn' onClick={() => this.handleButtonClick(DECLINE)} style={{ backgroundColor: '#14608c', borderRadius: '25px', width: '100px', float: 'right' }}>
                                                <span className='btnTxt'>Decline</span>
                                            </Button>
                                        </td>
                                    </tr>
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