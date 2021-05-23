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
        // this.props.addGrocery = this.props.addGrocery.bind(this)
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
            items: this.state.item,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
        }
        //passes grocery to the parent component
        // this.props.addGrocery(grocery)

        this.props.addGro(grocery);
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

    // in class components we usually destructure props and states in the render method
    render() {
        //<List list={this.state} />
        // const {name, heroname} = this.props
        // const {state1, state2} = this.state
        // console.log(this.props)
        // console.log(this.props.listprop)
        // console.log(this.props.listprop.list[0])
        // const [item1, item2] = this.props.listprop.list
        // console.log(item1)
        // console.log(item2)
        // const [item1i] = item1
        // console.log(item1i)

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
                   {/* {item1.toString()} */}
                   {/* {JSON.stringify(this.props.listprop.list)} */}

                   {/* {
                       Object.keys(this.props.listprop.list).map((key) => {
                           return JSON.stringify(this.props.listprop.list[key])
                       })
                   } */}
                </div>

            </div>
        )
    }

}


export default Form;
