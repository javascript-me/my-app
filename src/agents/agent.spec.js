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

    it('render() is working fine', () => {
        assert.isNotOk(component.instance().state.visibleResourceAddingPanel)
        assert.equal(0, component.find('.resource-creator').length)

        component.setState({
            visibleResourceAddingPanel: true
        })

        assert.ok(component.instance().state.visibleResourceAddingPanel)
        assert.equal(1, component.find('.resource-creator').length)
    })

    it('openResourceAddingPanel() will set visibleResourceAddingPanel to true', () => {
        assert.isNotOk(component.instance().state.visibleResourceAddingPanel)
        component.instance().openResourceAddingPanel()
        assert.ok(component.instance().state.visibleResourceAddingPanel)
    })

    it('closeResourceAddingPanel() will set visibleResourceAddingPanel to false', () => {
        component.setState({
            visibleResourceAddingPanel: true
        })
        assert.ok(component.instance().state.visibleResourceAddingPanel)
        component.instance().closeResourceAddingPanel()
        assert.isNotOk(component.instance().state.visibleResourceAddingPanel)
    })

    it('addResources() will add more items to resources list', () => {
        assert.equal(3, component.instance().state.resources.length)
        component.instance().addResources('a,b')
        assert.equal(5, component.instance().state.resources.length)
        component.instance().addResources(' ')
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