import React from 'react';
import { TextInput, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from 'react-native-platform-touchable';

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000000',
        marginVertical: 16,
        minHeight: 48,
        fontSize: 24,

    },
    inputWrong: this.input | {
        borderColor: 'red',
    },
    inputRight: this.input | {
        borderColor: 'green'
    },
    button: {
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: 'yellow',
        borderColor: '#000000',
        marginVertical: 16,
        padding: 16,
        minHeight: 48,
        textAlign: 'center',
        fontSize: 24,
    }
});

export default class RespuestaNum extends React.Component {
    constructor(props) {
        super(props);
        this.mathTextInput = React.createRef();
        this.state = { entry: '' };
    }

    componentDidMount() {
        if (this.mathTextInput) {
            this.mathTextInput.focus();
        }
    }

    _onAnswerSubmit() {
        const isRight = this.state.entry.trim() == this.props.correctAnswer;
        if (this.props.onAnswerGiven) {
            this.props.onAnswerGiven(isRight);
        }
    }

    render() {
        return (
            <>
                <TextInput keyboardType='numeric'
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='done'
                    ref={this.mathTextInput}
                    onSubmitEditing={() => {
                        if (this.props.answerSubmited !== null) {
                            this._onAnswerSubmit();
                        }
                    }}
                    style={this.state.answerSubmited !== null ? (this.props.correctAnswer !== this.state.entry ? styles.inputWrong : styles.inputRight) : styles.input}
                    onChangeText={(text) => this.setState({ entry: text })}
                />
                <Touchable onPress={() => {
                    if (this.props.answerSubmited !== null) {
                        this._onAnswerSubmit();
                    }
                }} 
                background={Touchable.Ripple('yellow')}>
                    <Text style={styles.button}>Siguiente</Text>
                </Touchable>
            </>
        );
    }
}


RespuestaNum.propTypes = {
    correctAnswer: PropTypes.string.isRequired,
    onAnswerGiven: PropTypes.func.isRequired,
    answerSubmited: PropTypes.number,
};
