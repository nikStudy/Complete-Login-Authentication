<h1>Authentication Tutorial in MEAN stack</h1>
<p>This is a web application incorporating all the registration / login authentication functionalities with the following features: </p>
<p style="text-align: justify;">Front end form controls validation, front end regex pattern match, password confirmation, sending email verification, registration confirmation email, frontend route guards, backend user schema validation, password hashing encryption, jwt send/receive, http interceptor, backend route restrictions, backend regex pattern match, google captcha implementation, password reveal eye, forgot password/username functionality with email, role based authorization for admin, OAuth login using Google, pop-out modal for logout, pop-out modal for session expire warnings.</p>
    
<h1>Front-End</h1>
<ul>
    <li>The code is divided into different modules and components / services / guards for better scalability and readability.</li>
    <li>Modules created - Root Module, AdminModule, AuthModule, StaticPagesModule</li>
    <li>Root Module components - AppComponent, HeaderComponent</li>
    <li>AdminModule components / services - ManagementComponent, EditUserComponent, ManagementService, PermissionGuard, AuthInterceptor</li>
    <li>AuthModule components / services - RegistrationComponent, LoginComponent, DashboardComponent, SocialComponent, ActivationComponent, ResendActivationLinkComponent, SocialErrorComponent, ForgotUsernameComponent, ForgotPasswordComponent, NewPasswordComponent, CheckSessionComponent, UserService, LoggedGuard, NotLoggedGuard, AuthInterceptor, RecaptchaSettings</li>
    <li>StaticPagesModule components - AboutUsComponent</li>
</ul>

<h1>Back-End</h1>
<ul>
    <li>Models created in MongoDB database - User model</li>
    <li>User model to store all the user registration / permission details</li>
    <li>Around 25 REST APIs created using this model for CRUD operations</li>
    <li>PassportJS 'passport-google-oauth20' strategy used for social login via Google</li>
    <li>PassportJS 'passport-github' strategy used for social login via Github</li>
    <li>Nodemailer, Mailgun used for sending emails to user for registration verification/confirmation, forgot username/password</li>
    <li>bcrypt library used for password hashing / encryption</li>
    <li>mongoose-title-case plugin used for converting user names to title case</li>
    <li>jsonwebtoken library used for issuing/verifying login authentication tokens</li>
    <li>Google Recaptcha key used in the backend for captcha confirmation</li>
</ul>

<h1>Technologies Used</h1>
<ul>
    <li>Angular</li>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>MongoDB</li>
    <li>Bootstrap</li>
    <li>jQuery</li>
</ul>

<h1>Screenshots</h1>
<img src="./images/Screenshot 2020-08-29 at 2.10.28 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.11.15 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.04.11 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.11.53 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.12.11 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.12.54 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.13.11 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.13.45 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.18.01 PM.png" alt="">
<img src="./images/Screenshot 2020-08-29 at 2.22.04 PM.png" alt="">
