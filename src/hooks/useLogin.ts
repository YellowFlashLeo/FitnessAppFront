import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomError } from '../entities/CustomError';
import { LogingUser } from '../entities/LogingUser';
import { axiosInstance } from '../services/api-client';
import useStore from '../store/userStore';

const useLogin = () => {
    const logout = useStore((s)=>s.logout);
    const navigate = useNavigate();

  return useMutation(
    (logingUser:LogingUser) => 
     axiosInstance.post('/Identity/token', logingUser),{
      onSuccess: () => {
        navigate('/')
      },
      onError:(error:CustomError) => {
            logout();
        }
     }
  );
}

export default useLogin