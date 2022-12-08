import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import Modal from 'react-native-modal';
import WarningIcon from '../../../../assets/image/group/detail/warning.svg'
import CustomButton from "../../../../common/CustomButton";

const width = Dimensions.get('window').width;
const modalWidth = width * 0.85;

const CreateConfirmModal = ({setConfirm, showBottomSheet, hide}) => {
    const onPressConfirmButton = () => {
        setConfirm(true);
    }

    return (
        <View style={styles.modalContainer}>
            <Modal
                isVisible={showBottomSheet}
                useNativeDriver={true}
                onBackdropPress={hide}
                style={{ alignSelf: 'center' }}
            >
                <View style={styles.backDrop}>
                    <View style={styles.content}>
                        <WarningIcon />

                        <Text style={styles.alertTitle}>모임 개설 후 수정이 불가합니다.</Text>
                        <Text style={styles.alertTitle}>계속하시겠어요?</Text>
                    </View>

                    <View style={styles.twoButtons}>
                        <CustomButton text="네" onPress={()=>{onPressConfirmButton(); hide();}} color={'#D7533E'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                        <CustomButton text="아니요" onPress={hide} color={'#CDCDCD'} textColor={'#FFFFFF'} style={styles.customButtonStyle} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    },
    backDrop:{
        backgroundColor: 'white', 
        borderRadius: 10,
        height: 350,
        width: modalWidth
    },
    content:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alertTitle:{
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: '600'
    },
    alertText:{
        fontSize: 14,
        color: '#7F7F7F',
    },
    customButtonStyle: {
        width: modalWidth * 0.9
    },
    twoButtons:{
        alignItems: 'center', 
        marginBottom: 10,
        flexGrow: 1,
        justifyContent: 'space-evenly'
    }
})

export default CreateConfirmModal;