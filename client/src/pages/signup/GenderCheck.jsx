import React from 'react'

const GenderCheck = () => {
  return (
    <div className='flex'>

        {/* Male Option */}
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-gray-100'>Male</span>
                <input type="checkbox" className='checkbox checkbox-primary'/>
            </label>
        </div>

        {/* Female Option */}
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text text-gray-100'>Female</span>
                <input type="checkbox" className='checkbox checkbox-primary'/>
            </label>
        </div>

    </div>
  )
}

export default GenderCheck