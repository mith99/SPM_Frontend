import React, {Component} from "react";
import axios from "axios";
import {Col, Row,Spinner} from "reactstrap";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';


class ViewEmails extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.search =  this.search.bind(this);
        this.state = {
            emails:'',
            searchKey:'',
            isSearching:false
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    componentDidMount() {
        axios.get("http://localhost:5000/email/view-emails")
            .then((response) => {
                this.setState({emails: response.data.data});
            });
    }

    search(e,key){

        this.setState({isSearching:true});
        axios.get(`http://localhost:5000/email/search-emails/${key}`)
            .then((response) => {
                this.setState({emails: response.data.data});
            });

        this.setState({isSearching:false});

    }


    render() {
        return(
            <div>
                <Row className="backgroundRowImageOffer">
                    <Row>
                        <Col sm='8'></Col>
                        <Col sm='3'>
                            <br/><br/>
                            <div className="input-group">
                                <input type="search"
                                       className="form-control rounded"
                                       placeholder="Search"
                                       name='searchKey'
                                       aria-label="Search"
                                       aria-describedby="search-addon"
                                       value={this.state.searchKey}
                                       onChange={this.onChange}
                                />

                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={(e) =>
                                            this.search(e, this.state.searchKey)
                                        }
                                >Search
                                </button>
                            </div>
                        </Col>
                        <Col sm='1'></Col>
                    </Row>

                    <Col sm="2">
                    </Col>
                    <Col sm="9">
                        <Row>
                            <h1 className='titleStyle'>View Emails</h1>
                            <div className="container">

                                {this.state.emails.length > 0 &&
                                this.state.emails.map((item, index) => (
                                    <div
                                        // key={index}
                                        className="card text-dark bg-lightbg-light mb-3 "
                                        style={{ marginTop: "20pt" }}
                                    >
                                        <div
                                            className="card-body"
                                            //onClick={(e) => this.navigateToSubjects(e, item._id)}
                                        >
                                            <Row>
                                                <Col sm="2">
                                                    <lottie-player
                                                        src="https://assets5.lottiefiles.com/packages/lf20_IUWMcw.json"
                                                        background="transparent"
                                                        speed="1"
                                                        style={{width: '100px', height: '100px', paddingTop:'3vh', paddingLeft:'3vh'}}
                                                        loop  autoplay>
                                                        {/*<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />*/}
                                                    </lottie-player>

                                                </Col>
                                                <Col sm="9">
                                                    <Row>
                                                        <Col sm="7">
                                                            <h4 className="offerNamefont">
                                                                Email Topic -{item.topic}
                                                            </h4>
                                                            <br/>
                                                            <h5 className="offerNamefont">
                                                                Email Content - {item.body}
                                                            </h5>
                                                            <br />

                                                        </Col>


                                                        <Col sm="2">

                                                        </Col>
                                                    </Row>

                                                </Col>

                                            </Row>
                                            <Row className='-flex flex-row-reverse'>
                                                {/*<Col sm='2'></Col>*/}
                                                <Col sm="5">
                                                    <br />
                                                    <h5 className="offerDetails">
                                                        Date - {item.date}
                                                    </h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default ViewEmails

