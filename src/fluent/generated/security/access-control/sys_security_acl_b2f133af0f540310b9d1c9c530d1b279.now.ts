import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b2f133af0f540310b9d1c9c530d1b279'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2001423_certireq.Staff'],
    table: 'x_2001423_certireq_customer',
})
