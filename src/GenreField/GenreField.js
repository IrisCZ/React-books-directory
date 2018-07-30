import React, { Component } from 'react'
import './GenreField.css'

class GenreField extends Component {
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
    
    apply() {
        let bookGenreName = this.props.name
        let bookGenreValue = this.state.value
        let bookGenreSelected = {}
        bookGenreSelected[bookGenreName] = bookGenreValue

        this.props.setSelectedBookInfo(bookGenreSelected) 
    }

    reset() {
        this.setState({ value : ""})
    }

    render() {

        return (
            <div className="flex">
                <label>Select a {this.props.name} </label>
                <select
                    type="text"
                    className= "input-lg"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.apply}>
                    {this.props.options.map( ( option, index ) => {
                        return(
                            <option key={ `option-${ index }` }> { option } </option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default GenreField
