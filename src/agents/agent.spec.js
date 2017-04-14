import {assert} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import Agent from './agent'

describe('Agent', () => {

    let component

    beforeEach(() => {
        let resources = [
            'ubuntu',
            'firefox3',
            'core-duo'
        ]
        component = mount(<Agent resources={resources} />)
    })

    it('addResources() will add more items to resources list', () => {
        assert.equal(3, component.instance().state.resources.length)
        component.instance().updateResources(['a', 'b'])
        assert.equal(5, component.instance().state.resources.length)
        component.instance().updateResources([])
        assert.equal(5, component.instance().state.resources.length)
    })

    it('deleteResource() will remove target resources', () => {
        assert.equal(3, component.instance().state.resources.length)
        component.instance().deleteResource('ubuntu')
        assert.equal(2, component.instance().state.resources.length)
        component.instance().deleteResource('')
        assert.equal(2, component.instance().state.resources.length)
    })

})