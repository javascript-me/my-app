import React from 'react'
import Agents from '../agents/agents'
import CenterDiv from '../css-patterns/center-div/center-div'
import MultipleMedias from '../css-patterns/multiple-medias/multiple-medias'
import DragAndDrop from '../drag-and-drop/drag-and-drop'

export default {
    items: [
        {featureName: 'agents', label: 'Agents', component: <Agents />},
        {featureName: 'center-div', label: 'Center Div', component: <CenterDiv />},
        {featureName: 'multiple-media', label: 'Multiple Media', component: <MultipleMedias />},
        {featureName: 'drag-and-drop', label: 'Drag and Drop', component: <DragAndDrop />}
    ]
}
