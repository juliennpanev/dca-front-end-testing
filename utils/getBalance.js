async function getBalance(address) {
    try {
        const res = await fetch('https://nodes.wavesnodes.com/assets/balance/' + address + '/' + 'Ajso6nTTjptu2UHLx6hfSXVtHFtRBJCkKYd5SAyj7zf5')
        const balanceData = await res.json();
        return balanceData;
    } catch (e) {
        window.alert(e.data);
    }
}

export default getBalance;