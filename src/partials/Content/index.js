import React, { useState, useEffect, useCallback } from 'react';
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
  Temperture,
  Weather,
  Aimg,
  Rimg,
  Himg,
  Refresh,
  SmallTxt,
} from './style';
import { ContentMiddle } from '../../style/style';

export default function Content() {
  const fetchCurrentWeather = () => {
    // 向 requestURL 發送請求
    // Step 3-1：加上 return 直接把 fetch API 回傳的 Promise 回傳出去
    return (
      fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-3DED4E61-41D6-4E5D-BD04-0DD81978C290'
      )
        // 取得伺服器回傳的資料並以 JSON 解析
        .then((response) => response.json())
        // 取得解析後的 JSON 資料
        .then((data) => {
          // Step A：定義 `locationData` 把回傳的資料中會用到的部分取出來
          const locationData = data.records.location[11];
          // Step B：將風速（WDSD）、氣溫（TEMP）和濕度（HUMD）的資料取出
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
          // Step C：要使用到 React 組件中的資料
          // Step 3-2：把取得的資料內容回傳出去，而不是在這裡 setWeatherElement
          return {
            time: locationData.time.obsTime,
            location: locationData.locationName,
            temperature: weatherElements.TEMP,
            windSpeed: weatherElements.WDSD,
            humid: weatherElements.HUMD,
          };
        })
    );
  };
  const fetchCurrentForecast = () => {
    // 向 requestURL 發送請求
    // Step 3-1：加上 return 直接把 fetch API 回傳的 Promise 回傳出去
    return (
      fetch(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3DED4E61-41D6-4E5D-BD04-0DD81978C290&locationName=%E8%87%BA%E5%8C%97%E5%B8%82'
      )
        // 取得伺服器回傳的資料並以 JSON 解析
        .then((response) => response.json())
        // 取得解析後的 JSON 資料
        .then((data) => {
          // Step A：定義 `locationData` 把回傳的資料中會用到的部分取出來
          const locationData = data.records.location[0];
          // Step B：將天氣現象（Wx）、降雨機率（PoP）、舒適度（CI）的資料取出
          const weatherElements = locationData.weatherElement.reduce(
            (neededElements, item) => {
              // 天氣現象（Wx）、降雨機率（PoP）、舒適度（CI）>>> console 回傳回來的數值（藏很深）
              if (['Wx', 'CI', 'PoP'].includes(item.elementName)) {
                neededElements[item.elementName] = item.time[0].parameter;
              }
              return neededElements;
            },
            {}
          );
          // Step C：要使用到 React 組件中的資料
          // Step 3-2：把取得的資料內容回傳出去，而不是在這裡 setWeatherElement
          return {
            status: weatherElements.Wx.parameterName,
            weatherCode: weatherElements.Wx.parameterValue,
            rain: weatherElements.PoP.parameterName,
            comfortability: weatherElements.CI.parameterName,
          };
        })
    );
  };
  console.log('invoke function component');
  const [weatherElement, setWeatherElement] = useState({
    time: '2020-07-17 08:00',
    location: '呆霸洗',
    status: '多雲時晴',
    temperature: 41,
    rain: 30,
    windSpeed: 0.3,
    humid: 0.83,
    comfortability: '',
  });
  const fetchData = useCallback(() => {
    const fetchingData = async () => {
      const [currentWeather, weatherForecast] = await Promise.all([
        fetchCurrentWeather(),
        fetchCurrentForecast(),
      ]);
      setWeatherElement({
        ...currentWeather,
        ...weatherForecast,
      });
    };
    fetchingData();
  }, []);
  // dependencies 改變才會產生新的 fetchData
  useEffect(() => {
    console.log('execute function in useEffect');
    fetchData();
  }, [fetchData]);
  // fetchData 改變才會產生新的 fetchData
  return (
    <Wrapper>
      {console.log('render')}
      <Helmet title="Weather APP" />
      <ContentMiddle>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card>
              <Row>
                <Location>{weatherElement.location}</Location>
              </Row>
              <Status>
                {weatherElement.status} {weatherElement.comfortability}
              </Status>
              <Row justifyContent="space-between">
                <Temperture>
                  {Math.round(weatherElement.temperature)}
                  <SmallTxt>°C</SmallTxt>
                </Temperture>
                <Weather></Weather>
              </Row>
              <Row>
                {/* 降雨機率 */}
                <Rimg></Rimg>
                <Text>{weatherElement.rain}%</Text>
              </Row>
              <Row>
                <Aimg></Aimg>
                <Text>{weatherElement.windSpeed} m/h</Text>
              </Row>
              <Row>
                <Himg></Himg>
                <Text>{weatherElement.humid * 100}%</Text>
              </Row>
              <Row justifyContent="flex-end">
                <Text fontSize="12px">
                  最後觀測時間：
                  {new Intl.DateTimeFormat('zh-TW', {
                    hour: '2-digit',
                    minute: 'numeric',
                  }).format(new Date(weatherElement.time))}
                </Text>
                <Refresh onClick={fetchData}></Refresh>
              </Row>
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
