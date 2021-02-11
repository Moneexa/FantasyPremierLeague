import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import SubscribeLetter from '../SubscribeLetter/SubscribeLetter'
export default function PrivacyPolicy() {
    const heading = useStoreActions(actions => actions.obj.changeHeadingRed)
    const para = useStoreActions(actions => actions.obj.changeParaRed)

    useEffect(() => {

        heading("Privacy Policy")
        para("")
    })
    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5 main-padding" style={{ marginBottom: '13rem' }}>
                <p style={{
                    textAlign: "left", color: "#000000", font: "normal normal 300 20px Rubik"
                }}>
                    At FPL Play, accessible from www.fplplay.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FPL Play and how we use it.
        <br /><br />
                If you have additional questions or require more information about our Privacy Policy,<br /> do not hesitate to contact us.
                <br /><br />
                 This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in FPL Play. This policy is not applicable to any information collected offline or via channels other than this website.
                 <br /><br />
                    <b>Consent</b><br />
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                <br /><br />
                    <b>Information we collect</b><br />
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                <br /><br />
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                <br /><br />
                    <b>How we use your information </b>
                    <br />
                We use the information we collect in various ways, including to:
                <br /><br />
                Provide, operate, and maintain our website
                <br />
                Improve, personalize, and expand our website Understand and analyze how you use our website
                <br />
                Develop new products, services, features, and functionality
                <br />
                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes . .

        </p>
            </div>
            <SubscribeLetter />      </>

    )



}