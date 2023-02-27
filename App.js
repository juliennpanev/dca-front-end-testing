import switchPage from "./utils/pageSwitch.js"
import showInfoWindow from "./utils/info.js"
import pullPrice from "./utils/plutoPrice.js"
import connect from './utils/connect.js'
import getStakedCapital from "./utils/calcBaseCapital.js"
import getDcaHolders from "./utils/getDcaHolders.js"
import depositWindow from "./utils/depositWindow.js"
import invoke from "./utils/invoke.js"
import withdraw from './utils/withdraw.js'
import setBaseAssetBalance from "./utils/setPlutoBalance.js"
import setMaxDeposit from "./utils/setPlutoBalance.js"
import {loadDepositViewAndData} from "./views/plutoBtcDepositView.js"
import loadWithdrawView from "./views/plutoBtcWithdrawView.js"
import loadClaimView from "./views/plutoBtcClaimView.js"
import manageTCI from "./tci/tciHandler.js"



const genesisTreasury = '3PAFi86jNXNmgc4Fx4RnV6aJLXcW4zn99LJ';
const roundCapitalElement = document.getElementById('upcoming-round-total');
const depositInput = document.getElementById('deposit-price')

connect.checkIfConnected();
connect.setPlutoBalance();
invoke();
setMaxDeposit(depositInput);
connect.init();
switchPage();
showInfoWindow();
pullPrice.calcUsdnValue();
getStakedCapital(genesisTreasury, roundCapitalElement);
getDcaHolders.getParticipants();
depositWindow.calculateDepositWindow();
setBaseAssetBalance();
withdraw.loadWithdrawInfo();
withdraw.activateWithdrawBtn();
withdraw.setMaxWithdraw();

loadDepositViewAndData();
loadWithdrawView();
loadClaimView();
manageTCI();