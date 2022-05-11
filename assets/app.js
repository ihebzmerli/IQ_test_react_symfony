// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import {createRoot} from 'react-dom/client';
import React from 'react';
import IqContextProvider from './contexts/IqContext';
import IqList from './components/IqList';

class App extends React.Component {
    render() {
        return (
            <>
                <IqContextProvider>
                    <IqList/>
                </IqContextProvider>
            </>
        );
    }
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
