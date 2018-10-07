import React, { Component, PropTypes } from 'react';
import JobStore from '../stores/JobStore';

class Results extends Component {
    constructor() {
        super();

        this.state = {
            results: JobStore.getState().jobs
        }

        this._test = 1;
    }

    componentDidMount() {
        JobStore.listen(this.handleJobStore);
    }

    componentWillUnmount(){

        JobStore.unlisten(this.handleJobStore);
    }

    handleJobStore(store) {
        this.setState({
            results: store.jobs
        });
    }

    render() {
        return (
            <div className="table-responsive table-responsive-data2">
                <table className="table table-data2">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>budget</th>
                            <th>description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map((job, idx) => {
                                return (
                                    <tr className="tr-shadow">
                                        <td>{job.title}</td>
                                        <td>
                                            <span className="block-email">{job.pay}</span>
                                        </td>
                                        <td className="desc">{job.desc}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;
