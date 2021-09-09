import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import { GET_ALL_FEEDBACKS } from '../../../constants'
import ViewFeedbackPanelCss from '../feedback-pages-backpannel.css';

class ViewFeedbackPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacks: [],
    };
  }

  async componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASE_BE_URL}:${process.env.REACT_APP_BASE_BE_PORT}${GET_ALL_FEEDBACKS}`).then((response) => {
      console.log(response)
      this.setState({ feedbacks: response.data.data });
    });
  }

  render() {
    return (
      <div className="backgroundRowImageCategory">
        <Row>
          <Col sm="4"></Col>
          <Col sm="6">
            <Row >
              <div className="container">
                <h1 className="topicviewCategory">View Feedback</h1>
                <table className="table">
                  <tr style={{ borderBottom: '3px solid #ddd', background: '#a2a2a3', color: 'black' }}>
                    <th>Feedback</th>
                    <th>Message</th>
                    <hr /><hr />
                  </tr>
                  {this.state.feedbacks.length > 0 && this.state.feedbacks.map((item, index) => (
                    index % 2 == 0 ? <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#FFFF' }} className='rowHover'>
                      <td>{item.feedbackId}</td>
                      <td>{item.message}</td>

                    </tr> : <tr key={index} style={{ borderBottom: '2px solid #ddd', background: '#a2a2a3' }} className='rowHover'>
                      <td>{item.feedbackId}</td>
                      <td>{item.message}</td>


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

export default ViewFeedbackPanel;