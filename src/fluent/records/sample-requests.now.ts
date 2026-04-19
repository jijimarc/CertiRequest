import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Sample document requests
export const sample_request_1 = Record({
  $id: Now.ID['sample-request-1'],
  table: 'x_2001423_certireq_document_request',
  data: {
    student_id: 'STU2024001',
    student_name: 'John Doe',
    email: 'john.doe@university.edu',
    department: 'Computer Science',
    document_type: 'transcript',
    urgency_level: 'standard',
    purpose: 'Application for graduate school program',
    delivery_mode: 'pickup',
    status: 'pending',
    payment_required: 'no'
  }
});

export const sample_request_2 = Record({
  $id: Now.ID['sample-request-2'],
  table: 'x_2001423_certireq_document_request',
  data: {
    student_id: 'STU2024002',
    student_name: 'Jane Smith',
    email: 'jane.smith@university.edu',
    department: 'Business Administration',
    document_type: 'diploma',
    urgency_level: 'rush',
    purpose: 'Employment verification for new job',
    delivery_mode: 'courier',
    status: 'processing',
    payment_required: 'pending',
    payment_amount: '25.00'
  }
});

export const sample_request_3 = Record({
  $id: Now.ID['sample-request-3'],
  table: 'x_2001423_certireq_document_request',
  data: {
    student_id: 'ALU2023001',
    student_name: 'Alice Johnson',
    email: 'alice.johnson@alumni.edu',
    department: 'Engineering',
    document_type: 'certificate',
    urgency_level: 'standard',
    purpose: 'Professional license application',
    delivery_mode: 'pickup',
    status: 'completed',
    payment_required: 'paid',
    payment_amount: '15.00',
    completion_date: '2024-01-15 10:30:00'
  }
});

export const sample_request_4 = Record({
  $id: Now.ID['sample-request-4'],
  table: 'x_2001423_certireq_document_request',
  data: {
    student_id: 'STU2024003',
    student_name: 'Bob Wilson',
    email: 'bob.wilson@university.edu',
    department: 'Psychology',
    document_type: 'enrollment',
    urgency_level: 'standard',
    purpose: 'Insurance verification for student discount',
    delivery_mode: 'pickup',
    status: 'ready',
    payment_required: 'no'
  }
});

export const sample_request_5 = Record({
  $id: Now.ID['sample-request-5'],
  table: 'x_2001423_certireq_document_request',
  data: {
    student_id: 'ALU2022001',
    student_name: 'Carol Brown',
    email: 'carol.brown@alumni.edu',
    department: 'Marketing',
    document_type: 'recommendation',
    urgency_level: 'rush',
    purpose: 'MBA application to prestigious university',
    delivery_mode: 'courier',
    status: 'pending',
    payment_required: 'pending',
    payment_amount: '50.00'
  }
});