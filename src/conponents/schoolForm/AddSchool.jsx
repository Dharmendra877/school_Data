// SchoolForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import '../css/SchoolForm.css'; 
//import { BASE_API } from '../api';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  contactNo: yup.string().required('Phone number is required'),
  emailId: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('Name is required'),
  state: yup.string().required('Name is required'),
  
  image: yup.mixed('Image is required'),
});

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('contactNo', data.contactNo);
    formData.append('emailId', data.emailId);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('image', data.image[0]);

    try {
      await axios.post("https://669b4df3276e45187d35146c.mockapi.io/api/new/student/newStudentData", formData, {
        headers: {
          'Content-Type': 'multipart/form-data','Access-Control-Allow-Origin':'*'
        },
      });
      reset();
      alert('School data submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit school data');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="school-form">
        <div>
          <label>Name:</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input {...register('contactNo')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('emailId')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Address:</label>
          <input {...register('address')} />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        
        <div>
          <label>City:</label>
          <input {...register('city')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>State:</label>
          <input {...register('state')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Image:</label>
          <input type="file" {...register('image')} />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}; 
export default AddSchool;