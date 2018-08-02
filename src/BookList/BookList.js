import React, { Component } from 'react'
import Actions from '../Actions/Actions';

class BookList extends Component {

    render() {

        return (
            <tbody>
                {this.props.options.map( ( option, index ) => {
                    return (
                        <tr key={ `option-${ index }` }>
                            <td key={ `option-title-${ index }` } className="option">{option.title}</td>
                            <td key={ `option-author-${ index }` } className="option">{option.author}</td>
                            <td key={ `option-genre-${ index }` } className="option">{option.genre}</td>
                            <td key={ `option-actions-${ index }` } className="option">
                                <Actions 
                                    id={option.id} 
                                    editBook={() => { this.props.editBook(option) }} 
                                    removeBook={() => { this.props.removeBook(option) }}>
                                </Actions>
                            </td>
                        </tr>
                        )
                    })}
            </tbody>
        )
    }
}

export default BookList
