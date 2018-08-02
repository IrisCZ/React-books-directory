import React from 'react'

const Actions = (props) => {
    
    return (
        <div>
            <button 
                className="button button-actions"
                onClick={props.editBook}>
                <em className="fas fa-pen-square"></em>
            </button>
            <button 
                className="button button-actions"
                onClick={props.removeBook}>
                <em className="fas fa-times"></em>
            </button>
        </div>
    )
}

export default Actions
