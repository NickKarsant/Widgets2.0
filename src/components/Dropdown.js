import React, {useState, useEffect, useRef}  from 'react'

export const Dropdown = ({options, selected, onSelectedChange}) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [currentOption, setCurrentOption] = useState(options[0])
  const ref = useRef();


  const makeSelection = (option) => {
    onSelectedChange(option)
    setCurrentOption(option)
    setOpenDropdown(!openDropdown)
  }

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)){
        return;
      }
      setOpenDropdown(false)
    };

    document.body.addEventListener("click", onBodyClick);
  
      return () => {document.body.removeEventListener('click', onBodyClick)}

    }, []);


const renderedOptions = options.filter((item => item.value !== selected.value )).map((option) => {
  return (
  <div key={option.value} style={{color:`#${option.hex}`}} onClick={() => {makeSelection(option)}} className="item">
  {option.label}
  </div>
  );
});



  return (
    <div className="ui form" ref={ref}  style={{width: '60%', paddingBottom: '2em'}}>
      <div className="field">
        <label className='label'>
        {currentOption.hex  ? 'Select a Color' : 'Select a Language'}
        </label>
        <div  onClick={() => {setOpenDropdown(!openDropdown)}  }  className={`ui selection dropdown ${ openDropdown ? 'visible active' : ''}`}>
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

       
      <p style={{color: `#${currentOption.hex}` }}> {currentOption.hex  ? `The text color is ${currentOption.value}.` : `The language is ${currentOption.label}.`}   </p>
  

    </div>
  );
}

