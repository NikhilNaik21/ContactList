import React from "react";

class Addcontact extends React.Component {
   

        state = {
            name: "",
            email:"",
        };

        add=(e)=>
        {
            e.preventDefault(); //doesnt want page to refresh
            if(this.state.name === "" || this.state.email === "")
            {
                alert("All fields are mandatory");
                return;
            }
            //send data from child to paarent - we have passed state i.e name and email
                this.props.addcontactHandler(this.state);

            // to clear fields
            this.setState({name: "", email: ""});
            // console.log(this.state);
            // console.log("test");
        };
        render(){
        return(
            <div className="ui main">
                    <h2>Add contact</h2>
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                        <label>Name</label>
                        <input type="text" 
                            name="name" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e)=>this.setState({name: e.target.value})}
                            ></input>
                        </div>


                        <div className="field">
                        <label>Email</label>
                        <input type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e)=>this.setState({email: e.target.value})}
                            ></input>
                        </div>
                        <button className="ui button blue" >Add</button>

                    </form>
            </div>
        );
    }  
}
export default Addcontact;
