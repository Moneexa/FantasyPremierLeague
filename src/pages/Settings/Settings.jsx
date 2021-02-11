import React, { useState } from 'react'
import './Settings.css'
import { FormGroup } from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles';
import close from './x-mark.svg'
import { Modal, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#FF2882',
                opacity: 1,
                border: 'border: 1px solid #0F1F4E',
            },
        },
        '&$focusVisible $thumb': {
            color: '#FF2882',
            border: 'border: 1px solid #0F1F4E',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: `17px`,
        border: `1px solid #0F1F4E`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default function Settings() {
    const [_switch, setSwitch] = useState(false)
    const [_switch1, setSwitch1] = useState(false)
    const [_switch2, setSwitch2] = useState(false)
    const [_switch3, setSwitch3] = useState(false)
    const [_switch4, setSwitch4] = useState(false)
    const [_switch5, setSwitch5] = useState(false)
    const [_switch6, setSwitch6] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleChange() {

        _switch ? setSwitch(false) : setSwitch(true)
    }
    function handleChange2() {

        _switch1 ? setSwitch1(false) : setSwitch1(true)
    }
    function handleChange3() {

        _switch2 ? setSwitch2(false) : setSwitch2(true)
    }
    function handleChange4() {

        _switch3 ? setSwitch3(false) : setSwitch3(true)
    }
    function handleChange5() {

        _switch4 ? setSwitch4(false) : setSwitch4(true)
    }
    function handleChange6() {

        _switch5 ? setSwitch5(false) : setSwitch5(true)
    }
    function handleChange7() {

        _switch6 ? setSwitch6(false) : setSwitch6(true)
    }
    
    return (<>
        <Modal show={show} onHide={handleClose} style={{ borderRadius: "100px",  }}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body className="px-5">
                <div className="d-flex flex-column align-items-center justify-content-center mx-md-5 my-3 mx-md-3">
                    <div style={{
                        textAlign: "center",
                        fontSize: "1.86rem",
                        fontFamily:"Rubik",
                        fontWeight:"500",
                        color: "#0F1F4E"
                    }}>Are you sure</div>

                    <div className="mt-5" style={{
                        fontSize: "1.5rem",fontFamily: "Rubik",fontWeight:"lighter",
                        color: "#0F1F4E", textAlign: "center"
                    }}>
                       Are you sure you still want to close your account permanently?
                       
                       </div>
                       <div className="d-flex align-items-center justify-content-center mt-5 ">
                           <Link to="/home">

                           <button className="bg-white text-center mr-3" style={{border: "3px solid #0F1F4E",
                           borderRadius: "26px", 
                           color:"#0F1F4E", 
                           fontFamily:"Rubik", fontSize:"1.2rem",
                           padding:"0.69rem 3.4rem"}}>No</button>
                           </Link>
                           <Link to="/home">

                           <button className="text-white text-center" style={{
                        borderRadius: "26px", 
                        border:"hidden", backgroundColor:"#0F1F4E",
                        fontFamily:"Rubik", fontSize:"1.2rem",
                        padding:"0.69rem 3.4rem"

                           }}>Yes</button>
                           </Link>
                       </div>
                </div>
            </Modal.Body>
        </Modal>
        <div className="d-flex flex-column align-items-start justify-content-center mt-5 main-padding">

            <div className="sett-head text-left text-black my-2">Notifications</div>

            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>I wish to receive newsletters, promotions and news from FPL Play</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch} onChange={handleChange} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch1} onChange={handleChange2} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch2} onChange={handleChange3} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch3} onChange={handleChange4} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch4} onChange={handleChange5} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch5} onChange={handleChange6} name="checkedB" />}

                />
            </div>
            <div className="d-flex align-items-center justify-content-between switch-cont mt-5">

                <div>Lorem Ipsum is simply dummy text of the typesetting industry.</div>
                <FormControlLabel style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
                    control={<IOSSwitch checked={_switch6} onChange={handleChange7} name="checkedB" />}

                />
            </div>

            <div className="warning-row mt-5">
                <img className="px-3 py-sm-5" src={close} onClick={handleShow}/>
                <div className="warning-msg">Force close your account</div>

            </div>
        </div>


    </>)
}