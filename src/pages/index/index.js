import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Input,Button} from 'antd';
import App from 'components/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <Input/>
    <Button type="primary">尼玛</Button>
    <App />
</div>, document.getElementById('root'));
// registerServiceWorker();
