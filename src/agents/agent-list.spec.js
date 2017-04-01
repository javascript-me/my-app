import {assert} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import AgentList from './agent-list'

describe('AgentList', () => {
    it('render() is working fine', () => {
        let component = mount(<AgentList />)
        assert.equal(2, component.find('.agent-item').length)
    })
})