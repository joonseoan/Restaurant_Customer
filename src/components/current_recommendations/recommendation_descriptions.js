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

        return guestbookList.map(guestbook => {

            console.log(guestbook, 'guestbook')

            if(guestbook.food === name && guestbook.like)
                return (

                   <li key = { guestbook._id } className ='list-group-item'> {guestbook.title} </li>
                
                );

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

                    <h3>[{ name }] : ${ price }</h3> 
                    <img src = { path + file } alt = { spicy }/>
            
                        { this.beverage() }
            
                    <h4>{ description } ({ carlorie } cal)</h4>

                        {/* should put ingredients*/}
                           
                    </div>
                    
                    <div>
            
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