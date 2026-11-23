(()=>{
const WA="6282122032171"; /* nomor WhatsApp admin, format 6282122032171 */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const bi=a=>`<span class="id">${a[0]}</span><span class="en">${a[1]}</span>`;
const setLang=l=>{document.documentElement.lang=l;ls.set("zl",l);$("#lang").textContent=l==="id"?"EN":"ID"};
setLang(ls.get("zl")==="en"?"en":"id");
$("#lang").onclick=()=>setLang(document.documentElement.lang==="id"?"en":"id");
const nav=$("#nav"),bg=$("#burger");
bg.onclick=()=>bg.setAttribute("aria-expanded",nav.classList.toggle("open"));
$$("a",nav).forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");bg.setAttribute("aria-expanded","false")}));
$$("[data-wa]").forEach(a=>{a.href="https://wa.me/"+WA+"?text="+encodeURIComponent("Halo Zafran Coffee, saya ingin tanya jasa giling/roasting kopi.");a.target="_blank";a.rel="noopener"});
$$("[data-wan]").forEach(s=>s.textContent="+"+WA.slice(0,2)+" "+WA.slice(2,5)+"-"+WA.slice(5,9)+"-"+WA.slice(9));
/* hero slider */
const S=$$(".sl"),D=$(".dots");let i=0,t;
S.forEach((_,n)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Slide "+(n+1));b.onclick=()=>go(n);D.append(b)});
const go=n=>{i=(n+S.length)%S.length;S.forEach((s,k)=>s.classList.toggle("on",k===i));$$("button",D).forEach((b,k)=>b.classList.toggle("on",k===i));clearInterval(t);t=setInterval(()=>go(i+1),6500)};
$("#pv").onclick=()=>go(i-1);$("#nx").onclick=()=>go(i+1);go(0);
/* articles */
const A=[
{k:"⚙️",t:["Jasa Giling Kopi Terdekat di Pamulang dan Tangsel","Nearest Coffee Grinding Service in Pamulang and South Tangerang"],e:["Giling kopi sesuai metode seduh: espresso, V60, French press, hingga tubruk.","Grind to match your brew method: espresso, V60, French press or cowboy coffee."],b:["Tingkat kehalusan menentukan rasa. Espresso butuh gilingan halus, V60 dan manual brew butuh sedang, sedangkan French press dan kopi tubruk cocok digiling kasar. Bawa biji kopi Anda ke Zafran Coffee di Pamulang, sebutkan alat seduh Anda, dan kami giling sesuai kebutuhan.","Grind size shapes flavor. Espresso needs a fine grind, V60 and other pour-overs need medium, while French press and cowboy coffee suit a coarse grind. Bring your beans to Zafran Coffee in Pamulang, tell us your brewer, and we grind to match."]},
{k:"🫘",t:["Roastery dan Supplier Biji Kopi di Pamulang","Coffee Roastery and Bean Supplier in Pamulang"],e:["Green beans dan roasted beans untuk kafe, reseller dan pecinta kopi di Tangerang Raya.","Green beans and roasted beans for cafes, resellers and coffee lovers in Greater Tangerang."],b:["Zafran Coffee melayani kebutuhan biji kopi mentah (green beans) dan biji sangrai (roasted beans) untuk kafe, warung kopi, reseller dan penikmat kopi rumahan di Tangerang Raya. Hubungi kami lewat WhatsApp untuk menanyakan ketersediaan dan jenis kopi.","Zafran Coffee supplies green beans and roasted beans for cafes, coffee stalls, resellers and home brewers across Greater Tangerang. Message us on WhatsApp to ask about availability and coffee varieties."]},
{k:"🔥",t:["Jasa Roasting Kopi: Light, Medium atau Dark?","Coffee Roasting Service: Light, Medium or Dark?"],e:["Kenali perbedaan profil sangrai sebelum memilih.","Know the roast profiles before you choose."],b:["Roasting mengubah biji hijau menjadi kopi beraroma. Light roast menonjolkan keasaman dan aroma buah, medium roast seimbang, dan dark roast pekat dengan rasa cokelat serta pahit. Kami menerima jasa roasting sesuai profil yang Anda inginkan.","Roasting turns green beans into aromatic coffee. Light roast highlights acidity and fruity notes, medium is balanced, and dark is bold with chocolatey, bitter notes. We offer roasting tailored to the profile you want."]},
{k:"📦",t:["Cara Menyimpan Kopi agar Tetap Segar","How to Store Coffee So It Stays Fresh"],e:["Wadah kedap udara dan giling sesaat sebelum seduh.","Airtight container, and grind right before brewing."],b:["Simpan kopi di wadah kedap udara, jauh dari panas, cahaya dan lembap. Untuk aroma terbaik, giling sesaat sebelum diseduh. Jika tidak punya grinder, minta giling dalam jumlah kecil yang habis dalam 1-2 minggu.","Store coffee in an airtight container away from heat, light and moisture. For the best aroma, grind just before brewing. No grinder at home? Ask for a small batch you can finish within 1-2 weeks."]}
];
const tr=$("#track");
tr.innerHTML=A.map((a,n)=>`<article class="card"><div class="ic">${a.k}</div><h3>${bi(a.t)}</h3><p>${bi(a.e)}</p><button class="btn o" type="button" data-a="${n}"><span class="id">Baca</span><span class="en">Read</span></button></article>`).join("");
tr.onclick=e=>{const b=e.target.closest("[data-a]");if(!b)return;const a=A[b.dataset.a];$("#at").innerHTML=bi(a.t);$("#ab").innerHTML="<p>"+bi(a.b)+"</p>";$("#d-art").showModal()};
const step=d=>{const m=tr.scrollWidth-tr.clientWidth;if(d>0&&tr.scrollLeft>=m-4)tr.scrollTo({left:0,behavior:"smooth"});else tr.scrollBy({left:d*(tr.firstElementChild.offsetWidth+16),behavior:"smooth"})};
$("#ap").onclick=()=>step(-1);$("#an").onclick=()=>step(1);
let at=setInterval(()=>step(1),6000);
tr.addEventListener("pointerenter",()=>clearInterval(at));
/* dialogs (modal, tidak diblokir browser) */
$$("[data-d]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();$("#"+a.dataset.d).showModal()}));
$$("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
$$("dialog a[href^='#']").forEach(a=>a.addEventListener("click",()=>a.closest("dialog").close()));
/* cookies notice */
if(!ls.get("zc"))$("#ck").hidden=false;
$("#ckok").onclick=()=>{ls.set("zc","1");$("#ck").hidden=true};
})();
