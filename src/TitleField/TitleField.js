import React, { Component } from 'react'
import './TitleField.css'

class TitleField extends Component {
    constructor() {
        super()
        this.state = Object.assign({
            name : "title",
            value: ""
        })

        this.handleChange = this.handleChange.bind(this)
        this.apply = this.apply.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
      
    apply() {
        let bookTitle = this.state.value
        this.props.setSelectedBookInfo(bookTitle) 
    }

    render() {
        return (
            <div className="flex">
                <label>Write the {this.state.name} here</label>
                <input 
                type="text"
                className= "input-lg"
                placeholder="e.g. 1Q84"
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.apply}
                /> 
            </div>
        )
    }
}

export default TitleField
