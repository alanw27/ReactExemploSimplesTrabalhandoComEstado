'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
<h1>Oi, {`${name} ${lastname}`}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem nome'
}

export default Title