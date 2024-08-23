// import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, View,  } from 'react-native';
//import Image1 from './assets/icon.png'
export default function App() {
  return (
    <View style={{paddingTop:Platform.OS === "android" ? StatusBar.height: 0}}>  
      <ScrollView>
        <Text>Welcome to React Native</Text>
        
        {/* WORKING WITH IMAGES */}
        <Image source={require("./assets/icon.png")} style={{width:"100%", height:200}}/>   
        <Image source={require("./assets/Bootstrap.png")} style={{width:"100%", height:200}} />
        <Image source={{uri:"https://picsum.photos/200/300"}} style={{width:200, height:200}}/> 
        < Button title='Next' color={'red'}/>
        <ImageBackground source={require("./assets/icon.png")} style={{width:300, height:900}} />
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptate ut eligendi laudantium eum, adipisci mollitia illum numquam non suscipit fugit soluta quis cum deserunt enim veritatis esse molestiae voluptates ducimus odio ipsum, optio inventore? Id praesentium blanditiis consequuntur cupiditate cumque, similique labore veniam soluta tempore magnam, quis, totam nobis vel reiciendis deserunt tempora at tenetur culpa dignissimos nisi. Est quos perferendis error distinctio deserunt porro sit eos quia nisi! Quas repudiandae tenetur, eum qui excepturi impedit quam voluptatem itaque ipsa unde minima quidem ad ullam laudantium beatae quasi cum, praesentium adipisci voluptatum alias maxime ea accusantium. Amet excepturi sit architecto porro vitae repudiandae non voluptate ex eos molestias dignissimos vel quis fugit adipisci nostrum aut, ipsa asperiores provident velit quas magnam a. Voluptates atque placeat veritatis culpa corporis reiciendis incidunt, exercitationem at nemo saepe vitae numquam ullam modi praesentium. Impedit in maxime dolor cum accusantium deserunt officia! Dolor, dicta perferendis sunt porro molestiae ipsam velit expedita ea quidem quasi earum rem ipsum atque fuga eveniet iusto culpa laboriosam ut? Soluta rerum dolor ab, consectetur est aliquid, odit aut quae veniam delectus cumque sit autem? Quos repudiandae cumque cupiditate iure atque ipsa dignissimos quia adipisci saepe. Optio nam voluptatibus itaque?</Text>
        <StatusBar style="auto" />  
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
