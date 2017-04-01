import {assert} from 'chai'
import React from 'react'
import {mount} from 'enzyme'
import ResourceList from './resource-list'

describe('ResourceList', () => {

    it('render() should be working fine', () => {

        let resources = [
            'ubuntu',
            'firefox3',
            'core-duo'
        ]

        let component = mount(<ResourceList resources={resources} onDelete={(item) => {
            assert.equal('ubuntu', item)
        }} />)

        assert.equal(1, component.find('.resource-list').length)
        assert.equal(3, component.find('.delete-icon').length)

        component.find('.delete-icon').at(0).simulate('click')
    })

})


