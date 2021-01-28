import React, { useState, useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link, useLocation } from 'react-router-dom'
import './CreateAccount.css'
import './SignIn.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

function GetStepContent(stepIndex) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [secName, setSecName] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [add, setAdd] = useState("")
    function handleFirstName(e) {
        setName(e.target.value)
    }
    function handleSecondName(e) {
        setSecName(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePass(e) {
        setPass(e.target.value)
    }
    function handlePhone(e) {
        setPhone(e.target.value)
    }
    function handleAdd(e) {
        setAdd(e.target.value)
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
                            placeholder="Date of Birth" />
                        <input className="text-center text-white input-bar"
                            value={phone} onChange={handlePhone}
                            placeholder="Last 4 digits of SSN" />

                    </div>
                    <input className="text-center text-white input-bar mt-3 w-100"
                        style={{ maxWidth: "27rem" }}
                        value={add} onChange={handleAdd}
                        placeholder="Your Address" />
                    <div className="d-flex align-items-center justify-content-center input-row mt-3">
                        <input className="text-center text-white input-bar mr-md-3 mr-sm-0 my-sm-2"
                            value={pass} onChange={handlePass}
                            placeholder="CellPhone Number" />
                        <input className="text-center text-white input-bar"
                            value={phone} onChange={handlePhone}
                            placeholder="Password" />

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

    function signin() {
        loggedIn(true)
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
                                {activeStep === steps.length - 1 || activeStep === steps.length
                                    ? <Link to="/home">
                                        <Button variant="contained" color="primary" onClick={loggedIn(true)} id="submit">
                                            Create Account</Button></Link>
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



