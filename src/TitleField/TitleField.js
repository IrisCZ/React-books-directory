import React, { Component } from 'react'
import './TitleField.css'

class TitleField extends Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({
            value: ""
        })

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
        let bookTitleName = this.props.name
        let bookTitleValue = this.state.value
        let bookTitleSelected = {}
        bookTitleSelected[bookTitleName] = bookTitleValue

        this.props.setSelectedBookInfo(bookTitleSelected) 
    }

    render() {
        return (
            <div className="flex">
                <label>Write the {this.props.name} here</label>
                <input 
                type="text"
                id="input-title"
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
