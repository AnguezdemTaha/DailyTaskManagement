// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import films from '../Helpers/filmsData'

_displayDetailForFilm = (idFilm) => {
   //console.log("Display film with id " + idFilm)
   this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
 }


class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
