import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const User = [
    {
        imgSrc: require('../../../../assets/image/sample/John.jpg'),
        name: 'Will Jones',
    },
    {
        imgSrc: require('../../../../assets/image/sample/Lucy.png'),
        name: 'Will Jones',
    },
    {
        imgSrc: require('../../../../assets/image/sample/Maria.png'),
        name: 'Will Jones',
    },
]

const Participant = ({ User }) => {
    return (
        <>
            <View style={{ width: 55 }}>
                {User.slice(0, 3).map((data, index) => {
                    return (
                        <Image
                            key={index}
                            source={data.imgSrc}
                            style={[{ left: 14 * index }, styles.participantImg]}
                        />
                    )
                })}
            </View>
            <Text style={[styles.text, { justifyContent: 'center' }]}>{User.length}명</Text>
        </>
    )
}

const Place = ({ place }) => {
    return (
        <View style={styles.place}>
            <Ionicons
                name="location-sharp"
                color={'#b4c1f7'}
                size={17}
            />
            <Text style={styles.text}>{place}</Text>
        </View>
    )
}

const Date = ({ date }) => {
    return (
        <Text style={[styles.text, { color: '#586ff3' }]}>{date}</Text>
    )
}

const GroupElement = ({ groupId, title, introduction, maxNum, place, date }) => {
    const navigation = useNavigation();

    const onPress = ()=>{
        navigation.navigate('GroupDetailScreen', {
            groupId,
            title,
            introduction
        });
    }

    const groupSample_small = '../../../../assets/image/group/groupSample_small.png';
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.container]}>
                <View style={styles.topContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* 그룹 썸네일 이미지 
                        <Image source={imgSrc} style={{ width: 60, height: 55, borderRadius: 9 }} />
                        */}
                        {/* 그룹 제목, 소개글 */}
                        <View style={{ marginHorizontal: 14, }}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.introduction}>{introduction}</Text>
                        </View>
                    </View>

                    {/* 참여 중인 인원 정보 */}
                    <View style={styles.participating}>
                        <Text style={styles.participant}>3/{maxNum}</Text>
                    </View>
                </View>

                {/* 인원/장소/날짜 */}
                <View style={styles.bottomContainer}>
                    <Participant User={User} />
                    <Place place={place} />
                    <Date date={date} />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        //ios의 경우 shadow 컬러 설정 필요
        borderColor: '#EAEAEA',
        borderWidth: 1,
        borderRadius: 11,
        marginHorizontal: 14,
        marginBottom: 14,
        paddingVertical: 15,
        paddingHorizontal: 14,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'stretch'
    },
    text: {
        fontSize: 12,
        color: '#7F7F7F',
    },
    title: {
        fontSize: 14,
        color: '#1A1A1A',
        fontWeight: 'bold',
        marginBottom: 7,
    },
    place: {
        marginHorizontal: 13,
        flexDirection: 'row'
    },
    introduction: {
        fontSize: 12,
        color: '#7F7F7F',
    },
    participating: {
        width: 30,
        height: 17,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center'
    },
    participant: {
        color: '#7F7F7F',
        fontSize: 10,
        textAlign: 'center'
    },
    participantImg: {
        position: 'absolute',
        width: 21,
        height: 21,
        borderRadius: 11,
    },
})

export default GroupElement;