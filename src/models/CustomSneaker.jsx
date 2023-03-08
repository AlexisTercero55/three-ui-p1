// import React from 'react';
import { useState, useRef } from 'react';
import PrimiriveScene from './PrimiriveScene';

const CustomSneaker = () => {
    const [mesh, setMesh] = useState('#830C0C');
    const [details, setDetails] = useState('#1F6F53');
    const [inner, setInner] = useState('#ff0000');
    return (
        <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <PrimiriveScene colors={{mesh,details,inner }}></PrimiriveScene>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div className='colorInputWarp' >
                    <input className='colorInput' type="color" id="Details" name="Details"
                           value={details}
                           onChange={(e) => setDetails(e.target.value)} />
                    <label htmlFor="Details">Details</label>
                  </div>

                <div className='colorInputWarp' >
                    <input className='colorInput' type="color" id="Inner" name="Inner"
                            value={inner}
                            onChange={(e) => setInner(e.target.value)} />
                    <label htmlFor="Inner">Inner</label>
                </div>
                 <div className='colorInputWarp' >
                    <input className='colorInput' type="color" id="Mesh" name="Mesh"
                            value={mesh}
                            onChange={(e) => setMesh(e.target.value)} />
                    <label htmlFor="Mesh">Mesh</label>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CustomSneaker;