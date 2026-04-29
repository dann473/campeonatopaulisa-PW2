
 async function inserirDados(trs) {
    let promise = await fetch('http://localhost:3000/times');
    let times = await promise.json();
    
    console.log(times);
    
    for (let i = 0; i < times.length && i < trs.length; i++) {
        let filho = trs[i].children;
        filho = Array.from(filho);
        
        filho[0].textContent = times[i].posicao;
        filho[1].textContent = times[i].time;
        filho[2].textContent = times[i].pts;
        filho[3].textContent = times[i].pj;
        filho[4].textContent = times[i].vit;
        filho[5].textContent = times[i].e;
        filho[6].textContent = times[i].der;
        filho[7].textContent = times[i].gm;
        filho[8].textContent = times[i].gc;
        filho[9].textContent = times[i].gm - times[i].gc;
}

return trs;
}

window.onload = () => {

    let trs = document.querySelectorAll('tbody tr');
    inserirDados(trs)
}