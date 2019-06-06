
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,ImageBackground} from 'react-native';



export default class App extends Component{


  constructor(props){
    super(props);
    this.state= {consumido: '0', status:'Ruim', porcentage:'0'}

    this.addCopo= this.addCopo.bind(this);
    this.atualizar= this.atualizar.bind(this);

  }

 atualizar(){
   let s= this.state;
    parseInt(s.porcentage);
    s.porcentage=((s.consumido/2000)*100);

    if(s.porcentage >= 100){
      s.status='Bom';
    }else{
      s.status= 'Ruim';
    }
   
    this.setState(s);
 }

  addCopo(){
  let s= this.state;
      
      parseInt(s.consumido);
      s.consumido += 200;
      
      this.setState(s);
      this.atualizar(); 
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/waterbg.png')}
         style={styles.bgimage}>
        <View> 
         <View style={styles.infoArea}>
              <View style={styles.area}>
                 <Text style={styles.areatitulo}>META</Text>
                 <Text style={styles.areaDado}>2000</Text>
              </View>

              <View style={styles.area}>
                <Text style={styles.areatitulo}>CONSUMIDO</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              
              <View style={styles.area}>
                <Text style={styles.areatitulo}>STATUS</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
         </View>

         <View style={styles.porceArea}>
             <Text style={styles.porceText}>{this.state.porcentage} %</Text>
         </View>

        <View style={styles.btnArea}>
            <Button title="Berber +200ml"
            onPress={this.addCopo} />
        </View>


         </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop:20,
  },
  bgimage:{
    flex: 1,
    width: null,

  },
  infoArea:{
    flex:1,
    flexDirection: 'row',
    marginTop: 70,

  },
  area:{
    flex:1,
    alignItems:'center',
  },
  areatitulo:{
    color:'#45b2fc'
  },
  areaDado:{
    fontSize:15,
    color: '#2b4274',
    fontWeight: 'bold',
  },
  porceArea:{
     marginTop: 130,
     alignItems: 'center',
  },
  porceText:{
        fontSize:70,
        color: '#FFFFFF',
        backgroundColor: 'transparent'

  },
  btnArea:{
     marginTop:30,
     alignItems:'center'

  }

});
