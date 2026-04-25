import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_2001423_certireq_document_request',
    view: default_view,
    columns: ['delivery_mode', 'document_type', 'notes', 'payment_amount', 'purpose', 'status'],
})
