import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function RecommendationDescriptions (props) {

    if(!props.g) return <div>Loading....</div>

    const { guestbooks } = props;
        
    const path = '../images/';

    const { name, description, file, price, spicy, carlorie } = props.selectedMenu;

    const picList = () =>{

        return props.theOthers.map( (pic) => { 

            return  <Link key = { pic.id } to = {`/description/${ pic.name }`} >
                
                        <img src = { path + pic.file } alt= {pic.name} width = "200" />
                        
                   </Link>

        });             

    }

    const beverage = () => {

        if(spicy) {

            return <img src = { path + spicy } alt = { name }/>
    
        }
    }

    const foodGuestbooks = (guestbooks) => {

        // console.log('props', props);
        
        const guestbookList = _.map(guestbooks);

        return guestbookList.map(guestbook => {

            console.log(guestbook, 'guestbook')

            if(guestbook.food === name && guestbook.like)
                return (

                   <li key = { guestbook._id } className ='list-group-item'> {guestbook.title} </li>
                
                );

        });

    }
        
    return( 
    
        <div>
    
            <div>

                <h3>[{ name }] : ${ price }</h3> 
                <img src = { path + file } alt = { spicy }/>
        
                    { beverage() }
        
                <h4>{ description } ({ carlorie } cal)</h4>

                    {/* should put ingredients*/}
                       
                </div>
                
                <div>
        
                    { picList() }
        
                </div>

                <div>

                    <h2> Customer's recommendation </h2>

                    <ul>

                        { foodGuestbooks(guestbooks) }

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

export default connect(mapStateToProps)(RecommendationDescriptions);