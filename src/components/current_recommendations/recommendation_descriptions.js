import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function RecommendationDescriptions (props) {

        if(!props) return <div>Loading....</div>
        
         const srcMenu = `../images/${ props.menuView.file }`;
         const srcSpicy = `../images/${ props.menuView.spicy }`;

        return( 
            <div>
    
                <div>
                    <h3>[{props.menuView.name}]</h3>
                    <img src = { srcSpicy } alt = { props.menuView.spicy }/>
                    <img src = { srcMenu } alt = { props.menuView.name }/>
                    <h4>{ props.menuView.description }</h4>
                    <p>{ props.menuView.carlorie }Kal</p>
                    <p>${ props.menuView.price }</p>
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

    _.map(menu, (menuType) => {

        menuType.map((menuItem) => {

            if (menuItem.name === ownProps.match.params.id) {

                selectedMenu = menuItem;

            }
        });

    });
    
    return { menuView : selectedMenu}

}

export default connect(mapStateToProps)(RecommendationDescriptions);