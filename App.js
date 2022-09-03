import React,{useState}  from'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	
 		const [valor1, setVALOR1] = useState(20);
        const [valor2, setVALOR2] = useState(3);
	const [resultado, setResultado] = useState("");
	    function somar(){
			let r = parseFloat(valor1)+ parseFloat(valor2);
			setResultado(r);
		}
	function subtrair(){
		let r = parseFloat(valor1)- parseFloat(valor2);
			setResultado(r);
	}
	function dividir (){
		let r = parseFloat(valor1)/ parseFloat(valor2);
			setResultado(r);
	}
	function multiplicacao (){
		let r = parseFloat(valor1)* parseFloat(valor2);
			setResultado(r);
	}
	return(
	  <View style={styles.container}>
	  <View style={styles.bloco}>
		  <Text style={styles.titulo}>Calculadora simples</Text>
		  </View>
		  
		  <View style ={styles.bloco}>
		  <Text>valor 1</Text>
			<TextInput style={styles.input}
				value={valor1}
				onChangeText={(valor)=>setVALOR1(valor) }
				keyboardType="numeric"
				/>  
		  </View>
		  
		  <View style={styles.bloco}>
		  <Text> valor 2</Text>
			  <TextInput style={styles.input}
				  value={valor2}
				  onChangeText={ (valor)=>setVALOR2(valor) }
				  keyboardType="numeric"
				  />
		  </View>
		  
		  <View style={styles.bloco}>
			  <TouchableOpacity
				  style={styles.botao}
				  onPress={somar}
			  >
				  
			  <Text style={styles.botao}>somar</Text>
			  </TouchableOpacity>
		  </View>
			
			<View style={styles.bloco}>
			  <TouchableOpacity
				  style={styles.botao}
				  onPress={subtrair}
			  >
				  
			  <Text style={styles.botao}>subtrair</Text>
			  </TouchableOpacity>
		  </View>
			
			
			<View style={styles.bloco}>
			  <TouchableOpacity
				  style={styles.botao}
				  onPress={dividir}
			  >
				  
			  <Text style={styles.botao}>dividir</Text>
			  </TouchableOpacity>
		  </View>
			
			<View style={styles.bloco}>
			  <TouchableOpacity
				  style={styles.botao}
				  onPress={multiplicacao}
			  >
				  
			  <Text style={styles.botao}>multiplicacao</Text>
			  </TouchableOpacity>
		  </View>
			
			<View style={styles.bloco}>
				<Text style={styles.titulo}>
					Resultado: {resultado}
				
				</Text>	      
				</View>
				
				</View>
);
}
const styles  = StyleSheet.create({
  container: {
      flex: 1,
	},
	 bloco:{
	  marginTop:20,
	  width:'80%',
	  marginLeft:'10%',
		 color:'#7B68EE'
  },
  titulo:{
	  fontSize:30,
	  textAlign:'center',
	  backgroundColorColor:'#7B68EE'
  },
  input:{
	borderWidth:2,
	fontSize:20,
	borderRadius:10,
	  cursor: 'pointe',
	  backgroundColor:'#FFF5EE',
	  borderRadius:10,
  },
  botao:{
	  backgroundColor:'#7B68EE',
	  borderRadius:10,
	  fontSize:20,
	  fontfamily: 'cursive'
	  
  },
  textoBotao:{
	  color:'#FFF',
	  textAlign:'center',
	  fontSize:20,
  }		
});
