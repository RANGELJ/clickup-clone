import React from 'react'
import ReactDOM from 'react-dom'
import PageWithToolbars from './atoms/PageWithToolbars'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <PageWithToolbars
            leftToolbarWidth={200}
            topToolbarHeight={60}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
