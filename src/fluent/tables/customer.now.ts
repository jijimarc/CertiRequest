import '@servicenow/sdk/global';
import { Table, StringColumn, ChoiceColumn, DateColumn } from '@servicenow/sdk/core';

export const x_2001423_certireq_customer = Table({
  name: 'x_2001423_certireq_customer',
  label: 'Customer Profile',
  schema: {
    fullname: StringColumn({ label: 'Full Name', maxLength: 100, mandatory: true }),
    email: StringColumn({ label: 'University Email', maxLength: 100, mandatory: true }),
    // --- ADDED THIS LINE ---
    password: StringColumn({ label: 'Password', maxLength: 128, mandatory: true }), 
    
    contact_number: StringColumn({ label: 'Contact Number', maxLength: 20 }),
    user_type: ChoiceColumn({
      label: 'User Type',
      mandatory: true,
      choices: {
        student: { label: 'Active Student', sequence: 0 },
        alumni: { label: 'Alumni', sequence: 1 }
      },
      default: 'student'
    }),
    student_id_number: StringColumn({ label: 'Student ID Number', maxLength: 20, mandatory: true }),
    department: StringColumn({ label: 'Department', maxLength: 100 }),
    program: StringColumn({ label: 'Program', maxLength: 100 }),
    customer_status: StringColumn({ label: 'Customer Status', maxLength: 50 }),
    year_level: StringColumn({ label: 'Year Level', maxLength: 10 }),
    is_regular: ChoiceColumn({
      label: 'Is Regular Student?',
      choices: { yes: { label: 'Yes', sequence: 0 }, no: { label: 'No', sequence: 1 } },
      default: 'yes'
    }),
    year_of_graduation: DateColumn({ label: 'Date of Graduation' }),
    personal_email: StringColumn({ label: 'Personal Email', maxLength: 100 })
  },
  display: 'fullname',
  accessible_from: 'public',
  allow_web_service_access: true,
  actions: ['create', 'read', 'update', 'delete']
});
