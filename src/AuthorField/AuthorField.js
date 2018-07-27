import React, { Component } from 'react'
import './AuthorField.css'

class AuthorField extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.apply = this.apply.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
    
    apply() {
        let bookAuthorName = this.props.name
        let bookAuthorValue = this.state.value
        let bookAuthorSelected = {}
        bookAuthorSelected[bookAuthorName] = bookAuthorValue

        this.props.setSelectedBookInfo(bookAuthorValue) 
    }

    render() {
        return (
            <div className="flex">
                <label>Write the {this.props.name} here</label>
                <input 
                type="text"
                className= "input-lg"
                placeholder="e.g. Haruki Murakami"
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.apply}
                /> 
            </div>
        )
    }
}

export default AuthorField
