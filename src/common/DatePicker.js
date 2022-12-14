import React, {useState} from 'react';
import { Dimensions, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

export default function CustomDatePicker({setDateValue, placeholder, style, rightIcon}) {
    //const placeholder = "생년월일을 선택해주세요.";
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [text, onChangeText] = useState("");

    const handleConfirm = (date) => {
        setOpen(false);
        setDate(date);
        onChangeText(date.format("yyyy.MM.dd"))
        
        setDateValue(date.format("yyyy.MM.dd"))
    };

    return (
      <>
            <TouchableOpacity onPress={()=>{setOpen(true)}}>
                <TextInput
                    pointerEvents="none"
                    style={style? style:styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor='#B7B7B7'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}
                    //onEndEditing={onEndEditing}
                />
                <DatePicker
                    modal
                    mode="date"
                    open={open}
                    onConfirm={handleConfirm}
                    onCancel={()=>{setOpen(false)}}
                    date={date}
                />
            </TouchableOpacity>
            </>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    textInput: {
        fontSize: 16,
        color: '#000000',
        height: 52, 
        width: windowWidth*0.9, 
        borderColor: '#B7B7B7',
        borderWidth: 1, 
        borderRadius: 10,
        paddingLeft: 15,
    }
})