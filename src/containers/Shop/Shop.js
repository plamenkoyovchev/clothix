import React, {Component} from 'react';

import './Shop.scss';
import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className="shop">
                {this.state.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    };
}

export default Shop;