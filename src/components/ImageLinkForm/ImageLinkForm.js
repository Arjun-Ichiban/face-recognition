import React from 'react'
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p>
                {'This magic brain will detect faces in your picture'}
            </p> 
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}></input>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib whit bg-dark-red'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm