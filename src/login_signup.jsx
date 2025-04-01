import React from 'react';

function LoginSignup(){
    return (
        <div className="space-x-2">
          <a
            className="signup-button text-sm bg-transparent text-white hover:bg-gray-700 py-2 px-4 rounded-full"
            href="http://app.blacklinehorizon.com/register">
              Sign Up
          </a>
          <a 
            className="login-button text-sm bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600"
            href="http://app.blacklinehorizon.com/login">
              Log In
          </a>
        </div>
    )
}

export default LoginSignup