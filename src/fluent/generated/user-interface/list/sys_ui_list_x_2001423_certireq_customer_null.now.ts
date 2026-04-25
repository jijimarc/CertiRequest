import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_2001423_certireq_customer',
    view: default_view,
    columns: [
        'student_id_number',
        'fullname',
        'is_regular',
        'department',
        'contact_number',
        'program',
        'personal_email',
        'email',
        'user_type',
        'customer_status',
    ],
})
