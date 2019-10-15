import React from 'react';
import { connect } from 'react-redux'
import { selectBankAction } from "../actions"

const SelectBanks = ({ activeBank, selectBankAction}) => {
   
    return (
        <div id="selectBank">
            <div id="bankOne" className={activeBank === 1 ? "activeBank" : ""} onClick={() => selectBankAction(1)}>Bank One</div>
            <div id="bankTwo" className={activeBank === 2 ? "activeBank" : ""} onClick={() => selectBankAction(2)}>Bank Two</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activeBank: state.activeBank
    }
}
export default connect(mapStateToProps, { selectBankAction })(SelectBanks);
