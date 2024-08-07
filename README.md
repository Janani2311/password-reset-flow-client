# Secure Password Reset Flow

I have developed a secure password reset process with user-friendly experience.

## Overview
## 1. Sign IN Page

o	Users enter their registered email ID and password to sign in to their account.

### User Existence Verification

o	The system validates the existence of the user in the database.

o	If the user is not found, an error message is displayed.
 
## 2. SignUp Page

o	New users can register to the site with details like FirstName, lastName, Email Address, Password.

o	A success message is displayed, if the user signed up successfully.

## 3. Forgot Password Link
	
o	If the user clicks on forgot password link, a reset-password link with random string will be sent to the individual's registered mail ID.

o	The random string is securely stored in the database.

## 4. Reset Password Page

o	User allows to set new password and re-enters the same in the confirm password field.

o	IF the new password and confirm password does not match, an error message is displayed.

o	Upon submission, the new password is securely stored, and the random string is cleared from the database.
    
## 5. Dashboard Page

o	After successful log in, an authenticated token will be stored in the session storage.

o	After token verification, User can view their details in a profile card.

o	By clicking on Logout Button, User will be logged out and redirected to sign in page by clearing the session storage.
 
### Acheived responsive design using HTML and CSS.
