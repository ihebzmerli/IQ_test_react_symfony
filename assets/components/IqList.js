import React, {useContext} from 'react';
import {IqContext} from '../contexts/IqContext';

function IqList() {
    const context = useContext(IqContext);

    return (
        <div>
            {context.iqs.map(todo => (
                <div>{todo.task}</div>
            ))}
        </div>
    );
}

export default IqList;