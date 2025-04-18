import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import Select from 'react-select';
import 'reactjs-popup/dist/index.css';
import { IoIosAddCircle, IoIosCloseCircle } from "react-icons/io";

function AddItemPopup({ addItem, categoryList }) { 
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [availability] = useState('available');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    // set category dropdown
    useEffect(() => {
        setCategories(categoryList.map(categories => {
            return { value: categories, label: categories }
        }));
    }, [categoryList]);

    // handle category selection 
    const handleSelection = (selectedCategory) => {
        setSelectedCategory(selectedCategory); // object
        setCategory(selectedCategory?.value); // get object value as a string
    }

    //overriding styles for the dropdown
    const dropdownStyle = {
        control: (provided) => ({
            ...provided,
            border: '2px solid black', 
            boxShadow: 'none', 
            '&:hover': {
                borderColor: 'black', 
            }
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#A3C1E0' : 'white',
            color: 'black',
            '&:hover': {
                backgroundColor: '#A3C1E0',
            }
        }),
    };

    return (
        <Popup trigger=
            {<div><IoIosAddCircle color='#426276' className='w-10 h-10 cursor-pointer'/></div>} 
            modal nested
            contentStyle={{ backgroundColor: '#ECECEC', borderRadius: '0.5rem', border: '2px solid black' }}  
            overlayStyle={{ backgroundColor: 'rgba(105, 105, 105, 0.5)'}} >
            {
                close => (
                    <div className='modal relative'>
                        <div className='content p-4 '>
                            <h1 className='font-bold text-3xl pb-6'>Add Item</h1>
                            <div className='px-5 py-2'>
                                <input type="text" 
                                    placeholder="Enter Item Name"
                                    className="border-2 border-black-300 focus:border-[#426276] focus:outline-none p-2 rounded-md w-full bg-white" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className='px-5 py-2'>
                                <Select
                                    placeholder="Select Category"
                                    value={selectedCategory}
                                    options={categories}
                                    isClearable={true}
                                    isSearchable={true}
                                    onChange={handleSelection}
                                    styles={dropdownStyle}
                                /> 
                            </div>
                        </div>
                        <div className='actions flex justify-center space-x-4 pb-6 pt-4 font-bold'>
                            <button
                                className="px-6 py-2 bg-[#A3C1E0] rounded-md cursor-pointer hover:bg-[#426276] hover:text-white"
                                onClick={() => {
                                    addItem(name, category, availability);
                                    // reset variables on submit
                                    setName('');
                                    setCategory(null);
                                    setSelectedCategory(null);
                                    close(); 
                                }}>
                                Submit
                            </button>
                            <IoIosCloseCircle 
                                color='#426276' 
                                className='w-10 h-10 absolute top-4 right-4 cursor-pointer' 
                                onClick={() => {
                                    // reset variables on close
                                    setName('');
                                    setCategory(null);
                                    setSelectedCategory(null);
                                    close();
                                }}
                            />
                        </div>
                    </div>
                )
            }
        </Popup>
    );
}
  
export default AddItemPopup;