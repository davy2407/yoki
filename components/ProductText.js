import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";
import {modalStyle} from "../style/modalStyle"; 

export default class ProductText extends React.Component {
  constructor() {
    super();
  }

  render() {

    if(this.props.data == null){
      return null;
    }
    return (
        <View 
        style={modalStyle.classTest}>

          <View 
          style={modalStyle.conteneurNomProduit}
          >
            {/* Nom FR */}
          <Text
          style={modalStyle.nomProduit}>{this.props.data.product_name_fr}</Text>
          </View>


          
         <View>
            {/* Niveau NUtirion */}
          {/* A>B>C>D>E>Unknown */}

          <Text style= {modalStyle.fontMain}>Classment Nutrition ( A>B>C>D>E>Unknown ) :</Text>
          <Text style= {modalStyle.redd}> {this.props.data.nutrition_grade_fr}</Text>
         </View>


         <View>
          {/* Nombre ingrédients avec huil de palme  */}
          <Text style= {modalStyle.fontMain}>Nombre d'ingrédients contenant de l'huile de Palme : </Text>
          <Text style= {modalStyle.nBHuile}>{this.props.data.ingredients_from_or_that_may_be_from_palm_oil_n}</Text>
          </View>

          <Text>Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. Pas Fini.. </Text>


          <View>
            {/* Allergènes  */}
          
          
          <Text>{this.props.data.allergens_from_ingredients}</Text>
          </View>
          <View>
            {/* Image produit */}
          <Image
          style={{width:100, height: 100}}
          source={{uri: this.props.data.image_front_url}}
        />
          </View>

        <View>
          {/* Text Publicitaire */}
        <Text>{this.props.data.generic_name_fr}</Text>
        </View>
        <View>
        {/* Liste ingredients */}
        <Text>{this.props.data.ingredients_text_fr}</Text>
        </View>


        
        

        </View>
    );
  }
}