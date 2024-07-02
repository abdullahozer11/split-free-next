"use client"
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qpummxvizckytrrsiaig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwdW1teHZpemNreXRycnNpYWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NjgzMDgsImV4cCI6MjAyODE0NDMwOH0.DYJIU3x0pd5Ub6PDz1vlJCs07O9WFIXokQLD0By8HbQ';
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [verif, setVerif] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmation && verif === "Delete account data permanently") {
      try {
        const { error: signInError } = await supabaseClient.auth.signInWithPassword({ email, password });

        if (signInError) {
          alert('Error signing in: ' + signInError.message);
          return;
        }

        const { error: deleteError } = await supabaseClient.rpc('deleteuser');

        if (deleteError) {
          alert('There was an error deleting your account data: ' + deleteError.message);
        } else {
          alert('Account data deleted successfully.');
          window.location.href = '/goodbye';
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error processing your request.');
      }
    } else {
      alert('Please confirm and type "Delete account data permanently" to proceed.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl w-full py-12 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
        <div className="bg-gray-800 text-white px-4 py-10 shadow-2xl sm:rounded-3xl sm:px-6 md:py-16 lg:px-8">
          <header className="text-center">
            <h1 className="text-4xl font-bold">Delete Account</h1>
          </header>
          <main className="mt-10">
            <form id="delete-account-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex items-center align-center">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  required
                  checked={confirmation}
                  onChange={(e) => setConfirmation(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="confirmation" className="ml-5 text-sm font-medium text-gray-300">
                  Are you sure you want to delete your account?
                </label>
              </div>
              <div>
                <label htmlFor="verif" className="block text-sm font-medium text-gray-300">{'Type "Delete account data permanently"'}</label>
                <input
                  type="text"
                  id="verif"
                  name="verif"
                  required
                  value={verif}
                  onChange={(e) => setVerif(e.target.value)}
                  className="mt-1 block w-full px-5 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Delete Account
              </button>
            </form>
          </main>
        </div>
      </div>
    </main>
  );
}
