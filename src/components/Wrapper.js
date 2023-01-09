import React from 'react';

const Wrapper = (props) =>{

    const items = props.items.map((item, index) => {
        
        return <li key={item.id}> {item.title}</li>
    })

    return <div>

        <h3>Página: {props.currentPage}</h3>

        <button onClick={props.prevHandler}>Prev</button>
        <button onClick={props.nextHandler}>Next</button>

        <h4>Items:</h4>

            <ul>
                {items}
            </ul>

    </div>

}

export default Wrapper;