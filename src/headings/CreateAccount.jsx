import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './CreateAccount.css'
import './SignIn.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Group1 from './Group 1.svg'
import { InputGroup, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['', ''];
}


export default function CreateAccount({ match }) {
    const heading = useStoreState(state => state.obj.heading)
    const changeHeading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const loggedIn = useStoreActions(actions => actions.obj.changeLoggingRed)
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState("");
    const history = useHistory();
    const steps = getSteps();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    const [secName, setSecName] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [add, setAdd] = useState("")
    const [ssn, setSsn] = useState("")

    function handleFirstName(e) {
        setName(e.target.value);
        updateUserData('first_name', e.target.value);
    }
    function handleSecondName(e) {
        setSecName(e.target.value);
        updateUserData('last_name', e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
        updateUserData('email', e.target.value);
        updateUserData('username', e.target.value);
    }
    function handlePass(e) {
        setPass(e.target.value);
        updateUserData('password', e.target.value);
    }
    function handlePass2(e) {
        setPass2(e.target.value);
        updateUserData('password2', e.target.value);
    }
    function handlePhone(e) {
        setPhone(e.target.value);
        updateUserData('phone', e.target.value);
    }
    function handleAdd(e) {
        setAdd(e.target.value);
        updateUserData('address', e.target.value);
    }
    function handleDob(e) {
        setDob(e.target.value);
        updateUserData('dob', e.target.value);
    }
    function handleSsn(e) {
        setSsn(e.target.value)
        updateUserData('ssn', e.target.value);

    }
    const handleNext = () => {

        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    function renderTooltip(props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                We do not collect or store your SSN. For individual verification via SilaMoney, and to ensure the user is who they say they are, we need to verify it per DFS LAWS. FPL PLAY will not have access or store Your SSN
            </Tooltip>
        );
    }

    useEffect(() => {
        changeHeading("")
        console.log(match.path)

    }, [])
    let userData = {
    consent: false,
   };

   function updateUserData(test, value){
    userData[test] = value;
   }

    const createAccount = () => {
        axios.post('http://localhost:8000/api/register/', userData)
            .then(res => {
                if (res.status == 201) {
                    loggedIn(true);
                    history.push('/');
                }
            }).catch((error) => {
                for (const [key, value] of Object.entries(error.response.data)) {
                    setErrors(value[0]);
                }
        });
    }
    function handleSubmit1(e) {
        e.preventDefault()
        loggedIn(true)

        console.log("data enrered")
    }
    function handleSubmit2(e) {
        e.preventDefault()
        handleNext()
        console.log("data entered")
    }
    return (<>

        <div className="d-flex flex-column justify-content-center align-items-center signin-form p-5">
            <div className="account-heading text-center text-white">Create Your Account</div>
            <div className="py-3 px-2 create-account-para text-center">
                You are just a step away to enter the gaming experience, Create your account now and get started
            <br />
            Already have an account? <Link to="/signin"> Sign-in </Link> instead
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center " style={{ margin: "-1rem -1rem 15rem -1rem" }}>
                <div className={`${classes.root} bg-transparent`}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                  <div>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                          <div className="d-flex align-items-center justify-content-center button-row">
                                {
                                    activeStep === steps.length - 1 || activeStep === steps.length
                                        ? <>
                                        <div className={classes.instructions}>
                                             <form className="d-flex flex-column align-items-center justify-content-center" onSubmit={
                                                    (e) => {
                                                        handleSubmit1(e)
                                                        createAccount()
                                                        history.push("/home");


                                                    }

                                                }
                                                >
                                                    <div className="d-flex align-items-center justify-content-center input-row">
                                                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                                                          value={dob} onChange={handleDob} type="date"
                                                            required
                                                            name="dob"
                                                            placeholder="Date of birth" />
                                                        <InputGroup className="input-bar py-0 w-100" style={{ maxWidth: "50%" }}>
                                                            <FormControl
                                                                className="text-center text-white ssnholder"
                                                                placeholder="SSN"
                                                                aria-label="SSN"
                                                                required
                                                                type="number" name="ssn"
                                                                aria-describedby="basic-addon2"
                                                                style={{
                                                                    backgroundColor: "transparent",
                                                                    border: "hidden"
                                                                }} maxLength="9" onInput={(e) => {
                                                                    let maxNum = 9;
                                                                    if (e.target.value.length > maxNum) {
                                                                        e.target.value = e.target.value.slice(0, maxNum);
                                                                    }
                                                                }}

                                                                value={ssn} onChange={handleSsn}

                                                            />
                                                            <InputGroup.Append>
                                                                <OverlayTrigger
                                                                    placement="right"
                                                                    delay={{ show: 250, hide: 400 }}
                                                                    overlay={renderTooltip}
                                                                >
                                                                    <InputGroup.Text id="basic-addon2" style={{
                                                                        backgroundColor: "transparent",
                                                                        border: "hidden"
                                                                    }}
                                                                    >
                                                                        <img src={Group1} />
                                                                    </InputGroup.Text>
                                                                </OverlayTrigger>
                                                            </InputGroup.Append>
                                                        </InputGroup> 
                                                    </div>
                                                    <input className="text-center text-white input-bar mt-3 w-100"
                                                        style={{ maxWidth: "27rem" }}
                                                        value={add} onChange={handleAdd} name="address"
                                                        required
                                                        placeholder="Your Address" />
                                                    <div className="d-flex align-items-center justify-content-center input-row mt-3">
                                                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                                                            value={phone} onChange={handlePhone}
                                                            type="number" name="phone"
                                                            placeholder="CellPhone Number" />

                                                        <input className="text-center text-white input-bar"
                                                            required name="pass"
                                                            value={pass} onChange={handlePass}
                                                            placeholder="Password" type="password" />
                                                    </div>
                                                    <div className="form-check w-100 mt-3" style={{ maxWidth: "27rem" }}>
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                                            required
                                                        />
                                                        <label className="form-check-label text-white text-left check-info" htmlFor="flexCheckDefault">
                                                            By checking this box, you have read and understand the <Link to="/privacy-policy">Privacy Policy</Link>, accept our <Link to="/blank">terms and conditions</Link>, agree to have your identity information verified with the issuer or official record number.
                                                        </label>
                                                    </div>
                                                    <div className="form-check w-100 mt-3" style={{ maxWidth: "27rem" }}>
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />

                                                        <label className="form-check-label text-white text-left check-info" htmlFor="flexCheckDefault">
                                                            By checking the box, you acknowledge that the legal age for internet and mobile gaming is 21 and that you are prohibited from allowing any other person to access or use your internet and mobile gaming account
                                                        </label>
                                                    </div>
                                                    <div className="button-rows">
                                                        <Button variant="contained" type="button" className="mr-3 buttonNext" color="primary" onClick={handleBack}>
                                                            Back
                                                        </Button>
                                                        <Button variant="contained" type="submit" color="primary" className="buttonNext">
                                                            Create Account
                                                            </Button>
                                                    </div>
                                          </form>
                                        </div>
                                       </>
                                      : 
                                      <>
                                            <form className="d-flex flex-column align-items-center justify-content-center" onSubmit={
                                                (e) => {
                                                    handleSubmit2(e)
                                                }
                                            }>
                                               <div className="d-flex align-items-center justify-content-center input-row">
                                                    <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                                                        value={name} onChange={handleFirstName}
                                                        name="firstName"
                                                        required
                                                        placeholder="First Name" />
                                                    <input className="text-center text-white input-bar"
                                                        name="secondName"
                                                        required
                                                        ref={register({ required: true, maxLength: 20 })}
                                                        value={secName} onChange={handleSecondName}
                                                        placeholder="Second Name" />

                                               </div>
                                               <input className="text-center text-white input-bar mt-3 w-100"
                                                    name="email" type="email"
                                                    required
                                                    value={email} onChange={handleEmail}
                                                    placeholder="Your Email Address" />

                                               <Button variant="contained" type="submit" color="primary" className="buttontNext">
                                                    Next
                                               </Button>
                                            </form>
                                      </>
                                errors:
                                {JSON.stringify(errors)}
                             }
                           </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    </>)

}



