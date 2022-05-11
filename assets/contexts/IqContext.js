import React, {createContext} from 'react';

export const IqContext = createContext();
class IqContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iqs: [
                {task: 'haha hello'}
            ],
        };
    }

    //create
    createIq(){

    }

    //read
    readIq(){

    }

    //update
    updateIq(){

    }
    //delete
    deleteIq(){

    }

    render() {
        return (
            <IqContext.Provider value={{
                ...this.state,
                createIq: this.createIq.bind(this),
                readIq: this.readIq.bind(this),
                updateIq: this.updateIq.bind(this),
                deleteIq: this.deleteIq.bind(this),

            }}>
                {this.props.children}
            </IqContext.Provider>
        );
    }
}

export default IqContextProvider;