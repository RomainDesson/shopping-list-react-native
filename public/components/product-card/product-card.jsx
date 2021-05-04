import React from 'react'
import {Text, View} from "react-native";
import {DeleteProduct} from "../../features/delete-product/delete-product";
import {ModifyProduct} from "../../features/modify-product/modify-product";
import tailwind from 'tailwind-rn'


export const ProductCard = ({children, style, productsList, deleteProduct, getProductToModify}) => {

    return (
        <View style={tailwind('flex flex-row items-center w-80 mt-4 rounded-lg border-b')}>
            <Text style={style}>{children.name}</Text>
            <DeleteProduct children={children} productsList={productsList} deleteProduct={() => deleteProduct(children)} />
            <ModifyProduct getProductToModify={() => getProductToModify(children)}/>
        </View>
    )
}