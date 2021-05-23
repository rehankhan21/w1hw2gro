import React, { Component } from 'react'
import Form from './Form'

class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    id: 0,
                    items: "apple",
                    units: "1 lb",
                    quantity: 21,
                    isPurchased: false
                },

                {
                    id: 1,
                    items: "pear",
                    units: "41 lbs",
                    quantity: 10,
                    isPurchased: false
                },

                {
                    id: 1,
                    items: "cherry",
                    units: "420 lbs",
                    quantity: 30,
                    isPurchased: false
                }

            ]
        }

        // this.arr = this.props

        this.list = this.list.bind(this)
        this.addGro = this.addGro.bind(this)
        this.toogle = this.toogle.bind(this)

        // const {item, units, quantity, isPurchased} = this.props;
        // console.log(this.props)
        // console.log(item)
        // this.item = item;

    }

    list(props) {

        //let [item, units, quantity] = [props[0], props[1], props[2]];
    }

    toogle(event) {

        console.log(event.target.value)

        let array = this.state.list.slice()
        
        array[event.target.value].isPurchased = true;
        console.log(array[event.target.value].isPurchased)

        this.setState({
            list : array
        })
    }

    // this takes the item
    // pass the new version of thje list with the new item
    // setting list to its newer version
    // push mutates an array, but slice mutates the copy and sets the state to the copy
    addGro = (item) => {

        //this.state.list.slice()
        let array = this.state.list.slice() //storing the copy inside of the new array
        array.push(item) // pushing inside the copy of the array

        this.setState({
            list: array // made a copy of the list then pushed the new item to the copy of the list 
            // now we are setting list to its newer version with the new item added.
        })


    }


    render() {
        //{console.log(this.item)}
        const items = []
        for (const [index, value] of this.state.list.entries()) {
            items.push(<li key={index}>{value}</li>)
            console.log(items)
        }

        // const listItems = this.state.list.map((value, index) => {
        //     <li key={index}>{JSON.stringify(value.items)} <button onClick = {this.toogle}>Remove</button> </li>
        // })
        return (
            <div>
                {/* //{this.arr} */}
                {/* {console.log(this.arr)} */}
                <p>hello</p>
                {/* <p>{this.props.arr}</p>
                <p>{this.arr.item}</p>
                <p>{this.item.item}</p>
                */}
                {/* {this.props.arr.map(userItems => {
                   return <h1>{userItems.item}</h1>
               })} */}

                {/* <List addGocery = {this.addGocery}/> */}
                {//grocerylist
                }
                {/* {JSON.stringify(this.props.listprop.list)} */}
                {/* {JSON.stringify(this.state)} */}
                {/* {
                       Object.keys(this.state).map((key) => {
                           return JSON.stringify(this.state[key])
                       })
                } */}
                {/* {
                    // This method enumerates all the property names from the state object and  maps them as the key 
                    // for the map
                    Object.keys(this.state).map((key) => {
                        let [obj1, obj2, ...rest] = this.state[key]

                        if (rest.isPurchased) {
                            return (
                                <div>
                                    item: {JSON.stringify(rest)}

                                </div>
                                // JSON.stringify(obj1)
                            )
                        }

                    })
                } */}

                {

                }

                {/* {JSON.stringify(this.state.list)} */}
                <ul>

                    {this.state.list.map((value, index) => {
                        return <li key={index}>{"items: " + JSON.stringify(value.items) +
                            ", units" + JSON.stringify(value.units) +
                            ", quantity: " + JSON.stringify(value.quantity) +
                            ", purchased: " + JSON.stringify(value.isPurchased) + " "}
                            <button value={index} onClick={this.toogle}>Remove</button> </li>
                    })}

                </ul>
                    {/* <div>{JSON.stringify(items.props)}</div> */}
                <div>
                    <Form addGro={this.addGro} />
                </div>
            </div>
        )
    }
}

export default List;