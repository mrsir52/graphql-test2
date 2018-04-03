import React, { Component } from 'react';
import { Button, Card, CardBody } from 'mdbreact';
import "../css/style.css"


class Home extends Component {
    render() {
        return (
            <div className="intro">
                <div className="container">
                    <div className="row lift-page">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-9">
                            <Card>
                                <table class="table">
                                    <thead class="blue-grey lighten-2">
                                    <tr>
                                        <th>Exercise</th>
                                        <th>Reps</th>
                                        <th>Sets</th>
                                        <th>Edit</th>
                                        <th>Remove</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lift1</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                </tr>
                                    <tr>
                                        <td>Lift2</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift3</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift4</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift5</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift6</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift7</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift8</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift9</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Lift10</td>
                                        <td>10</td>
                                        <td>3</td>
                                        <td><Button size='sm' color='primary'>Edit</Button></td>
                                        <td><Button size='sm' color='primary'>Remove</Button></td>
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