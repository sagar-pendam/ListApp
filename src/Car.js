import React from 'react'
import { useState } from 'react'
import "./Car.css"
export default function Car() {
    const [carNames, setcarNames] = useState([])
    const [removedCarItems, setremovedCarItems] = useState([])

    function addCarItem() {
        let item = document.getElementById("Items1")
        if (item.value.trim() !== "") {
            let check = false;
            for (let val of carNames) {
                // console.log(val.toUpperCase());
                // console.log(carNames[i]);
                let a = val.toString()
                if (a.toUpperCase() === item.value.toUpperCase().trim()) {
                    check = true
                    break;
                }


            }
            console.log(carNames)
            //   alert("hi")
            if (check) {
                alert("Duplicate Values are not allowed")
                item.value = ""
            }
            else {

                let cptlize = item.value.trim().charAt(0).toUpperCase() + item.value.trim().slice(1);
                console.log("Capitalize:" + cptlize)

                setcarNames([...carNames, cptlize])
                item.value = ""
            }

        } else {
            alert("Enter item name!")
        }
    }

    function deleteCarItem() {
        if (carNames.length != 0) {
            const r = carNames.slice(-1)
            setremovedCarItems([...removedCarItems, [r]])
            setcarNames([...carNames.slice(0, -1)])
        }
    }

    function removeItem1() {
        let item = document.getElementById("removeItemInp1")
        if (item.value.trim() !== "") {
            let cptlize = item.value.trim().charAt(0).toUpperCase() + item.value.trim().slice(1);
            let find = [...carNames].indexOf(cptlize)
            if (find < 0) {
                alert("Item not found!")
                item.value = ""
            }
            else {
                console.log(find);
                let arr = carNames.splice(find, 1)
                console.log("Splice:" + arr)
                setcarNames([...carNames])
                console.log(carNames)
                item.value = ""
            }

        }
        else {
            alert("Enter item name!")
            item.value = ""
        }

    }
    function restoreItems1() {
        setcarNames([...removedCarItems])
        setremovedCarItems([])
    }
    function deleteAllItems1() {
        setremovedCarItems([])
    }

    function deleteAll1() {
        setremovedCarItems([...carNames])
        setcarNames([])
    }
    return (
        <div className="p-4 m2 min-h-[50vh]">
            <h1 className="text-4xl font-bold  my-[100px] mb-[50px]" id='t2'>Car List</h1>
            <input
                id="Items1"
                type="text"
                className="border p-2 mb-4 w-full"
                placeholder="Enter Car name"
            />
            <button
                onClick={addCarItem}
                className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
            >
                Add 
            </button>
            <input
                id="removeItemInp1"
                type="text"
                className={carNames.length > 0 ? "flex border p-2 mb-4 w-full" : "hidden"}
                placeholder="Enter remove Car name"
            />
            <button
                onClick={removeItem1}
                className={carNames.length > 0 ? "bg-blue-500 text-white p-2 rounded mb-4 w-full" : "hidden"}

            >
                Remove
            </button>
            <button
                onClick={deleteCarItem}
                className={carNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 w-full" : "hidden"}
            >
                Remove Last Item
            </button>
            <h1 className={carNames.length > 0 ? "flex" : "hidden"}>Added Items :</h1>
            <ul className={carNames.length > 0 ? "blurred-ul block list-none pl-5 bg-white p-4 max-h-[400px] custom-scroll bg-red-400 overflow-y-scroll rounded shadow" : "hidden"}>
                {carNames.map((name, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name}</li>
                ))}
                <button
                    onClick={deleteAll1}
                    className={carNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
                >
                    Delete All
                </button>
            </ul>

            <h1 className={removedCarItems.length > 0 ? "flex" : "hidden"}>Removed Items</h1>
            <ul className={removedCarItems.length > 0 ? "blurred-ul block list-none pl-5 bg-white max-h-[400px] custom-scroll overflow-y-scroll p-4 rounded shadow" : "hidden"}>
                {removedCarItems.map((name, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name} </li>
                ))}
                <button
                    onClick={restoreItems1}
                    className={removedCarItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
                >
                    Restore All
                </button>
                <button
                    onClick={deleteAllItems1}
                    className={removedCarItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
                >
                    Remove From Bin
                </button>
            </ul>

        </div>
    )
}