import React from 'react';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview"></div>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, name}) => (
                <div key={id}>{name}</div>
            ))}
        </div>
    );
}

export default CollectionPreview;