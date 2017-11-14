import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="app-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="javascript:void(0)">Python Run</a>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>User Code</h4>
                            <div id="container">
                                <div id="editor" className="editor" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4>Output Console</h4>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button id="run2" className="btn btn-success">Run</button>
                                </div>
                            </div>
                            <div style={{ width: '100%', height: '340px' }}>
                                <textarea id="console" autoComplete="off" style={{ height: '100%' }}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Testing Code</h4>
                            <div id="container2">
                                <div id="editor2" className="editor" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;