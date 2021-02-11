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
let userData = {
    consent: false,
};

function updateUserData(test, value){
    userData[test] = value;
}

function GetStepContent(stepIndex) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    const [secName, setSecName] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [add, setAdd] = useState("")
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

    switch (stepIndex) {
        case 0:
            return <>
                <form className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center input-row">
                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"

                            value={name} onChange={handleFirstName}
                            placeholder="First Name" />
                        <input className="text-center text-white input-bar"
                            value={secName} onChange={handleSecondName}
                            placeholder="Second Name" />

                    </div>
                    <input className="text-center text-white input-bar mt-3 w-100"
                        value={email} onChange={handleEmail}
                        placeholder="Your Email Address" />
                </form>
            </>;
        case 1:
            return <>
                <form className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center input-row">
                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                            value={pass} onChange={handlePass}
                            placeholder="Password" type='password'/>
                        <input className="text-center text-white input-bar"
                            value={pass2} onChange={handlePass2}
                            placeholder="Repeat Password" type='password'/>

                    </div>
                    <input className="text-center text-white input-bar mt-3 w-100"
                        style={{ maxWidth: "27rem" }}
                        value={add} onChange={handleAdd}
                        placeholder="Your Address" />
                    <div className="d-flex align-items-center justify-content-center input-row mt-3">
                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                            value={dob} onChange={handleDob}
                            placeholder="Date of birth" />
                        <input className="text-center text-white input-bar"
                            value={phone} onChange={handlePhone}
                            placeholder="Phone Number" />

                    </div>
                    <div class="form-check w-100 mt-3" style={{ maxWidth: "27rem" }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                        <label class="form-check-label text-white text-left check-info" for="flexCheckDefault">
                            By checking this box, you have read and understand the <Link to="/privacy-policy">Privacy Policy</Link>, accept our <Link to="/blank">terms and conditions</Link>, agree to have your identity information verified with the issuer or official record number.
                        </label>
                    </div>
                    <div class="form-check w-100 mt-3" style={{ maxWidth: "27rem" }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                        <label class="form-check-label text-white text-left check-info" for="flexCheckDefault">
                            By checking the box, you acknowledge that the legal age for internet and mobile gaming is 21 and that you are prohibited from allowing any other person to access or use your internet and mobile gaming account
                        </label>
                    </div>
                </form>
            </>;
        default:
            return 'Completed';
    }
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

    const handleNext = () => {

        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    useEffect(() => {
        changeHeading("")
        console.log(match.path)

    }, [])

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
                            <div className={classes.instructions}>{GetStepContent(activeStep)}</div>
                            <div className="d-flex align-items-center justify-content-center button-row">
                                errors:
                                {JSON.stringify(errors)}
                            </div>
                            <div className="d-flex align-items-center justify-content-center button-row">
                                {activeStep === steps.length - 1 || activeStep === steps.length
                                    ? <Button variant="contained" color="primary" onClick={createAccount} id="submit">
                                            Create Account</Button>
                                    :
                                    <Button variant="contained" color="primary" onClick={handleNext} id="submit">
                                        Next</Button>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    </>)

}



