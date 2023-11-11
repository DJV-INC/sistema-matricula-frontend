import React from 'react'
import './Select.css'

export default function Select({state, setState, children, icon, placeholder = "Selecione"}) {
   return (
      <div className='select-container'>
         <select value={state} onChange={(e) => setState(e.target.value)} name="filter" id="filter">
          <option value="" selected>{placeholder}</option>
            {children}
          </select>
         <label for="filter" class="material-symbols-rounded select-icon">{icon}</label>
      </div>
   )
}
