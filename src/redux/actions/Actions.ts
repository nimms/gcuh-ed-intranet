import { action } from 'typesafe-actions';
import * as ActionType from '../ActionTypes';

export const filterDocumentsByName = (name: string) =>
  action(ActionType.FILTER_DOCUMENTS_BY_NAME, name);
