import React, { useState, useEffect } from 'react';
//meta tags
import Helmet from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import {
  Wrapper,
  Card,
  Text,
  Location,
  Status,
  Row,
  Row2,
  Temperture,
  Weather,
  Aimg,
  Rimg,
  Refresh,
  SmallTxt,
} from './style';
import { ContentMiddle } from '../../style/style';

export default function Content() {
  console.log('invoke function component');
  const [weatherElement, setWeatherElement] = useState({
    time: '2020-07-17 08:00',
    location: '呆霸洗',
    status: '多雲時晴',
    temperature: 31,
    rainPossibility: 0.83,
    windSpeed: 0.3,
    humid: 0.83,
  });
  useEffect(() => {
    console.log('execute function in useEffect');
    fetchCurrentWeather();
    fetchCurrentForecast();
  }, []);
  const fetchCurrentWeather = () => {
    // 向 requestURL 發送請求
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-3DED4E61-41D6-4E5D-BD04-0DD81978C290'
    )
      // 取得伺服器回傳的資料並以 JSON 解析
      .then((response) => response.json())
      // 取得解析後的 JSON 資料
      .then((data) => {
        console.log('data', data);
        // STEP 1：定義 `locationData` 把回傳的資料中會用到的部分取出來
        const locationData = data.records.location[11];
        // STEP 2：將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            // 風速（WDSD）、氣溫（TEMP）、濕度（HUMD）>>> console 回傳回來的數值（藏很深）
            if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        );
        // STEP 3：要使用到 React 組件中的資料
        setWeatherElement((prevState) => ({
          time: locationData.time.obsTime,
          location: locationData.locationName,
          status: '晴時多雨',
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          humid: weatherElements.HUMD,
        }));
      });
  };
  const fetchCurrentForecast = () => {
    fetch(
      'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3DED4E61-41D6-4E5D-BD04-0DD81978C290&locationName=%E8%87%BA%E5%8C%97%E5%B8%82'
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            // 風速（WDSD）、氣溫（TEMP）、濕度（HUMD）>>> console 回傳回來的數值（藏很深）
            if (['Wx', 'CI', 'PoP'].includes(item.elementName)) {
              neededElements[item.elementName] = item.time[0].parameter;
            }
            return neededElements;
          },
          {}
        );
        setWeatherElement((prevState) => ({
          description: weatherElements.Wx.parameterName,
          weatherCode: weatherElements.Wx.parameterValue,
          rainPossibility: weatherElements.PoP.parameterName,
          comfortability: weatherElements.CI.parameterName,
        }));
      });
  };
  return (
    <Wrapper>
      {console.log('render')}
      <Helmet title="Weather APP" />
      <ContentMiddle>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card>
              <Text>{weatherElement.time}</Text>
              <Row>
                <Location>{weatherElement.location}</Location>
                <Refresh
                  onClick={() => {
                    fetchCurrentWeather();
                    fetchCurrentForecast();
                  }}
                ></Refresh>
              </Row>
              <Status>{weatherElement.status}</Status>
              <Row>
                <Temperture>
                  {Math.round(weatherElement.temperature)}
                  <SmallTxt>°C</SmallTxt>
                </Temperture>
                <Weather></Weather>
              </Row>
              <Row2>
                {/* 降雨機率 */}
                <Rimg></Rimg>
                <Text>{weatherElement.rainPossibility}%</Text>
              </Row2>
              <Row2>
                <Aimg></Aimg>
                <Text>{weatherElement.windSpeed} m/h</Text>
              </Row2>
              <Row2>
                <Rimg></Rimg>
                <Text>{weatherElement.humid * 100}%</Text>
              </Row2>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card>grid - 2</Card>
          </Grid>
        </Grid>
      </ContentMiddle>
    </Wrapper>
  );
}
