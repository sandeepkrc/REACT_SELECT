import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

export default class First extends Component {
    
    constructor(props){
        super(props)
        this.state={
            selectOptions:[],
            value:[]
            //  id:"",
            //  name:""
        }
    }


    async getOptions(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = res.data


        

        const options = data.map(d=>({
            "value" : d.id,
            "label" :d.name
        }))



        console.log("see the value data ");
        console.log(data);
        this.setState({selectOptions: options})
    }

 
    handleChange(e){
        // this.setState({id:e.value,name:e.label})
        this.setState({value:e})
    }


    componentDidMount(){
        this.getOptions()
    }






    render() 
    
    
    {
        
        return (
            <div>
               <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} isMulti  />
               {
           this.state.value === null ? "" : this.state.value.map(v => <h4>{v.label}</h4>)
        }
               <p>
                   {/* you selelct <strong>{this.state.name} </strong> and {this.state.id} */}
               </p>
                
            </div>
        )
    }
}
