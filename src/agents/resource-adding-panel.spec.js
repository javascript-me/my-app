import {assert} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import ResourceAddingPanel from './resource-adding-panel'

describe('ResourceAddingPanel', () => {
    it('render() is working fine', (done) => {
        let component = mount(<ResourceAddingPanel
            onClose={() => {
                done()
            }}
            onAddedResources={(value) => {
            assert.equal('abc', value)
        }} />)

        component.setState({
            value: 'abc'
        })

        let buttons = component.find('.round-button')
        assert.equal(2, buttons.length)

        buttons.at(0).simulate('click')
        buttons.at(1).simulate('click')
    })
})