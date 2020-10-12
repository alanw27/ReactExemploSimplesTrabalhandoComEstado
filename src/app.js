'use strict'

import React from 'react'
import Square from './square'
import LikeButton from './like-button'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            color: 'black'
        }
    }
    render(){
        return (
            <div className='container'>
                <Square key={this.state.color} color={this.state.color} />
                {['blue', 'red', 'green'].map((cor) => 
                    <LikeButton handleClick={()=>{ this.setState({color: cor})}} >{cor}</LikeButton>  
                )}
                
            </div>
        )
    }
}

export default App