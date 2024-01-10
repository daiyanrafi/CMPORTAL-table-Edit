export type FormData = {
   //user-info-page
   user_title: string;
   user_firstName: string;
   user_lastName: string;
   user_postalAddress: string;
   user_address: string;
   user_suburb: string;
   user_postcode: string;
   user_state: string;
   user_country: string;
   user_preferredContact: string;
   user_landline: string;
   user_mobile: string;
   user_email: string;
   // RepresentativeForm-page fields
   representativeTitle: string;
   representativeFirstName: string;
   representativeLastName: string;
   representativePostalAddress: string;
   representativeSuburb: string;
   representativePostcode: string;
   representativeState: string;
   representativeCountry: string;
   representativePreferredContact: string;
   representativeLandline: string;
   representativeMobile: string;
   representativeEmail: string;
   //for address page
   // address_street: string;
   // address_city: string;
   // address_state: string;
   // address_zip: string;
   //Incident-address-page
   incident_address: string;
   incident_address1: string;
   incident_city: string;
   incident_postcode: string;
   incident_state: string;
   //complaint page 
   complaint_supplier: string;
   complaint_service: string;
   complaint_accountNumber: string;
   complaint_complaintDescription: string;
   complaint_resolutionDescription: string;
   //complaint-cont page
   complaint_cont_concession: string;
   complaint_cont_concessionTypes: string[];
   complaint_cont_hasComplaint: string;
   complaint_cont_complaintDescription: string;
   complaint_cont_agree: boolean;
   complaint_cont_treeIdentification: string;
   //final-page-submission
   final_sub_bestTime: string;
   final_sub_howDidYouHear: string;
   final_sub_attachFile: File | null;
   final_sub_isRobot: boolean;
 };