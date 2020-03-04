import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
    
    
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [postInput,onChangePost]=React.useState('');
  const handleChange=(event)=>{
      onChangePost(event.target.value);
  }
  const handleOpen = () => {
    setOpen(true);

  };
  const Update=()=>{
      console.log(postInput);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='tc'>
      <button type="button" onClick={handleOpen} className='btn btn-danger'>
        Create a New Post
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
      
        <div style={modalStyle} className={classes.paper} >
        
          <h2 id="simple-modal-title tc f2">Enter Post Content</h2>
          <textarea type='text' className='br2 hover-black red' onChange={handleChange} /><br/>
          {/* <p id="simple-modal-description">
            
          </p> */}
          <button type="button"  onClick={Update} className='btn btn-danger grow '>
        Submit
      </button>
          
        </div>
      </Modal>
    </div>
  );
}
