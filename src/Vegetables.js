import React from 'react'
import { useState } from 'react'
import "./Vegetables.css"
export default function Vegetables() {
    const [VegetablesNames, setVegetablesNames] = useState([])
    const [removedVegetablesItems, setremovedVegetablesItems] = useState([])

    function addVegetablesItem() {
        let item = document.getElementById("Items2")
        if (item.value.trim() !== "") {
            let check = false;
            for (let val of VegetablesNames) {
                // console.log(val.toUpperCase());
                // console.log(VegetablesNames[i]);
                let a = val.toString()
                if (a.toUpperCase() === item.value.toUpperCase().trim()) {
                    check = true
                    break;
                }


            }
            console.log(VegetablesNames)
            //   alert("hi")
            if (check) {
                alert("Duplicate Values are not allowed")
                item.value = ""
            }
            else {
               
                let cptlize = item.value.trim().charAt(0).toUpperCase()+item.value.trim().slice(1);
                console.log("Capitalize:"+cptlize)
                
                setVegetablesNames([...VegetablesNames, cptlize])
                item.value = ""
            }

        } else {
            alert("Enter item name!")
        }
    }

    function deleteVegetablesItem() {
        if (VegetablesNames.length != 0) {
            const r = VegetablesNames.slice(-1)
            setremovedVegetablesItems([...removedVegetablesItems, [r]])
            setVegetablesNames([...VegetablesNames.slice(0, -1)])
        }
    }

    function removeItem() {
        let item = document.getElementById("removeItemInp")
        if (item.value.trim() !== "") {
            let cptlize = item.value.trim().charAt(0).toUpperCase()+item.value.trim().slice(1);
            let find = [...VegetablesNames].indexOf(cptlize)
            if(find<0)
            {
                 alert("Item not found!")
             item.value =""
            }
            else{
                console.log(find);
                let arr = VegetablesNames.splice(find,1)
                console.log("Splice:"+arr)
                setVegetablesNames([...VegetablesNames])
                console.log(VegetablesNames)
                item.value =""
            }
            
        }   
        else {
            alert("Enter item name!")
             item.value =""
        }

    }
    function restoreItems()
    {
        setVegetablesNames([...removedVegetablesItems])
        setremovedVegetablesItems([])
    }
    function deleteAllItems()
    {
        setremovedVegetablesItems([])
    }

    function deleteAll() {
        setremovedVegetablesItems([...VegetablesNames])
        setVegetablesNames([])
    }
    return (
        <div className="p-4 m1 min-h-[50vh]">
            <h1 className="text-4xl font-bold  my-[100px] mb-[50px]" id='t3'>Vegetables List</h1>
            <input
                id="Items2"
                type="text"
                className="border p-2 mb-4 w-full"
                placeholder="Enter vegetable name"
            />
            <button
                onClick={addVegetablesItem}
                className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
            >
                Add Vegetable
            </button>
            <input
                id="removeItemInp"
                type="text"
                className={VegetablesNames.length > 0 ? "flex border p-2 mb-4 w-full" : "hidden"}
                placeholder="Enter remove vegetable name"
            />
            <button
                onClick={removeItem}
                className={VegetablesNames.length > 0 ? "bg-blue-500 text-white p-2 rounded mb-4 w-full" : "hidden"}

            >
                Remove
            </button>
            <button
                onClick={deleteVegetablesItem}
                className={VegetablesNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 w-full" : "hidden"}
            >
                Remove Last Item
            </button>
            <h1 className={VegetablesNames.length > 0 ? "flex" : "hidden"}>Added Items :</h1>
            <ul className={VegetablesNames.length > 0 ? "blurred-ul block list-none pl-5 bg-white p-4 max-h-[400px] custom-scroll bg-red-400 overflow-y-scroll rounded shadow" : "hidden"}>
                {VegetablesNames.map((name, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name}</li>
                ))}
                 <button
                onClick={deleteAll}
                className={VegetablesNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
            >
                Delete All
            </button>
            </ul>

            <h1 className={removedVegetablesItems.length > 0 ? "flex" : "hidden"}>Removed Items</h1>
            <ul className={removedVegetablesItems.length > 0 ? "blurred-ul block list-none pl-5 bg-white max-h-[400px] custom-scroll overflow-y-scroll p-4 rounded shadow" : "hidden"}>
                {removedVegetablesItems.map((name, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name} </li>
                ))}
                 <button
                onClick={restoreItems}
                className={removedVegetablesItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
            >
               Restore All
            </button>
            <button
                onClick={deleteAllItems}
                className={removedVegetablesItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
            >
               Remove From Bin
            </button>
            </ul>
           
        </div>
    )
}