import React, { Component } from 'react'
import './TitleField.css'

class TitleField extends Component {
    constructor() {
        super()
        this.state = Object.assign({
            value: ""
        })

        this.handleChange = this.handleChange.bind(this)
        this.apply = this.apply.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
      
    apply() {
        let bookTitleName = this.props.name
        let bookTitleValue = this.state.value
        let bookTitleSelected = {}
        bookTitleSelected[bookTitleName] = bookTitleValue

        this.props.setSelectedBookInfo(bookTitleValue) 
    }

    render() {
        return (
            <div className="flex">
                <label>Write the {this.props.name} here</label>
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
