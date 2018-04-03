import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class RecommendationDescriptions extends Component {

    /*
    componentDidMount () {

        console.log('working....');

    }*/

    // I will add ordering process here, too.

    render() {

        if(!this.props) return <div>Loading....</div>

        console.log ('this.props in recommenDesc:',this.props)
        console.log ('this.props.menuView', this.props.menuView)
        // const { menuView } = this.props;

        //console.log('_.map: ', _.map(menuView));
        // console.log('_keyMap: ', _.mapKeys(menuView, 'id'));
        
        const src = `../images/${ this.props.menuView.file }`;
        return(

            <div>
                <img src = { src } alt = { this.props.menuView.name }/>
                <p>{this.props.menuView.description}</p>
            </div>
        
        );

    }

    
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