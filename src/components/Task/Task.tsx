import { Text, StyleSheet } from 'react-native';
import Box from '../Box/Box';
function Task({ task, status }){
  return (
		<Box> 
			<Text style={status === 'done' && styles.done}>{task}</Text>
		</Box>
	);
};

const styles = StyleSheet.create({
	  done: {
	textDecorationLine: 'line-through',
  }
});


export default Task;