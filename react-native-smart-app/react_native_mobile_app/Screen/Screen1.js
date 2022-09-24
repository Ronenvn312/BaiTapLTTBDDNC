import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Text, Image } from "react-native";

export default function Screen1({ navigation }) {
    const route = useRoute();

    var src_blue_mobile = require('../assets/xanh.png');
    var [link, setLink] = useState(src_blue_mobile);

    useEffect(() => {
        if (route.params != null) {
            setLink(route.params.message);
        }
    });
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <Image style={{ width: 270, height: 325, marginTop: 50, alignSelf: 'center' }} source={link} />
            <Text style={{ textAlign: 'center', marginTop: 26, fontSize: 18 }}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={{ alignSelf: 'flex-start', flexDirection: 'row' }}>
                <Image style={{ marginTop: 13, marginLeft: 23 }} source={require('../image/Star.png')} />
                <Image style={{ marginTop: 13, marginLeft: 2 }} source={require('../image/Star.png')} />
                <Image style={{ marginTop: 13, marginLeft: 2 }} source={require('../image/Star.png')} />
                <Image style={{ marginTop: 13, marginLeft: 2 }} source={require('../image/Star.png')} />
                <Image style={{ marginTop: 13, marginLeft: 2 }} source={require('../image/Star.png')} />
                <Text style={{ fontSize: 18, marginHorizontal: 25, marginTop: 13 }}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 20, paddingLeft: 20, marginTop: 10 }}>
                <Text flex={{ flex: 1 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image style={{ marginLeft: 10 }} source={require('../image/Group.png')} />
            </View>
            <View style={{padding: 10,flexDirection: 'row', justifyContent: 'center', paddingBottom: 60 }}>
                <TouchableOpacity style={{flex:1, padding:10,justifyContent: 'center', flexDirection: 'row', paddingLeft: 10, borderWidth: 0.8, borderRadius: 10 }}
                    onPress={() => navigation.navigate('Option')} activeOpacity={0.5}>
                    <Text>4 MÀU - CHỌN MÀU</Text>
                    <Image
                        style={{ marginLeft: 10 }}
                        source={require('../image/Vector.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 20, paddingRight:20, flex: 1, justifyContent: "flex-end", flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', paddingLeft: 10, width: 200, height: 40, borderBottomColor: 'black', borderRadius: 10, borderColor: 'red', borderWidth: 0.8, alignItems: 'center', backgroundColor: 'red' }}
                    onPress={() => navigation.navigate('Home')} activeOpacity={0.5}>
                    <Text style={{ color: 'white', fontStyle: 'normal' }}>CHỌN MUA</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
};