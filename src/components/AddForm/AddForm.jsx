import React from 'react'
import s from './style.module.css'

export default function AddForm({addPeople}) {
   
  return (
    <form className={s.form_add} onSubmit={(e)=> addPeople(e)}>
        <input type="text" name='name' placeholder=' Name'  />
        <input type="text" name='link' placeholder=' Link to avatar' />
        <select name="sex" id={s.select}>
            <option value="">Sex:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <button className={s.btn_add}>Add</button>
    </form>
  )
}
