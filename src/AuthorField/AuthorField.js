import React, { Component } from 'react'
import InputField from '../InputField/InputField'
import './AuthorField.css'

class AuthorField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.apply = this.apply.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
    
    reset() {
        this.setState({ value : ""})
    }
    
    apply() {
        let bookAuthorName = this.props.name
        let bookAuthorValue = this.state.value
        let bookAuthorSelected = {}
        bookAuthorSelected[bookAuthorName] = bookAuthorValue

        this.props.setSelectedBookInfo(bookAuthorSelected) 
    }

    render() {
        return (
            <InputField                 
                name= "title"
                placeholder="e.g. Haruki Murakami"
                value={this.state.value}
                handleChange= {this.handleChange}
                apply = {this.apply}>
            </InputField>
        )
    }
}

export default AuthorField
