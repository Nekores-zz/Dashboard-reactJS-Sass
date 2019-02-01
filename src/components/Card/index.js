import React from 'react';

import product1 from 'img/products/1.jpg'

// styles
import './_index.scss'

class Card extends React.Component{

    render(){
        return(
           <div className="__RootCard">
            <div className="__RootCard__CardImg">
            <img src={product1} alt="logo" />
           </div>
            <div className="__RootCard__CardBody">
            <h2 className = "__RootCard__CardBody__Heading2Name" > Mu-X 2.5'18 </h2>
            < h2 className = "__RootCard__CardBody__Heading2 __RootCard__CardBody__HeadingRed" > A 1234 ABC < /h2>
            < h5 className = "__RootCard__CardBody__Heading5 __RootCard__CardBody__HeadingRed" > MP13445IJDDJD78 < /h5>
            <br/>
            <br/>
            <div className="__RootCard__CardBody__FootPart">
                <h5 className = "__RootCard__CardBody__FootPart__DateTitle" > <strong  >DATE OF PURCHASE </strong    ></h5>
            <h5 className = "__RootCard__CardBody__FootPart__Date" > <b>5 Dec 2019</b> </h5>
            </div>
           </div>
           </div>
        )
    }
    
}


export default Card