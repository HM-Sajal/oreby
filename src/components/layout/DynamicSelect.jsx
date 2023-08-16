import React from 'react';

const DynamicSelect = ({label, options, ...restProps}) => {
  return (
    <>
    <div className='flex items-center gap-x-3.5'>
        <label htmlFor={restProps.id} class="block text-sm lg:text-base font-dm text-normal text-lightText">{label}</label>
        <select {...restProps} class="w-full border border-gray-300 text-lightText text-sm lg:text-base rounded-lg focus:border-black-500 block p-1.5 lg:p-2.5 dark:text-white font-dm text-normal">
            {options.map((option)=>(
               <option key={option.value} value={option.value}>
                 {option.label}
               </option>
            ))}
        </select>
    </div>
    </>
  )
}

export default DynamicSelect