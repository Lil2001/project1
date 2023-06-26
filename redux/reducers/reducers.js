import {
  OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
  CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE,
  OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
  CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE,
  OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,
  CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE,
  OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,
  CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE,
  OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,
  CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE,
  OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE,
  CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE,
  OPEN_LANGUAGES_POPUP_IN_MY_PROFILE,
  CLOSE_LANGUAGES_POPUP_IN_MY_PROFILE,
  OPEN_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE,
  CLOSE_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE,
  OPEN_NAME_EDIT_POPUP_IN_MY_PROFILE,
  CLOSE_NAME_EDIT_POPUP_IN_MY_PROFILE,
  OPEN_EMAIL_POPUP_IN_MY_PROFILE,
  CLOSE_EMAIL_POPUP_IN_MY_PROFILE,
  OPEN_EDIT_PHONE_NUMBER_IN_MY_PROFILE,
  CLOSE_EDIT_PHONE_NUMBER_IN_MY_PROFILE,
  OPEN_DELETE_ACCOUNT_POPUP_IN_MY_PROFILE,
  CLOSE_DELETE_ACCOUNT_POPUP_IN_MY_PROFILE,
  OPEN_POPUP_FILTER_SEARCH_PAGE,
  CLOSE_POPUP_FILTER_SEARCH_PAGE,
  OPEN_HAND_FILTER_SEARCH_PAGE,
  CLOSE_HAND_FILTER_SEARCH_PAGE,
  OPEN_BODY_TYPE_FILTER_SEARCH_PAGE,
  CLOSE_BODY_TYPE_FILTER_SEARCH_PAGE,
  OPEN_TRANSMISSION_FILTER_SEARCH_PAGE,
  CLOSE_TRANSMISSION_FILTER_SEARCH_PAGE,
  OPEN_DRIVE_UNIT_FILTER_SEARCH_PAGE,
  CLOSE_DRIVE_UNIT_FILTER_SEARCH_PAGE,
  OPEN_ENGINES_TYPE_FILTER_SEARCH_PAGE,
  CLOSE_ENGINES_TYPE_FILTER_SEARCH_PAGE,
  OPEN_PRICE_FILTER_SEARCH_PAGE,
  CLOSE_PRICE_FILTER_SEARCH_PAGE,
  OPEN_MILEAGE_FILTER_SEARCH_PAGE,
  CLOSE_MILEAGE_FILTER_SEARCH_PAGE,
  OPEN_YEAR_ISSUE_FILTER_SEARCH_PAGE,
  CLOSE_YEAR_ISSUE_FILTER_SEARCH_PAGE,
  OPEN_VOLUME_FILTER_SEARCH_PAGE,
  CLOSE_VOLUME_FILTER_SEARCH_PAGE,
  OPEN_POPUP_MARKS_SEARCH_PAGE,
  CLOSE_POPUP_MARKS_SEARCH_PAGE,
  OPEN_POPUP_MARKS_MODEL_SEARCH_PAGE,
  CLOSE_POPUP_MARKS_MODEL_SEARCH_PAGE,
  OPEN_COLOR_POPUP_IN_POSTING_PAGE,
  CLOSE_COLOR_POPUP_IN_POSTING_PAGE,
  OPEN_COMPLECTATION_POPUP_IN_POSTING_PAGE,
  CLOSE_COMPLECTATION_POPUP_IN_POSTING_PAGE,
  OPEN_LANGUAGES_POPUP_IN_POSTING_PAGE,
  CLOSE_LANGUAGES_POPUP_IN_POSTING_PAGE,
  OPEN_TIME_POPUP_IN_POSTING_PAGE,
  CLOSE_TIME_POPUP_IN_POSTING_PAGE,
  OPEN_ADD_NEW_CONTACT_POPUP_IN_PROFILE_PAGE,
  CLOSE_ADD_NEW_CONTACT_POPUP_IN_PROFILE_PAGE,
  OPEN_DELETE_CONTACT_POPUP_IN_PROFILE_PAGE,
  CLOSE_DELETE_CONTACT_POPUP_IN_PROFILE_PAGE,
} from '../actions/actions';

const initialState = {
  is_open_delete_contact_popup_in_profile_page: false,
  is_open_add_new_contact_popup_in_profile_page: false,
  is_open_marki_popup_in_catalog_select_mark_page: false,
  is_open_model_popup_in_catalog_select_model_page: false,
  is_open_pakaleni_popup_in_catalog_select_pakaleni_page: false,
  is_open_modifikacia_popup_in_catalog_select_modifikacia_page: false,
  is_open_komplektacia_popup_in_catalog_select_komplektacia_page: false,
  is_open_select_done_popup_in_catalog_select_done_page: false,
  is_open_languages_popup_in_my_profile: false,
  is_open_account_edit_popup: false,
  is_open_name_edit_popup: false,
  is_open_email_edit_popup: false,
  is_open_edit_phone_number_popup: false,
  is_open_delete_account_popup: false,
  is_open_filter_popup_in_search_page: false,
  is_open_hand_filter_popup_in_search_page: false,
  is_open_body_type_filter_popup_in_search_page: false,
  is_open_transmission_filter_popup_in_search_page: false,
  is_open_drive_unit_filter_popup_in_search_page: false,
  is_open_engines_unit_filter_popup_in_search_page: false,
  is_open_price_filter_popup_in_search_page: false,
  is_open_mileage_filter_popup_in_search_page: false,
  is_open_year_issue_filter_popup_in_search_page: false,
  is_open_volume_filter_popup_in_search_page: false,
  is_open_marks_popup_in_search_page: false,
  is_open_marks_model_popup_in_search_page: false,
  is_open_color_popup_in_posting_page: false,
  is_open_complectation_popup_in_posting_page: false,
  is_open_languages_popup_in_posting_page: false,
  is_open_time_popup_in_posting_page: false,
};

function justDriveReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD_NEW_CONTACT_POPUP_IN_PROFILE_PAGE:
      return {...state, is_open_add_new_contact_popup_in_profile_page: true};

    case OPEN_DELETE_CONTACT_POPUP_IN_PROFILE_PAGE:
      return {...state, is_open_delete_contact_popup_in_profile_page: true};
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_DELETE_CONTACT_POPUP_IN_PROFILE_PAGE:
      return {...state, is_open_delete_contact_popup_in_profile_page: false};

    case CLOSE_ADD_NEW_CONTACT_POPUP_IN_PROFILE_PAGE:
      return {...state, is_open_add_new_contact_popup_in_profile_page: false};
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
      return {...state, is_open_marki_popup_in_catalog_select_mark_page: true};
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_MARKI_POPUP_IN_CATALOG_SELECT_MARK_PAGE:
      return {...state, is_open_marki_popup_in_catalog_select_mark_page: false};
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
      return {...state, is_open_model_popup_in_catalog_select_model_page: true};
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_MODEL_POPUP_IN_CATALOG_SELECT_MODEL_PAGE:
      return {
        ...state,
        is_open_model_popup_in_catalog_select_model_page: false,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE:
      return {
        ...state,
        is_open_pakaleni_popup_in_catalog_select_pakaleni_page: true,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_PAKALENI_POPUP_IN_CATALOG_SELECT_PAKALENI_PAGE:
      return {
        ...state,
        is_open_pakaleni_popup_in_catalog_select_pakaleni_page: false,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE:
      return {
        ...state,
        is_open_modifikacia_popup_in_catalog_select_modifikacia_page: true,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_MODIFIKACIA_POPUP_IN_CATALOG_SELECT_MODIFIKACIA_PAGE:
      return {
        ...state,
        is_open_modifikacia_popup_in_catalog_select_modifikacia_page: false,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE:
      return {
        ...state,
        is_open_komplektacia_popup_in_catalog_select_komplektacia_page: true,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_KOMPLEKTACIA_POPUP_IN_CATALOG_SELECT_KOMPLEKTACIA_PAGE:
      return {
        ...state,
        is_open_komplektacia_popup_in_catalog_select_komplektacia_page: false,
      };
    // return {...state, from_address_data_from_redux: action.payload};
    case OPEN_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE:
      return {
        ...state,
        is_open_select_done_popup_in_catalog_select_done_page: true,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case CLOSE_SELECT_DONE_POPUP_IN_CATALOG_SELECT_DONE_PAGE:
      return {
        ...state,
        is_open_select_done_popup_in_catalog_select_done_page: false,
      };
    // return {...state, from_address_data_from_redux: action.payload};

    case OPEN_LANGUAGES_POPUP_IN_MY_PROFILE:
      return {...state, is_open_languages_popup_in_my_profile: true};
    case CLOSE_LANGUAGES_POPUP_IN_MY_PROFILE:
      return {...state, is_open_languages_popup_in_my_profile: false};

    case OPEN_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_account_edit_popup: true};
    case CLOSE_ACCOUNT_EDIT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_account_edit_popup: false};

    case OPEN_NAME_EDIT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_name_edit_popup: true};
    case CLOSE_NAME_EDIT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_name_edit_popup: false};

    case OPEN_EMAIL_POPUP_IN_MY_PROFILE:
      return {...state, is_open_email_edit_popup: true};
    case CLOSE_EMAIL_POPUP_IN_MY_PROFILE:
      return {...state, is_open_email_edit_popup: false};

    case OPEN_EDIT_PHONE_NUMBER_IN_MY_PROFILE:
      return {...state, is_open_edit_phone_number_popup: true};
    case CLOSE_EDIT_PHONE_NUMBER_IN_MY_PROFILE:
      return {...state, is_open_edit_phone_number_popup: false};

    case OPEN_DELETE_ACCOUNT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_delete_account_popup: true};
    case CLOSE_DELETE_ACCOUNT_POPUP_IN_MY_PROFILE:
      return {...state, is_open_delete_account_popup: false};

    case OPEN_POPUP_FILTER_SEARCH_PAGE:
      return {...state, is_open_filter_popup_in_search_page: true};
    case CLOSE_POPUP_FILTER_SEARCH_PAGE:
      return {...state, is_open_filter_popup_in_search_page: false};

    case OPEN_HAND_FILTER_SEARCH_PAGE:
      return {...state, is_open_hand_filter_popup_in_search_page: true};
    case CLOSE_HAND_FILTER_SEARCH_PAGE:
      return {...state, is_open_hand_filter_popup_in_search_page: false};

    case OPEN_BODY_TYPE_FILTER_SEARCH_PAGE:
      return {...state, is_open_body_type_filter_popup_in_search_page: true};
    case CLOSE_BODY_TYPE_FILTER_SEARCH_PAGE:
      return {...state, is_open_body_type_filter_popup_in_search_page: false};

    case OPEN_TRANSMISSION_FILTER_SEARCH_PAGE:
      return {...state, is_open_transmission_filter_popup_in_search_page: true};
    case CLOSE_TRANSMISSION_FILTER_SEARCH_PAGE:
      return {
        ...state,
        is_open_transmission_filter_popup_in_search_page: false,
      };

    case OPEN_DRIVE_UNIT_FILTER_SEARCH_PAGE:
      return {...state, is_open_drive_unit_filter_popup_in_search_page: true};
    case CLOSE_DRIVE_UNIT_FILTER_SEARCH_PAGE:
      return {...state, is_open_drive_unit_filter_popup_in_search_page: false};

    case OPEN_ENGINES_TYPE_FILTER_SEARCH_PAGE:
      return {...state, is_open_engines_unit_filter_popup_in_search_page: true};
    case CLOSE_ENGINES_TYPE_FILTER_SEARCH_PAGE:
      return {
        ...state,
        is_open_engines_unit_filter_popup_in_search_page: false,
      };

    case OPEN_PRICE_FILTER_SEARCH_PAGE:
      return {...state, is_open_price_filter_popup_in_search_page: true};
    case CLOSE_PRICE_FILTER_SEARCH_PAGE:
      return {...state, is_open_price_filter_popup_in_search_page: false};

    case OPEN_MILEAGE_FILTER_SEARCH_PAGE:
      return {...state, is_open_mileage_filter_popup_in_search_page: true};
    case CLOSE_MILEAGE_FILTER_SEARCH_PAGE:
      return {...state, is_open_mileage_filter_popup_in_search_page: false};

    case OPEN_YEAR_ISSUE_FILTER_SEARCH_PAGE:
      return {...state, is_open_year_issue_filter_popup_in_search_page: true};
    case CLOSE_YEAR_ISSUE_FILTER_SEARCH_PAGE:
      return {...state, is_open_year_issue_filter_popup_in_search_page: false};

    case OPEN_VOLUME_FILTER_SEARCH_PAGE:
      return {...state, is_open_volume_filter_popup_in_search_page: true};
    case CLOSE_VOLUME_FILTER_SEARCH_PAGE:
      return {...state, is_open_volume_filter_popup_in_search_page: false};

    case OPEN_POPUP_MARKS_SEARCH_PAGE:
      return {...state, is_open_marks_popup_in_search_page: true};
    case CLOSE_POPUP_MARKS_SEARCH_PAGE:
      return {...state, is_open_marks_popup_in_search_page: false};

    case OPEN_POPUP_MARKS_MODEL_SEARCH_PAGE:
      return {...state, is_open_marks_model_popup_in_search_page: true};
    case CLOSE_POPUP_MARKS_MODEL_SEARCH_PAGE:
      return {...state, is_open_marks_model_popup_in_search_page: false};

    case OPEN_COLOR_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_color_popup_in_posting_page: true};
    case CLOSE_COLOR_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_color_popup_in_posting_page: false};

    case OPEN_COMPLECTATION_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_complectation_popup_in_posting_page: true};
    case CLOSE_COMPLECTATION_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_complectation_popup_in_posting_page: false};

    case OPEN_LANGUAGES_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_languages_popup_in_posting_page: true};
    case CLOSE_LANGUAGES_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_languages_popup_in_posting_page: false};

    case OPEN_TIME_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_time_popup_in_posting_page: true};
    case CLOSE_TIME_POPUP_IN_POSTING_PAGE:
      return {...state, is_open_time_popup_in_posting_page: false};

    default:
      return state;
  }
}

export default justDriveReducer;
