# zafrancoffee.web.id
Situs statis Zafran Coffee (jasa giling kopi terdekat Pamulang / Tangerang Selatan). Tanpa build step.

## Struktur
index.html, 404.html, robots.txt, sitemap.xml, _headers, assets/{css,js,img}

## Isi nomor WhatsApp admin (+62 821-2203-2171, semua file)
```
sed -i 's/6282122032171/6282122032171/g' index.html assets/js/main.js
```
(ganti +62 821-2203-2171 dengan nomor asli, format 6282122032171 tanpa + dan spasi)

## Deploy ke Cloudflare Pages
1. Push ke GitHub. Cloudflare > Workers & Pages > Create > Pages > Connect to Git.
2. Framework preset: None. Build command: kosong. Output directory: `/`.
3. Custom domains: tambahkan `zafrancoffee.web.id`.

## www -> non-www (301)
Host utama (canonical) = https://zafrancoffee.web.id/ (sudah konsisten di canonical, og:url, sitemap, robots).
1. DNS: tambahkan record `www` (CNAME ke zafrancoffee.web.id), Proxy status = Proxied (awan oranye).
2. Rules > Redirect Rules > Create rule > Custom filter expression:
   `(http.host eq "www.zafrancoffee.web.id")`
3. Then: Dynamic redirect, Expression: `concat("https://zafrancoffee.web.id", http.request.uri.path)`, Status 301, centang Preserve query string.
4. SSL/TLS > Edge Certificates: aktifkan Always Use HTTPS.
5. Search Console: daftarkan https://zafrancoffee.web.id/ lalu submit sitemap.xml.
Jangan buat redirect sebaliknya (non-www -> www): menyebabkan loop.
