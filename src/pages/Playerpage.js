import React, { Component } from 'react';
import { Button, Card, CardBody } from 'mdbreact';
import "../css/style.css"


class Home extends Component {
    render() {
        return (
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card>
                                <h3>
                                    grid box will go here
                                </h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            </Card>
                            <br/>
                            <Card>
                                <h3>
                                    calendar will go here
                                </h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            </Card>
                            <br/>
                            <Card>
                                <h3>
                                    grid box will go here
                                </h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            </Card>
                            <br/>
                        </div>
                        <div className="col-lg-9">
                            <Card>
                                <table class="table">

                                    <thead class="blue-grey lighten-4">
                                    <tr>
                                        <th>Exercise</th>
                                        <th>Max</th>
                                        <th>Weight lifted last 30 days</th>
                                        <th>Team Rank</th>
                                        <th>Pos Rank</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lift1</td>
                                        <td>l1max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift2</td>
                                        <td>l2max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift3</td>
                                        <td>l3max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift4</td>
                                        <td>l4max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift5</td>
                                        <td>l5max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift6</td>
                                        <td>l6max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift7</td>
                                        <td>l7max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift8</td>
                                        <td>l8max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift9</td>
                                        <td>l9max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    <tr>
                                        <td>Lift10</td>
                                        <td>l10max</td>
                                        <td>500 lbs</td>
                                        <td>blah</td>
                                        <td>blah</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Card>

                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default Home;