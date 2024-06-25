import {React, useState} from 'react'

let space = document.getElementById("space")

let timesList = {}

const Timer = () => {
    let isOn = false;
    const isTiming = useState(isOn, setOn)

    return (
    <>
        <h1>
            {
                setTimeout(isOn, 1000)
            }
        </h1>
    </>
  )
}

export default Timer