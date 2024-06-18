import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";


function ListGroup(props) {// wrapped two different elements in div to allow passing of weo elements in it, Fragment was also used to replace div, can also use empty angle brackets <> and react will know its fragment
    let items = ['new york', 'san fransicso', 'Shanghai'];

    // items.map() function call changes items in list to <li> type so we can print it to the front end
    // key can just use the items although sometimes it would be like item.id if theres more info in the components of the list
    // items.length === 0 ? <p>No item foudn</p> : null is like a built in if-else statement
    // can also move that line to another variable and call it in the curly brackets like command = items.length === 0 ? <p>No item foudn</p> : null
    // then in the return you just do {command}

//    const getMessage = () => { // creates a function returning a certain value that gets passed to the function call in the return message, good becuase we can pass variables in
//        return items.length === 0 ? <p>No item foudn</p> : null;
//    }

// the item,index makes it so that when we click the city on the list we get the item and its index in the array printed to the console if we have console.log(item,index)

//    const handleClick = (event : MouseEvent) => console.log(event); // MouseEvent thing is for typescript
      // event handler
    // const handleClick = (event) => console.log(event);

    // let selectedIndex = -1; // will keep track of what component is selected
    // Hook which tells react that variable has value that may change and will be used
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function to update variable to re-render component



    return (
        <Fragment>
            <h1>List thing</h1>
            {items.length === 0 ? <p>No item foudn</p> : null}
            {items.length === 0 && <p>No Item found</p> // allows us to post the content without a null operator and stuff
            }
        <ul className="list-group">
                {items.map((item, index) => <li
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        console.log(item);                    }}>
                    {item}</li>)}
            </ul>
        </Fragment>
    );
}
export default ListGroup;