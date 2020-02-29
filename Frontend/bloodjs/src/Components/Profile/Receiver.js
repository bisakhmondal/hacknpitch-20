import React from 'react';
import './Profile.css'
class Receiver extends React.Component{
    constructor(){
        super();
        this.state={
            contact:'',
            age:'',
            blood:'',
            issue:''
        }
    }
    onClickChange=(name)=>(event)=>{
        event.preventDefault();
        // const name = event.target; 
        this.setState({[name]:event.target.value});
    }

    render(){
        console.log(this.state)
    return(
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZV3dhZWKI_VKZ7uOq9ojQ2OWfx5eMHM51AOeliwmCQsUSVcTu" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3 style= {{color:'black', padding:'0.8em'}}>Dear Receiver</h3> 
                <h3 >Please Update your Profile</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="number" name="txtName" className="form-control" placeholder="Contact Number"  onChange={this.onClickChange('contact')}/>
                        </div>
                        <div className="form-group">
                            <input type="number" name="txtEmail" className="form-control" placeholder="Age"  onChange={this.onClickChange('age')} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Blood Group"  onChange={this.onClickChange('blood')} />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Update" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Any Health Related Issue *" style={{width: "100%", height: "150px"}} onChange={this.onClickChange('issue')} ></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
    );
    }
}

export default Donor;