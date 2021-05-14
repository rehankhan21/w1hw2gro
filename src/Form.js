import React, { Component } from 'react'
import List from './List'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // itemsObj : {...this.state},
            item: "",
            units: "",
            quantity: "",
            isPurchased: false

        }

        this.arr = []

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {

        //
        // <List list={this.state} />

        // this.arr.push(this.state)
        // console.log(this.arr)
        event.preventDefault();

        //packaging our data from the state above, now we need to pass it to parent component,
        //we need a fucntionm in parent compoenent to take this data
        // 
        let grocery = {
            item: this.state.item,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
        }
        //passes grocery to the parent component
        // this.props.addGrocery(grocery)

        this.props.addGrocery(grocery)
    }



    handleChange(event) {

        // this.setState({

        //     item: event.target.value
        // })

        // let name = event.target.name
        // let value = event.target.value

        // this.setState({
        //     name : value
        // })

        const {name, value} = event.target
        this.setState({
            [name] : value
        })

    }

    render() {
        //<List list={this.state} />
        return (
            // <form onSubmit = {this.handleSubmit}>
            //     <label>Item</label>
            //         <input type="text" value={this.state.item} onChange={this.handleChange}></input>

            //     <label>Units</label>
            //     <input type="text" value={this.state.units} onChange={this.handleChange}></input>

            //     <label>quantity</label>
            //         <input></input>
            //     <button type="submit">submit</button>
            // </form>

                
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>Item</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} name="item"></input>

                    <label>Units</label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} name="units"></input>

                    <label>quantity</label>
                    <input type="text" value={this.state.quantity} onChange={this.handleChange} name="quantity"></input>
                    <button type="submit">submit</button>
                </form>

                <div>
                   <List />
                </div>

            </div>
        )
    }

}


export default Form;
