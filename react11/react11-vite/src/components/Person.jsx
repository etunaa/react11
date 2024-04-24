import { Component} from "react";

class Person extends Component{
    timeoutID;

    componentDidMount(){
        this.timeoutID=setInterval(()=>{
            console.log("mount Person");
        },1000);
    }

    componentDidUpdate(provProps, prevState){}
    clearCash(){
        clearTimeout(this.timeoutID);
        clearInterval(this.timeoutID2);
    }

    componentWillUnmount(){
        this.clearCash();
    }

    render(){
        return(
            <li>
                {this.props.name}
                <button onClick={()=>this.props.deleteClicked(this.props.id)}>
                    Delete
                </button>
            </li>
        );
    }
}
export default Person;
