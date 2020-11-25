//-----------------------------------------------------------------
import AsyncStorage from '@react-native-community/async-storage';

//----------------------------------------------------------------

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_date_user', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_date_user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem('@storage_date_user');
    return true;
  } catch (error) {
    return false;
  }
};

export {storeData, getData, removeData};
