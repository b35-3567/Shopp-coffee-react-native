
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { launchCamera } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Sc4_15_3_24 = () => {
    const [imageLocal, setImageLocal] = useState('');

    const takePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            cameraType: 'back',
            saveToPhotos: true,
        };

        launchCamera(options, async (response) => {
            if (!response.didCancel && !response.errorCode) {
                // Lưu ảnh vào bộ nhớ của thiết bị
                const imagePath = `${RNFS.DocumentDirectoryPath}/${response.assets[0].fileName}`;
                try {
                    await RNFS.writeFile(imagePath, response.assets[0].uri, 'base64');
                    console.log('Ảnh đã được lưu vào:', imagePath);
                    setImageLocal(imagePath);
                } catch (error) {
                    console.log('Lỗi khi lưu ảnh:', error);
                }
            }
        });
    };

    return (
        <View>
            <Button
                title='Chụp ảnh'
                onPress={takePhoto}
            />
            {
                imageLocal !== '' &&
                <Image
                    source={{ uri: `file://${imageLocal}` }}
                    style={{ width: 200, height: 200 }}
                />
            }
        </View>
    );
};

export default Sc4_15_3_24;

const styles = StyleSheet.create({});

/*
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { launchCamera,launchImageLibrary  } from 'react-native-image-picker';
import axios from 'axios';

const Sc4_15_3_24 = () => {
    const [imageLocal, setImageLocal] = useState('');
    const [imageOnline, setImageOnline] = useState('');

    const takePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            cameraType: 'back',
            saveToPhotos: true,
        };
        try {
            launchCamera(options, async (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    console.log('response', response);
                    // Lấy đường dẫn của file hình ảnh từ response
                    const imageUri = response.assets[0].uri;
                    console.log('Image URI:', imageUri);
                    
                    // Hiển thị ảnh vừa chụp lên giao diện
                    setImageLocal(imageUri);
                    
                    // Upload ảnh lên server (nodeJS/firebase/cloudinary,...)
                    try {
                        const data = new FormData();
                        data.append('file', {
                            name: response.assets[0].fileName,
                            type: response.assets[0].type,
                            uri: response.assets[0].uri,
                        });
                        data.append('upload_preset', 'ml_default');
    
                        const result = await axios.post('https://api.cloudinary.com/v1_1/dffuzgy5h/image/upload', data);
                        console.log('ket qua: ', result);
                    } catch (error) {
                        console.log('Axios: ', error);
                    }
                }
            });
        } catch (error) {
            console.log('error', error);
        }
    };
    

    return (
        <View>
            <Button
                title='Take photo'
                onPress={takePhoto}
            />
            {
                imageLocal !== '' &&
                <Image
                    source={{ uri: imageLocal }}
                    style={{ width: 200, height: 200 }}
                />
            }
            {
                imageOnline !== '' &&
                <Image
                    source={{ uri: imageOnline }}
                    style={{ width: 300, height: 300 }}
                />
            }
        </View>
    );
};

export default Sc4_15_3_24;

const styles = StyleSheet.create({});
*/
/*
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker'; // Import launchImageLibrary
import axios from 'axios';

const Sc4_15_3_24 = () => {
    const [imageLocal, setImageLocal] = useState('');
    const [imageOnline, setImageOnline] = useState('');

    const choosePhoto = () => { // Rename takePhoto to choosePhoto
        const options = {
            mediaType: 'photo',
            quality: 1,
            cameraType: 'back',
            saveToPhotos: true,
        };
        try {
            launchImageLibrary(options, async (response) => { // Use launchImageLibrary
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled photo picker');
                } else if (response.errorCode) {
                    console.log('ImagePicker Error: ', response.errorMessage);
                } else {
                    console.log('response', response);
                    const imageUri = response.assets[0].uri;
                    console.log('Image URI:', imageUri);
                    
                    setImageLocal(imageUri);
                    
                    try {
                        const data = new FormData();
                        data.append('file', {
                            name: response.assets[0].fileName,
                            type: response.assets[0].type,
                            uri: response.assets[0].uri,
                        });
                        data.append('upload_preset', 'ml_default');
    
                        const result = await axios.post('https://api.cloudinary.com/v1_1/dffuzgy5h/image/upload', data);
                        console.log('ket qua: ', result);
                    } catch (error) {
                        console.log('Axios: ', error);
                    }
                }
            });
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <View>
            <Button
                title='Choose photo' // Change button title
                onPress={choosePhoto} // Change onPress function
            />
            {
                imageLocal !== '' &&
                <Image
                    source={{ uri: imageLocal }}
                    style={{ width: 200, height: 200 }}
                />
            }
            {
                imageOnline !== '' &&
                <Image
                    source={{ uri: imageOnline }}
                    style={{ width: 300, height: 300 }}
                />
            }
        </View>
    );
};

export default Sc4_15_3_24;

const styles = StyleSheet.create({});
*/