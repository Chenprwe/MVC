const $button1 = $("#add");
const $button2 = $("#minus");
const $button3 = $("#mul2");
const $button4 = $("#divide");
const $number = $("#number");
const n = localStorage.getItem("n");
$number.text(n || 100);
$button1.on("click", ()=>{
    let n1 = parseInt($number.text());
    n1 += 1;
    localStorage.setItem("n", n1);
    $number.text(n1);
});
$button2.on("click", ()=>{
    let n2 = parseInt($number.text());
    n2;
    localStorage.setItem("n", n2);
    $number.text(n2);
});
$button3.on("click", ()=>{
    let n3 = parseInt($number.text());
    n3 *= 2;
    localStorage.setItem("n", n3);
    $number.text(n3);
});
$button4.on("click", ()=>{
    let n4 = parseInt($number.text());
    n4 /= 2;
    localStorage.setItem("n", n4);
    $number.text(n4);
});

//# sourceMappingURL=index.de158e3a.js.map
