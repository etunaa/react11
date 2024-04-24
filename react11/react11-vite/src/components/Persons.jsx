import {Component} from "react";
import Person from "./Person";

class Persons extends Component{
    constructor(){
        super();
        this.state={
            showPersons:true,
        };
        this.togglePersonsHandler=this.togglePersonsHandler.bind(this); 
    }
    componentDidUpdate(){
        console.log("Update");
        if(!this.props.persons.length){
            console.error("No Users Provided");
        }
    }

    togglePersonsHandler(){
        console.log("This", this);
        this.setState((prevState)=>{
            return {showPersons: !prevState.showPersons};
        });
    }
    handlePersonDelete(id){
        this.props.deleteClicked(id);
    }

    render(){
        const personsList=this.props.persons.map((person)=>{
            return(
                <Person
                key={person.id}
                name={person.name}
                id={person.id}
                deleteClicked={(id)=>this.handlePersonDelete(id)}
                />
            );
        });
        return(
            <>
            <button onClick={this.togglePersonsHandler}>
                {this.state.showPersons ?"Hide Persons":"Show Persons"}
            </button>
            <ul>{this.state.showPersons && personsList}</ul>
            </>
        );
    }

}

export default Persons;