import classes from './Privacy.module.scss'
const Privacy = () => {
    
    return (<div className={['page-wrapper', classes.PrivacyLayout].join(' ')}>
        <h1>PRIVACY NOTICE</h1>
        <h4>Last update November 17, 2021</h4>
        <p>Thank you for choosing to be part of our community at urielzacarias.com. We are commited to protecting
            personal information and your right to privacy. If you have any question or concerns
            about this privacy notice or our practices with regard to your personal information, please contact us at urielzacarias@gmail.com.
        </p>
        <p>
            This privacy notices describes how we might use your information if you:
            <ul>
                <li>Visit our website at <a href="https://urielzacarias.com">https://urielzacarias.com</a></li>
                <li>Engage with us in other related ways - including any sales, marketing, or events</li>
            </ul>
        </p>
        <p>In this privacy notice, if we refer to:
            <ul>
                <li><b>"Website"</b> we are referring to any website of our that references or links to this policy</li>
                <li><b>"Services"</b> we are referring to our Website, and other related services, including nay sales, marketing, or events</li>
            </ul>
        </p>
    </div>
    )
}
export default Privacy