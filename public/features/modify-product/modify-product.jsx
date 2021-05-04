import React from 'react'
import {Button} from "react-native";

export const ModifyProduct = ({ getProductToModify }) => {
    return <Button title={"Modifier"} onPress={getProductToModify}/>
}