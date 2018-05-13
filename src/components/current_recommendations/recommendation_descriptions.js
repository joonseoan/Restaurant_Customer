import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchGuesbookLists } from '../../actions/index';

class RecommendationDescriptions extends Component {


    componentDidMount() {

        this.props.fetchGuesbookLists();

    }

    picList() {

        return this.props.theOthers.map( (pic) => { 

            return  <Link key = { pic.id } to = {`/description/${ pic.name }`} >
                
                        <img src = {`../images/${ pic.file }` } alt= {pic.name} width = "200" />
                        
                   </Link>

        });             

    }

    beverage() {

        const { name, spicy } = this.props.selectedMenu;

        if(spicy) {

            return <img src = { `../images/${spicy}` } alt = { name }/>
    
        }
    }

    foodGuestbooks(guestbooks) {

        const { name } = this.props.selectedMenu;
        
        const guestbookList = _.map(guestbooks);

        let countNumber = 1;

        return guestbookList.reverse().map(guestbook => {

            console.log(guestbook, 'guestbook')
            
            console.log('countNumber: ', countNumber);

            if(guestbook.food === name && guestbook.like && countNumber < 5) {

                return (

                    <div key = { guestbook._id }>

                        <h3>{ countNumber++ }. { guestbook.title }</h3>
                        <h4>Customer comments:</h4>
                        <p>{ guestbook.comments }</p>
                        <p>I am here at { guestbook.visitedAt}</p>                       

                    </div>

                );

            } else {

                return;

            }

        });

    }

    render() {

        if(!this.props.guestbooks) return <div>Loading....</div>

        const { guestbooks } = this.props;

        const path = '../images/';

        const { name, description, file, price, spicy, carlorie } = this.props.selectedMenu;

        return (

            <div>
        
                <div>

                    <h1>{ name } : ${ price }</h1> 
                    <img src = { path + file } alt = { spicy }/>
            
                        { this.beverage() }
            
                    <h4>{ description } ({ carlorie } cal)</h4>

                        {/* should put ingredients*/}
                           
                    </div>
                    
                    <div>

                        <p>

                            <h2>Other recommendations</h2>
                            <h3>(Please, click on pictures to select other recommendations)</h3>

                        </p>
            
                        { this.picList() }
            
                    </div>

                    <div>

                        <h2> Customer's recommendation </h2>

                        <ul>

                            { this.foodGuestbooks(guestbooks) }

                        </ul>

                    </div>

                    <div>
            
                        <Link className = "btn btn-primary" to = {'/'} >
            
                            Back to the main page
            
                        </Link>
            
                    </div>
        
                </div>

            );

    }

}

function mapStateToProps ({ menu, guestbooks }, ownProps) {

    console.log('ownProps in description:', ownProps);

    let selectedMenu;
    let selectedMenuType;
    
    _.map(menu, (menuType) => {

        menuType.map((menuItem) => {
            
            if (menuItem.name === ownProps.match.params.id) {
                                
                selectedMenuType = menuType;
                selectedMenu = menuItem;

            }

        });

    });

    const theOthers = selectedMenuType.filter(item => item !== selectedMenu);
    

    return { 
        
        selectedMenu,
        theOthers,
        guestbooks
        
    }

}

export default connect(mapStateToProps, { fetchGuesbookLists })(RecommendationDescriptions);