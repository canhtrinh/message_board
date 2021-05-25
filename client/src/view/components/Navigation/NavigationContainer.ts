import * as Redux from "react-redux";
import { IReduxState } from "../../../model/typings/IReduxState";
import Navigation from "./Navigation";


const mapStateToProps = (state: IReduxState, ownProps: any) => {
    return {
        channels: state.channels
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        
    }
};

const MappedNavigationContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default MappedNavigationContainer;