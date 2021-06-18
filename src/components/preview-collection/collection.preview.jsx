import React from "react";
import  CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'
const collectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i)=> i< 4)
          .map(({id, ...otherItem}) => (
            <CollectionItem key={id} {...otherItem}/> 
          ))}
      </div>
    </div>
  );
};

export default collectionPreview;
