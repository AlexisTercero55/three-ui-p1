// import {Canvas} from '@react-three/fiber';
// import {OrbitControls, useGLTF} from '@react-three/drei'

import { useState, useRef } from 'react'
import './App.css'// just css for wrapper and its content - no threejs
import PrimiriveScene from './models/PrimiriveScene'

function App() {

  const [mesh, setMesh] = useState('#000000');
  const [details, setDetails] = useState('#98d2be');
  const [inner, setInner] = useState('#ff0000');

  return (
    <div className="App">
        <h1 className="title outOffset">Made with ❤ by <a href="https://www.instagram.com/uri.sab/">&#64;Uri.sab</a></h1>
      <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <PrimiriveScene colors={{mesh,details,inner }}></PrimiriveScene>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>

                    <input type="color" id="Details" name="Details"
                           value={details}
                           onChange={(e) => setDetails(e.target.value)} />
                    <label htmlFor="Details">Details</label>
                  </div>

                <div>
                    <input type="color" id="Inner" name="Inner"
                            value={inner}
                            onChange={(e) => setInner(e.target.value)} />
                    <label htmlFor="Inner">Inner</label>
                </div>
                 <div>
                    <input type="color" id="Mesh" name="Mesh"
                            value={mesh}
                            onChange={(e) => setMesh(e.target.value)} />
                    <label htmlFor="Mesh">Mesh</label>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default App
