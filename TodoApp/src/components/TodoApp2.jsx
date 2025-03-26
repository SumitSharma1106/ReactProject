import React, { useState } from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'

const TodoApp2 = () => {
  const [inputField, setInputField] = useState("")
  const [listItem, setListItem] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleChange = (e) => {
    setInputField(e.target.value)
  }

  const handleAddItem = () => {
    if (inputField.trim() === "") return
    const cryptoRando = crypto.randomUUID()
    setListItem([...listItem, { name: inputField, id: cryptoRando }])
    setInputField("")
  }

  const handleDeleteItem = (id) => {
    setListItem(listItem.filter((item) => item.id !== id))
  }

  const handleEditItem = (id) => {
    const itemToEdit = listItem.find((item) => item.id === id)
    setInputField(itemToEdit.name)
    setEditIndex(id)
  }

  const handleSaveItem = () => {
    const updatedList = listItem.map((item) =>
      item.id === editIndex ? { ...item, name: inputField } : item
    )
    setListItem(updatedList)
    setInputField("")
    setEditIndex(null)
  }

  return (
    <>
      {/* Container */}
      <div className='h-[100vh] bg-slate-800 flex justify-center items-center'>
        {/* Todo App Container */}
        <div className='bg-black shadow-lg shadow-slate-100 w-[40vw] p-4 rounded-xl inset-shadow-slate-200 ring-2 ring-slate-300'>
          <h1 className='text-center text-4xl font-bold text-white'>Todo App</h1>

          {/* Input Box */}
          <div className='flex p-8 gap-10'>
            <input
              type="text"
              value={inputField}
              className='bg-white w-[85%] text-3xl rounded-full ps-4 p-2'
              placeholder='Enter your task'
              onChange={handleChange}
            />
            <button
              className='bg-red-700 w-[20%] text-white font-bold rounded-full'
              onClick={editIndex !== null ? handleSaveItem : handleAddItem}
            >
              {editIndex !== null ? "Edit" : "Add"}
            </button>
          </div>

          {/* List Container */}
          {listItem.length > 0 && (
            <>
              <h3 className='text-2xl text-white border-b-1 border-white pb-4 font-semibold'>Todo List:</h3>
              <ul className='text-white pt-4 flex flex-col gap-4 text-2xl max-h-80 overflow-y-auto'>
                {listItem.map((listValue) => (
                  <li
                    className='border-2 p-2 flex justify-between'
                    key={listValue.id}
                  >
                    {/* List Value */}
                    <p>{listValue.name}</p>

                    {/* Edit and Delete Icons */}
                    <p className='flex gap-2'>
                      <MdModeEdit
                        className='hover:text-blue-600 hover:shadow-xl hover:shadow-blue-400 cursor-pointer'
                        onClick={() => handleEditItem(listValue.id)}
                      />
                      <MdDelete
                        className='hover:text-red-600 hover:shadow-xl hover:shadow-red-400 cursor-pointer'
                        onClick={() => handleDeleteItem(listValue.id)}
                      />
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default TodoApp2
