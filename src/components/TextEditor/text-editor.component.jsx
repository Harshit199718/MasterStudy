import React, { Component } from 'react'
import './text-editor.styles.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser'

export class TextEditor extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <CKEditor
                    // style={{height:'200px'}}
                    editor={ ClassicEditor }
                    data=""
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                        editor.editing.view.change(writer => {
                            writer.setStyle(
                              "height",
                              `${!this.props.height?"200px":this.props.height}`,
                              editor.editing.view.document.getRoot()
                            );
                            writer.setStyle(
                                "font-size",
                                `${!this.props.fontSize?"2em":this.props.fontSize}`,
                                editor.editing.view.document.getRoot()
                              );
                          });
                    } }
                    onChange={ ( event, editor ) => {
                        // const data = editor.getData();
                        // console.log( { event, editor, data } );
                        {
                            this.props.setAttachments&&
                            this.props.setAttachments({attachments:ReactHtmlParser(editor.getData())})
                        }
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        )
    }
}

export default TextEditor
