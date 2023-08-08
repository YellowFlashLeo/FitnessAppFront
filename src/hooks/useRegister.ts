import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { axiosInstance } from '../services/api-client'
import { useNavigate } from 'react-router-dom';
import { CustomError } from '../entities/CustomError';
import { UserRegistrationModel } from '../entities/UserRegistrationModel';

const useRegister = () => {
    const navigate = useNavigate();

   return useMutation(
    (userToBeRegistered:UserRegistrationModel) => 
    axiosInstance.post('/Identity/Register',userToBeRegistered),{
        onSuccess:()=>{
          navigate('/login');
        },
        onError:(error : CustomError) => {
        }
    }
 );
}

export default useRegister