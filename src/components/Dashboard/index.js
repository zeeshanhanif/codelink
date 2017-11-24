import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/python';
import 'brace/theme/tomorrow';
import 'brace/snippets/python';
import 'brace/ext/language_tools';
import { connect } from 'react-redux';
import { CodeActions } from "../../store/actions/index";

class Home extends Component {

    constructor(){
        super();
        this.state = {
            currentCode: ""
        }
    }
    currentCode = "";

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.CodeObj.code);
    // }

    onLoad = () => {
        console.log("On Loaded!!!!!!");
    }

    onChange = (newValue) => {
        this.currentCode = newValue;
        // this.setState({ currentCode: newValue });
    }
    handleRun = () =>{
        setTimeout(() => this.autoresize(document.getElementById('console')), 100);
        this.props.saveCode(this.currentCode);
    }
    autoresize(textarea) {
        textarea.style.height = '0px';     //Reset height, so that it not only grows but also shrinks
        textarea.style.height = (textarea.scrollHeight+10) + 'px';    //Set new height
    }
    render() {
        return (
            <div className="app-container">
                <nav className="navbar navbar-default">
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
                                theme="tomorrow"
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
                                    showLineNumbers: false,
                                    tabSize: 2,
                                    highlightActiveLine: false,
                                    highlightSelectedWord: true
                                }}
                            />
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-8">
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button id="run2" onClick={this.handleRun} className="btn btn-success">Run</button>
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


const mapStateToProps = (state) => {
    return { CodeObj: state.CodeReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveCode: (data) => dispatch(CodeActions.SaveCode(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);