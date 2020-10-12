'use strict'

import React from 'react'
import Button from './button'

const LikeButton = ({children, handleClick}) => (
<Button handleClick={handleClick} >{children}</Button>
)

export default LikeButton