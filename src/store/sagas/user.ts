import  history  from 'utils/history';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  userInfoService,
  updateAvatarService,
  uploadPassportService,
  deleteAvatarService,
  updatePassportService,
  updatePersonalInfoService,
  changePasswordService,
  stopAccountService,
  updateUserStatusService,
  updateRegistrationDocumentService,
  uploadRegistrationDocumentService,
  verifyProfileService,
  uploadDriverLicenseService,
  updateDriverLicenseService,
  uploadDocumentService,
  updateDocumentService,
  deleteDocumentPhotoService
} from 'services/user';
import {
  getUserSuccess,
  getUserFail,
  updateAvatarFail,
  uploadPassportFail,
  deleteAvatarSuccess,
  deleteAvatarFail,
  refreshUserRequest,
  uploadPersonalInfoFail,
  stopAccountSuccess,
  stopAccountFail,
  changePasswordSuccess,
  changePasswordFail,
  updateUserStatusSuccess,
  uploadCompanyRegistrationDocFail,
  verifyProfileFail,
  uploadDriverLicenseFail,
  uploadDDocumentFail,
  deleteDocumentFail
} from 'store/actions/user';
import * as routes from 'constants/routes';

interface changePasswordTypes {
  type: string;
  payload: ChangePasswordType;
}

export interface ChangePasswordType {
  current_password: string;
  password: string;
  password_confirmation: string;
}

function* getUserInfoSaga() {
  try {
    const { data } = yield userInfoService();
    yield put(
      getUserSuccess(data.data)
    );
  } catch (error) {
    yield call(() => history.push(routes.SIGN_IN));
    yield put(getUserFail(error.response.data.errors));
  }

}

function* changePasswordSaga(action: changePasswordTypes) {
  try {
    yield changePasswordService(action.payload);
    yield put(
        changePasswordSuccess()
    );
  } catch (error) {
    yield put(changePasswordFail(error.response.data.errors));
  }
}

function* refreshUserInfoSaga() {
  try {
    const { data } = yield userInfoService();
    yield put(
      getUserSuccess(data.data)
    );
  } catch (error) {
    yield call(() => history.push(routes.SIGN_IN));
    yield put(getUserFail(error.response.data.errors));
  }
  
}

function* updateAvatarSaga(action: any) {
  try {
    yield updateAvatarService(action.payload);
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(updateAvatarFail(error));
  }

}

function* deleteAvatarSaga(action: any) {
  try {
    yield deleteAvatarService();
    yield put(
      deleteAvatarSuccess()
    );
  } catch (error) {
    yield put(deleteAvatarFail(error));
  }
  
}

function* uploadPassportSaga(action: any) {
  try {
    action.payload.isEdit
      ? yield updatePassportService(action.payload.data)
      : yield uploadPassportService(action.payload.data);
    yield put(
      // uploadPassportSuccess()
      refreshUserRequest()
    );
  } catch (error) {
    yield put(uploadPassportFail(error));
  }
  
}

function* updatePersonalInfoSaga(action: any) {
  try {
    yield updatePersonalInfoService(action.payload);
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(uploadPersonalInfoFail(error));
  }
  
}

function* stopAccountSaga(action: any) {
  try {
    yield stopAccountService(action.payload);
    yield window.localStorage.clear();
    yield call(() => history.push(routes.SIGN_IN));
    yield put(
      stopAccountSuccess()
    );
  } catch (error) {
    yield put(stopAccountFail(error));
  }
  
}

function* updateUserStatusSaga(action: any) {
  try {
    yield updateUserStatusService(action.payload);
    yield updateUserStatusSuccess();
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(refreshUserRequest(error));
  }

}

function* uploadCompanyRegistrationDocSaga(action: any) {
  try {
    action.payload.isEdit
      ? yield updateRegistrationDocumentService(action.payload.data)
      : yield uploadRegistrationDocumentService(action.payload.data);
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(uploadCompanyRegistrationDocFail(error));
  }
  
}


function* verifyProfileSaga(action: any) {
  try {
    yield verifyProfileService();
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(verifyProfileFail(error));
  }
  
}

function* uploadDriverLicenseSaga(action: any) {
  try {
    if  (action.payload.isEdit) {
      yield updateDriverLicenseService(action.payload.data); 
    } else {
      yield uploadDriverLicenseService(action.payload.data);
    }
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(uploadDriverLicenseFail(error));
  }
  
}

function* uploadDocumentSaga(action: any) {
  try {
    action.payload.isEdit
      ?  yield updateDocumentService(action.payload.payload)
      : yield uploadDocumentService(action.payload.payload);
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(uploadDDocumentFail(error));
  }
  
}

function* deleteDocumentSaga(action: any) {
  const {payload} = action;
  try {
    yield deleteDocumentPhotoService(payload);
    yield put(
      refreshUserRequest()
    );
  } catch (error) {
    yield put(deleteDocumentFail(error));
  }
  
}

export default function* userActionWatcher() {
  yield takeLatest('GET_USER_REQUEST', getUserInfoSaga);
  yield takeLatest('REFRESH_USER_REQUEST', refreshUserInfoSaga);
  yield takeLatest('UPDATE_AVATAR_REQUEST', updateAvatarSaga);
  yield takeLatest('UPLOAD_PASSPORT_REQUEST', uploadPassportSaga);
  yield takeLatest('CHANGE_PASSWORD_REQUEST', changePasswordSaga);
  yield takeLatest('DELETE_AVATAR_REQUEST', deleteAvatarSaga);
  yield takeLatest('UPDATE_PERSONAL_INFO_REQUEST', updatePersonalInfoSaga);
  yield takeLatest('STOP_ACCOUNT_REQUEST', stopAccountSaga);
  yield takeLatest('UPDATE_USER_STATUS_REQUEST', updateUserStatusSaga);
  yield takeLatest('UPLOAD_COMPANY_REGISTRATION_DOC_REQUEST', uploadCompanyRegistrationDocSaga);
  yield takeLatest('VERIFY_PROFILE_REQUEST', verifyProfileSaga);
  yield takeLatest('UPLOAD_DRIVER_LICENSE_REQUEST', uploadDriverLicenseSaga);
  yield takeLatest('UPLOAD_DOCUMENT_REQUEST', uploadDocumentSaga);
  yield takeLatest('DELETE_DOCUMENT_REQUEST', deleteDocumentSaga);
}

