import React, {Component, PropTypes} from 'react';
import {View, requireNativeComponent,NativeModules} from 'react-native';
const { RecordView } = NativeModules;

export class RCTTimerTip extends Component {

    render() {
        return (
            <TimerTip
                {...this.props}
            />);
    }
}
RCTTimerTip.propTypes = {
    ...View.propTypes,
    level:PropTypes.string,
    time:PropTypes.string,
    numFontSize:PropTypes.string,
    status:PropTypes.string,//0正在录音，1，取消发送，2，录音时间过短
};
const TimerTip = requireNativeComponent('TimerTip', RCTTimerTip);

export class RCTRecordView extends Component {
    /**
     * 时间过长后，调用该方法恢复按钮为未点击状态
     */
    static setButtonStateWithNormal(){
        return RecordView.setButtonStateWithNormal();
    }

    _onchange = (event) => {
        if (this.props.onChange && event.nativeEvent) {
            this.props.onChange(event.nativeEvent);
        }
    }

    render() {
        return (
            <RecordViewApi
                {...this.props}
                onChange={this._onchange}
            />);
    }
}
RCTRecordView.propTypes = {
    ...View.propTypes,
    textArr: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    fontSize: PropTypes.string,
};
const RecordViewApi = requireNativeComponent('RecordView', RCTRecordView);