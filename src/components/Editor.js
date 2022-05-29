import React, { useState } from 'react';
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { queries } from '../data/query'
import copy from "copy-to-clipboard";

const Editor = (props) => {

    const [text, setText] = useState('');
    const [query, setQuery] = useState('');
    const [submitQuery, setSubmitQuery] = useState(0);


    let a = 
    [
        "select * from customers;",
        "select * from customers where contactTitle= 'Owner';",
        "select * from customers where country= 'Argentina';",
        "select * from customers where contactTitle= 'Owner' and city='Mexico D.F.';",
        "select * from customers where city= 'London';",
        "select * from customers where address= 'Cerrito 333';",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(query)
        setSubmitQuery(query);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    function handleClearText() {
        let newText = '';
        setText(newText);
        setQuery('');
    }


    function handleRun() {
        let newText = text;
        console.log(newText);
        setQuery(newText);
        let decider = a.includes(newText)
        console.log(decider);
        let index;
        if (decider) {
            for (let i = 0; i < a.length; i++) {
                if (a[i] === newText) {
                    index = i;
                }
            }
            console.log(index);
            alert("✅Check the Output Section");
        }
        else {
            alert("Please enter a valid query");
        }
        setSubmitQuery(index + 1);
        props.parentData(index + 1);
    }

    function copyToClipboard(){
        let text = "select * from customers;"
        copy(text);
        console.log(text);
        alert(`You have copied the example "${text}"`);
    }



    return (
        <div className='container'>

            <div className='row mt-4'>
                <div className='col-md-6'>
                <div className='row'><h1>Want to type a query?</h1></div>
                <div className='row'><h4>Example:</h4></div>
                <div className='row'><h6 className='text-info'>Click the below text to copy</h6></div>

                <div className='row' onClick={copyToClipboard}>
                <CodeBlock
                text="select * from customers;"
                language="sql"
                theme={atomOneDark}
                customStyle={{
                    height: '40px',
                    width: '300px',
                    margin: '20px 0.75rem',
                    borderRadius: '5px',
                    boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                    fontSize: '0.75rem',
                }}
            /></div>  
                </div>
                <div className='col-md-6'>
                <h2>Query Editor</h2>
                    <div className="input-group mb-1">
                        <button className='btn btn-success fs-4' onClick={handleRun} ><i className="bi bi-play-circle-fill"></i></button>
                        <input type="text" className="form-control bg-dark text-white" value={text} onChange={handleOnChange} />
                        <button className='btn btn-danger' onClick={handleClearText}>Clear</button>
                    </div>
                </div>
                <div className='row mt-5'>
                <h2>Query Arena</h2>
                    <div className='col-md-8 mb-4 '>
                        <CodeBlock
                            text={query}
                            language="sql"
                            theme={atomOneDark}
                            customStyle={{
                                height: '300px',
                                overflowY: 'scroll',
                                margin: '0px 0.75rem',
                                borderRadius: '5px',
                                boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                                fontSize: '0.75rem',
                            }}
                        />
                    </div>
                    <div className='col-md-4'>
                    <h4>Or Select a Random Query!</h4>
                        <div className="list-group ">
                            {queries.map((query, index) => (
                                <button type="button" className="list-group-item list-group-item-action" aria-current="true" key={index} onClick={() => {
                                    setQuery(query.label);
                                    setSubmitQuery(query.value);
                                    props.parentData(query.value);
                                }}>
                                    {query.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor