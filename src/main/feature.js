import React from 'react'
import Menu from './menu'

export default class Feature extends React.Component {

    render () {
        let result = Menu.find((item) => {
            return item.url === this.props.match.params.featureName
        })
        return <div>{result.component}</div>
    }

}