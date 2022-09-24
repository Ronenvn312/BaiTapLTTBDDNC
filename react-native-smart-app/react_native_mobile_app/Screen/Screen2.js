// -- rfc
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen2({navigation}) {

  const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
  var blue = require('../assets/xanh.png');
  var silve = require('../image/bac.png');
  var red = require('../image/do.png');
  var black = require('../image/den.png');
  var image = { blue, silve, red, black };
  var [link, setLink] = useState(image.blue);
  var [title_color, setTitle_color] = useState("");
  var [color, setColor] = useState("");
  var [provide, setProvide] = useState("");
  var [provider, setProvider] = useState("");
  var [cost, setCost] = useState("");
  var [i, seti] = useState(0);
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }} >
      <View style={{ flex: 0.2, flexDirection: 'row' }}>
        <Image style={{ width: 110, height: 130, marginLeft: 10, alignSelf: 'flex-start' }} source={link} />
        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <View style={{ marginTop: 9, flexDirection: 'row' }}>
            <Text style={{ fontSize: 18 }}>{title_color}</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{color}</Text>
          </View>
          <View style={{ marginTop: 9, flexDirection: 'row' }}>
            <Text style={{ fontSize: 18 }}>{provide}</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{provider}</Text>
          </View>
          <Text style={{ marginTop: 9, fontSize: 18, fontWeight: 'bold' }}>{cost}</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#dfe3e3', marginTop: 20 }}>
        <Text style={{ fontSize: 15, marginLeft: 17, marginTop: 5 }}>Chọn 1 màu bên dưới: </Text>
        <TouchableOpacity onPressIn={onPress1} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'silver', marginTop: 5 }}></TouchableOpacity>
        <TouchableOpacity onPressIn={onPress2} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'red', marginTop: 5 }}></TouchableOpacity>
        <TouchableOpacity onPressIn={onPress3} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'black', marginTop: 5 }}></TouchableOpacity>
        <TouchableOpacity onPressIn={onPress4} activeOpacity={0.5} style={{ alignSelf: 'center', width: 100, height: 105, backgroundColor: 'blue', marginTop: 5 }}></TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home', { message: link })} activeOpacity={0.5} style={{ marginTop: 10, flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 30, backgroundColor: '#1789ff' }}>
          <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  function onPress1() {
    return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Bạc"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setLink(image.silve),
      seti(i = 1)
    );
  }
  function onPress2() {
    return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Đỏ"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setLink(image.red),
      seti(i = 2)
    );
  }
  function onPress3() {
    return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Đen"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setLink(image.black),
      seti(i = 3)
    );
  }
  function onPress4() {
    return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Xanh"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setLink(image.blue),
      seti(i = 4)
    );
  }
}
