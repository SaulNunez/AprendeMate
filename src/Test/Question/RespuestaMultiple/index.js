import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from 'react-native-platform-touchable';

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: '#89CFF0',
        borderColor: '#000000',
        marginVertical: 4,
        padding: 16,
        minHeight: 48,
        textAlign: 'center',
        fontSize: 18,
    },
    buttonSelected: {
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        marginVertical: 4,
        padding: 16,
        minHeight: 48,
        textAlign: 'center',
        fontSize: 18,
    }
});

export default RespuestaMultiple = (props) => {
    return (
        <>
            {props.question.answers.map((opcion, index, array) => {
                return (
                    <Touchable key={index}
                        onPress={() => {
                            props.onAnswerSelected(index);
                        }}
                        background={Touchable.Ripple('#89CFF0')}
                        disabled={props.isOnRevision}>
                        <Text style={props.indexSelected !== null && props.indexSelected === index ? styles.buttonSelected : styles.button}>{opcion}</Text>
                    </Touchable>
                );
            })}
        </>
    );
}

RespuestaMultiple.propTypes = {
    question: PropTypes.object.isRequired,
    indexSelected: PropTypes.number,
    onAnswerSelected: PropTypes.func.isRequired,
    isOnRevision: PropTypes.bool.isRequired
};