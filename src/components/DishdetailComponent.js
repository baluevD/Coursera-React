import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    parseDate(str) {
        var dt = new Date(str);
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        return dt.toLocaleString("en-US", options);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );   
             
    }

    renderComments(comments) {
        const commentsList = this.props.dish.comments.map((item) => {
            return (
              <li>
                <p>{item.comment}</p>
                <p>-- {item.author}, {this.parseDate(item.date)}</p>
              </li>
            );
        });
        if (commentsList != null)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsList}
                    </ul>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        return (
            <div class="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;