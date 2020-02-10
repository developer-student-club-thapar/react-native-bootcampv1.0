import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import Card from "./src/components/Card";
import CardSection from "./src/components/CardSection";
import Button from "./src/components/Button";

export default function App() {
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <View style={{marginTop: 30}}>
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{uri: "https://source.unsplash.com/random"}}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>This is title</Text>
                        <Text>This is subtitle</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image
                        style={imageStyle}
                        source={{uri: "https://source.unsplash.com/random"}}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={() => {}}>Buy Now</Button>
                </CardSection>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});
