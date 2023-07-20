import React from 'react';
const ErrorMessage = ({children}) => {
  
    return (
       
        <div style={{ paddingBottom: '30px'  ,marginLeft: '50px'
    
        }}>
            <strong className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">{children}</strong>
        </div>
    );
};
export default ErrorMessage;