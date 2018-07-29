import React, {Component} from 'react'
import InputField from '../InputField/InputField'
import './TitleField.css'

class TitleField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
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
        let bookTitleName = this.props.name
        let bookTitleValue = this.state.value
        let bookTitleSelected = {}
        bookTitleSelected[bookTitleName] = bookTitleValue

        this.props.setSelectedBookInfo(bookTitleSelected) 
    }

    render() {
        return (
            <InputField                 
                name= "title"
                placeholder="e.g. 1Q84"
                value={this.state.value}
                handleChange= {this.handleChange}
                apply = {this.apply}>
            </InputField>
        )
    }
}

export default TitleField
