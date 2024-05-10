import React from 'react'

const GenderCheck = ( { onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex'>

        {/* Male Option */}
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='label-text text-gray-100'>Male</span>
                <input type="checkbox" className='checkbox checkbox-primary'
                checked={selectedGender === 'male'}
                onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>

        {/* Female Option */}
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='label-text text-gray-100'>Female</span>
                <input type="checkbox" className='checkbox checkbox-primary'
                checked={selectedGender === 'female'}
                onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheck