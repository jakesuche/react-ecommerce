import React from 'react'
import SHOP_DATA from './shop.data'
import  Collection from '../../components/preview-collection/collection.preview'

class Shopage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    



    render(){
        const { collections } = this.state
        return (
            <div>
                {
                    collections.map(({id, ...othercollection})=>(
                       <Collection key={id} {...othercollection}/>
                    ))
                }
            </div>
        )
    }
}

export default Shopage