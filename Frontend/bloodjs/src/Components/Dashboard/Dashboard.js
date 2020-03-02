import React from 'react';
import './dashboard.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import SimpleModal from './modal'
export default class DashBoard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            blood:''
            
        }

    }
    // componentDidMount(){
    //     axios.post
    // }

     useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        toolbar: {
          minHeight: 128,
          alignItems: 'flex-start',
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
          alignSelf: 'flex-end',
        },
      }));


      



      

    render(){

        const data ={
            "name":"shuvayan",
            "blood" : "B+",
        }
        const ProminentAppBar =()=> {
            const classes = this.useStyles();
          
            return (
              <div className={classes.root} >
                <AppBar position="static" style={{backgroundColor:"#B83227"}}>
                  <Toolbar className={classes.toolbar}>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h5" noWrap>
                      Blood Dashboard
                    </Typography>
                    <IconButton aria-label="search" color="inherit">
                      <SearchIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                      <MoreIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </div>
            );
          }

          const Card = (props) => {
              console.log(props);
              return (
                  
                  <div className="card">
                     <div className="title"> Hey , <b>{props.data.name}</b></div>

                     <div className="cbody">
                         <ul>
                             <li>Blood group : {props.data.blood}</li>
                            {props.data.content &&
                             props.data.content.map( obj => <li>{obj}</li>)
                             }
                         </ul>
                     </div>


                  </div>
              )
          }

          const Post =(props) =>{
              return (
                  <div className="post-outer">
                      <div className="postn"> #Post Number</div>
                      <div className="title" > Username </div>
                      <div className="body"> I had a nice experience donating blood ,  and  i hope to do this again at this location #sudarsanblood</div>
                      <div className="ele">
                         <div>Like</div>
                         <div>Comment</div>
                         <div>Share</div> 
                      </div>
                  </div>
              )
          }

          const dat = {
              "name" : "recent blood donors",
              "content" : ["person1" , "person2" , "person3"]
          }

          const Posts = (props) =>{
              let b =[];
              for ( var i =0; i < 3; i++){
                  b.push(<div><Post/></div>);
              }
              return (
                  <div style={{display:"flex" , flexDirection :"column" }}>
                    {b}
                  </div>
                  
              )
          }
        return(
            <div style={{backgroundColor:'white'}}>
                <ProminentAppBar /> 
                <SimpleModal />
                <div className="content">
                <Card data={data} /> 
                <Posts/>
                <Card data={dat} />
                </div>       

            </div>
        )
    }
}