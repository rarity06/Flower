onload=()=>{
    const c = setTimeout(()=>{
        document.body.classList.remove("not-loades");
        clearTimeout(c);
    },1000);
}