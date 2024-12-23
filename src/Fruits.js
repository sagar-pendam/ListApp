import React from 'react'
import { useState } from 'react'
import "./Fruits.css"
export const Fruits = () => {
  const [fruitsNames, setfruitsNames] = useState([])
     const [removedFruitsItems, setremovedFruitsItems] = useState([])
 
     function addFruitsItem() {
         let item = document.getElementById("Items")
         if (item.value.trim() !== "") {
             let check = false;
             for (let val of fruitsNames) {
                 // console.log(val.toUpperCase());
                 // console.log(fruitsNames[i]);
                 let a = val.toString()
                 if (a.toUpperCase() === item.value.toUpperCase().trim()) {
                     check = true
                     break;
                 }
 
 
             }
             console.log(fruitsNames)
             //   alert("hi")
             if (check) {
                 alert("Duplicate Values are not allowed")
                 item.value = ""
             }
             else {
                
                 let cptlize = item.value.trim().charAt(0).toUpperCase()+item.value.trim().slice(1);
                 console.log("Capitalize:"+cptlize)
                 
                 setfruitsNames([...fruitsNames, cptlize])
                 item.value = ""
             }
 
         } else {
             alert("Enter item name!")
         }
     }
 
     function deleteFruitsItem() {
         if (fruitsNames.length != 0) {
             const r = fruitsNames.slice(-1)
             setremovedFruitsItems([...removedFruitsItems, [r]])
             setfruitsNames([...fruitsNames.slice(0, -1)])
         }
     }
 
     function removeItem01() {
         let item = document.getElementById("removeItemInp01")
         if (item.value.trim() !== "") {
             let cptlize = item.value.trim().charAt(0).toUpperCase()+item.value.trim().slice(1);
             let find = [...fruitsNames].indexOf(cptlize)
             if(find<0)
             {
                  alert("Item not found!")
              item.value =""
             }
             else{
                 console.log(find);
                 let arr = fruitsNames.splice(find,1)
                 console.log("Splice:"+arr)
                 setfruitsNames([...fruitsNames])
                 console.log(fruitsNames)
                 item.value =""
             }
             
         }   
         else {
             alert("Enter item name!")
              item.value =""
         }
 
     }
     function restoreItems01()
     {
         setfruitsNames([...removedFruitsItems])
         setremovedFruitsItems([])
     }
     function deleteAllItems01()
     {
         setremovedFruitsItems([])
     }
 
     function deleteAll01() {
         setremovedFruitsItems([...fruitsNames])
         setfruitsNames([])
     }
     return (
         <div className="p-4 m01 min-h-[50vh]">
             <h1 className="text-4xl font-bold  my-[100px] mb-[50px]" id='t1'>Fruits List</h1>
             <input
                 id="Items"
                 type="text"
                 className="border p-2 mb-4 w-full"
                 placeholder="Enter fruit name"
             />
             <button
                 onClick={addFruitsItem}
                 className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
             >
                 Add 
             </button>
             <input
                 id="removeItemInp01"
                 type="text"
                 className={fruitsNames.length > 0 ? "flex border p-2 mb-4 w-full" : "hidden"}
                 placeholder="Enter remove fruit name"
             />
             <button
                 onClick={removeItem01}
                 className={fruitsNames.length > 0 ? "bg-blue-500 text-white p-2 rounded mb-4 w-full" : "hidden"}
 
             >
                 Remove
             </button>
             <button
                 onClick={deleteFruitsItem}
                 className={fruitsNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 w-full" : "hidden"}
             >
                 Remove Last Item
             </button>
             <h1 className={fruitsNames.length > 0 ? "flex" : "hidden"}>Added Items :</h1>
             <ul className={fruitsNames.length > 0 ? "blurred-ul block list-none pl-5 bg-white p-4 max-h-[400px] custom-scroll bg-red-400 overflow-y-scroll rounded shadow" : "hidden"}>
                 {fruitsNames.map((name, index) => (
                     <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name}</li>
                 ))}
                  <button
                 onClick={deleteAll01}
                 className={fruitsNames.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
             >
                 Delete All
             </button>
             </ul>
 
             <h1 className={removedFruitsItems.length > 0 ? "flex" : "hidden"}>Removed Items :</h1>
             <ul className={removedFruitsItems.length > 0 ? "blurred-ul block list-none pl-5 bg-white max-h-[400px] custom-scroll overflow-y-scroll p-4 rounded shadow" : "hidden"}>
                 {removedFruitsItems.map((name, index) => (
                     <li key={index} className="mb-2 p-2 bg-gray-200 rounded">{name} </li>
                 ))}
                  <button
                 onClick={restoreItems01}
                 className={removedFruitsItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
             >
                Restore All
             </button>
             <button
                 onClick={deleteAllItems01}
                 className={removedFruitsItems.length > 0 ? "flex bg-red-500 text-white p-2 rounded mb-4 " : "hidden"}
             >
                Remove From Bin
             </button>
             </ul>
            
         </div>
     )
}