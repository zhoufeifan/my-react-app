import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Input,Button} from 'antd';
// const App = require('terrible-components');
import {Form,SelectRow,InputRow} from 'terrible-components';
// import App1 from 'components/App';
// console.log(App1);
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <Form>
        <SelectRow
         name="nima"
         title="尼玛"
         options={[{value:"1",label:'hh'},{value:"2",label:'ooo'}]}
        ></SelectRow>
    </Form>
    <Input/>
    <Button type="primary">尼玛</Button>
    {/* <App/> */}
</div>, document.getElementById('root'));
// registerServiceWorker();
