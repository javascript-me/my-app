import React from 'react'
import CategoryList from './category-list.js'

export default class JobList extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            listData: [
                {
                    region: 'APAC', 
                    openings: [
                        {
                            title: 'Senior Software Engineer (C#.NET)', 
                            priority: 'URGENT', 
                            location: 'Hong Kong',
                            vacancy: 1
                        }, 
                        {
                            title: 'Senior Business Analyst', 
                            priority: 'URGENT', 
                            location: 'Hong Kong',
                            vacancy: 2
                        }
                    ]
                }, 
                {
                    region: 'CHINA', 
                    openings: [
                        {
                            title: 'Senior Software Engineer (JavaScript, Full Stack)', 
                            priority: 'URGENT', 
                            location: 'Shenzhen',
                            vacancy: 5
                        }, 
                        {
                            title: 'SENIOR SOFTWARE ENGINEER (C#, .NET)', 
                            priority: 'URGENT', 
                            location: 'Shenzhen',
                            vacancy: 2
                        }, 
                        {
                            title: 'SENIOR SOFTWARE ENGINEER (JAVASCRIPT, NFP)', 
                            priority: 'MODERATE', 
                            location: 'Shenzhen',
                            vacancy: 1
                        }
                    ]
                }
            ]            
        }
    }

    render () {
        return <div>
            <div>Welcome to job list</div>
            <CategoryList listData={this.state.listData} />
        </div>


    }
}

