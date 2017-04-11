import React from 'react'
import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

export default [
    {label: 'Agents', url: 'agents', component: <Agents />},
    {label: 'Center Div', url: 'center-div', component: <CenterDiv />},
    {label: 'Multiple Media', url: 'multiple-media', component: <MultipleMedias />}
]