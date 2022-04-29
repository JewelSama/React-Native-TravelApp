import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Alert} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';



const {height, width} = Dimensions.get("window");


const Details = ({route, navigation}) => {

    const {item} = route.params;
    return(
        <View style={styles.container}>
            <ImageBackground source={item.image} 
            style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backIcon} onPress={()=> navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationtext}>{item.location}</Text>
                    </View>

                </View>
            </ImageBackground> 
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                <Entypo name="heart" size={32} color={colors.orange} />
            </View>

                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infotextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Ratimg</Text>
                        <View style={styles.infotextWrapper}>
                            <Text style={styles.infoText}>${item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infotextWrapper}>
                            <Text style={styles.infoText}>${item.duration}</Text>
                            <Text style={styles.infoSubText}>hours</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.btnWrapper} onPress={jlert}>
                    <Text style={styles.btnText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const jlert = () =>{
    Alert.alert('Yay 💃', 'You Booked a Trip 👜💼', [{text:'Arigatou😌'}]);
}










const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage:{
        height: height * 0.55,
        justifyContent: 'space-between',
    },
    descriptionWrapper:{
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 60,
    },
    titleWrapper:{
        marginBottom: 40,
    },
    itemTitle:{
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.white,
    },
    locationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationtext:{
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.white,
    },
    heartWrapper:{
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    },
    descriptionTextWrapper:{
        marginTop: 25,
        marginHorizontal: 20,
    },
    descriptionTitle:{
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.black,
    },
    descriptionText:{
        marginTop: 10,
        fontWeight: "600",
        fontSize: 16,
        color: colors.darkGray,
        height: 80,
    },
    infoWrapper:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    infoItem:{},
    infoTitle:{
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.darkGray,
    },
    infotextWrapper:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    infoText:{
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.orange,
    },
    infoSubText:{
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.gray,
    },
    btnWrapper:{
        marginHorizontal: 20,
        marginTop: 15,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 12,
    },
    btnText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        borderRadius: 10,
    }




});
export default Details;