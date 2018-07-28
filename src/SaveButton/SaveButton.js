import React from 'react'

const SaveButton = (props) => {
    return (
        <button 
            className="button button-save"
            onClick={props.save}
            >
            <em className="fas fa-save"></em>
        </button>
    )
}

export default SaveButton
