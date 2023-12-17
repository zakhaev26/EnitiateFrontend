import React, { useState, useEffect } from 'react';
import './toast.css'; // You can style the Toast component in a separate CSS file

interface ToastProps {
  message : string
}

const Toast = ({ message }:ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []); // This useEffect runs only once when the component mounts

  return isVisible ? <div className="toast">{message}</div> : null;
};

export default Toast;
