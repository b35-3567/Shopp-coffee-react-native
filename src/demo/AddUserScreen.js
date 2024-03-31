// Import necessary components from React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AddUserScreen = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleAddUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
          phone,
          address,
        }),
      });
      
      if (response.ok) {
        Alert.alert('Success', 'User added successfully');
      } else {
        throw new Error('Failed to add user');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while adding user');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

export default AddUserScreen;
