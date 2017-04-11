import React from 'react'
import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'

export default {
    items: [
        {label: 'Agents', featureName: 'agents', component: <Agents />},
        {label: 'Center Div', featureName: 'center-div', component: <CenterDiv />},
        {label: 'Multiple Media', featureName: 'multiple-media', component: <MultipleMedias />}
    ]
}
