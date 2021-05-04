import React from 'react'
import {Button} from "react-native"

export const DeleteProduct = ({ deleteProduct }) => {
    return <Button title={"Supprimer"} onPress={deleteProduct}/>
}