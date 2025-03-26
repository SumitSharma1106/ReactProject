import React, { useState } from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'

const TodoApp = () => {

  // Input a data
  const [inputField, setInputField] = useState("")
  // List of a data
  const [listItem, setListItem] = useState([])
  // Edit list using index
  const [editIndex, setEditIndex] = useState(null)

  // Input a value for list
  const handleChange = (e) => {
    setInputField(e.target.value)
  }

  // Add a list of a list container
  const handleAddItem = () => {
    if (inputField.trim() === "") return
    setListItem([...listItem, inputField])
    setInputField("")

  }

  // Delete a list of a list container
  const handleDeleteItem = (i) => {
    setListItem(listItem.filter((_, ind) => i !== ind))
  }

  // Edit a index of a list your want
  const handleEditItem = (i) => {
    setInputField(listItem[i])
    setEditIndex(i)
  }

  // Save a list if it is edit mode
  const handleSaveItem = () => {
    const updateListItem = [...listItem]
    updateListItem[editIndex] = inputField
    setListItem(updateListItem)
    setInputField("")
    setEditIndex(null)
  }

  return (
    <>
      {/* Container  */}
      <div className='h-[100vh] bg-slate-800 flex justify-center items-center'>

        {/* Todo App Container */}
        <div className='bg-black shadow-lg shadow-slate-100 w-[40vw] p-4 rounded-xl inset-shadow-slate-200 ring-2 ring-slate-300'>

          <h1 className='text-center text-4xl font-bold text-white'>Todo App</h1>

          {/* Input Box */}
          <div className='flex p-8 gap-10'>
            <input
              type="text"
              value={inputField}
              className='bg-white w-[85%] text-3xl rounded-full ps-4 p-3' 
              placeholder='Enter your task '
              onChange={handleChange} />
            <button
              className='bg-red-700 w-[20%] text-white font-bold rounded-full'
              onClick={editIndex !== null ? handleSaveItem : handleAddItem}>
              {
                editIndex !== null ? "Edit" : "Add"
              }
            </button>
          </div>

          {/* List Container */}
          {
            listItem && listItem.length > 0 && (
              <>
                <h3 className='text-2xl text-white border-b-1 border-white pb-4 font-semibold'>Todo List are:</h3>
                <ul className='text-white pt-4 flex flex-col gap-4 text-2xl max-h-80 overflow-y-auto'>
                  {
                    // listItem for insert list in todoList
                    listItem.map((listValue, index) => (

                      <li
                        className=' border-2 p-2 flex justify-between'
                        key={index}>

                        {/* List Value */}
                        <p>{listValue}</p>

                        {/* Edit and Delete Icon */}
                        <p className='flex gap-2'>
                          <MdModeEdit
                            className='hover:text-blue-600 hover:shadow-xl hover:shadow-blue-400 cursor-pointer' onClick={() => handleEditItem(index)} />
                          <MdDelete
                            className='hover:text-red-600 hover:shadow-xl hover:shadow-red-400 cursor-pointer' onClick={() => handleDeleteItem(index)} />
                        </p>
                      </li>

                    ))
                  }
                </ul>
              </>
            )
          }

        </div>
      </div>
    </>
  )
}

export default TodoApp;
