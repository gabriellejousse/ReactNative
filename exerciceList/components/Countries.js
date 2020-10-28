import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

class Countries extends React.Component {

    constructor() {
        super();
        this.state = ({
            countries: [],
            isLoading: true
        })
        this.renderItem = this.renderItem.bind(this)

    }

    componentDidMount() {

        fetch(`http://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then((resJson) => {
                //console.log(resJson)

                this.setState({
                    countries: resJson,
                    isLoading: false
                })
                console.log(this.state.countries.name)

            })



    }

    renderItem({ item }) {
        //console.log('item', item)
        return (
            <View style={styles.itemsTitle}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        PAYS :
                    </Text>
                    <Text style={styles.items}>{item.name}</Text>
                    <Text style={styles.text}>
                        CAPITALE :
                    </Text>
                    <Text style={styles.items}>{item.capital}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating></ActivityIndicator>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>

                    <FlatList
                        data={this.state.countries}
                        renderItem={this.renderItem}
                    />

                </View>
            );
        }
    }
}
export default Countries;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#F08080',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
    },
    itemsTitle: {
        alignText: 'center',
        backgroundColor: '#051A5F',
        color: 'white',
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
    },
    items: {
        marginLeft: 15,
        marginBottom: 15,
        color: 'white'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});





///


/* import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class Countries extends React.Component {

    constructor() {
        super();
        this.state = ({
            countries: [],
            capitale: []
        })
        this.renderItemCapitale = this.renderItemCapitale.bind(this)
        this.renderItemCountries = this.renderItemCountries.bind(this)
    }

    componentDidMount() {

        fetch(`http://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(json => {
                const countries = json.map((elem) => {
                    return {
                        countries: elem.name
                    }
                })
                const capitale = json.map((elem) => {
                    return {
                        capitale: elem.capital
                    }
                })

                this.setState({
                    countries: countries,
                    capitale: capitale
                })
                console.log("state", this.state)

            });

    }

    renderItemCapitale({ item }) {
        console.log('item', item)
        return (
            <View>
                <Text>{item.capitale}</Text>
            </View>
        );
    }

    renderItemCountries({ item }) {
        console.log('item', item)
        return (
            <View>
                <Text>{item.countries}</Text>
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                Capitales :
                </Text>
                <FlatList
                    data={this.state.capitale}
                    renderItem={this.renderItemCapitale}
                    style={styles.flatlist}
                />
                <Text style={styles.text}>
                    Pays :
                </Text>
                <FlatList
                    data={this.state.countries}
                    renderItem={this.renderItemCountries}
                />
            </View>
        );
    }
}
export default Countries;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
    },
    flatlist:{
        alignText: 'center'
    }
});


 */
