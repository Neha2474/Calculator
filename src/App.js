import { evaluate } from 'mathjs';
import React, {useState} from 'react'
import './App.css'

const App = () => {
    
    const [value, setValue] = useState('');
    const appendValue = input => setValue(currentValue => currentValue + input);
    const evaluateValue = () => setValue(String(evaluate(value)));

  return (
    <div className="container">
        <div className="calculator">
            <form>
                <div className="display">
                      <input type="text" value={value} readOnly aria-label="Calculator display" />
                </div>
                <div>
                    <input type="button" value="AC" onClick={() => setValue('')} />
                    <input type="button" value="DEL" onClick={() => setValue(currentValue => currentValue.slice(0, -1))} />
                    <input type="button" value="." onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="/" onClick={e => appendValue(e.target.value)} />
                </div> 
                <div>
                    <input type="button" value="7" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="8" onClick={e => appendValue(e.target.value)}/>
                    <input type="button" value="9" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="*" onClick={e => appendValue(e.target.value)} />
                </div>
                <div>
                    <input type="button" value="4" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="5" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="6" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="+" onClick={e => appendValue(e.target.value)} />
                </div>  
                <div>
                    <input type="button" value="1" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="2" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="3" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="-" onClick={e => appendValue(e.target.value)} />
                </div> 
                <div>
                    <input type="button" value="00" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="0" onClick={e => appendValue(e.target.value)} />
                    <input type="button" value="=" className="equal" onClick={evaluateValue} />
                </div> 
            </form>
        </div>
    </div>
  )
}

export default App
