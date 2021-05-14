import React, { Component } from 'react'
import Form from './Form'

class List extends Component{

    constructor(props) {
        super(props)

        this.state = {
            list: [
                {items: "",
                units: "",
                quantity: 0,
                isPurchased: false},

                {items: "",
                units: "",
                quantity: 0,
                isPurchased: false}

            ]
        }

        // this.arr = this.props

        this.list = this.list.bind(this)
        this.addGocery = this.addGocery.bind(this)

        // const {item, units, quantity, isPurchased} = this.props;
        // console.log(this.props)
        // console.log(item)
        // this.item = item;

    }

     list (props) {

        //let [item, units, quantity] = [props[0], props[1], props[2]];
     }

     // this takes the item
     // pass the new version of thje list with the new item
     // setting list to its newer version
     // push mutates an array, but slice mutates the copy and sets the state to the copy
     addGocery = (item) => {

        //this.state.list.slice()
        let array = this.state.list.slice() //storing the copy inside of the new array
        array.push(item) // pushing inside the copy of the array

        this.setState({
            list: array // made a copy of the list then pushed the new item to the copy of the list 
            // now we are setting list to its newer version with the new item added.
        })
     }


    render() {

        {console.log(this.item)}
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
            </div>
        )
    }
}

export default List;