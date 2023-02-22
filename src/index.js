import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from "./behavior/store";
import HomePage from "./components/pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from './components/pages/NotFoundPage';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
