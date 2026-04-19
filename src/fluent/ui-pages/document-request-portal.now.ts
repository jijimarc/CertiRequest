import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import documentPortal from '../../client/index.html';

export const document_request_portal = UiPage({
  $id: Now.ID['document-request-portal'],
  endpoint: 'x_2001423_certireq_portal.do',
  description: 'CertiRequest Document Request Portal - Modern responsive portal for Students and Alumni',
  category: 'general',
  html: documentPortal,
  direct: true
});