import React from 'react'

export const Alert = (props) => {
    //fn to make first letter capital
    const firstLetterCapital =(word)=> {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{minHeight: '60px'}}>
    {props.alert && <div className={`alert alert-${props.alert.msgType} alert-dismissible fade show`} role="alert">
        <strong>{firstLetterCapital(props.alert.msgType)}:</strong> {props.alert.msg}
    </div>}
    </div>
  )
}
