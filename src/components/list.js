import React from 'react';



const List = props => {
    return(
    <ul>
        {
            props.items.map((item,index) =>( /*.map is like a for loop, mapping through items*/
                <li key = {index}>
                    {item}
                </li>
    ))
            }
            
            
        
    </ul>
    )

    
}

export default List;
