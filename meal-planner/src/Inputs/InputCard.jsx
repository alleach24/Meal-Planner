import React, { useState } from 'react'

export default function InputCard(props) {

    
    return (
        <div>
            <h2>Input</h2>

            <form>
                <input type="checkbox" id="Monday" name="Monday" value="Monday"/>
                <label for="Monday">Monday</label> <br/>
                <input type="checkbox" id="Tuesday" name="Tuesday" value="Tuesday"/>
                <label for="Tuesday">Tuesday</label> <br/>
                <input type="checkbox" id="Wednesday" name="Wednesday" value="Wednesday"/>
                <label for="Wednesday">Wednesday</label> <br/>
                <input type="checkbox" id="Thursday" name="Thursday" value="Thursday"/>
                <label for="Thursday">Thursday</label> <br/>
                <input type="checkbox" id="Friday" name="Friday" value="Friday"/>
                <label for="Friday">Friday</label> <br/>
                <input type="checkbox" id="Saturday" name="Saturday" value="Saturday"/>
                <label for="Saturday">Saturday</label> <br/>
                <input type="checkbox" id="Sunday" name="Sunday" value="Sunday"/>
                <label for="Sunday">Sunday</label> <br/>

                <input type="button" value="Submit" onClick={props.submit}/>
            </form>
        </div>
  )
}
