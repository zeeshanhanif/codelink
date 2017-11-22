import React, { Component } from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';



class Home extends Component {
    onLoad = () => {
        console.log("On Loaded!!!!!! Yooooo");
    }

    onChange = (newValue) => {
        console.log('changed!!!!!!!!', newValue);
        // this.setState({
        //   value: newValue
        // })
      }

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
                        <div className="col-lg-12">
                            <h4>User Code</h4>
                            <AceEditor
                                mode="python"
                                theme="github"
                                name="codeEditor"
                                onLoad={this.onLoad}
                                onChange={this.onChange}
                                fontSize={14}
                                showPrintMargin={true}
                                showGutter={true}
                                highlightActiveLine={true}
                                editorProps={{$blockScrolling: true}}
                                setOptions={{
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    showLineNumbers: true,
                                    tabSize: 2,
                                    highlightActiveLine: false,
                                    highlightSelectedWord: true
                                }}
                            />
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4>Output Console</h4>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button id="run2" className="btn btn-success">Run</button>
                                </div>
                            </div>
                            <div>
                                <textarea readOnly id="console" autoComplete="off"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;