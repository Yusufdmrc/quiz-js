function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi sorgulama dillerinden biridir?", { a: "Java", b: "Python", c: "SQL" , d: "C#" }, "c"),
    new Soru("2-Hangisi işaretleme diilerinden biridir?", { a: "C++", b: "HTML", c: "Kotlin", d: "Swift" }, "b"),
    new Soru("3-Hangisi java frameworklerinden biridir?", { a: "Spring", b: "Vue", c: "Angular", d: "Django" }, "a"),
    new Soru("4-Hangisi daha sonra ortaya çıkmıştır?", { a: "C#", b: "Java", c: "C", d: "C++" }, "a")
];