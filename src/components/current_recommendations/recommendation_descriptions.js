import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function RecommendationDescriptions (props) {

    if(!props) return <div>Loading....</div>
        
         const path = '../images/';

         const { name, description, file, price, spicy, carlorie } = props.selectedMenu;

         const picList = () =>{

            return props.theOthers.map( (pic) => { 

                return  <Link to = {`/description/${ pic.name }`} key = { pic.id }>
                
                            <img src = { path + pic.file } alt= {pic.name} width = "200" />
                        
                        </Link>

            });             

        }

        const beverage = () => {

            if(spicy) {

                return <img src = { path + spicy } alt = { name }/>
            }
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
                    <Link className = "btn btn-primary" to = {'/'} >
                        Back to the main page
                    </Link>
                </div>
    
            </div>
        );
    
}

function mapStateToProps ({ menu }, ownProps) {

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
        theOthers
        
    }

}

export default connect(mapStateToProps)(RecommendationDescriptions);