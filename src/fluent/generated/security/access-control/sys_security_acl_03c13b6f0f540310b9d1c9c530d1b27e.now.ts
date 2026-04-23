import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['03c13b6f0f540310b9d1c9c530d1b27e'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_2001423_certireq.Admin'],
    table: 'x_2001423_certireq_customer',
})
