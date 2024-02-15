import React from 'react'

export default function TextField({id,type, htmlfor, onchange, placeholder, label}) {
  return (
    <div>
      <label htmlFor={htmlfor} className='block text-lg font-semibold capitalize text-gray-700 undefined'>{label}</label><br />
      <input
      className="block w-full border-gray-300 rounded-md font-semibold tracking-wider py-2 pl-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type={type}
      id={id}
      onChange={onchange}
      placeholder={placeholder}
      required
        />
    </div>
  )
}
