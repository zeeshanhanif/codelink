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
            currentCode: "",
            editors: [{
                id: 0
            }]
        }
    }
    currentCode = "";

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.CodeObj.code);
    // }

    // onLoad = 

    onChange = (newValue) => {
        this.currentCode = newValue;
    }
    handleRun = (id) =>{
        setTimeout(() => this.autoresize(document.getElementById('console'+id)));
        this.setState({ currentCode: this.currentCode });
        this.props.saveCode(this.currentCode);
    }
    autoresize(textarea) {
        textarea.style.height = '0px';     //Reset height, so that it not only grows but also shrinks
        textarea.style.height = (textarea.scrollHeight+10) + 'px';    //Set new height
    }
    
    addEditor = () =>{
        let tempEditors = this.state.editors.slice(0);
        tempEditors.push(
            {id: true}
        );
        this.setState({ editors: tempEditors });
    }
    printEditor = () => {
        return (this.state.editors.map((d,i)=> {
            return (
                <div className="row" key={"editor"+i}>
                <div className="col-lg-12">
                    <h4>User Code</h4>
                    <AceEditor
                        mode="python"
                        theme="tomorrow"
                        name={'ace'+i}
                        className="codeEditor"
                        onLoad={() => {
                            if(this.state.editors.length > 1){
                                let idBtn =  this.state.editors.length - 1;
                                window.setBtnId("run"+idBtn)
                            }
                        }}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        editorProps={{$blockScrolling: true}}
                        value={this.state.currentCode}
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
                            <button id={"run"+i }
                                aceid={'ace'+i}
                                consoleid={'console'+i}
                                onClick={()=>this.handleRun(i)} 
                                className="btn btn-success">
                                Run
                            </button>
                        </div>
                    </div>
                    <div>
                        <textarea readOnly id={'console'+i} className="console" autoComplete="off"></textarea>
                    </div>
                </div>
            </div>)
            })
        )
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
                            <li>
                                <button className="btn btn-primary" 
                                    onClick={this.addEditor}
                                    style={{marginLeft: '30px',marginTop: '9px'}}>
                                    Add Editor
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.printEditor()}
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