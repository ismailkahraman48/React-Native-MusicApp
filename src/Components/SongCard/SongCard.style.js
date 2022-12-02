import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        flexDirection : 'row'
    },
    image : {
        height : 100,
        width : 100,
        borderRadius : 50
    },
    inner_container : {
        justifyContent : 'center',
        padding : 10,
        flex : 1
    },
    title : {
        fontWeight : 'bold',
        fontSize : 23
    },
    info_container : {
        flexDirection : 'row',
        alignItems : 'center',
        flex : 1,


    },
    year : {
        fontSize : 15,
        marginLeft : 10,
        color : 'gray',
        fontWeight : "bold"
    },
    soldout_container : {
        padding : 5,    
        borderWidth : 1,
        borderRadius : 5,
        borderColor : 'red',

    },
    soldout_title : {
        color : 'red'
    },
    content_container : {
        flexDirection : 'row',
        
    }

})