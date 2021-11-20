import React, { useState } from 'react'


export const ControllerChat = () => {
    const [text, setText] = useState('')
    
    const handleChangeText = (e) => {
       
        setText(e.target.value)

    
}

    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log(e);

      
    } 

    return (
        <div>
            <form onSubmit={handleSendMessage}>
                <input type='text' name='text' value={text} onChange={handleChangeText}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
