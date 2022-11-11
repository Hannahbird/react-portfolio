import React from 'react';
import resume from '../../assets/documents/hannahBrownsonResume.docx'

function Resume() {

    return (
        <div>
            <embed src={resume} type='application/pdf' width='100%' height='800'/>
        </div>
    );
}

export default Resume;