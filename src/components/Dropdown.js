import React, {useState}  from 'react'

export const Dropdown = ({options, selected, onSelectedChange}) => {
  const [openDropdown, setOpenDropdown] =useState(false)


const renderedOptions = options.filter((item => item.value !== selected.value )).map((option) => {
  return (
  <div key={option.value} style={{color:`#${option.hex}`}} onClick={() => {onSelectedChange(option)}} className="item">
  {option.label}
  </div>
  );
});





  return (
    <div className="ui form" style={{width: '60%', paddingBottom: '2em'}}>
      <div className="field">
        <label className='label'>
          Select a Color       
        </label>
        <div onClick={() => setOpenDropdown(!openDropdown)}  className={`ui selection dropdown ${ openDropdown ? 'visible active' : ''}`}>
          <div className="text" style={{color: selected ? `#${selected.hex}` : `#${options[0].hex}` }}> 
            {selected.label}         
          </div>
          <i className="dropdown icon">
          <div style={{ width:'max-content'}} className={`menu  ${ openDropdown ? 'visible transition' : ''} `}> 
          {renderedOptions}
          </div>
          </i> 
        </div>
      </div>
    </div>
  );
}

