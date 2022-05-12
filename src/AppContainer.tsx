import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as routes from 'constants/routes';
import history from 'utils/history';
import { verifyEmailRequest } from 'store/actions/auth.actions';
import { parseUrl } from 'utils/parseUrl';

// Auth
import { SignIn } from 'pages/common/signIn';
import { SignUp as TravelerSignUp } from 'pages/traveler/signUp';
import { SignUp as PilotSignUp } from 'pages/pilot/signUp';
import { SignUp as CompanySignUp } from 'pages/company/signUp';
import { ForgotPassword } from 'pages/common/recoverPassword/forgotPassword';
import { CheckEmail } from 'pages/common/recoverPassword/checkEmail';
import { NewPassword } from 'pages/common/recoverPassword/newPassword';
import { ResetPasswordSuccess } from 'pages/common/recoverPassword/resetPasswordSuccess';

// Email Verification
import { ConfirmEmail } from 'pages/common/emailVerification/confirmEmail';
import { EmailVerificationSuccess } from 'pages/common/emailVerification/emailVerificationSuccess';
import { EmailVerificationFail } from 'pages/common/emailVerification/emailVerificationFail';

// Dashboard
import Dashboard from 'pages/common/dashboard/';

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = parseUrl(history?.location?.search);
    params?.id && params?.hash && dispatch(verifyEmailRequest(params));
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path={routes.HOME}>
        <Dashboard />
      </Route>
      <Route path={routes.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={routes.SIGN_UP_TRAVELER}>
        <TravelerSignUp />
      </Route>
      <Route path={routes.SIGN_UP_PILOT}>
        <PilotSignUp />
      </Route>
      <Route path={routes.SIGN_UP_COMPANY}>
        <CompanySignUp />
      </Route>
      {/* <Route path={routes.SIGN_UP_PERSONAL}>
        <CompanySignUp isPersonal={true} />
      </Route> */}
      <Route path={routes.CONFIRM_EMAIL}>
        <ConfirmEmail />
      </Route>
      <Route path={routes.EMAIL_VERIFIED}>
        <EmailVerificationSuccess />
      </Route>
      <Route path={routes.EMAIL_VERIFICATION_FAIL}>
        <EmailVerificationFail />
      </Route>
      <Route path={routes.FORGOT_PASSWORD}>
        <ForgotPassword />
      </Route>
      <Route path={routes.CHECK_EMAIL}>
        <CheckEmail />
      </Route>
      <Route path={routes.NEW_PASSWORD}>
        <NewPassword />
      </Route>
      <Route path={routes.RESET_PASSWORD_SUCCESS}>
        <ResetPasswordSuccess />
      </Route>
      <Route path={routes.DASHBOARD}>
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default AppContainer;
