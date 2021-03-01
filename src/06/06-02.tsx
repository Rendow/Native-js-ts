import React, {ChangeEvent, MouseEvent} from "react";


const callback = ():number => {
    alert('hey')
    return 12;
}

//window.alert(callback,1000)

 export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
       alert(event.currentTarget.name)
    }


     const onNameChanged = () => {
         console.log('name change')
     }

     const focusLost = () => {
         console.log('focus lost')
     }

     const OnAge = (event: ChangeEvent<HTMLInputElement>) =>{
         console.log('age change ' + event.currentTarget.value)
     }

     return <div>
         <input onChange={OnAge} type={"number"}/>

         <textarea onBlur={focusLost} tabIndex={1} onChange={onNameChanged}>Dimych</textarea>

         <button name='del' tabIndex={2} onClick={deleteUser}> x  </button>
         <button name='save' tabIndex={3} onClick={deleteUser}>  x</button>
     </div>

}

