import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect} from 'react'
import Swiper from 'react-native-swiper'

const Carousel = () => {
    const images = [
        require("../assets/flyer1.jpg"),
        require("../assets/flyer2.jpg"),
        require("../assets/flyer3.jpg"),
    ]
    const {width, height} = Dimensions.get("window")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect (() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000)
        return () => clearInterval(timer)
    }, [])
  return (
    <Swiper 
        style={{height: 100}}
        autoplay={true}
        showsPagination={true}
        loop={false}
        index={currentIndex}
    >
        {images.map((image, index) => (
            <View key={index} style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={image}
                    style={{
                        resizeMode: 'cover', height: height / 5, width: width - 30
                    }}
                />
            </View>
        ))}

    </Swiper>
  )
}

export default Carousel

const styles = StyleSheet.create({})