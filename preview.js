import React from "react";

const Preview = props => {
  const mark = marked(props.editor);
  
  return (
    <div id='preview' className='preview' dangerouslySetInnerHTML={{ __html: mark }}></div>
  )
}

export default Preview;
