import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['71223baf0f540310b9d1c9c530d1b23d'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2001423_certireq.User'],
    table: 'x_2001423_certireq_customer',
})
