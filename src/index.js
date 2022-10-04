import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./style/index.scss";
import {Provider} from "react-redux";
import {storeRedux} from "./redux/store";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeRedux}>
            <App/>
        </Provider>
    </React.StrictMode>
);
