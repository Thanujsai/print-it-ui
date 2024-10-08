import React, { useState } from 'react';
import styled from 'styled-components';
import '../css/UploadPage.css';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);  // Note the change here

    fetch('http://localhost:5001/api/upload-image', {  // Updated endpoint
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Success:', data);
          alert('File uploaded successfully!');
        } else {
          alert('File upload failed!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('File upload failed!');
      });
  };

  const handleBack = () => {
    navigate("/")
  }

  return (
    <MyComponent>
      <Container>
        <Title>Upload Your 3D Model</Title>
        <Input type="file" accept=".stl,.obj,.fbx,.jpg" onChange={handleFileChange} />
        <div className='button-container'>
        <Button onClick={handleUpload}>Upload</Button>
        <Button onClick={handleBack}>Back</Button>
        </div>
      </Container>
    </MyComponent>
  );
};

export default UploadPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 200px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF;
    color: #00008B;
  }
`;

const MyComponent = styled.div`
  background-image: url('/src-images/background.jpg');
  background-size: cover; /* Ensures the image covers the entire component */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
