import {assert} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import ResourceAddingPanel from './resource-adding-panel'

describe('ResourceAddingPanel', () => {

    it('render() is working fine', () => {
        let component = mount(<ResourceAddingPanel
            updateResources={(value) => {

            }}
            />)

        component.setState({
            value: 'abc',
            visibleResourceAddingPanel: true
        })

        let buttons = component.find('.round-button')
        assert.equal(2, buttons.length)

        buttons.at(0).simulate('click')
        buttons.at(1).simulate('click')
    })

    it('changeText() will set a state value', () => {
        let component = mount(<ResourceAddingPanel />)
        let instance = component.instance()
        assert.equal('', instance.state.value)
        instance.changeText({target: {
            value: 'a'
        }})
        assert.equal('a', instance.state.value)
    })

    it('containsChild() can be access', () => {
        let host = {}
        assert.ok(ResourceAddingPanel.containsChild(host, host))
        assert.isNotOk(ResourceAddingPanel.containsChild(host, null))
        assert.isNotOk(ResourceAddingPanel.containsChild(null, host))

        let itsChild = {
            parentNode: host
        }

        assert.ok(ResourceAddingPanel.containsChild(host, itsChild))

        let otherChild = {
            parentNode: {}
        }

        assert.isNotOk(ResourceAddingPanel.containsChild(host, otherChild))
    })

    it('addResources() will trigger event', () => {
        let component = mount(<ResourceAddingPanel
            updateResources={(value) => {

            }}
        />)
        component.setState({
            value: 'abc'
        })
        let instance = component.instance()
        instance.addResources()
    })

    it('trigger change event from input-field', () => {
        let component = mount(<ResourceAddingPanel />)
        component.setState({
            value: 'abc',
            visibleResourceAddingPanel: true
        })

        let instance = component.instance()
        assert.equal('abc', instance.state.value)
        let input = component.find('.input-field')
        input.simulate('change', {target: {value: 'ddd'}})
        assert.equal('ddd', instance.state.value)
    })

})