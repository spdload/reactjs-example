// action-types
import { JetType } from '../../types/store/jets';

export const GET_JET_TYPES = 'GET_JET_TYPES';
export const GET_JET_TYPES_SUCCESS = 'GET_JET_TYPES_SUCCESS';
export const GET_JET_TYPES_FAIL = 'GET_JET_TYPES_FAIL';
export const GET_MY_JETS = 'GET_MY_JETS';
export const GET_MY_JETS_SUCCESS = 'GET_MY_JETS_SUCCESS';
export const GET_MY_JETS_FAIL = 'GET_MY_JETS_FAIL';
export const GET_JET_INFO = 'GET_JET_INFO';
export const GET_JET_INFO_SUCCESS = 'GET_JET_INFO_SUCCESS';
export const GET_JET_INFO_FAIL = 'GET_JET_INFO_FAIL';
export const POST_JET_CREATE = 'POST_JET_CREATE';
export const POST_JET_CREATE_FAIL = 'POST_JET_CREATE_FAIL';
export const POST_JET_CREATE_SUCCESS = 'POST_JET_CREATE_SUCCESS';
export const POST_JET_PHOTO = 'POST_JET_PHOTO';
export const POST_JET_PHOTO_FAIL = 'POST_JET_PHOTO_FAIL';
export const POST_JET_PHOTO_SUCCESS = 'POST_JET_PHOTO_SUCCESS';
export const DELETE_JET_PHOTO = 'DELETE_JET_PHOTO';
export const DELETE_JET_PHOTO_FAIL = 'DELETE_JET_PHOTO_FAIL';
export const DELETE_JET_PHOTO_SUCCESS = 'DELETE_JET_PHOTO_SUCCESS';
export const POST_JET_DOCUMENT = 'POST_JET_DOCUMENT';
export const POST_JET_DOCUMENT_FAIL = 'POST_JET_DOCUMENT_FAIL';
export const POST_JET_DOCUMENT_SUCCESS = 'POST_JET_DOCUMENT_SUCCESS';
export const DELETE_JET_DOCUMENT = 'DELETE_JET_DOCUMENT';
export const DELETE_JET_DOCUMENT_FAIL = 'DELETE_JET_DOCUMENT_FAIL';
export const DELETE_JET_DOCUMENT_SUCCESS = 'DELETE_JET_DOCUMENT_SUCCESS';
export const PUT_JET_INFO = 'PUT_JET_INFO';
export const PUT_JET_INFO_FAIL = 'PUT_JET_INFO_FAIL';
export const PUT_JET_INFO_SUCCESS = 'PUT_JET_INFO_SUCCESS';
export const DELETE_JET = 'DELETE_JET';
export const DELETE_JET_FAIL = 'DELETE_JET_FAIL';
export const DELETE_JET_SUCCESS = 'DELETE_JET_SUCCESS';
export const INCREMENT_MY_JETS_PAGE = 'INCREMENT_MY_JETS_PAGE';
export const ADD_TO_SAVED_JET_REQUEST = 'ADD_TO_SAVED_JET';
export const ADD_TO_SAVED_JET_SUCCESS = 'ADD_TO_SAVED_JET_SUCCESS';
export const ADD_TO_SAVED_JET_FAIL = 'ADD_TO_SAVED_JET_FAIL';
export const REMOVE_FROM_SAVED_JET_REQUEST = 'REMOVE_FROM_SAVED_JET';
export const REMOVE_FROM_SAVED_JET_SUCCESS = 'REMOVE_FROM_SAVED_JET_SUCCESS';
export const REMOVE_FROM_SAVED_JET_FAIL = 'REMOVE_FROM_SAVED_JET_FAIL';

export function incrementMyJetsPage() {
  return {
    type : INCREMENT_MY_JETS_PAGE
  };
}

// Get jets actions
export function fetchJetTypes() {
  return {
    type: GET_JET_TYPES,
  };
}

export function getJetsTypesSuccess(types: any) {
  return {
    type: GET_JET_TYPES_SUCCESS,
    payload: {
      types,
    },
  };
}

export function getJetsTypesFail(errors: any) {
  return {
    type: GET_JET_TYPES_FAIL,
    payload: {
      errors,
    },
  };
}

// Create jet actions

export function postJetCreate(
  jetModel: number,
  averageSpeed: number,
  hourRate: number,
  include_engine_hours: number,
  cityId: number,
  airportId: number,
  description: string,
) {
  return {
    type: POST_JET_CREATE,
    payload: { jetModel, averageSpeed, hourRate, include_engine_hours, cityId, airportId, description },
  };
}

export function postJetCreateSuccess() {
  return {
    type: POST_JET_CREATE_SUCCESS,
  };
}

export function postJetCreateFail(errors: any) {
  return {
    type: POST_JET_CREATE_FAIL,
    payload: {
      errors,
    },
  };
}

// update Jet actions

export function putJetInfo(
  id: number,
  jetModel: number,
  averageSpeed: number,
  hourRate: number,
  include_engine_hours:number,
  cityId: number,
  airportId: number,
  description: string
) {
  return {
    type: PUT_JET_INFO,
    payload: { id, jetModel, averageSpeed, hourRate, include_engine_hours, cityId, airportId, description },
  };
}

export function putJetInfoSuccess() {
  return {
    type: PUT_JET_INFO_SUCCESS,
  };
}

export function putJetInfoFail(errors: any) {
  return {
    type: PUT_JET_INFO_FAIL,
    payload: {
      errors,
    },
  };
}

// Get my jets actions
export function fetchMyJets() {
  return {
    type: GET_MY_JETS,
  };
}

export function getMyJetsSuccess(jets: JetType, totalPages: number) {
  return {
    type: GET_MY_JETS_SUCCESS,
    payload: {
      jets,
      totalPages
    },
  };
}

export function getMyJetsFail(errors: any) {
  return {
    type: GET_MY_JETS_FAIL,
    payload: {
      errors,
    },
  };
}

export function fetchJetInfo(id: number) {
  return {
    type: GET_JET_INFO,
    payload: { id },
  };
}

export function getJetInfoSuccess(jet: JetType | null) {
  return {
    type: GET_JET_INFO_SUCCESS,
    payload: {
      jet,
    },
  };
}

export function getJetInfoFail(errors: string) {
  return {
    type: GET_JET_INFO_FAIL,
    payload: {
      errors,
    },
  };
}

export function addToSavedJetRequest(id: number) {
  return {
    type: ADD_TO_SAVED_JET_REQUEST,
    payload: { id },
  };
}

export function addToSavedJetSuccess() {
  return {
    type: ADD_TO_SAVED_JET_SUCCESS
  };
}

export function addToSavedJetFail(errors: Error) {
  return {
    type: ADD_TO_SAVED_JET_FAIL,
    payload: {
      errors,
    },
  };
}

export function removeFromSavedJetRequest(id: number) {
  return {
    type: REMOVE_FROM_SAVED_JET_REQUEST,
    payload: { id },
  };
}

export function removeFromSavedJetSuccess() {
  return {
    type: REMOVE_FROM_SAVED_JET_SUCCESS
  };
}

export function removeFromSavedJetFail(errors: Error) {
  return {
    type: REMOVE_FROM_SAVED_JET_FAIL,
    payload: {
      errors,
    },
  };
}


// Photo actions

export function postJetPhoto(id: number, type: string, image: File) {
  return {
    type: POST_JET_PHOTO,
    payload: { id, type, image },
  };
}

export function postJetPhotoSuccess() {
  return {
    type: POST_JET_PHOTO_SUCCESS,
  };
}

export function postJetPhotoFail(errors: any) {
  return {
    type: POST_JET_PHOTO_FAIL,
    payload: {
      errors,
    },
  };
}

export function deleteJetPhoto(jetId: number, photoId: number) {
  return {
    type: DELETE_JET_PHOTO,
    payload: { jetId, photoId },
  };
}

export function deleteJetPhotoSuccess() {
  return {
    type: DELETE_JET_PHOTO_SUCCESS,
  };
}

export function deleteJetPhotoFail(errors: any) {
  return {
    type: DELETE_JET_PHOTO_FAIL,
    payload: {
      errors,
    },
  };
}

// Documents actions

export function postJetDocument(id: number, type: string, document: File) {
  return {
    type: POST_JET_DOCUMENT,
    payload: { id, type, document },
  };
}

export function postJetDocumentSuccess() {
  return {
    type: POST_JET_DOCUMENT_SUCCESS,
  };
}

export function postJetDocumentFail(errors: any) {
  return {
    type: POST_JET_DOCUMENT_FAIL,
    payload: {
      errors,
    },
  };
}

export function deleteJetDocument(jetId: number, documentId: number) {
  return {
    type: DELETE_JET_DOCUMENT,
    payload: { jetId, documentId },
  };
}

export function deleteJetDocumentSuccess() {
  return {
    type: DELETE_JET_DOCUMENT_SUCCESS,
  };
}

export function deleteJetDocumentFail(errors: any) {
  return {
    type: DELETE_JET_DOCUMENT_FAIL,
    payload: {
      errors,
    },
  };
}

export function deleteJet(id: number) {
  return {
    type: DELETE_JET,
    payload: { id },
  };
}

export function deleteJetSuccess() {
  return {
    type: DELETE_JET_SUCCESS,
  };
}

export function deleteJetFail(errors: any) {
  return {
    type: DELETE_JET_FAIL,
    payload: {
      errors,
    },
  };
}
