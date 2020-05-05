/*global kakao*/
import React, { Component } from 'react';

const Style = {
  map: {
    width: "80%",
    height: "300px",
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '50px',
    borderRadius: "1em"
  }
}

const store = {
  first: {
    storeTitle: "안양점",
    lat: 37.400046,
    lng: 126.923564,
  },
  second: {
    storeTitle: "범계점",
    lat: 37.390884,
    lng: 126.954646,
  },
}

class MapContent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { mapTarget } = this.props
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=f9e8d61a7a2cab818654d22b5acc1129&autoload=false`
    document.head.appendChild(script);

    if (mapTarget) {
      script.onload = () => {
        kakao.maps.load(() => {

          let container = document.getElementById(mapTarget);
          let options = {
            center: new kakao.maps.LatLng(store[mapTarget].lat, store[mapTarget].lng),
            level: 4
          };
          const map = new window.kakao.maps.Map(container, options);
          // 마커가 표시될 위치입니다 
          let markerPosition = new kakao.maps.LatLng(store[mapTarget].lat, store[mapTarget].lng);

          // 마커를 생성합니다
          let marker = new kakao.maps.Marker({
            position: markerPosition
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
          //map.setDraggable(false);    

        });
      };
    }

  }


  render() {
    const { mapTarget } = this.props
    return <div id={mapTarget} style={Style.map}></div>; // 이부분이 지도를 띄우게 될 부분.
  }
}

export default MapContent;