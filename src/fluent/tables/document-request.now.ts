import '@servicenow/sdk/global';
import { Table, StringColumn, DateTimeColumn, ChoiceColumn } from '@servicenow/sdk/core';

export const x_2001423_certireq_document_request = Table({
  name: 'x_2001423_certireq_document_request',
  label: 'Document Request',
  schema: {
    student_id: StringColumn({ 
      label: 'Student ID', 
      maxLength: 20,
      mandatory: true 
    }),
    student_name: StringColumn({ 
      label: 'Student Name', 
      maxLength: 100,
      mandatory: true 
    }),
    email: StringColumn({ 
      label: 'Email', 
      maxLength: 100,
      mandatory: true 
    }),
    department: StringColumn({ 
      label: 'Department', 
      maxLength: 100 
    }),
    document_type: ChoiceColumn({
      label: 'Document Type',
      mandatory: true,
      choices: {
        transcript: { label: 'Official Transcript', sequence: 0 },
        diploma: { label: 'Diploma Copy', sequence: 1 },
        certificate: { label: 'Certificate of Completion', sequence: 2 },
        enrollment: { label: 'Enrollment Verification', sequence: 3 },
        recommendation: { label: 'Letter of Recommendation', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    urgency_level: ChoiceColumn({
      label: 'Urgency Level',
      mandatory: true,
      choices: {
        standard: { label: 'Standard (5-7 days)', sequence: 0 },
        rush: { label: 'Rush (2-3 days)', sequence: 1 }
      },
      dropdown: 'dropdown_without_none',
      default: 'standard'
    }),
    purpose: StringColumn({ 
      label: 'Purpose', 
      maxLength: 500,
      mandatory: true 
    }),
    delivery_mode: ChoiceColumn({
      label: 'Delivery Mode',
      mandatory: true,
      choices: {
        pickup: { label: 'Pick-up from Office', sequence: 0 },
        courier: { label: 'Courier Delivery', sequence: 1 }
      },
      dropdown: 'dropdown_without_none',
      default: 'pickup'
    }),
    status: ChoiceColumn({
      label: 'Status',
      choices: {
        pending: { label: 'Pending Review', sequence: 0 },
        processing: { label: 'Processing', sequence: 1 },
        ready: { label: 'Ready for Collection', sequence: 2 },
        completed: { label: 'Completed', sequence: 3 },
        cancelled: { label: 'Cancelled', sequence: 4 }
      },
      dropdown: 'dropdown_without_none',
      default: 'pending'
    }),
    payment_required: ChoiceColumn({
      label: 'Payment Required',
      choices: {
        no: { label: 'No Payment Required', sequence: 0 },
        pending: { label: 'Payment Pending', sequence: 1 },
        paid: { label: 'Payment Completed', sequence: 2 }
      },
      dropdown: 'dropdown_without_none',
      default: 'no'
    }),
    payment_amount: StringColumn({ 
      label: 'Payment Amount', 
      maxLength: 20 
    }),
    submitted_date: DateTimeColumn({ 
      label: 'Date Submitted',
      default: 'javascript:gs.nowDateTime()' 
    }),
    completion_date: DateTimeColumn({ 
      label: 'Completion Date' 
    }),
    notes: StringColumn({ 
      label: 'Notes', 
      maxLength: 1000 
    })
  },
  display: 'document_type',
  accessible_from: 'public',
  allow_web_service_access: true,
  actions: ['create', 'read', 'update', 'delete']
});