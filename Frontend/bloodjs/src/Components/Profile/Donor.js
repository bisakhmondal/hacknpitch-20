import React from 'react';
import './Profile.css'
class Donor extends React.Component{
    constructor(){
        super();
        this.state={
            contact:'',
            age:'',
            blood:'',
            issue:'',
            error:""
        }
    }
    onClickChange=(name)=>(event)=>{
        event.preventDefault();
        // const name = event.target; 
        this.setState({[name]:event.target.value});
    }
    contactValidate = (phoneDetails) => {
        console.log(typeof phoneDetails)
        console.log(phoneDetails.length)
        if(phoneDetails!==10)
        {
            this.setState({error:"Please provide a valid phone number"})
            return 0
        }
        return 1
    }
    validateBlood = (bloodGrp) =>
    {
        const bloods = ['O+','O-','B+','B-','A+','A-','AB+','AB-'];
        for(let i=0;i<8;i++)
        {
            if(bloods[i] === bloodGrp)
            {
                return "";
                
            }
        }
        return "Please enter a valid blood group"
    }
    validate=(e)=> {
        e.preventDefault();
        const {contact,age,blood,issue} = this.state;
        if(!contact || !age || !blood )
        {
            this.setState({error:"Fill up the details"})
            return false
        }
        if(!this.contactValidate(contact.length))
        {
            
            return false
        }
        if(age<18)
        {
            this.setState({error:"Your age must be more than 18 years"})
            return false
        }
        if(!this.validateBlood(blood))
        {
            this.setState({error:this.validateBlood(blood)})
            return false
        }
        if(!issue)
        {
            this.setState({error:"You need to consult our physician to be a donor"});
            return false
        }
        return true;
    }
    render(){
        console.log(this.state)
    return(
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZV3dhZWKI_VKZ7uOq9ojQ2OWfx5eMHM51AOeliwmCQsUSVcTu" alt="rocket_contact"/>
            </div>
            <form>
                <h3 style= {{color:'black', padding:'0.8em'}}>Dear Donor</h3> 
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
                            <input type="submit" name="btnSubmit" className="btnContact" value="Update" onClick={this.validate} />
                        </div>
                        {console.log(this.state.error)}
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