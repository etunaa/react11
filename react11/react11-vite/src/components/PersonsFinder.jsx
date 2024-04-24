import { Component } from "react";
import {PersonsList} from "./PersonsList"
import Persons from "./Persons";

class PersonsFinder extends Component{
    constructor(){
        super();
        this.state={
            filteredPersons:[],
            searchTerm:"",
        };
    }

    componentDidMount(){
    console.log("PersonsFinder Component Mounted");
    this.setState({filteredPersons:PersonsList});
    }

    componentDidUpdate(provProps,prevState){
        if(prevState.searchTerm !==this.state.searchTerm){
            this.setState({
                filteredPersons: PersonsList.filter((person)=>
                    person.name
                    .toLowerCase
                    .includes(this.state.searchTerm.toLowerCase())
                ),
            });
        }
    }

    searchHandler(event){
        this.setState({searchTerm:event.target.value});
    }

    handlePersonDelete(id){
        console.log(id);
        this.setState({
            filteredPersons:this.state.filteredPersons.filter(
                (person)=>person.id !==id
            ),
        });
    }

    render(){
        return(
            <>
            <div>
                <br/>
                <input onChange={this.searchHandler.bind(this)} type="search"/>
                <br/>
                <Persons
                deleteClicked={(id)=>this.handlePersonDelete(id)}
                persons={this.state.filteredPersons}
                />
            </div>
            </>
        );
    }
}

export default PersonsFinder;