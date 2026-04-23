import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d7c17b6f0f540310b9d1c9c530d1b204'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2001423_certireq.Admin'],
    table: 'x_2001423_certireq_document_request',
})
