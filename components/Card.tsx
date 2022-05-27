import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { COLORS } from '../constants/Colors';
import { FONT_TYPES } from '../constants/Enums';
import { ROUTES } from '../navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { getCardImage, IExerciseCardProps } from '../constants/Cards';

const Card = (props: IExerciseCardProps) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      style={styles.cardContainer}
      activeOpacity={0.5}
      underlayColor={COLORS.primaryDark}
      onPress={() =>
        navigation.navigate(ROUTES.root, {
          screen: ROUTES.learning,
          params: {
            reachedFromPage: ROUTES.home,
            exerciseOptions: {
              timeLimit: props.timeLimit,
              level: props.level,
            },
          },
        })
      }
    >
      <View style={styles.cardContainer}>
        <ImageBackground
          source={getCardImage(props)}
          resizeMode="cover"
          imageStyle={{ borderRadius: 13 }}
          style={styles.cardImage}
        >
          <Image
            style={styles.cardOverlay}
            source={require('../assets/images/card-bottom-gradient.png')}
          />
          <View style={styles.titlesContainer}>
            <View>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View>
              <Text style={styles.title}>{'Start >'}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 325,
    height: 200,
    borderRadius: 13,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    width: 325,
    height: 200,
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  titlesContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 18,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT_TYPES.bold,
    fontSize: 18,
  },
});

export default Card;
