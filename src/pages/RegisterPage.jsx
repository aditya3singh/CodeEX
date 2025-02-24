import React from 'react';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Create Account</h1>
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage; 