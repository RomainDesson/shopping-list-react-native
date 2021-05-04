import React, {useState} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import {ProductCard} from "../product-card/product-card";
import tailwind from 'tailwind-rn'

export const ProductsList = () => {
    const [productsList, setProductsList] = useState([])
    const [product, setProduct] = React.useState('')
    const [isModifying, setIsModifying] = useState(false)
    const [productKey, setProductKey] = useState('')
    const random = Math.random().toString(36).substr(2, 9)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 22
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
        input: {
            height: 40,
            width: 200,
            margin: 12,
            borderWidth: 1,
        }
    })
    const addProductToList = () => {
        if (product !== '' && product[0] !== ' ') {
            setProductsList(productsList => productsList.concat({name: product, key: random}))
            setProduct('')
        }
    }
    const deleteProduct = (data) => {
        const newProductsList = productsList.filter(product => product.key !== data.key)
        setProductsList(newProductsList)
    }
    const getProductToModify = (data) => {
        setProduct(data.name)
        setProductKey(data.key)
        setIsModifying(true)
    }
    const modifyProduct = () => {
        const newProduct = {
            name: product,
            key: productKey
        }
        productsList.find(product => {
            if(product.key === productKey) {
                setProduct(newProduct)
                setProductsList(productsList.map(product => product.key === productKey ? newProduct : product))
            }
        })
        setProduct('')
        setIsModifying(false)
    }
    return (
        <View style={tailwind('flex items-center')}>
            <Text style={tailwind('text-3xl')}>Shopping List</Text>
            <TextInput
                style={styles.input}
                onChangeText={setProduct}
                value={product}
                onSubmitEditing={isModifying ? modifyProduct : addProductToList}/>
            <Button
                title={isModifying ? 'Modifier' : 'Ajouter'}
                onPress={isModifying ? modifyProduct : addProductToList}/>
            <FlatList data={productsList}
                      style={tailwind('')}
                      renderItem={({item}) =>
                          <ProductCard
                              style={styles.item}
                              productsList={productsList}
                              deleteProduct={deleteProduct}
                              getProductToModify={getProductToModify}>
                              {item}
                         </ProductCard>} />
        </View>
    )
}