import React, { Component } from 'react';

const SearchBox = ({value, onChange }) => {
    return <div class="ui grid mb-3">
        <div class="six wide column">
            <div class="ui search">
                <div class="ui icon input">
                    <input type='text'
                     name= 'query'
                     placeholder='search...'
                     value= {value}
                    onChange = {e => onChange(e.currentTarget.value)} tabindex="0" 
                    className="prompt"
                    />
                    <i aria-hidden="true" className="search icon">
                        </i>
                        </div>
                        </div>
                        </div>
                        </div>
    
    // <input
    // type='text'
    // className='form-control my-3'
    // name= 'query'
    // placeholder='search...'
    // value= {value}
    // onChange = {e => onChange(e.currentTarget.value)}
    // >
    // </input>;
}
 
export default SearchBox;