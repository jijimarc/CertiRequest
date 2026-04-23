import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ce223baf0f540310b9d1c9c530d1b2b8'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2001423_certireq.User'],
    table: 'x_2001423_certireq_document_request',
})
