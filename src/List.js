import { useEffect,useState } from "react";


function List({getItems}) {
    const [items,setItems]=useState([]);

    useEffect(()=>{
        setItems(getItems(5));
        console.log("updating items");
    },[getItems]);

    return items.map(item=><div key={Math.random()}>{item}</div>)
}

export default List;