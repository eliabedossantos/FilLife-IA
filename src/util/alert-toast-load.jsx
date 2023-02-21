import React from 'react';
import {ActivityIndicator, Alert, StatusBar, Text, View} from 'react-native';

class AlertCustom {
  statusBar() {
    return <StatusBar barStyle={'dark-content'} />;
  }

  alert(text, func = null, title = null) {
    Alert.alert(
      title || 'Alerta',
      text,
      [
        {
          text: 'OK',
          onPress: () => {
            if (func) {
              func();
            }
          },
        },
      ],
      {cancelable: false},
    );
  }

  confirm(text, func = null, title = 'Confirmar', func_cancel = null) {
    Alert.alert(
      title,
      text,
      [
        {
          text: 'Cancelar',
          onPress: () => {
            if (func_cancel) {
              func_cancel();
            }
          },
        },
        {
          text: 'Confirma',
          onPress: () => {
            if (func) {
              func();
            }
          },
        },
      ],
      {cancelable: false},
    );
  }

  loading(_visible, _text = null) {
    if (!_visible) {
      return;
    }

    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 999,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 10,
            backgroundColor: '#000000',
            opacity: 0.6,
          }}>
          {_text != '' && (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 28,
                marginBottom: 20,
              }}>
              {_text}
            </Text>
          )}
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </View>
    );
  }

  loadingPage(loading = true) {
    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 10,
            backgroundColor: '#000000',
            opacity: 0.8,
          }}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      );
    }
  }

  lat = 0;
  lng = 0;

  // modificar para @react-native-community/geolocation
  /*getCurrentPosition() {
    let options = {
      timeout: 30 * 1000, // timeout (ms)
      maximumAge:
        (global.config.debug || global.usuario.myprofile.perfil == 9
          ? 60
          : 1) *
        30 *
        1000, // maximumAge (ms) - Defaults to INFINITY.
      enableHighAccuracy: true, // enableHighAccuracy (bool) - On Android, if the location is cached this can return almost immediately, or it will request an update which might take a while.
    };

    return new Promise((resolve, reject) => {
      // modificar para @react-native-community/geolocation
      navigator.geolocation.getCurrentPosition(
        res => {
          // exemplo_ret = {
          //     coords: {
          //         accuracy: 12.13599967956543,
          //         altitude: 594,
          //         heading: 206.8000030517578,
          //         latitude: -21.20096419,
          //         longitude: -47.77231841,
          //         speed: 0.3799999952316284,
          //     },
          //     mocked:false,
          //     timestamp:1525121456000
          // }
          let obj = res.coords;
          this.lat = obj.latitude;
          this.lng = obj.longitude;
          resolve(res);
        },
        err => {
          reject(err);
          this.alert(
            'Não foi possível conseguir a sua localização, verifique o GPS.',
          );
        },
        options,
      );
    });
  }*/

  fn_distance(p_x1, p_y1, p_x2, p_y2) {
    let r, p1LA, p1LO, p2LA, p2LO, dLat, dLong, P, a, c;

    r = 6371.0;
    P = Math.PI;
    p1LA = (p_x1 * P) / 180.0;
    p1LO = (p_y1 * P) / 180.0;
    p2LA = (p_x2 * P) / 180.0;
    p2LO = (p_y2 * P) / 180.0;

    dLat = p2LA - p1LA;
    dLong = p2LO - p1LO;

    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(p1LA) *
        Math.cos(p2LA) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return r * c;
  }
}

export var alert = new AlertCustom();
global.alerta = alert;
