import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../assets/data/activitiesData';
import discoveryCategoriesData from '../assets/data/discoveryCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoveryData from '../assets/data/discoverData';
import profile from '../assets/images/person.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import discoverData from '../assets/data/discoverData';


const Home = ({navigation}) => {

    const renderDiscoveryItem = ({item}) =>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                item: item,
            })}>
                <ImageBackground
                    source={item.image}
                    style={[styles.discoverItem,
                         {marginLeft: item.id === 'discover-1' ? 20 : 0},]}
                    imageStyle={styles.discoverItemImage}
                >
                <Text style={styles.discoverItemTitle}>{item.title}</Text>

                <View style={styles.discoverItemLocationWrapper}>
                    <Entypo name="location-pin" size={18} color={colors.white} />
                <Text style={styles.discoverItemLocationLocationText}>{item.location}</Text>
           
           
                </View>
                </ImageBackground>

            </TouchableOpacity>
        );
    };


    const renderActivityItem = ({item}) =>{
    return( 
     <View style={styles.activityItemWrapper}>
         <Image source={item.image} style={styles.activityItemImage} />
           <Text style={[styles.activityItemText, {
               marginLeft: item.id === 'activities-1' ? 20 : 0,
           }]}>{item.title}</Text>
       </View>
    );
    };

    const renderLearnMoreItem = ({item}) =>{
        return(
                <ImageBackground
                   source={item.image}
                   style={[styles.learnMoreItem, {marginLeft: item.id === 'learnMore-1' ? 20 : 0,}]}
                   imageStyle={styles.learnMoreImage}
                >
                    <Text style={styles.learnMoreText}>{item.title}</Text>
                </ImageBackground>
        );
    };


    return(
        <View style={styles.container}>
            <ScrollView>
                    {/* Header */}
            <SafeAreaView>
                <View style={styles.menuWrapper}>
                    <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon} />
                    <Image  source={profile} style={styles.profileImage} /> 


                </View>
            </SafeAreaView>
            {/* Discover */}

    <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover</Text>
        <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoriesText, {color: colors.orange}]}>All</Text>
            <Text style={styles.discoverCategoriesText}>Destination</Text>
            <Text style={styles.discoverCategoriesText}>Cities</Text>
            <Text style={styles.discoverCategoriesText}>Experiences</Text>
        </View>

        <View style={styles.discoverItemsWrapper}>
           
            <FlatList 
                data={discoverData}
                renderItem={renderDiscoveryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>


    </View>


            {/* Activities  */}


        <View style={styles.activitiesWrapper}>
            <Text style={styles.activitiesTitle}>Activities</Text>

            <View style={styles.activitiesItemsWrapper}>
                <FlatList 
                    data={activitiesData}
                    renderItem={renderActivityItem}
                    keyExtractor={(item)=> item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


        </View>

        {/* Learn More  */}
        <View style={styles.learnMoreWrapper}>
            <Text style={styles.learnMoreTitle}>Learn More</Text>
            <View style={styles.learnMoreItemsWrapper}>
            <FlatList 
                data={learnMoreData}
                renderItem={renderLearnMoreItem}
                keyExtractor={(item)=> item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            </View>
        </View>



 
            </ScrollView>
        </View>
    );
};






const styles= StyleSheet.create({
    container:{
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      profileImage:{
        width: 52,
        height: 52,
        borderRadius: 10,
      },
      discoverWrapper: {
        //   marginHorizontal: 20,
          marginTop: 20,
      },
      discoverTitle: {
        marginHorizontal: 20,
            fontWeight: "bold",
            fontSize: 32,
      },
      discoverCategoriesWrapper: {
        marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 20,
      },
      discoverCategoriesText:{
        marginRight: 30,
        //   fontFamily: 'Lato-Regular',
          fontSize: 16,
          color: colors.gray,
      },
      discoverItemsWrapper: {
        paddingVertical: 20,
      },
       discoverItem:{
            width: 160,
            height: 250,
            justifyContent: 'flex-end',
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginRight: 20,
       },
       discoverItemImage: {
        borderRadius: 20,
       },
       discoverItemTitle: {
         fontWeight: 'bold',
         fontSize: 18,
         color: colors.white,
       },
       discoverItemLocationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
       },
       discoverItemLocationLocationText: {
            marginLeft: 5,
            fontWeight: 'bold',
            fontSize: 14,
            color: colors.white,
       },
       activitiesWrapper:{
           marginTop: 10,

       },
       activitiesTitle:{
           marginHorizontal: 20,
           fontWeight: 'bold',
           fontSize: 24,
           color: colors.black,
       },
       activitiesItemsWrapper:{
            paddingVertical: 20,
       }, 
       activityItemText:{
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.gray,
       },
       activityItemImage:{
        width: 36,
       },
       activityItemWrapper:{
           justifyContent: 'flex-end',
           alignItems: 'center',
           marginRight: 15,
       },


       learnMoreWrapper:{
            marginTop: 10,
       },
       learnMoreTitle:{
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: colors.black,
        fontSize: 24,
       },
       learnMoreItemsWrapper:{
           marginVertical: 20,
       },
       learnMoreItem:{
          width: 170,
          height: 180,
          justifyContent: 'flex-end',
          marginRight: 20,

       },
       learnMoreImage:{
        borderRadius: 20,
       },
       learnMoreText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
        },

    });

export default Home;