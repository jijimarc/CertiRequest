import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['5f8755030f988310b9d1c9c530d1b2b5'],
    name: 'AI Services',
    serviceId: 'ai',
    routes: [
        {
            $id: Now.ID['64bc1baf0f900310b9d1c9c530d1b2cb'],
            name: 'Chat',
            consumes: 'application/json,application/xml,text/xml',
            method: 'POST',
            script: Now.include('./sys_ws_operation_64bc1baf0f900310b9d1c9c530d1b2cb.js'),
            produces: 'application/json,application/xml,text/xml',
            path: '/chat',
            enforceAcl: [],
            authentication: false,
        },
        {
            $id: Now.ID['80b71d030f988310b9d1c9c530d1b239'],
            name: 'Extract',
            consumes: 'application/json,application/xml,text/xml',
            method: 'POST',
            script: Now.include('./sys_ws_operation_80b71d030f988310b9d1c9c530d1b239.js'),
            produces: 'application/json,application/xml,text/xml',
            path: '/extract',
            enforceAcl: [],
        },
    ],
})
