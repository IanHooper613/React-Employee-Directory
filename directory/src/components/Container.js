import React, { Component } from 'react'
import employees from '../employees.json'
import Employee from './Employee'

class Container extends Component {

    state = {
        employees,
        filter: '',
        isSorted: false,
        shouldSort: false
    }

    clearButton;
    text = '';

    componentDidUpdate() {
        this.setReverseSort()
    }
    // Updating the state and filtering from the text that was entered
    handleInputChange = e => {
        this.setState({
            filter: e.target.value       
        })
    }
    // Resetting the state to the original value
    clearSort = () => {
        this.setState({
            isSorted: false,
            shouldSort: false
        })
    }
    // The clear button re-sets things
    setReverseSort = () => {
        this.clearButton = (<p />)
        if(this.state.shouldSort) {
            this.clearButton = (
                <button type='submit' onClick={this.clearSort} className='btn-warning'>
                    Clear Sort
                </button>
            )
        }
    }
    // Changing the state to sort
    sortCategory = e => {
        e.preventDefault()
        this.setState({
            isSorted: !this.state.isSorted,
            shouldSort: true
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <form className="form">
                            <input
                            value={this.state.filter}
                            name="filter"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Filter by Name"
                            />
                        </form>
                    </div>
                    <div className='col'>
                        <button type="submit" onClick={this.sortCategory} className="btn btn-success">
                            Sort by Department
                        </button>
                    </div>
                    <div className='col'>
                        {this.clearButton}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Employee
                        emp={this.state.employees}
                        filter={this.state.filter}
                        isSorted={this.state.isSorted}
                        shouldSort={this.state.shouldSort}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Container