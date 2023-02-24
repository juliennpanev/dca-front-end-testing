const depositInput = document.getElementById('deposit-price');
const valueOfTokensElement = document.getElementById('price-max-amount')

function calcUsdnValue() {
    depositInput.addEventListener('input', (e) => {
        e.preventDefault();
        
        (async () => {
            let price = await pullPlutoPrice();
            valueOfTokensElement.textContent = parseFloat(String(price * depositInput.value)).toFixed(2) ;
            
        })()
    })
}

async function pullPlutoPrice() {
    
    const urls = [ 'https://nodes.wavesnodes.com/addresses/data/3PA51qCGL57rBWuD7CBTb3NeRQUxwUf6YRp/k_qtAstR', 'https://nodes.wavesnodes.com/addresses/data/3PA51qCGL57rBWuD7CBTb3NeRQUxwUf6YRp/k_bsAstR' ]
    const [res1, res2] = await Promise.all(
        [
            fetch(urls[0]),
            fetch(urls[1])
        ]
    )

    const fIndex = await res1.json();
    const sIndex = await res2.json();
    const price = fIndex.value / sIndex.value;
    return price;
}



export default {
    pullPlutoPrice,
    calcUsdnValue,
}