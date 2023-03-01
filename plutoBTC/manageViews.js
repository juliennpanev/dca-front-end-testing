import loadClaimView from '../views/plutoBtcClaimView.js'
import { loadDepositViewAndData } from '../views/plutoBtcDepositView.js'
import loadWithdrawView from '../views/plutoBtcWithdrawView.js'

function manageBTCSection () {
    loadClaimView();
    loadDepositViewAndData();
    loadWithdrawView();
}

export default manageBTCSection;
