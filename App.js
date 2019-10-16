import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "a491f354eb109d204e8b2e30c0c6ab96";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
      });
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // Send to APO and get weather
    } catch (error) {
      Alert.alert("현재 위치의 날씨정보를 가져올 수 없습니다.", "설정>애플리케이션>Expo>앱 권한의 탭에서 변경할 수 있습니다. ")
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={ Math.round(temp) } condition={ condition } />
    );
  }
}
