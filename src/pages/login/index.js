import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'components/Input';
// import {Input,Button} from 'antd';
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getDate = ()=> {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                console.log('nima');
                resolve()
            },1000);
        });
    };

    async componentDidMount (){
        await this.getDate();
        await this.getDate();
    }

    render() {
        return (
            <div className="page-content">
                <Input/>
            </div>
        );
    }
}

ReactDOM.render(<Example/>, document.getElementById('root'));