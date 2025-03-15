PayTR Kullanmaya Başlarken

PayTR Nedir?
PayTR Sanal POS ve Ödeme Çözümleri, web sitesi sahiplerinin en hızlı ve en kolay şekilde web sitelerinden güvenli online ödemeler almalarına imkan tanıyan bir servistir. Aidat ücreti bulunmayan PayTR, web sitelerine kolayca entegre edilerek çok kısa sürede kullanıma açılabilmektedir.

PayTR hızlıgüvenilirkolay
PayTR Nasıl Çalışır?
PayTR ile ödeme süreci aşağıdaki gibi işler:

Müşteri ürünün/hizmetin sergilendiği web sitesine ulaşır. Satın almak istediği ürünü/hizmeti belirler. Ödeme formunu sitede doldurur "veya" ortak ödeme sayfasına yönlenir. PayTR'a herhangi bir üyelik gerçekleştirmeden ödemesini tamamlar. Ödeme işlemi güvenlik alt yapısı tarafından doğrulanarak onaylanır. Web sitesine ödemenin güvenli ve başarılı olduğu bilgisi verilir. Ürün/hizmet web sitesi tarafından müşteriye sunulur.

PayTR'ın Avantajları Nelerdir?
PayTR ödeme çözümlerini tercih etmeniz için birkaç neden:

Çalışma seçenekleri uygundur, aidat veya gizli ücretler yoktur. Entegrasyon süreci kolay ve hızlı işler, hazır modüller ve örnek kodlama sunulur. Ödeme güvenliği sağlanır; mağazalar ve müşterileri sahtecilikten korunur. Üye işyerleri "Ertesi İş Günü" ödeme alma avantajından faydalanır. Ödeme sayfasını sitenizin tasarımına göre özelleştirebilirsiniz. Mobil uyumlu ödeme sayfaları ile platform bağımsız ödeme alabilirsiniz.



Teknik entegrasyon dokümanı; Pro API için açıklamalar, yönlendirmeler ve örnek kodlama içermektedir.

 Gelişmiş API (Pro API)

Tüm yazılım dilleriyle uyumlu bu çözümü kolayca entegre ederek, gömülü ödeme formu ile müşterilerinizin sitenizden ayrılmasına gerek kalmadan güvenli ödemeler almaya başlayın.

 Tüm Yazılımlar İle Uyumlu
 Kolay Entegrasyon, Hazır Kod Örnekleri
 Hazır Modüller (OpenCart, Woocommerce, Prestashop, WHMCS, ve benzeri.)
 PCI-DSS Uyumu Gerekli Değildir.


 Kolay API (Basic API)

Tüm yazılım dilleriyle uyumlu bu çözümü kolayca entegre ederek, gömülü ödeme formu ile müşterilerinizin sitenizden ayrılmasına gerek kalmadan güvenli ödemeler almaya başlayın.

 Entegrasyon Yok (Yazılım bilgisi gerekli değildir)
 PCI-DSS Uyumu Gerekli Değildir
 5 Dakikada Ödeme Almaya Başlayın


iFrame API Entegrasyon Süreçleri ve Canlı Moda Geçiş

1- PayTR Sanal POS ve iFrame API Ödeme Çözümü Başvurusunun Yapılması

https://www.paytr.com/uye-isyeri-olun adresinden iFrame API Ödeme çözümü kullanımı için başvuru sürecini başlatabilirsiniz.

2- Entegrasyon Dokümanları & Örnek Kodlar

PayTR Mağaza Paneli > Destek & Kurulum > Developer Portal sayfası üzerinde bulunan menüde yer alan iFrame API Entegrasyonu başlığı altında 1.ADIM ve 2.ADIM’a ait entegrasyon dokümanları ve birden fazla yazılım dili için geliştirilmiş, entegrasyon kod örnekleri bulunmaktadır. İlgili dokümanları yazılımcınız veya altyapı sağlayıcınız ile paylaşabilirsiniz.

3- Entegrasyon Sırasında Kullanılacak Mağaza API Bilgilerine Ulaşılması

Entegrasyon aşamasında kullanmanız gereken:

- Mağaza No (merchant_id),

- Mağaza Parola (merchant_key),

- Mağaza Gizli Anahtar (merchant_salt),

değerlerine PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfasındaki API Entegrasyon Bilgileri başlığı altından erişebilirsiniz.

4- Test İşlemi Sırasında Kullanılacak Test Kart Bilgilerine Ulaşılması

iFrame API Ödeme çözümünün başarılı şekilde entegre edilmesi sonucunda PayTR tarafından hazırlanan ortak ödeme ekranı sunulmaktadır. Test işleminiz sırasında kullanmanız gereken test kart bilgileri, ödeme sayfası üzerinde ön tanımlı olarak yer almaktadır. Bu sebeple, test kart bilgisinin tarafınızdan değiştirilmesine veya girilmesine ihtiyaç bulunmamaktadır.

5- Test İşleminin Gerçekleştirilmesi

Entegrasyonun 1. ve 2. adımlarının tamamlanmasının ardından, web siteniz veya uygulamanız üzerinde hazırladığınız ödeme sayfanızı ziyaret etmeniz ve test ödemesi gerçekleştirmeniz gerekmektedir. Ulaşmış olduğunuz ödeme sayfasına ön tanımlı olarak gelen test kart bilgileri sayesinde Ödeme Yap butonuna tıklamanız, ödeme akışını başlatmanız için yeterlidir. Entegrasyonda herhangi bir sorununuz yoksa, karşınıza gelecek PayTR 3D Secure test sayfasındaki Gönder butonuna tıklayarak test ödeme işlemini tamamlayabilirsiniz.

6- Test Ödeme Tahsilatının Kontrolü

Gerçekleştirmiş olduğunuz test işlemlerine PayTR Mağaza Paneli > İşlem & Rapor > İşlemler sayfası üzerinden, işlem esnasında iletmiş olduğunuz e-posta adresi ile arama yaparak ulaşabilirsiniz.

7- Ödeme ve iFrame Sayfası Ayarlarının Yapılması

Mağaza API Bilgileri

Entegrasyon aşamasında kullanmanız gereken API Entegrasyon Bilgilerinize PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfasından erişebilirsiniz.

Sayfa Renk Düzenlemesi

PayTR Mağaza Paneli > Destek & Kurulum > Ayarlar sayfasından ödeme sayfanızın renk düzenlemesini ayarlayabilirsiniz.

Taksit Tablosu Token

PayTR Mağaza Paneli > Yönetim & Ayarlar > Taksit Ayarları sayfasından taksit tablosu ile ilgili kodlara erişebilir ve web sitenize taksit tablosu yerleştirebilirsiniz.

Peşin Fiyatına Taksit Ayarları

PayTR Mağaza Paneli > Yönetim & Ayarlar > Taksit Ayarları sayfasından Peşin Fiyatına taksit alanından; müşterilerinize Peşin Fiyatına Taksit imkanı sunmak istemeniz durumunda gerekli ayarları yapabilirsiniz.

8- Canlı Moda Geçiş Talebi

Test işleminizin başarılı olarak sonuçlanmasının ardından, PayTR Mağaza Paneli > Destek & Kurulum > Canlı Mod sayfasından Evet, Entegrasyonu Tamamladım butonuna tıklayarak yapmış olduğunuz test işlemlerinin kontrolünü başlatabilirsiniz. Test akışının başarılı şekilde sonuçlanması ardından Canlı Moda Geçiş Talebi Gönder butonuna tıklayarak canlı moda geçiş talebi gönderebilirsiniz.

9- Canlı Moda Geçiş Bilgilendirmesi

Test işlemleriniz ve talebiniz, 7/24 destek sağlayan birimlerimizce kontrol edilir. Yapılan kontrolün ardından, mağazanızın canlı moda geçişi için herhangi bir sorun bulunmaması durumunda işlem tamamlanır ve sistemde kayıtlı cep telefonu numaranıza SMS, kayıtlı e-posta adresine ise yazılı olarak bildirimi yapılır. Alacağınız bildirimin ardından gerçek ödeme tahsilatına başlayabilirsiniz.

Direkt API Entegrasyon Süreçleri ve Canlı Moda Geçiş

1- PayTR Sanal POS ve Direkt API Ödeme Çözümü Başvurusunun Yapılması

https://www.paytr.com/uye-isyeri-olun adresinden Direkt API Ödeme çözümü kullanımı için başvuru sürecini başlatabilirsiniz.

2- Entegrasyon Dokümanları & Örnek Kodlar

PayTR Mağaza Paneli > Destek & Kurulum > Developer Portal sayfası üzerinde bulunan menüde yer alan Direkt API Entegrasyonu başlığı altında; 1.ADIM ve 2.ADIM’a ait entegrasyon dokümanları ve birden fazla yazılım dili için geliştirilmiş, entegrasyon kod örnekleri bulunmaktadır. İlgili dokümanları yazılımcınız veya altyapı sağlayıcınız ile paylaşabilirsiniz.

3- Entegrasyon Sırasında Kullanılacak Mağaza API Bilgilerine Ulaşılması

Entegrasyon aşamasında kullanmanız gereken:

- Mağaza No (merchant_id),

- Mağaza Parola (merchant_key),

- Mağaza Gizli Anahtar (merchant_salt),

değerlerine PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfasındaki API Entegrasyon Bilgileri başlığı altından erişebilirsiniz.

4- Test İşlemi Sırasında Kullanılacak Test Kart Bilgilerine Ulaşılması

Test işleminiz sırasında kullanacağınız Test Kart Bilgilerine PayTR Mağaza Paneli > Destek & Kurulum > Developer Portal sayfası üzerinde bulunan menüde yer alan Direkt API Test Kart Bilgileri başlığı altından ulaşabilirsiniz.

5- Test İşleminin Gerçekleştirilmesi

Entegrasyonun 1. ve 2. adımlarının tamamlanmasının ardından, web siteniz veya uygulamanız üzerinde hazırladığınız ödeme sayfanızı ziyaret etmeniz ve test ödemesi gerçekleştirmeniz gerekmektedir. Test ödeme işlemi esnasında, PayTR’ın sizlere sunmuş olduğu test kart bilgileri kullanılması gerekmektedir. (Bknz 4)

Hazırlamış olduğunuz ödeme sayfanıza temin ettiğiniz test kart bilgilerini girerek, formun PayTR adresine POST edilmesini sağlayın. Entegrasyonda herhangi bir sorununuz yoksa eğer, karşınıza gelecek PayTR 3D Secure test sayfasındaki Gönder butonuna tıklayarak test ödeme işlemini tamamlayın.

6- Test Ödeme Tahsilatının Kontrolü

Gerçekleştirmiş olduğunuz test işlemlerine PayTR Mağaza Paneli > İşlem & Rapor > İşlemler sayfası üzerinden, işlem sırasında iletmiş olduğunuz mail adresi ile arama yaparak ulaşabilirsiniz.

7- Canlı Moda Geçiş Talebi

Test işleminizin başarılı olarak sonuçlanmasının ardından, PayTR Mağaza Paneli > Destek & Kurulum > Canlı Mod sayfasından Evet, Entegrasyonu Tamamladım butonuna tıklayarak yapmış olduğunuz test işlemlerinin kontrolünü başlatabilirsiniz. Test akışının başarılı şekilde sonuçlanması ardından Canlı Moda Geçiş Talebi Gönder butonuna tıklayarak canlı moda geçiş talebi gönderebilirsiniz.

8- Canlı Moda Geçiş Bilgilendirmesi

Test işlemleriniz ve talebiniz, 7/24 destek sağlayan birimlerimizce kontrol edilir. Yapılan kontrolün ardından, mağazanızın canlı moda geçişi için herhangi bir sorun bulunmaması durumunda işlem tamamlanır ve sistemde kayıtlı cep telefonu numaranıza SMS, kayıtlı e-posta adresine ise yazılı olarak bildirimi yapılır. Alacağınız bildirimin ardından gerçek ödeme tahsilatına başlayabilirsiniz.

Linkle Ödeme Çözümü Entegrasyon Süreçleri ve Canlı Moda Geçiş

1- Linkle Ödeme Başvurusunun Yapılması

https://paytr.com/magaza/linkle-odeme-basvuru adresinden Linkle Ödeme başvuru sürecini başlatabilirsiniz.

2- Test Ödeme Linki Oluşturma

Onaylanan başvurunuz sonrasında, PayTR Mağaza Paneli içerisinde bulunan Linkle Ödeme https://www.paytr.com/magaza/linkle-odeme sayfasına erişebilirsiniz. Linkle Ödeme sayfasında bulunan PayTR Ödeme Linki Oluştur butonu ile oluşturmak istediğiniz link türünü (Ürün/Hizmet veya Fatura/Cari) seçerek sürece devam edebilirsiniz.

3- Ödeme Linki Ayarların Yapılması

Link türü seçmenizin ardından açılan sayfada ilgili alanları alacağınız tahsilat doğrultusunda doldurun. Taksit seçeneklerini açmak istemeniz durumunda, Peşin Fiyatına Taksit ayarlaması yapabilirsiniz.

Peşin Fiyatına Taksit ayarları açıklamaları şu şekildedir:

Ayar Yok

Bu seçeneği işaretlemeniz durumunda, seçmiş olduğunuz taksit sayıları belirlenen komisyon oranları çerçevesinde müşteriden tahsil edilecek ve herhangi bir Peşin Fiyatına Taksit koşulu uygulanmayacaktır.

Mağaza Varsayılanı

İlgili alanı seçmeniz durumunda PayTR Mağaza Paneli > Destek & Kurulum > Taksit Ayarları sayfasında bulunan Peşin Fiyatına Taksit alanında tanımlı olan taksit ayalarınız, oluşturulan link üzerinde geçerli olacaktır.

Özel Ayarlar

İlgili alanı seçmeniz durumunda oluşturacağınız linkinize özel Peşin Fiyatına taksit ayarları yapabilirsiniz. Bu ayarlar sadece ilgili link üzerinde geçerli olacaktır.

4- Ödeme Linkinin Gönderimi

Oluşturmuş olduğunuz linkleri Ödeme Linkleriniz alanında görüntüleyebilirsiniz.

E-Posta, SMS gönderimini sunulmuş olan hizmet çerçevesinde PayTR aracılığı ile iletebilirsiniz. Dilerseniz bağlantıyı kendi belirleyeceğiniz alanlara yerleştirebilir veya dilediğiniz şekilde paylaşabilirsiniz. Ayrıca QR Kod oluşturma seçeneği ile ödeme linkiniz için QR üretebilir ve dilediğiniz alanda kullanabilirsiniz.

5- Test Ödeme Tahsilatına Başlama

Oluşturmuş olduğunuz Ödeme Linki’ni tarayıcınızda açarak, PayTR tarafından sunulmuş ödeme sayfasına ulaşabilirsiniz. Ulaşılan sayfa üzerinden sunulan alanların eksiksiz olarak doldurulması sonrasında Ödeme Sayfasına Devam Et butonu ile ödeme adımına geçebilirsiniz.

6- Test Ödeme Tahsilatının Tamamlanması

Açılan ödeme sayfasına ön tanımlı olarak gelen Test kart bilgileri sayesinde Ödeme Yap butonuna tıklamanızın ardından PayTR’a ait Test 3D Secure sayfasında Gönder butonuna tıklayarak test ödeme işlemini sonuçlandırabilirsiniz.

7- Test Ödeme Tahsilatının Kontrolü

Test işleminizin başarılı olarak sonuçlanmasının ardından, PayTR Mağaza Paneli > Destek & Kurulum > Canlı Mod sayfasından Evet, Entegrasyonu Tamamladım butonuna tıklayarak yapmış olduğunuz test işlemlerinin kontrolünü başlatabilirsiniz. Test akışının başarılı şekilde sonuçlanması ardından Canlı Moda Geçiş Talebi Gönder butonuna tıklayarak canlı moda geçiş talebi gönderebilirsiniz.

8- Canlı Moda Geçiş Bilgilendirmesi

Test işlemleriniz ve talebiniz, 7/24 destek sağlayan birimlerimizce kontrol edilir. Yapılan kontrolün ardından, mağazanızın canlı moda geçişi için herhangi bir sorun bulunmaması durumunda işlem tamamlanır ve sistemde kayıtlı cep telefonu numaranıza SMS, kayıtlı e-posta adresine ise yazılı olarak bildirimi yapılır. Alacağınız bildirimin ardından gerçek ödeme tahsilatına başlayabilirsiniz.

PayTR Kullanmaya Başlarken  iFrame API Entegrasyonu  iFrame API 2. Adım
iFrame API 2. Adım

iFrame ile açılan ödeme formunu kullanarak müşteriniz ödeme yaptığında, PayTR sistemi ödeme sonucunu yazılımınıza bildirmelidir ve yazılımınızdan bildirimin alındığına dair cevap almalıdır. Aksi halde, ödeme işlemi tamamlanmaz ve tarafınıza ödeme aktarılmaz.

PayTR sistemince ödeme sonuç bildiriminin yapılacağı sayfa (Bildirim URL) tarafınızca belirlenmeli ve Mağaza Paneli Destek & Kurulum alanındaki AYARLAR sayfasında tanımlanmalıdır.

Tanımlayacağınız Bildirim URL’ye POST metodu ile ödemenin sonucu (başarılı veya başarısız) her işlem için ayrı olarak gönderilir. Bu bildirime istinaden Bildirim URL’nizde yapacağınız kodlama ile yazılımınızda siparişi onaylamalı veya iptal etmelisiniz, ekrana OK basarak PayTR sistemine cevap vermelisiniz.

PayTR sistemince Bildirim URL’nize POST REQUEST içeriğinde gönderilecek değerler:

Alan Adı	Zorunlu	Token	Açıklama
merchant_oid	Evet	Evet	Mağaza sipariş no: Satış işlemi için belirlediğiniz ve 1. ADIM’da gönderdiğiniz sipariş numarası
status	Evet	Evet	Ödeme işleminin sonucu (success veya failed)
total_amount	Evet	Evet	Müşteriden tahsil edilen toplam tutar (100 ile çarpılmış hali gönderilir. 34.56 => 3456)(Not: Müşteri vade farklı taksit seçtiği vb. durumlarda, 1. ADIM’da gönderdiğiniz “payment_amount” değerinden daha yüksek olabilir)
hash	Evet	Evet	PayTR sisteminden gönderilen değerlerin doğruluğunu kontrol etmeniz için güvenlik amaçlı oluşturulan hash değeri (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)
failed_reason_code	Hayır	Evet	Ödemenin onaylanmaması durumunda gönderilir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu)
failed_reason_msg	Hayır	Evet	Ödemenin neden onaylanmadığı mesajını içerir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu)
test_mode	Hayır	Hayır	Mağazanız test modunda iken veya canlı modda yapılan test işlemlerde 1 olarak gönderilir
payment_type	Evet	Evet	Ödeme şekli: Müşterinin hangi ödeme şekli ile ödemesini tamamladığını belirtir.'card' veya 'eft' değerlerini alır.
currency	Evet	Hayır	Para birimi: Ödemenin hangi para birimi üzerinden yapıldığını belirtir. ‘TL’, ‘USD’,‘EUR’, ‘GBP’, ‘RUB’ değerlerinden birini alır
payment_amount	Evet	Hayır	Sipariş tutarı: 1. ADIM’da gönderdiğiniz “payment_amount” değeridir.(100 ile çarpılmış hali gönderilir. 34.56 => 3456)
Bildirim URL’nize PayTR sistemince yapılacak isteğe dönülmesi gereken yanıt (RESPONSE) text (düz yazı) formatında ve yalnızca OK değeri olmalıdır.

Örnek (PHP): echo "OK";
Örnek (.NET): Response.Write("OK");
ÖNEMLİ UYARILAR:

Bildirim URL adresinize üye girişi ve benzeri erişim kısıtlaması yapılmamalıdır. Böylece PayTR sistemi bildirimleri kolayca iletebilecektir.

Bildirim URL’nize gelecek bildirimlere döneceğiniz OK yanıtının öncesinde veya sonrasında HTML veya herhangi başka bir içerik ekrana basılmamalıdır.

Bildirim URL’niz, müşterinizin ödeme sırasında ulaşacağı bir sayfa değildir, PayTR tarafından arka planda (server-side) ödeme sonucunu bildirmek için kullanılır. Bu nedenle, Bildirim URL’nizde kodlama yaparken oturum (SESSION) değerlerini kullanamazsınız. İşlemlerinizi Mağaza sipariş no (merchant_oid) kullanarak gerçekleştirmelisiniz.

OK yanıtı alınmayan bildirimlerde, ilgili sipariş Mağaza Paneli'ndeki İşlemler sayfasında “Devam Ediyor” olarak görünecektir.

PayTR sistemi, Bildirim URL’nizden OK cevabını istendiği şekilde almadığı durumda, bildirimin başarısız olduğunu varsayar. Ağ trafik sorunları, sitenizdeki anlık yoğunluklar ve benzeri nedenlerden dolayı aynı ödeme işlemi için birden fazla bildirim ulaşabilir. Bu nedenle, bildirimin birden fazla geldiği durumlarda, yalnızca ilk bildirim göz önünde bulundurulmalı, sonraki bildirimler için müşteriye tekrar ürün/hizmet sunulmamalıdır. Tekrarlayan bildirimlerde yalnızca OK yanıtı ile süreç sonlandırılmalıdır. Tekrarlayan bildirimlerin tespiti Mağaza sipariş no (merchant_oid) temel alınarak yapılmalıdır.

Bildirimin PayTR sisteminden geldiğinden ve ulaşım esnasında değiştirilmediğinden emin olmak için, POST içerisindeki hash değeri ile tarafınızca oluşturulacak hash değerinin aynı olduğunu kontrol etmeniz, güvenlik açısından büyük önem arz etmektedir. Bu kontrolü yapmamanız durumunda maddi kayıplar ile karşılaşabilirsiniz.

2. Adım İçin Hata Kodları ve Açıklamaları

failed_reason_code	failed_reason_msg	Açıklama
0	DEĞİŞKEN (AÇIKLAMAYI OKUYUN)	Ödemenin neden onaylanmadığına ilişkin, detaylı hata mesajı (Örneğin: Kartın limiti / bakiyesi yetersiz).
1	Kimlik Doğrulama yapılmadı. Lütfen tekrar deneyin ve işlemi tamamlayın.	Müşteri, kimlik doğrulama adımında cep telefonu numarasını girmedi.
2	Kimlik Doğrulama başarısız. Lütfen tekrar deneyin ve şifreyi doğru girin.	Müşteri, cep telefonuna gelen şifreyi doğru girmedi.
3	Güvenlik kontrolü sonrası onay verilmedi veya kontrol yapılamadı.	Müşterinin işlemi PayTR tarafından güvenlik kontrolünden geçemedi veya kontrol yapılamadı.
6	Müşteri ödeme yapmaktan vazgeçti ve ödeme sayfasından ayrıldı.	Müşteri, kendisine tanınmış olan işlem süresinde (1.ADIM’da tanımlanan timeout_limit değeri) işlemini tamamlamadı veya müşteri ödeme sayfasını kapatarak işlemi sonlandırdı.
8	Bu karta taksit yapılamamaktadır.	Müşterinin kullanmakta olduğu kart ile seçmiş olduğu taksitli ödeme yöntemi kullanılamaz.
9	Bu kart ile işlem yetkisi bulunmamaktadır.	Müşterinin kullanmakta olduğu kart için mağazanızın işlem yetkisi bulunmuyor.
10	Bu işlemde 3D Secure kullanılmalıdır.	Müşteri, yapmış olduğu işlemde 3D Secure ile ödeme yapmalıdır.
11	Güvenlik uyarısı. İşlem yapan müşterinizi kontrol edin.	Müşterinin işleminde fraud tespiti bulunuyor. Güvenliğiniz için müşterinin işlemlerini kontrol edin.
99	İşlem başarısız: Teknik entegrasyon hatası.	Teknik entegrasyon hatası varsa dönülecektir. (debug_on değeri 0 ise)

Yukarıdaki açıklamalara uygun olarak Bildirim URL’nizi hazırladıysanız, kontrol için bir adet test ödemesi gerçekleştirmelisiniz. Eğer yaptığınız test işlem PayTR Mağaza Paneli’nizdeki İşlemler sayfasında “Başarılı” olarak görünürse PayTR entegrasyonunuz tümüyle tamamlanmıştır.

Eğer işlemin durumu “Devam Ediyor” olarak görünüyorsa Bildirim URL’nizden “OK” yanıtı alınamıyor demektir. İşlemler sayfasında yaptığınız test işleminin satırında “Detay” linkine tıklayıp, Bildirim URL’nizden hangi yanıt geldiğini kontrol edin.

ÖNEMLİ UYARI: Bildirim URL’iniz Paytr Mağaza Paneli > Destek & Kurulum > Ayarlar > Bildirim URL Ayarları kısmından, eğer sitenizde SSL var ise Bildirim URL protokolünü HTTPS olarak ayarlamanız gerekmektedir. SSL sertifikanız yok ise, kesinlikle HTTPS’li link kullanmayın. Eğer sitenizde Paytr entegrasyonundan sonra SSL kurulumu yaptıysanız, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTPS olarak değiştirerek kaydedin. Eğer kurulumdan sonra sitenizdeki SSL sertifikasını iptal ederseniz, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTP olarak değiştirerek kaydedin.

PHP PYTHON .NET NODEJS
<?php

    ## 2. ADIM için örnek kodlar ##

    ## ÖNEMLİ UYARILAR ##
    ## 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
    ## 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
    ## veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
    ## 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
    ## siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.

    $post = $_POST;

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    ###########################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    #
    ## POST değerleri ile hash oluştur.
    $hash = base64_encode( hash_hmac('sha256', $post['merchant_oid'].$merchant_salt.$post['status'].$post['total_amount'], $merchant_key, true) );
    #
    ## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
    ## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
    if( $hash != $post['hash'] )
        die('PAYTR notification failed: bad hash');
    ###########################################################################

    ## BURADA YAPILMASI GEREKENLER
    ## 1) Siparişin durumunu $post['merchant_oid'] değerini kullanarak veri tabanınızdan sorgulayın.
    ## 2) Eğer sipariş zaten daha önceden onaylandıysa veya iptal edildiyse  echo "OK"; exit; yaparak sonlandırın.

    /* Sipariş durum sorgulama örnek
       $durum = SQL
       if($durum == "onay" || $durum == "iptal"){
            echo "OK";
            exit;
        }
     */

    if( $post['status'] == 'success' ) { ## Ödeme Onaylandı

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi onaylayın.
        ## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
        ## 3) 1. ADIM'da gönderilen payment_amount sipariş tutarı taksitli alışveriş yapılması durumunda
        ## değişebilir. Güncel tutarı $post['total_amount'] değerinden alarak muhasebe işlemlerinizde kullanabilirsiniz.

    } else { ## Ödemeye Onay Verilmedi

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi iptal edin.
        ## 2) Eğer ödemenin onaylanmama sebebini kayıt edecekseniz aşağıdaki değerleri kullanabilirsiniz.
        ## $post['failed_reason_code'] - başarısız hata kodu
        ## $post['failed_reason_msg'] - başarısız hata mesajı

    }

    ## Bildirimin alındığını PayTR sistemine bildir.
    echo "OK";
    exit;
?>
iFrame API 2. Adım örnek kodları indirmek için tıklayın.

Link API Entegrasyonu

Link API çözümü kullanma talebiniz, ilgili birimlerimizin onayından geçmesi halinde mağazanıza tanımlanmaktadır. Bu konu hakkında talebinizi reddetme veya onaylama hakkını PayTR kendinde saklı tutmaktadır.

ENTEGRASYON HAKKINDA ÖNEMLİ ÖN BİLGİLENDİRME: Mağaza Bilgileri:
Entegrasyon için gerekli olan API entegrasyon bilgilerine Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri bölümünden ulaşabilirsiniz. (Bu bilgileri sadece Ana Kullanıcı ve Teknik kullanıcı görüntülüyebilir.)

Entegrasyon içerisinde 4 adet servis bulunmaktadır:
1- Link oluşturma. Bu linkten gidebilirsiniz.
2- Link silme. Bu linkten gidebilirsiniz.
3- Link API Callback ( Opsiyonel ). Bu linkten gidebilirsiniz.
4- Sms & Email( Opsiyonel ). Bu linkten gidebilirsiniz.

Yardım talepleriniz için Mağaza panelindeki Destek Sayfasından mesajlarınızı göndermenizi rica ederiz.

Linkle ödeme dokümanını indirmek için tıklayın.

PayTR Kullanmaya Başlarken  Link API Entegrasyonu  Link API Create ile Link API Oluşturma
Link API Create ile Link API Oluşturma

Create servisi ile Hizmet/Ürün veya Fatura/Cari tahsilatlarınız için ödeme linkleri oluşturabilirsiniz.

1- Aşağıdaki gönderilmesi zorunlu olan bilgiler iletildikten sonra bir token verisi üretilir.
2- Oluşan token ve gönderilmesi zorunlu olan alanlarla birlikte https://www.paytr.com/odeme/api/link/create servisine istekte bulunulur.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
name (string)	Ürün veya hizmet adı	Evet	Ürün / Hizmetin açıklaması. En az 4 en fazla 200 karakter.
price (string)	Ödeme tutarı	Evet	14.45 TL için 14.45 * 100 = 1445 (100 ile çarpılmış ve integer olarak gönderilmelidir.)
currency (string)	Para birimi	Evet	TL, EUR, USD, GBP, RUB (Boş ise TL kabul edilir)
max_installment (string)	En fazla taksit sayısı: Gösterilecek en fazla taksit sayısını belirler (Örn. kuyum harcamalarında en fazla 4 taksit uygulaması vardır)	Evet	2 – 12 arası gönderilebilir. 1 gönderilirse bireysel kartlarla taksitli işlem yapılamaz.
link_type(integer)	Link Tipi	Evet	Ürün hizmet satışı için: product Fatura/Cari tahsilat için: collection
lang(string)	Ödeme sürecinde sayfalarda kullanılacak dil	Evet	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
name (string)	Ürün veya hizmet adı	Evet	Ürün / Hizmetin açıklaması. En az 4 en fazla 200 karakter.
price (string)	Ödeme tutarı	Evet	14.45 TL için 14.45 * 100 = 1445 (100 ile çarpılmış ve integer olarak gönderilmelidir.)
currency (string)	Para birimi	Evet	TL, EUR, USD, GBP, RUB (Boş ise TL kabul edilir)
max_installment (string)	En fazla taksit sayısı: Gösterilecek en fazla taksit sayısını belirler (Örn. kuyum harcamalarında en fazla 4 taksit uygulaması vardır)	Evet	2 – 12 arası gönderilebilir. 1 gönderilirse bireysel kartlarla taksitli işlem yapılamaz.
lang(string)	Ödeme sürecinde sayfalarda kullanılacak dil	Evet	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
get_qr	QR kod oluşturabilmeniz için PNG formatında Base64 kodu döner.	Hayır	1 veya 0 gönderilebilir. QR kod yanıtı alabilmek için 1 gönderilmelidir.
link_type(integer)	Link Tipi	Evet	Ürün hizmet satışı için: product Fatura/Cari tahsilat için: collection
paytr_token(string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir.	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız
min_count (integer)	Alt adet limiti (Link tipi product ise zorunlu)	Hayır	En az 1 olabilir.
email(string)	Eposta adresi (Link tipi collection ise zorunlu)	Hayır	En fazla 100 karakter
max_count(integer)	Stok adedi (Yalnızca product tipinde kullanılabilir. Link'in stok adedini belirler ve gönderilmezse stok limiti uygulanmaz. Stok adedi kadar ödeme yapıldığında link pasif olur)	Hayır	En az 1 olabilir
pft(integer)	Peşin Fiyatına Taksit ayarı (isteğe bağlı).Gönderilen en yüksek sayıya kadar olan tüm taksit seçenekleri Peşin Fiyatına Taksit olarak ayarlanır	Hayır	2-12 arasındaki değerleri alabilir.DİKKAT: Peşin Fiyatına Taksit olarak belirlediğiniz taksit sayıları için yapılan tüm ödeme işlemlerinde, taksit komisyonları sizden kesilecektir.
expiry_date	Linkin son kullanma tarihi	Hayır	Ödeme Link'inin son kullanma tarihi. Gönderilmezse, sürekli açık kalır. Örnek Format: “2021-05-31 17:00:00”
callback_link	Ödeme sonucunun gönderileceği URL	Hayır	http:// ya da https:// ile başlamalı, localhost olmamalı ve port içermemelidir.
callback_id	Bildirimde dönülecek ID (callback_link gönderildiğinde bu alanında gönderilmesi zorunludur.)	Hayır	Alfanumerik ve en fazla 64 karakter olabilir.
debug_on	Hata mesajı (Entegrasyon ve test sürecinde hataları tespit etmek için 1 gönderin).	Hayır	0 veya 1



2) DÖNEN DEĞERLER

Açıklama	Alan adı / tipi	Değerler
İstek sonucu	status (string)	success, error veya failed
Benzersiz link tanımlayıcı	id (string)	Örnek: NB2Zlz3
Link	status (string)	Örnek: https://www.paytr.com/link/NB2Zlz3
İstek açıklaması (hata durumunda)	reason (string)	Örnek: Zorunlu alan degeri gecersiz veya gonderilmedi (Link API - create): price


PHP PYTHON .NET NODEJS
<?php

    ########################## ÖDEME LİNKİ OLUŞTURMAK İÇİN ÖRNEK KODLAR ########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'AAAAAA';
    $merchant_key   = 'XXXXXXXXXXXXXXXX';
    $merchant_salt  = 'XXXXXXXXXXXXXXXX';
    #

    ## Gerekli Bilgiler
    #
    $name            = "Örnek Ürün / Hizmet Adı";
    # Ürün / Hizmetin açıklaması. En az 4 en fazla 200 karakter.
    #
    $price           = 1445;
    # 14.45 TL için 14.45 * 100 = 1445 (100 ile çarpılmış ve integer olarak gönderilmelidir.)
    #
    $currency        = "TL";
    # TL - USD - EUR - GBP gönderilebilir.
    #
    $max_installment = "12";
    # 2 - 12 arası gönderilebilir. 1 gönderilirse bireysel kartlar taksit yapılamaz.
    #
    $link_type       = "product";
    # collection (fatura/cari tahsilat) veya product (ürün/hizmet satışı) gönderilebilir.
    # collection ise email (ödeme yapan tarafın eposta adresi olmalı).
    # product ise min_count (satın alma adet alt limiti) gereklidir.
    #
    $lang            = "tr";
    # tr veya en gönderilebilir.
    $get_qr          = 1;
    # Opsiyoneldir 1 veya 0 gönderilebilir. 1 gönderildiğinde yanıt içerisinde
    # QR kod oluşturabilmeniz için PNG formatında Base64 kodu döner.

    $required        = $name.$price.$currency.$max_installment.$link_type.$lang;

    if($link_type == "product"){
        $min_count     = "1";
        # Alt adet limiti.
        $required     .= $min_count;
    }elseif($link_type == "collection"){
        $email         = time()."@example.com";
        # Ödeme yapan kullanıcının eposta adresi.
        $required     .= $email;
    }

    ## Opsiyonel bilgiler, gönderilmesi zorunlu değildir.
    #
    $expiry_date        = "2020-03-23 17:00:00";
    # Link'in son kullanma tarihi. Gönderilmezse, sürekli açık kalır.
    # Örnek format: 2021-05-31 17:00:00
    #
    $max_count          = "1";
    # Yalnızca product modunda kullanılabilir.
    # Link'in stok adedini belirler. Gönderilmezse, stok limiti uygulanmaz.
    # Stok adedi kadar ödeme yapıldığında link pasif olur.
    #
    //$pft             = "0"; // OPSİYONEL
    # 2 - 12 arası gönderilebilir. Gönderilen en yüksek sayıya kadar olan tüm taksit seçenekleri
    # Peşin Fiyatına Taksit olarak ayarlanır.
    # DİKKAT: Peşin Fiyatına Taksit olarak belirlediğiniz taksit sayıları için yapılan tüm
    # ödeme işlemlerinde, taksit komisyonları sizden kesilecektir.
    #
    $callback_link      = "";
    # Link ile yapılan ödemenin sonucunun gönderileceği URL. En fazla 400 kararkter.
    # http:// ya da https:// ile başlamalı, localhost olmamalı ve port içermemelidir.
    # callback_id gönderildiğinde bu alan zorunlu olmaktadır.
    #
    $callback_id        = "";
    # Bildirimde dönülecek bildirim ID'si. Alfanumerik ve en fazla 64 karakter olabilir.
    # callback_link gönderildiğinde bu alan zorunlu olmaktadır.

    $debug_on           = 1;
    # Entegrasyon hatalarını alabilmek için 1 olarak bırakın.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################
    #
    $paytr_token=base64_encode(hash_hmac('sha256', $required.$merchant_salt, $merchant_key, true));
    $post_vals=array(
        'merchant_id'       => $merchant_id,
        'name'              => $name,
        'price'             => $price,
        'currency'          => $currency,
        'max_installment'   => $max_installment,
        'link_type'         => $link_type,
        'lang'              => $lang,
        'min_count'         => $min_count,
        'email'             => $email,
        'expiry_date'       => $expiry_date,
        'max_count'         => $max_count,
        'callback_link'     => $callback_link,
        'callback_id'       => $callback_id,
        'debug_on'          => $debug_on,
        'get_qr'            => $get_qr,
        'paytr_token'       => $paytr_token
    );
    #
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/link/create");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR LINK CREATE API request timeout. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die($result['err_msg']);
    elseif($result['status']=='failed')
        print_r($result);
    else
        print_r($result);
Link API Create Servisi örnek kodlarını indirmek 

PayTR Kullanmaya Başlarken  Link API Entegrasyonu  Link API Delete ile Ödeme Linklerini Silme
Link API Delete ile Ödeme Linklerini Silme

Delete servisi ile daha önce oluşturmuş olduğunuz ödeme linklerini silebilirsiniz.

1- Aşağıdaki gönderilmesi zorunlu olan bilgiler iletildikten sonra bir token verisi üretilir.
2- Oluşan token ve gönderilmesi zorunlu olan alanlarla birlikte https://www.paytr.com/odeme/api/link/delete servisine istekte bulunulur.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
id (integer)	Link API Create metodundan dönülen değer	Evet
merchant_id(integer)	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
id (integer)	Link API Create metodundan dönülen değer(Toplu silme için "," ile ayrılarak maksimum 10 adet iletilebilir)	Evet	-
debug_on(int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Evet	0 veya 1
paytr_token(string)	paytr_token: İsteğin sizden geldiğine veiçeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.



2) DÖNEN DEĞERLER

Açıklama	Alan adı / tipi	Değerler
İstek sonucu	status (string)	success, error veya failed
İstek açıklaması (hata durumunda)	reason (string)	Örnek: Zorunlu alan degeri gecersiz veya gonderilmedi (Link API - create): price
Toplu silme durumunda başarılı silinen linkler	success_deletes (array)	success_deletes => Array (0) => XXXX (1) => YYYY
Toplu silme durumunda başarılı silinen linkler	failed_deletes (array)	failed_deletes => Array ( (0) => XXXX (1) => YYYY


PHP PYTHON .NET NODEJS
<?php

    ########################### ÖDEME LİNKİNİ SİLMEK İÇİN ÖRNEK KODLAR #########################

    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'AAAAAA';
    $merchant_key   = 'XXXXXXXXXXXXXXXX';
    $merchant_salt  = 'XXXXXXXXXXXXXXXX';
    #

    ## Gerekli Bilgiler
    #
    $id             = "YYYXXX";  //Toplu silme için XXXX,YYYY,ZZZZ şeklinde maksimum 10 adet olacak şekilde iletilebilir  // Link ID - create metodunda dönülen değerdir.
    $debug_on       = 1;           // Hataları ekrana basmak için kullanılır.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################
    #
    $paytr_token=base64_encode(hash_hmac('sha256', $id.$merchant_id.$merchant_salt, $merchant_key, true));
    $post_vals=array(
        'merchant_id'       => $merchant_id,
        'id'                => $id,
        'debug_on'          => $debug_on,
        'paytr_token'       => $paytr_token
    );
    #
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/link/delete");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR LINK DELETE API request timeout. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die($result['err_msg']);
    elseif($result['status']=='failed')
        print_r($result);
    else
        print_r($result);
Link API Delete Servisi örnek kodlarını indirmek için tıklayın.

PayTR Kullanmaya Başlarken  Link API Entegrasyonu  Link API Callback Servisi
Link API Callback Servisi

Oluşturduğunuz ödeme linki üzerinden yalnızca başarılı bir ödeme yapıldığında, Create servisinde o link için göndermiş olduğunuz callbak_url’e işlem sonucu bildirilir.

BİLGİ: Eğer Create servisinde callbak_url belirlemediyseniz veya belirlemek istemiyorsanız, bu entegrasyonu yapmanız gerek yoktur.

DİKKAT: Bu servis yalnızca Create servisinde gönderdiğiniz linkin eğer varsa callback_url’ine istek atar. Mağaza Paneli içerisinde Bildirim URL kısmı ile hiçbir bağlantısı bulunmamaktadır.

PayTR sistemince link için tanımladığınız Bildirim URL’nize POST REQUEST içeriğinde gönderilecek değerler:

Alan Adı	Açıklama
hash	PayTR sisteminden gönderilen değerlerin doğruluğunu kontrol etmeniz için güvenlik amaçlı oluşturulan hash değeri (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)
merchant_oid	PayTR tarafından oluşturulan sipariş referans numarası.
status	Başarılı ödeme sonucunda success değeri döner (Link API'de başarısız ödemeler için bildirim yapılmaz).
total_amount	Müşteriden tahsil edilen toplam tutar. (100 ile çarpılmış hali gönderilir. 34.56 => 3456) (Not: Müşteri vade farklı taksit seçtiği vb. durumlarda, 1. ADIM’da gönderdiğiniz “payment_amount” değerinden daha yüksek olabilir)
payment_amount	Sipariş tutarı: 1. ADIM’da gönderdiğiniz “payment_amount” değeridir. (100 ile çarpılmış hali gönderilir. 34.56 => 3456)
payment_type	Müşterinin hangi ödeme şekli ile ödemesini tamamladığını belirtir. Örn. card, bex vb. değerleri alır.
currency	Para birimi: Ödemenin hangi para birimi üzerinden yapıldığını belirtir. TL, USD, EUR, GBP, RUB değerlerinden birini alır.
callback_id	Link oluşturmada (create) ilettiğiniz callbak_id bilgisi.
merchant_id	PayTR mağaza numaranız.
test_mode	Mağazanız test modunda iken veya canlı modda yapılan test işlemlerde 1 olarak gönderilir
Bildirim URL’nize PayTR sistemince yapılacak isteğe dönülmesi gereken yanıt (RESPONSE) text (düz yazı) formatında ve yalnızca OK değeri olmalıdır.

Örnek (PHP): echo "OK";
Örnek (.NET): Response.Write("OK");
ÖNEMLİ UYARILAR:

Bildirim URL adresinize üye girişi ve benzeri erişim kısıtlaması yapılmamalıdır. Böylece PayTR sistemi bildirimleri kolayca iletebilecektir.

Bildirim URL’nize gelecek bildirimlere döneceğiniz OK yanıtının öncesinde veya sonrasında HTML veya herhangi başka bir içerik ekrana basılmamalıdır.

Bildirim URL’niz, müşterinizin ödeme sırasında ulaşacağı bir sayfa değildir, PayTR tarafından arka planda (server-side) ödeme sonucunu bildirmek için kullanılır. Bu nedenle, Bildirim URL’nizde kodlama yaparken oturum (SESSION) değerlerini kullanamazsınız. İşlemlerinizi Mağaza sipariş no (merchant_oid) kullanarak gerçekleştirmelisiniz.

OK yanıtı alınmayan bildirimlerde, ilgili sipariş Mağaza Paneli'ndeki İşlemler sayfasında “Devam Ediyor” olarak görünecektir.

PayTR sistemi, Bildirim URL’nizden OK cevabını istendiği şekilde almadığı durumda, bildirimin başarısız olduğunu varsayar. Ağ trafik sorunları, sitenizdeki anlık yoğunluklar ve benzeri nedenlerden dolayı aynı ödeme işlemi için birden fazla bildirim ulaşabilir. Bu nedenle, bildirimin birden fazla geldiği durumlarda, yalnızca ilk bildirim göz önünde bulundurulmalı, sonraki bildirimler için müşteriye tekrar ürün/hizmet sunulmamalıdır. Tekrarlayan bildirimlerde yalnızca OK yanıtı ile süreç sonlandırılmalıdır. Tekrarlayan bildirimlerin tespiti Mağaza sipariş no (merchant_oid) temel alınarak yapılmalıdır.

Bildirimin PayTR sisteminden geldiğinden ve ulaşım esnasında değiştirilmediğinden emin olmak için, POST içerisindeki hash değeri ile tarafınızca oluşturulacak hash değerinin aynı olduğunu kontrol etmeniz, güvenlik açısından büyük önem arz etmektedir. Bu kontrolü yapmamanız durumunda maddi kayıplar ile karşılaşabilirsiniz.

Yukarıdaki açıklamalara uygun olarak Bildirim URL’nizi hazırladıysanız, kontrol için bir adet test ödemesi gerçekleştirmelisiniz. Eğer yaptığınız test işlem PayTR Mağaza Paneli’nizdeki İşlemler sayfasında “Başarılı” olarak görünürse PayTR entegrasyonunuz tümüyle tamamlanmıştır.

Eğer işlemin durumu “Devam Ediyor” olarak görünüyorsa Bildirim URL’nizden “OK” yanıtı alınamıyor demektir. İşlemler sayfasında yaptığınız test işleminin satırında “Detay” linkine tıklayıp, Bildirim URL’nizden hangi yanıt geldiğini kontrol edin.

ÖNEMLİ UYARI: Bildirim URL’iniz Paytr Mağaza Paneli > Destek & Kurulum > Ayarlar > Bildirim URL Ayarları kısmından, eğer sitenizde SSL var ise Bildirim URL protokolünü HTTPS olarak ayarlamanız gerekmektedir. SSL sertifikanız yok ise, kesinlikle HTTPS’li link kullanmayın. Eğer sitenizde Paytr entegrasyonundan sonra SSL kurulumu yaptıysanız, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTPS olarak değiştirerek kaydedin. Eğer kurulumdan sonra sitenizdeki SSL sertifikasını iptal ederseniz, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTP olarak değiştirerek kaydedin.

PHP PYTHON .NET NODEJS
<?php

    ############################# ÖDEME LİNKİ BİLDİRİM ÖRNEK KODLAR ############################
    #                                                                                          #
    $post = $_POST;

    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_key   = 'XXXXXXXXXXXXXXXX';
    $merchant_salt  = 'XXXXXXXXXXXXXXXX';
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################
    #
    ## POST değerleri ile hash oluştur.
    $hash = base64_encode( hash_hmac('sha256', $post['callback_id'].$post['merchant_oid'].$merchant_salt.$post['status'].$post['total_amount'], $merchant_key, true) );
    #
    ## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
    ## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
    if( $hash != $post['hash'] )
        die('PAYTR notification failed: bad hash');
    ############################################################################################
    #
    ## BURADA YAPILMASI GEREKENLER
    ## 1) Ödeme durumunu $post['callback_id'] değerini kullanarak veri tabanınızdan sorgulayın.
    ## 2) Eğer ödeme zaten daha önceden onaylandıysa (callback size ulaştıysa) sadece echo "OK"; exit; yaparak akışı sonlandırın.
    /* Ödeme durum sorgulama örnek
       $durum = SQL
       if($durum == "onay"){
            echo "OK";
            exit;
        }
     */

    if( $post['status'] == 'success' ) { ## Ödeme Onaylandı
        ## BURADA YAPILMASI GEREKENLER
        ## 1) Veri tabanınızda ödemeyi onaylayın.
        ## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
        ## 3) $post['total_amount'] müşterinin yaptığı ödemenin toplam tutarıdır. Muhasebe işlemlerinizde
        ## bu tutraı kullanmanız gerekmektedir.
    } else {
        ## Link API'de başarısız ödemeler için callback yapılmamaktadır.
        ## Dolayısıyla kod akışında buraya erişim olmayacaktır. Ancak ileride Link API'de yapılabilecek geliştirmeler
        ## için dilerseniz buraya bir handler yazabilirsiniz.
    }

    ## Bildirimin alındığını PayTR sistemine bildir. OK yanıtını bu alandan kaldırmayın.
    echo "OK";
    exit;
Link API CallBack Servisi örnek kodlarını indirmek için tıklayın.

PayTR Kullanmaya Başlarken  Link API Entegrasyonu  Link API SMS ve Email
Link API SMS ve Email

1-) SMS GÖNDERİMİ

Bu servisi kullanarak belirttiğiniz cep telefonu numarasına oluşturmuş olduğunuz linkle ödeme sayfasına ait linkin gönderimini sağlayabilirsiniz.

1- Aşağıdaki gönderilmesi zorunlu olan bilgiler iletildikten sonra bir token verisi üretilir.
2- Oluşan token ve gönderilmesi zorunlu olan alanlarla birlikte https://www.paytr.com/odeme/api/link/send-sms servisine istekte bulunulur.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
id (integer)	Link API Create metodundan dönülen değer	Evet	-
merchant_id(integer)	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
cell_phone(integer)	Linki göndermek istediğini telefon numarası	Evet	SMS gönderilecek numara. 05 ile başlamalı ve 11 hane olmalıdır
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
id (integer)	Link API Create metodundan dönülen değer	Evet	-
cell_phone(integer)	Linki göndermek istediğini telefon numarası	Evet	SMS gönderilecek numara. 05 ile başlamalı ve 11 hane olmalıdır
debug_on(int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Evet	0 veya 1
paytr_token(string)	paytr_token: İsteğin sizden geldiğine veiçeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.



PHP PYTHON .NET NODEJS
<?php

    ###################### ÖDEME LİNKİNİ SMS İLE GÖNDERMEK İÇİN ÖRNEK KODLAR ###################

    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'AAAAAA';
    $merchant_key   = 'XXXXXXXXXXXXXXXX';
    $merchant_salt  = 'XXXXXXXXXXXXXXXX';
    #

    ## Gerekli Bilgiler
    #
    $id             = "XXXYYY";         // Link ID - create metodunda dönülen değerdir.
    $cell_phone     = "05000000000";    // SMS gönderilecek numara. 05 ile başlamalı ve 11 hane olmalıdır.
    $debug_on       = 1;                // Hataları ekrana basmak için kullanılır.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################
    #
    $paytr_token=base64_encode(hash_hmac('sha256', $id.$merchant_id.$cell_phone.$merchant_salt, $merchant_key, true));
    $post_vals=array(
        'merchant_id'       => $merchant_id,
        'id'                => $id,
        'cell_phone'        => $cell_phone,
        'debug_on'          => $debug_on,
        'paytr_token'       => $paytr_token
    );
    #
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/link/send-sms");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR LINK SEND SMS API request timeout. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die($result['err_msg']);
    elseif($result['status']=='failed')
        print_r($result);
    else
        print_r($result);
Link API SMS&EMAIL Servisi örnek kodlarını indirmek için tıklayın.

2) EMAIL GONDERME

Bu servisi kullanarak belirttiğiniz e-mail adresine oluşturmuş olduğunuz linkle ödeme sayfasına ait linkin gönderimini sağlayabilirsiniz.

1- Aşağıdaki gönderilmesi zorunlu olan bilgiler iletildikten sonra bir token verisi üretilir.
2- Oluşan token ve gönderilmesi zorunlu olan alanlarla birlikte https://www.paytr.com/odeme/api/link/send-sms servisine istekte bulunulur.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
id (integer)	Link API Create metodundan dönülen değer	Evet	-
merchant_id(integer)	Ödeme tutarı	Evet	Mağaza no: PayTR tarafından size verilen Mağaza numarası
email(string)	Linki göndermek istediğini eposta bilgisi	Evet	En fazla 100 karakter
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
id (integer)	Link API Create metodundan dönülen değer	Evet	-
email(string)	Linki göndermek istediğini eposta bilgisi	Evet	En fazla 100 karakter
debug_on(int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Evet	0 veya 1
paytr_token(string)	paytr_token: İsteğin sizden geldiğine veiçeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.



PHP PYTHON .NET NODEJS
<?php

    #################### ÖDEME LİNKİNİ EPOSTA İLE GÖNDERMEK İÇİN ÖRNEK KODLAR ##################

    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'AAAAAA';
    $merchant_key   = 'XXXXXXXXXXXXXXXX';
    $merchant_salt  = 'XXXXXXXXXXXXXXXX';
    #

    ## Gerekli Bilgiler
    #
    $id             = "XXXYYY";         // Link ID - create metodunda dönülen değerdir.
    $email          = "test@mail.com";  // Eposta gönderilecek adres. Standart email adresi formatına uygun olmalıdır.
    $debug_on       = 1;                // Hataları ekrana basmak için kullanılır.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################
    #
    $paytr_token=base64_encode(hash_hmac('sha256', $id.$merchant_id.$email.$merchant_salt, $merchant_key, true));
    $post_vals=array(
        'merchant_id'       => $merchant_id,
        'id'                => $id,
        'email'             => $email,
        'debug_on'          => $debug_on,
        'paytr_token'       => $paytr_token
    );
    #
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/link/send-email");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR LINK SEND MAIL API request timeout. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die($result['err_msg']);
    elseif($result['status']=='failed')
        print_r($result);
    else
        print_r($result);
Link API SMS&EMAIL Servisi örnek kodlarını indirmek için tıklayın.

3) SERVİSTEN DÖNEN DEĞERLER

Açıklama	Alan adı / tipi	Değerler
İstek sonucu	status (string)	success, error veya failed
İstek açıklaması (hata durumunda)	reason (string)	Örnek: Zorunlu alan degeri gecersiz veya gonderilmedi (Link API - create): price

Direkt API Entegrasyonu

Direkt API çözümünde, kullanılacak tüm servislerin kullanılacak yapıya entegre edilmesi ve test işlemlerinin sağlanması mağaza tarafından yapılmaktadır. Bu sebepten dolayı ödeme sayfasının çalışması, kullanılacak servislerin sağlıklı şekilde oluşturulması ve herhangi bir işlem kaybı yaşamamak adına, yazılım bilgisine sahip olunması gerekmektedir. Direkt API çözümünde, güvenlik olmak üzere tüm akış mağaza sahibinin kontrolünde ve sorumluluğundadır. Bu çözümde herhangi hazır bir yapı bulunmamaktadır. Direkt API çözümünü kullanma talebiniz, ilgili birimlerimizin onayından geçmesi halinde mağazanıza tanımlanmaktadır. Bu konu hakkında talebinizi reddetme veya onaylama hakkını PayTR kendinde saklı tutmaktadır.

ENTEGRASYON HAKKINDA ÖNEMLİ ÖN BİLGİLENDİRME:
Mağaza Bilgileri: Entegrasyon için gerekli olan API entegrasyon bilgilerine Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri bölümünden ulaşabilirsiniz. (Bu bilgileri sadece Ana Kullanıcı ve Teknik kullanıcı görüntülüyebilir.)
Entegrasyon 2 Adımlıdır:

ADIM – Web sitenizde ödeme formunun hazırlanarak API tarafından ihtiyaç duyulan bilgilerin PayTR sistemlerine gönderilmesi.
ADIM - PayTR sisteminin ödeme sonuçlarını bildireceği, sitenizin bildirim sayfasının(Bildirim URL) ayrı olarak hazırlanıp kodlanması.

Yardım talepleriniz için Mağaza paneli Destek & Kurulum sayfasındaki Destek Sayfasından mesajlarınızı göndermenizi rica ederiz.

Web siteniz veya uygulamanız üzerinde kullanabileceğiniz, PayTR görsellerini indirmek için tıklayın.

Direkt API dokümanı ve tüm servisleri indirmek için tıklayın.

Direkt API Entegrasyonu 1. Adım

ÖDEME FORMUNDAN BİLGİLERİN ALINARAK AKTARILMASI

1) Müşteri, üye işyeri web sayfasında satın alma isteminde bulunur.

2) Üye işyeri bu istek doğrultusunda, Müşteriye ödeme seçeneklerini sunduğu sayfaya yönlendirir.

3) Müşterinin ödeme için bilgileri girmesi ve onaylaması sonrasında, Üye işyeri sayfası aşağıda belirlenmiş verileri aşağıdaki sırayla, PAYTR bilgisi dahilinde olan üye işyeri parolası ve üye işyeri gizli anahtarı ile önce sha256 algoritması ve HMAC(http://en.wikipedia.org/wiki/Hash-based_message_authentication_code) yöntemi ile şifreleyerek token oluşturur. Sonrasında token'ı base64 hale dönüştürür.

4) Eğer müşteri taksitli işlem gerçekleştirecekse kartın hangi kart ailesine ait olduğunu öğrenebilmek için Binsorgu servisine istek yapılır. Binsorgu servisinden dönülen "brand" alanı yakalanarak ödeme isteğinde "card_type" parametresinde iletilir.

5) Eğer bir taksit tablosu gösterilmek istenirse veya işlemde taksitli vade farkı müşteriye yansıtılmak istenirse taksit-oranları servisi üzerinden ilgili tüm taksit oranları çekilebilir.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası		
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası(Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası.(Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter,Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_amount(integer)	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Ayraç olarak yalnızca nokta(.) gönderilmelidir
payment_type(string)	Ödeme tipi	Evet	('card')
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12
currency(string)	Para birimi	Hayır	TL, EUR, USD, GBP, RUB(Boş ise TL kabul edilir)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1
request_exp_date(int)	Sıfırdan farklı bir değer gönderilmesi durumunda,ödeme işlemi bu süre öncesinde tamamlanmalıdır.(Ödeme sırasında sisteminizde fiyat güncellemesi olması durumuna karşı güvenlik amaçlı kullanabilirsiniz)	Hayır	Timestamp

4) Üye iş yeri, ürettiği token, token üretmek için kullandığı veriler ve token üretimi için gerekmeyen ancak ödeme işlemi için gerekli veriler ile birlikte https://www.paytr.com/odeme adresine POST metodu ile gönderir. (Önemli Uyarı: Üye iş yeri sayfasındaki form, kart bilgileri içerdiğinden sadece PayTR’a POST edilmelidir. Üye iş yerinin kendi sunucusuna POST kesinlikle yapılmamalıdır.)

POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet
paytr_token (string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası (Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası. (Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter, Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_type(string)	Ödeme tipi	Evet	('card')
payment_amount (double), ondalık olarak nokta (.) ve noktadan sonra iki hane	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Örn: 100.99 veya 150 veya 1500.35
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
card_type(string)	Kart tipi (Taksitli işlemlerde kullanmak üzere)	Hayır	advantage, axess, combo, bonus, cardfinans, maximum, paraf, world, saglamkart
currency(string)	Para birimi	Hayır	TL(veya TRY), EUR, USD (Boş ise TL kabul edilir)
client_lang(string)	Ödeme sürecinde kullanılacak dil	Hayır	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1
non3d_test_failed	Non 3D işlemde, başarısız işlem durumunu test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)	Hayır	0 veya 1
cc_owner(string)	Kart sahibi	Evet	50 karakter
card_number(string)	Kart numarası	Evet	16 karakter
expiry_month(string)	Kart son kullanma tarihi(Ay)	Evet	1, 2, 3, .. , 11, 12
expiry_year(string)	Kart son kullanma tarihi(Yıl)	Evet	25, 26, 27,…
cvv(string)	Kart güvenlik kodu	Evet	3 karakter
merchant_ok_url(string)	Müşterinin başarılı ödeme sonrası yönledirileceği sayfa (Örn.Siparişlerim takip sayfası)(Uyarı: Müşteri bu sayfaya ulaştığında henüz sipariş onaylanmış olmaz)	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
merchant_fail_url(string)	Müşterinin ödemesi sırasında beklenmeyen bir hatada yönlendirileceği sayfa	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
user_name (string)	Müşteri adı ve soyadı: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız adı ve soyadı	Evet	En fazla 60 karakter
user_address (string)	Müşteri adresi: Müşterinin sipariş sırasında ilettiği adresi	Evet	En fazla 400 karakter
user_phone (string)	Müşteri telefon numarası: Müşterinin sipariş sırasında ilettiği telefon numarası	Evet	En fazla 20 karakter
user_basket (string)	Sepet içeriği: Müşterinin siparişindeki ürün/hizmet bilgilerini içermelidir	Evet	JSON tipinde(Örnek kodları inceleyin)
debug_on (int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Hayır	0 veya 1(Entegrasyon ve test sürecinde hataları tespit etmek için mutlaka 1
sync_mode (int)	Sync Mode: Ödeme isteğinin gönderilmesi ardından işlem sonucuna göre başarılı veya başarısız sayfasına yönlendirme yapılmadan, JSON formatında olan yanıt direkt olarak istek sonucuna döner. Ek olarak; işleme ait detaylar tanımlı olan Bildirim URL adresine gönderilir. Sync mode sonucunda dönen status alanının alabileceği değerler “failed”, “wait_callback” ve “success” şeklindedir.Not: Bu işlem için mağazanızda Non3D yetkisinin açık olması gerekmektedir.	Hayır	0 veya 1(İlgili yetkinin mağazaya tanımlanabilmesi için tarafımıza talep iletilmesi gerekmektedir. Birimlerimizin onayından geçmesi halinden yetki mağazaya tanımlanacaktır.)
SYNC MODE YANITLARI

status	msg (Açıklama)	utoken, ctoken (Kart saklama yapıldıysa)
failed	“Henüz devam eden bir işleminiz bulunmaktadır, sonuçlandıktan sonra tekrar deneyebilirsiniz.” veya farklı bir hata mesajı.	Hayır
wait_callback	Ödeme Kontrol Ediliyor, Bildirimi Bekleyin.	Evet
success	Ödeme Başarılı.	Evet


5) PAYTR sistemi, gönderilen bilgiler üzerinden kontrol ve doğrulamaları yapar ve ödeme sonucuna göre üye işyerinin vermiş olduğu merchant_ok_url veya merchant_fail_url adresine müşteriyi yönlendirir. Merchant_ok_url’e yönlenme durumunda POST içeriğinde herhangi bir veri gönderilmez. Merchant_fail_url’e yönlendirme durumunda POST içeriğinde fail_message alanında ödemenin neden başarısız olduğu bilgisi bulunur. Bu bilgi müşteriye doğrudan gösterilebilir şekilde formatlanmış bir mesajdır

6) Ödeme girişiminin sonucu, Üye işyeri web sitesindeki Bildirim URL’e(Callback URL), token, üye işyeri sipariş numarası ve ödeme durumu vb. bilgisinin post edilmesiyle üye işyerine bildirilir.



Yukarıda anlatılan aşamaların tamamlanmasıyla birlikte, ödeme işleminde müşterinin etkileşimde bulunacağı kısım entegrasyonda böylece tamamlanmış olur. ANCAK; entegrasyonunuz henüz tamamlanmamıştır, 2. ADIM ödeme sonucunu (başarılı/başarısız) almanız ve siparişi onaylamanız / iptal etmeniz için gereklidir.

ÖNEMLİ UYARI: PayTR ödeme alt yapısı asenkron olarak çalışmaktadır. Bu nedenle ödeme tamamlandığında müşteri merchant_ok_url'e yönlendirilirken, ödemenin kesin sonucu (Başarılı ya da Başarısız sonucu) Bildirim URL'ye POST ile gönderilmektedir. merchant_ok_url'e herhangi bir veri POST edilmemektedir, bu nedenle merchant_ok_url olarak belirttiğiniz sayfada sipariş onay/iptal gibi işlem yapmamalısınız.

PHP PYTHON .NET NODEJS
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>

    <?php

        $merchant_id = 'MAGAZA_NO';
        $merchant_key = 'XXXXXXXXXXX';
        $merchant_salt = 'YYYYYYYYYYY';

        $merchant_ok_url="http://site-ismi/basarili";
        $merchant_fail_url="http://site-ismi/basarisiz";

        $user_basket = htmlentities(json_encode(array(
            array("Altis Renkli Deniz Yatağı - Mavi", "18.00", 1),
            array("Pharmasol Güneş Kremi 50+ Yetişkin & Bepanthol Cilt Bakım Kremi", "33,25", 2),
            array("Bestway Çocuklar İçin Plaj Seti Beach Set ÇANTADA DENİZ TOPU-BOT-KOLLUK", "45,42", 1)
        )));

        srand(time(null));
        $merchant_oid = rand();

        $test_mode="0";

        //3d'siz işlem
        $non_3d="0";

        //Ödeme süreci dil seçeneği tr veya en
        $client_lang = "tr";

        //non3d işlemde, başarısız işlemi test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)
        $non3d_test_failed="0";

        if( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        } elseif( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
            $ip = $_SERVER["REMOTE_ADDR"];
        }

        $user_ip = $ip;

        $email = "testnon3d@paytr.com";

        // 100.99 TL ödeme
        $payment_amount = "100.99";
        $currency="TL";
        //
        $payment_type = "card";

//      $card_type = "bonus";       // Alabileceği değerler; advantage, axess, combo, bonus, cardfinans, maximum, paraf, world, saglamkart
//      $installment_count = "5";

        $post_url = "https://www.paytr.com/odeme";

        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $payment_type . $installment_count. $currency. $test_mode. $non_3d;
        $token = base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));
    ?>

    <body>
        <form action="<?php echo $post_url;?>" method="post">
          Kart Sahibi Adı: <input type="text" name="cc_owner" value="TEST KARTI"><br>
          Kart Numarası: <input type="text" name="card_number" value="9792030394440796"><br>
          Kart Son Kullanma Ay: <input type="text" name="expiry_month" value="12" ><br>
          Kart Son Kullanma Yıl: <input type="text" name="expiry_year" value="99"><br>
          Kart Güvenlik Kodu: <input type="text" name="cvv" value="000"><br>
          <input type="hidden" name="merchant_id" value="<?php echo $merchant_id;?>">
          <input type="hidden" name="user_ip" value="<?php echo $user_ip;?>">
          <input type="hidden" name="merchant_oid" value="<?php echo $merchant_oid;?>">
          <input type="hidden" name="email" value="<?php echo $email;?>">
          <input type="hidden" name="payment_type" value="<?php echo $payment_type;?>">
          <input type="hidden" name="payment_amount" value="<?php echo $payment_amount;?>">
          <input type="hidden" name="currency" value="<?php echo $currency;?>">
          <input type="hidden" name="test_mode" value="<?php echo $test_mode;?>">
          <input type="hidden" name="non_3d" value="<?php echo $non_3d;?>">
          <input type="hidden" name="merchant_ok_url" value="<?php echo $merchant_ok_url;?>">
          <input type="hidden" name="merchant_fail_url" value="<?php echo $merchant_fail_url;?>">
          <input type="hidden" name="user_name" value="Paytr Test">
          <input type="hidden" name="user_address" value="test test test">
          <input type="hidden" name="user_phone" value="05555555555">
          <input type="hidden" name="user_basket" value="<?php echo $user_basket; ?>">
          <input type="hidden" name="debug_on" value="1">
          <input type="hidden" name="client_lang" value="<?php echo $client_lang; ?>">
          <input type="hidden" name="paytr_token" value="<?php echo $token; ?>">
          <input type="hidden" name="non3d_test_failed" value="<?php echo $non3d_test_failed; ?>">
          <input type="hidden" name="installment_count" value="<?php echo $installment_count; ?>">
          <input type="hidden" name="card_type" value="<?php echo $card_type; ?>">
          <input type="submit" value="Submit">
        </form>
    </body>
</html>
Direkt API 1. Adım örnek kodları indirmek için tıklayın.

Direkt API Entegrasyonu 2. Adım

ÖDEME SONUÇLARININ ALINMASI İÇİN BİLDİRİM URL’in HAZIRLANMASI

1. ADIM’da ödeme formunu kullanarak müşteriniz ödeme yaptığında, PayTR sistemi ödeme sonucunu yazılımınıza bildirmelidir ve yazılımınızdan bildirimin alındığına dair cevap almalıdır. Aksi halde, ödeme işlemi tamamlanmaz ve tarafınıza ödeme aktarılmaz.

PayTR sistemince ödeme sonuç bildiriminin yapılacağı sayfa (Bildirim URL) tarafınızca belirlenmeli ve Mağaza Paneli Destek & Kurulum alanındaki AYARLAR sayfasında tanımlanmalıdır.

Tanımlayacağınız Bildirim URL’ye POST metodu ile ödemenin sonucu (başarılı veya başarısız) her işlem için ayrı olarak gönderilir. Bu bildirime istinaden Bildirim URL’nizde yapacağınız kodlama ile yazılımınızda siparişi onaylamalı veya iptal etmelisiniz, ekrana OK basarak PayTR sistemine cevap vermelisiniz.

PayTR sistemince Bildirim URL’nize POST REQUEST içeriğinde gönderilecek değerler:



Alan adı	Zorunlu	Token	Açıklama
merchant_oid	Evet	Evet	Mağaza sipariş no: Satış işlemi için belirlediğiniz ve 1. ADIM’da gönderdiğiniz sipariş numarası
status	Evet	Evet	Ödeme işleminin sonucu (success veya failed)
total_amount	Evet	Evet	İşlem başarılı ise ödeme tutarı, işlem başarısız ise sıfır (0) döner.
hash	Evet	Evet	PayTR sisteminden gönderilen değerlerin doğruluğunu kontrol etmeniz için güvenlik amaçlı oluşturulan hash değeri (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)
failed_reason_code	Hayır	Evet	Ödemenin onaylanmaması durumunda gönderilir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu)
failed_reason_msg	Hayır	Evet	Ödemenin neden onaylanmadığı mesajını içerir (Bkz: 2. Adım İçin Hata Kodları ve Açıklamaları Tablosu)
test_mode	Evet	Evet	Mağazanız test modunda iken veya canlı modda yapılan test işlemlerde 1 olarak gönderilir.
payment_type	Evet	Evet	Ödeme şekli: Müşterinin hangi ödeme şekli ile ödemesini tamamladığını belirtir. 'card' veya 'eft' değerlerini alır.
currency	Evet	Hayır	Para birimi: Ödemenin hangi para birimi üzerinden yapıldığını belirtir. ‘TL’, ‘USD’, ‘EUR’, ‘GBP, ‘RUB’ değerlerinden birini alır.
payment_amount	Evet	Hayır	Sipariş tutarı: 1. ADIM’da gönderdiğiniz “payment_amount” değeridir.(100 ile çarpılmış hali gönderilir. 34.56 => 3456)
installment_count	Evet	Hayır	İşlemde yapılan taksit sayısı
Bildirim URL’nize PayTR sistemince yapılacak isteğe dönülmesi gereken yanıt (RESPONSE) text (düz yazı) formatında ve yalnızca OK değeri olmalıdır.

Örnek (PHP): echo "OK";
Örnek (.NET): Response.Write("OK");
ÖNEMLİ UYARILAR:

Bildirim URL adresinize üye girişi ve benzeri erişim kısıtlaması yapılmamalıdır. Böylece PayTR sistemi bildirimleri kolayca iletebilecektir.

Bildirim URL’nize gelecek bildirimlere döneceğiniz OK yanıtının öncesinde veya sonrasında HTML veya herhangi başka bir içerik ekrana basılmamalıdır.

Bildirim URL’niz, müşterinizin ödeme sırasında ulaşacağı bir sayfa değildir, PayTR tarafından arka planda (server-side) ödeme sonucunu bildirmek için kullanılır. Bu nedenle, Bildirim URL’nizde kodlama yaparken oturum (SESSION) değerlerini kullanamazsınız. İşlemlerinizi Mağaza sipariş no (merchant_oid) kullanarak gerçekleştirmelisiniz.

OK yanıtı alınmayan bildirimlerde, ilgili sipariş Mağaza Paneli'ndeki İşlemler sayfasında “Devam Ediyor” olarak görünecektir.

PayTR sistemi, Bildirim URL’nizden OK cevabını istendiği şekilde almadığı durumda, bildirimin başarısız olduğunu varsayar. Ağ trafik sorunları, sitenizdeki anlık yoğunluklar ve benzeri nedenlerden dolayı aynı ödeme işlemi için birden fazla bildirim ulaşabilir. Bu nedenle, bildirimin birden fazla geldiği durumlarda, yalnızca ilk bildirim göz önünde bulundurulmalı, sonraki bildirimler için müşteriye tekrar ürün/hizmet sunulmamalıdır. Tekrarlayan bildirimlerde yalnızca OK yanıtı ile süreç sonlandırılmalıdır. Tekrarlayan bildirimlerin tespiti Mağaza sipariş no (merchant_oid) temel alınarak yapılmalıdır.

Bildirimin PayTR sisteminden geldiğinden ve ulaşım esnasında değiştirilmediğinden emin olmak için, POST içerisindeki hash değeri ile tarafınızca oluşturulacak hash değerinin aynı olduğunu kontrol etmeniz, güvenlik açısından büyük önem arz etmektedir. Bu kontrolü yapmamanız durumunda maddi kayıplar ile karşılaşabilirsiniz.

2. Adım İçin Hata Kodları ve Açıklamaları

failed_reason_code	failed_reason_msg	Açıklama
0	DEĞİŞKEN (AÇIKLAMAYI OKUYUN)	Ödemenin neden onaylanmadığına ilişkin,detaylı hata mesajı (Örneğin: Kartın limiti /bakiyesi yetersiz).
1	Kimlik Doğrulama yapılmadı. Lütfen tekrar deneyin ve işlemi tamamlayın.	Müşteri, kimlik doğrulama adımında cep telefonu numarasını girmedi.
2	Kimlik Doğrulama başarısız. Lütfen tekrar deneyin ve şifreyi doğru girin.	Müşteri, cep telefonuna gelen şifreyi doğru girmedi.
3	Güvenlik kontrolü sonrası onay verilmedi veya kontrol yapılamadı.	Müşterinin işlemi PayTR tarafından güvenlik kontrolünden geçemedi veya kontrol yapılamadı.
6	Müşteri ödeme yapmaktan vazgeçti ve ödeme sayfasından ayrıldı.	Müşteri, kendisine tanınmış olan işlem süresinde(1. ADIM’da tanımlanan request_exp_date değeri) işlemini tamamlamadı veya müşteri ödeme sayfasını kapatarak işlemi sonlandırdı.
8	Bu karta taksit yapılamamaktadır.	Müşterinin kullanmakta olduğu kart ile seçmiş olduğu taksitli ödeme yöntemi kullanılamaz.
9	Bu kart ile işlem yetkisi bulunmamaktadır.	Müşterinin kullanmakta olduğu kart için mağazanızın işlem yetkisi bulunmuyor.
10	Bu işlemde 3D Secure kullanılmalıdır.	Müşteri, yapmış olduğu işlemde 3D Secure ile ödeme yapmalıdır.
11	Güvenlik uyarısı. İşlem yapan müşterinizi kontrol edin.	Müşterinin işleminde fraud tespiti bulunuyor. Güvenliğiniz için müşterinin işlemlerini kontrol edin.
99	İşlem başarısız: Teknik entegrasyon hatası.	Teknik entegrasyon hatası varsa dönülecektir. (debug_on değeri 0 ise)


Yukarıdaki açıklamalara uygun olarak Bildirim URL’nizi hazırladıysanız, kontrol için bir adet test ödemesi gerçekleştirmelisiniz. Eğer yaptığınız test işlem PayTR Mağaza Paneli’nizdeki İŞLEMLER sayfasında “Başarılı” olarak görünürse PayTR entegrasyonunuz tümüyle tamamlanmıştır.

Eğer işlemin durumu “Devam Ediyor” olarak görünüyorsa Bildirim URL’nizden “OK” yanıtı alınamıyor demektir. İŞLEMLER sayfasında yaptığınız test işleminin satırında “Detay” linkine tıklayıp, Bildirim URL’nizden hangi yanıt geldiğini kontrol edin.

ÖNEMLİ UYARI: Bildirim URL’iniz Paytr Mağaza Paneli > Destek & Kurulum > Ayarlar > Bildirim URL Ayarları kısmından, eğer sitenizde SSL var ise Bildirim URL protokolünü HTTPS olarak ayarlamanız gerekmektedir. SSL sertifikanız yok ise, kesinlikle HTTPS’li link kullanmayın. Eğer sitenizde Paytr entegrasyonundan sonra SSL kurulumu yaptıysanız, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTPS olarak değiştirerek kaydedin. Eğer kurulumdan sonra sitenizdeki SSL sertifikasını iptal ederseniz, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTP olarak değiştirerek kaydedin.



PHP PYTHON .NET NODEJS
<?php

    ## 2. ADIM için örnek kodlar ##

    ## ÖNEMLİ UYARILAR ##
    ## 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
    ## 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
    ## veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
    ## 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
    ## siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.

    $post = $_POST;

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    ###########################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    #
    ## POST değerleri ile hash oluştur.
    $hash = base64_encode( hash_hmac('sha256', $post['merchant_oid'].$merchant_salt.$post['status'].$post['total_amount'], $merchant_key, true) );
    #
    ## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
    ## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
    if( $hash != $post['hash'] )
        die('PAYTR notification failed: bad hash');
    ###########################################################################

    ## BURADA YAPILMASI GEREKENLER
    ## 1) Siparişin durumunu $post['merchant_oid'] değerini kullanarak veri tabanınızdan sorgulayın.
    ## 2) Eğer sipariş zaten daha önceden onaylandıysa veya iptal edildiyse  echo "OK"; exit; yaparak sonlandırın.

    /* Sipariş durum sorgulama örnek
       $durum = SQL
       if($durum == "onay" || $durum == "iptal"){
            echo "OK";
            exit;
        }
     */

    if( $post['status'] == 'success' ) { ## Ödeme Onaylandı

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi onaylayın.
        ## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
        ## 3) 1. ADIM'da gönderilen payment_amount sipariş tutarı taksitli alışveriş yapılması durumunda
        ## değişebilir. Güncel tutarı $post['total_amount'] değerinden alarak muhasebe işlemlerinizde kullanabilirsiniz.

    } else { ## Ödemeye Onay Verilmedi

        ## BURADA YAPILMASI GEREKENLER
        ## 1) Siparişi iptal edin.
        ## 2) Eğer ödemenin onaylanmama sebebini kayıt edecekseniz aşağıdaki değerleri kullanabilirsiniz.
        ## $post['failed_reason_code'] - başarısız hata kodu
        ## $post['failed_reason_msg'] - başarısız hata mesajı

    }

    ## Bildirimin alındığını PayTR sistemine bildir.
    echo "OK";
    exit;
?>
Direkt API 2. Adım örnek kodları indirmek için tıklayın.
Direkt API Test Kart Bilgileri

TEST KART BİLGİLERİ

Kart bilgileri	Alabileceği değerler	Açıklama
Adı Soyadı	PAYTR TEST	Dilediğiniz şekilde gönderebilirsiniz.
Kart No	4355 0843 5508 4358	Bu değer zorunludur.
Son Kullanma	12 / 30	Dilediğiniz şekilde gönderebilirsiniz.
CVV	000	Bu değer zorunludur.


Kart bilgileri	Alabileceği değerler	Açıklama
Adı Soyadı	PAYTR TEST	Dilediğiniz şekilde gönderebilirsiniz.
Kart No	5406 6754 0667 5403	Bu değer zorunludur.
Son Kullanma	12 / 30	Dilediğiniz şekilde gönderebilirsiniz.
CVV	000	Bu değer zorunludur.


Kart bilgileri	Alabileceği değerler	Açıklama
Adı Soyadı	PAYTR TEST	Dilediğiniz şekilde gönderebilirsiniz.
Kart No	9792 0303 9444 0796	Bu değer zorunludur.
Son Kullanma	12 / 30	Dilediğiniz şekilde gönderebilirsiniz.
CVV	000	Bu değer zorunludur.


Test kart bilgileri direkt API çözümü için geçerlidir. iFrame API ödeme yönteminde test kart bilgileri otomatik olarak gelmektedir. Ek olarak; ad-soyad ve son kullanma tarihini test işleminde istediğiniz değerde gönderebilirsiniz.

4.1 Direkt Kart Saklama API

Kart Saklama API servisi ile kullanıcılar kart saklama yapabilir ve kayıtlı kartlar aracılığıyla ödeme alabilirsiniz. Kayıtlı kart bilgileri PayTR'da saklanmaktadır. Ödeme işlemleriniz için istek tarafımıza gönderildikten sonra işleme alınmaktadır.

KART SAKLAMA API
1- Yeni Kart Ekleme. Bu linkten gidebilirsiniz.
2- Kayıtlı karttan ödeme. Bu linkten gidebilirsiniz.
3- Kayıtlı kart listesi. Bu linkten gidebilirsiniz.
4- Kayıtlı kart silme. Bu linkten gidebilirsiniz.

Yeni Kart Ekleme

KULLANICININ KARTINI KAYDETME – ÖDEME SIRASINDA (CAPI PAYMENT)
Bu servisi kullanarak ödeme esnasında PayTR’da kayıtlı bir kullanıcı ve kullanıcıya ait bir kart oluşturabilirsiniz. Bunun için izlenecek süreç aşağıdaki şekilde olmalıdır.
1- Direkt API Dokümanında belirtildiği şekilde ödeme sayfanızı oluşturun.
2- Kredi kartı bilgilerinin girildiği adımda kullanıcıya kartını kayıt etmek istediğini seçebileceği bir onay kutucuğu ekleyin.
3- Kullanıcı kart bilgilerini kaydetmeyi seçerse gerekli bilgileri POST içeriğine ekleyin:
a. Kullanıcı adına sistemde ilk kez bir kart kaydediliyorsa POST içeriğinde yalnızca “store_card” parametresi gönderilir.
b. Kullanıcının daha önceden sistemde tanımlanmış bir kartı varsa ve yeni bir kart kaydetmek istiyorsa, POST içeriğinde “utoken” ve “store_card” parametreleri birlikte gönderilmelidir.
4- Ödemenin sonucunda gelen bildirimde (Bildirim URL’e), kart saklama için gönderilen aşağıdaki değerleri ilgili tablolarınıza kaydedin ve bir sonraki işlem için hazır durumda tutun.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza No: PayTR tarafından size verilen Mağaza numarası		
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası(Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası.(Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter,Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_amount(integer)	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Ayraç olarak yalnızca nokta(.) gönderilmelidir
payment_type(string)	Ödeme tipi	Evet	('card')
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12
currency(string)	Para birimi	Hayır	TL, EUR, USD, GBP, RUB(Boş ise TL kabul edilir)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1


utoken gönderilmediği durumda, bu kullanıcıya ait daha önceden kaydedilmiş bir kart olmadığı varsayılır ve PayTR tarafında yeni bir utoken oluşturularak ödeme işleminin cevabında döndürülür. Eğer kullanıcı sisteminizde daha önce bir kaydetmişse tarafınızda kayıtlı utoken parametresini post içeriğine eklemelisiniz. Böylece bu kart da aynı kullanıcıya tanımlanacaktır. Eğer mevcut kullanıcı için yeni bir kart tanımı yapılacağı halde mevcut utoken gönderilmezse yeni bir utoken oluşturulacağından kullanıcının tüm kartları tek bir utoken altında gruplanmaz.

Alan adı / tipi	Açıklama
utoken (string)	User Token: Sitenizdeki kullanıcıya özel PayTR tarafından oluşturulmuş token. Bu token’ı sisteminizde işlemi yapan kullanıcıyla eşleştirmelisiniz.


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet
paytr_token (string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası (Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası. (Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter, Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_type(string)	Ödeme tipi	Evet	('card')
payment_amount (double), ondalık olarak nokta (.) ve noktadan sonra iki hane	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Örn: 100.99 veya 150 veya 1500.35
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
card_type(string)	Kart tipi (Taksitli işlemlerde kullanmak üzere)	Hayır	advantage, axess, combo, bonus, cardfinans, maximum, paraf, world
currency(string)	Para birimi	Hayır	TL(veya TRY), EUR, USD (Boş ise TL kabul edilir)
client_lang(string)	Ödeme sürecinde kullanılacak dil	Hayır	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1
non3d_test_failed	Non 3D işlemde, başarısız işlem durumunu test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)	Hayır	0 veya 1
cc_owner(string)	Kart sahibi	Evet	50 karakter
card_number(string)	Kart numarası	Evet	16 karakter
expiry_month(string)	Kart son kullanma tarihi(Ay)	Evet	1, 2, 3, .. , 11, 12
expiry_year(string)	Kart son kullanma tarihi(Yıl)	Evet	20, 21, 22,…
cvv(string)	Kart güvenlik kodu	Evet	3 karakter
merchant_ok_url(string)	Müşterinin başarılı ödeme sonrası yönledirileceği sayfa (Örn.Siparişlerim takip sayfası)(Uyarı: Müşteri bu sayfaya ulaştığında henüz sipariş onaylanmış olmaz)	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
merchant_fail_url(string)	Müşterinin ödemesi sırasında beklenmeyen bir hatada yönlendirileceği sayfa	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
user_name (string)	Müşteri adı ve soyadı: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız adı ve soyadı	Evet	En fazla 60 karakter
user_address (string)	Müşteri adresi: Müşterinin sipariş sırasında ilettiği adresi	Evet	En fazla 400 karakter
user_phone (string)	Müşteri telefon numarası: Müşterinin sipariş sırasında ilettiği telefon numarası	Evet	En fazla 20 karakter
user_basket (string)	Sepet içeriği: Müşterinin siparişindeki ürün/hizmet bilgilerini içermelidir	Evet	JSON tipinde(Örnek kodları inceleyin)
debug_on (int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Hayır	0 veya 1(Entegrasyon ve test sürecinde hataları tespit etmek için mutlaka 1
utoken	Utoken gönderilmediği durumda, bu kullanıcıya ait daha önceden kaydedilmiş bir kart olmadığı varsayılır. PayTR tarafında yeni bir utoken oluşturularak ödeme işleminin devamında döndürülür. (BİLDİRİM URL'E) Eğer kullanıcı sisteminizde daha önce bir kart kaydetmişse tarafınızda kayıtlı utoken parametresini POST içeriğine eklemelisiniz. Böylece bu kart da aynı kullanıcıya tanımlanacaktır. Eğer mecvut kullanıcı için yeni bir kart tanımı yapılacağı halde mevcut utoken gönderilmezse yeni bir utoken oluşturalacağından kullanıcının tüm kartları tek bir utoken altında gruplanmaz	Evet(Açıklama dikkatli okunmalı.)	-
store_card	Kullanıcı adına sistemde ilk kez bir kart kaydediliyorsa POST içeriğinde yalnızca “store_card” parametresi gönderilir.Kullanıcının daha önceden sistemde tanımlanmış bir kartı varsa ve yeni bir kart kaydetmek istiyorsa, POST içeriğinde “utoken” ve “store_card” parametreleri birlikte gönderilmelidir.	Evet(Açıklama dikkatli okunmalı.)	1 veya 0


PHP PYTHON .NET NODEJS
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>

    <?php

    ## Kullanıcının ödeme yaparken yeni bir kart kaydetmesi için örnek kodlar ##

        $merchant_id = 'MAGAZA_NO';
        $merchant_key = 'XXXXXXXXXXX';
        $merchant_salt = 'YYYYYYYYYYY';

        $merchant_ok_url="http://site-ismi/basarili";
        $merchant_fail_url="http://site-ismi/basarisiz";

        $user_basket = htmlentities(json_encode(array(
            array("Altis Renkli Deniz Yatağı - Mavi", "18.00", 1),
            array("Pharmasol Güneş Kremi 50+ Yetişkin & Bepanthol Cilt Bakım Kremi", "33,25", 2),
            array("Bestway Çocuklar İçin Plaj Seti Beach Set ÇANTADA DENİZ TOPU-BOT-KOLLUK", "45,42", 1)
        )));

        srand(time(null));
        $merchant_oid = rand();

        $test_mode="0";

        //3d'siz işlem
        $non_3d="0";

        //non3d işlemde, başarısız işlemi test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)
        $non3d_test_failed="0";

        if( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        } elseif( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
            $ip = $_SERVER["REMOTE_ADDR"];
        }

        $user_ip = $ip;

        $email = "testnon3d@paytr.com";

        // 100.99 TL ödeme
        $payment_amount = "100.99";
        $currency="TL";
        //
        $payment_type = "card";

//      $card_type = "bonus";       // Alabileceği değerler; advantage, axess, bonus, cardfinans, maximum, paraf, world
//      $installment_count = "5";

        $post_url = "https://www.paytr.com/odeme";

        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $payment_type . $installment_count. $currency. $test_mode. $non_3d;
        $token = base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));

        // UTOKEN GÖNDERİLMEDİĞİ DURUMDA, BU KULLANICIYA AİT DAHA ÖNCEDEN KAYDEDİLMİŞ BİR KART OLMADIĞI VARSAYILIR
    // VE PAYTR TARAFINDA YENİ BİR UTOKEN OLUŞTURULARAK ÖDEME İŞLEMİNİN CEVABINDA DÖNDÜRÜLÜR (BİLDİRİM URL'YE)!
        // EĞER KULLANICI SİSTEMİNİZDE DAHA ÖNCE BİR KART KAYDETMİŞSE TARAFINIZDA KAYITLI UTOKEN PARAMETRESİNİ POST İÇERİĞİNE EKLEMELİSİNİZ.
    // BÖYLECE BU KART DA AYNI KULLANICIYA TANIMLANACAKTIR. EĞER MEVCUT KULLANICI İÇİN YENİ BİR KART
    // TANIMI YAPILACAĞI HALDE MEVCUT UTOKEN GÖNDERİLMEZSE YENİ BİR UTOKEN OLUŞTURULACAĞINDAN KULLANICININ TÜM KARTLARI TEK BİR UTOKEN ALTINDA GRUPLANMAZ!!!

        $utoken = "";
    ?>

    <body>
        <form action="<?php echo $post_url;?>" method="post">
          Kart Sahibi Adı: <input type="text" name="cc_owner" value="TEST KARTI"><br>
          Kart Numarası: <input type="text" name="card_number" value="9792030394440796"><br>
          Kart Son Kullanma Ay: <input type="text" name="expiry_month" value="12" ><br>
          Kart Son Kullanma Yıl: <input type="text" name="expiry_year" value="99"><br>
          Kart Güvenlik Kodu: <input type="text" name="cvv" value="000"><br>
          <input type="hidden" name="merchant_id" value="<?php echo $merchant_id;?>">
          <input type="hidden" name="user_ip" value="<?php echo $user_ip;?>">
          <input type="hidden" name="merchant_oid" value="<?php echo $merchant_oid;?>">
          <input type="hidden" name="email" value="<?php echo $email;?>">
          <input type="hidden" name="payment_type" value="<?php echo $payment_type;?>">
          <input type="hidden" name="payment_amount" value="<?php echo $payment_amount;?>">
          <input type="hidden" name="installment_count" value="0">
          <input type="hidden" name="currency" value="<?php echo $currency;?>">
          <input type="hidden" name="test_mode" value="<?php echo $test_mode;?>">
          <input type="hidden" name="non_3d" value="<?php echo $non_3d;?>">
          <input type="hidden" name="merchant_ok_url" value="<?php echo $merchant_ok_url;?>">
          <input type="hidden" name="merchant_fail_url" value="<?php echo $merchant_fail_url;?>">
          <input type="hidden" name="user_name" value="Paytr Test">
          <input type="hidden" name="user_address" value="test test test">
          <input type="hidden" name="user_phone" value="05555555555">
          <input type="hidden" name="user_basket" value="<?php echo $user_basket; ?>">
          <input type="hidden" name="debug_on" value="1">
          <input type="hidden" name="paytr_token" value="<?php echo $token; ?>">
          <input type="hidden" name="non3d_test_failed" value="<?php echo $non3d_test_failed; ?>">
          <input type="hidden" name="installment_count" value="<?php echo $installment_count; ?>">
          <input type="hidden" name="card_type" value="<?php echo $card_type; ?>">
          <input type="hidden" name="utoken" value="<?php echo $utoken; ?>">
          <input type="checkbox" name="store_card" value="1"/> Kartımı Kaydet
          <br />
          <input type="submit" value="Submit">
        </form>
    </body>
</html>
New Card Servisi örnek kodlarını indirmek için tıklayın.

Kayıtlı Karttan Ödeme

CAPI LIST servisinden dönen require_cvv, utoken ve ctoken değerlerinin kullanımı.
1- Ödeme işlemini yapan kullanıcının kayıtlı kart listesi alınarak kullanıcının önüne listelenlir.
2-Kullanıcı listelenen kartlar arasından ödeme yapacağı kartı seçer.
3-Kullanıcının seçtiği karta ait require_cvv parametresi kontrol edilip eğer 1 ise CVV gireceği alan gösterilir.
4-Kullanıcının seçtiği kartın ctoken bilgisi ve kullanıcının utoken bilgisi ödeme isteğinde gönderilir.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza No: PayTR tarafından size verilen Mağaza numarası		
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası(Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası.(Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter,Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_amount(integer)	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Ayraç olarak yalnızca nokta(.) gönderilmelidir
payment_type(string)	Ödeme tipi	Evet	('card')
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12
currency(string)	Para birimi	Hayır	TL, EUR, USD, GBP, RUB(Boş ise TL kabul edilir)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet
paytr_token (string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası (Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası. (Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter, Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_type(string)	Ödeme tipi	Evet	('card')
require_cvv	Kullanıcının seçtiği karta ait require_cvv parametresi kontrol edilip eğer 1 ise CVV gireceği alan gösterilir	Evet(Açıklama dikkatli okunmalı.)	-
payment_amount (double), ondalık olarak nokta (.) ve noktadan sonra iki hane	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Örn: 100.99 veya 150 veya 1500.35
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
card_type(string)	Kart tipi (Taksitli işlemlerde kullanmak üzere)	Hayır	advantage, axess, combo, bonus, cardfinans, maximum, paraf, world
currency(string)	Para birimi	Hayır	TL(veya TRY), EUR, USD (Boş ise TL kabul edilir)
client_lang(string)	Ödeme sürecinde kullanılacak dil	Hayır	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Non 3D işlem yapabilmek için 1 gönderilebilir	Evet	0 veya 1
non3d_test_failed	Non 3D işlemde, başarısız işlem durumunu test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)	Hayır	0 veya 1
merchant_ok_url(string)	Müşterinin başarılı ödeme sonrası yönledirileceği sayfa (Örn.Siparişlerim takip sayfası)(Uyarı: Müşteri bu sayfaya ulaştığında henüz sipariş onaylanmış olmaz)	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
merchant_fail_url(string)	Müşterinin ödemesi sırasında beklenmeyen bir hatada yönlendirileceği sayfa	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
user_name (string)	Müşteri adı ve soyadı: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız adı ve soyadı	Evet	En fazla 60 karakter
user_address (string)	Müşteri adresi: Müşterinin sipariş sırasında ilettiği adresi	Evet	En fazla 400 karakter
user_phone (string)	Müşteri telefon numarası: Müşterinin sipariş sırasında ilettiği telefon numarası	Evet	En fazla 20 karakter
user_basket (string)	Sepet içeriği: Müşterinin siparişindeki ürün/hizmet bilgilerini içermelidir	Evet	JSON tipinde(Örnek kodları inceleyin)
debug_on (int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Hayır	0 veya 1(Entegrasyon ve test sürecinde hataları tespit etmek için mutlaka 1
utoken	Kullanıcıya ait kartı kaydederken servisten tarafınıza dönen ve sizin sistemininiz üzerinden kullacınızla eşleştirdiğiniz değer	Evet
ctoken	CAPI LIST servisinden dönen kullanıcının kayıtlı kartına ait ctoken değeri	Evet


PHP PYTHON .NET NODEJS
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>

    <?php

    ## Kullanıcının ödeme yaparken kayıtlı kartını kullanması için örnek kodlar ##

        $merchant_id = 'MAGAZA_NO';
        $merchant_key = 'XXXXXXXXXXX';
        $merchant_salt = 'YYYYYYYYYYY';

        $merchant_ok_url="http://site-ismi/basarili";
        $merchant_fail_url="http://site-ismi/basarisiz";

        $user_basket = htmlentities(json_encode(array(
            array("Altis Renkli Deniz Yatağı - Mavi", "18.00", 1),
            array("Pharmasol Güneş Kremi 50+ Yetişkin & Bepanthol Cilt Bakım Kremi", "33,25", 2),
            array("Bestway Çocuklar İçin Plaj Seti Beach Set ÇANTADA DENİZ TOPU-BOT-KOLLUK", "45,42", 1)
        )));

        srand(time(null));
        $merchant_oid = rand();

        $test_mode="0";

        //3d'siz işlem
        $non_3d="0";

        //non3d işlemde, başarısız işlemi test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)
        $non3d_test_failed="0";

        if( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        } elseif( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
            $ip = $_SERVER["REMOTE_ADDR"];
        }

        $user_ip = $ip;

        $email = "testnon3d@paytr.com";

        // 100.99 TL ödeme
        $payment_amount = "100.99";
        $currency="TL";
        //
        $payment_type = "card";

        //      $card_type = "bonus";       // Alabileceği değerler; advantage, axess, bonus, cardfinans, maximum, paraf, world
        //      $installment_count = "5";

        $post_url = "https://www.paytr.com/odeme";

        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $payment_type . $installment_count. $currency. $test_mode. $non_3d;
        $token = base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));

        ## CAPI LIST servisinden dönen require_cvv, utoken ve ctoken değerlerinin kullanımı ##
        ## Ödeme işlemini yapan kullanıcının kayıtlı kart listesi alınarak kullanıcının önüne listelenlir. ##
        ## Kullanıcı listelenen kartlar arasından ödeme yapacağı kartı seçer ##
        ## Kullanıcının seçtiği karta ait require_cvv parametresi kontrol edilip eğer 1 ise CVV gireceği alan gösterilir ##
        ## Kullanıcının seçtiği kartın ctoken bilgisi ve kullanıcının utoken bilgisi ödeme isteğinde gönderilir. ##
        $utoken = "";
        $ctoken = "";       
        $require_cvv = ""; 

    ?>

    <body>
        <form action="<?php echo $post_url;?>" method="post">
          <!-- CVV gereklilik kontrolü yapılıyor -->
          <?php if($require_cvv == 1) { ?>
            Kart Güvenlik Kodu: <input type="text" name="cvv" value=""><br>
          <?php } ?>
          <input type="hidden" name="merchant_id" value="<?php echo $merchant_id;?>">
          <input type="hidden" name="user_ip" value="<?php echo $user_ip;?>">
          <input type="hidden" name="merchant_oid" value="<?php echo $merchant_oid;?>">
          <input type="hidden" name="email" value="<?php echo $email;?>">
          <input type="hidden" name="payment_type" value="<?php echo $payment_type;?>">
          <input type="hidden" name="payment_amount" value="<?php echo $payment_amount;?>">
          <input type="hidden" name="installment_count" value="0">
          <input type="hidden" name="currency" value="<?php echo $currency;?>">
          <input type="hidden" name="test_mode" value="<?php echo $test_mode;?>">
          <input type="hidden" name="non_3d" value="<?php echo $non_3d;?>">
          <input type="hidden" name="merchant_ok_url" value="<?php echo $merchant_ok_url;?>">
          <input type="hidden" name="merchant_fail_url" value="<?php echo $merchant_fail_url;?>">
          <input type="hidden" name="user_name" value="Paytr Test">
          <input type="hidden" name="user_address" value="test test test">
          <input type="hidden" name="user_phone" value="05555555555">
          <input type="hidden" name="user_basket" value="<?php echo $user_basket; ?>">
          <input type="hidden" name="debug_on" value="1">
          <input type="hidden" name="paytr_token" value="<?php echo $token; ?>">
          <input type="hidden" name="non3d_test_failed" value="<?php echo $non3d_test_failed; ?>">
          <input type="hidden" name="installment_count" value="<?php echo $installment_count; ?>">
          <input type="hidden" name="card_type" value="<?php echo $card_type; ?>">
          <input type="hidden" name="utoken" value="<?php echo $utoken; ?>">
          <input type="hidden" name="ctoken" value="<?php echo $ctoken; ?>">
          <br />
          <input type="submit" value="Submit">
        </form>
    </body>
</html>
Stored Card Servisi örnek kodlarını indirmek için tıklayın.

Kayıtlı Kart Listesi

KULLANICININ KAYITLI KART LİSTESİNİ ALMA (CAPI LIST)
1) Bir kullanıcı ödeme işlemine başlarken kullanıcıya PayTR’da kayıtlı olan kartları listelemek için https://www.paytr.com/odeme/capi/list adresine aşağıdaki parametreler ile istek yapın.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
utoken	Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Zorunlu	Açıklama
merchant_id (integer)	Evet	Mağaza No: PayTR tarafından size verilen Mağaza numarası
utoken (string)	Evet	User Token: Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token
paytr_token (string)	Evet	Paytr Token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)

2) Yapılan isteğe aşağıdaki tabloda bulunan değerler JSON formatında dönecektir. Gönderdiğiniz bilgiler ile herhangi bir eşleşme bulunamadığında cevap boş JSON olarak döner.

Alan adı / tipi	Zorunlu	Olası/Örnek Değerler
status (string)	Status: Hata durumunda error olarak döner, işlem başarılı olduğunda döndürülmez	error
err_msg (string)	Error Message: İstek başarısız olduğu durumlarda err_msg’de hata nedeni döndürülür	Örnek: Bağlantı hatası oluştu
ctoken (string)	Card Token: Kullanıcının kayıtlı kartını tanımlayan token	
last_4 (string)	Son 4: Kayıtlı kartın son 4 hanesi	
require_cvv (string)	CVV gerekli: Bu kayıtlı kart ile ödeme yapmak için CVV gerekip gerekmediği	0 veya 1 (Bir kart için 1 dönerse, kart ile ödeme yapılabilmesi için kullanıcıdan CVV bilgisini almanız gerekmektedir)
month (string)	Ay: Kartının son kullanma tarihinin ay bilgisi	Örnek: 05
year (string)	Yılı: Kartının son kullanma tarihinin yıl bilgisi	Örnek: 28
c_bank (string)	Banka: Kartının bankası	Örnek: Yapı Kredi
c_name	Adı Soyadı: Kullanıcının kart kayıt sırasında girdiği ad soyadı	
c_brand (string)	Kart Program Ortaklığı İsmi	Örnek: maximum, bonus,world vb.
c_type (string)	Kart Tipi: Kredi kartı veya banka kartı / ön ödemeli kart	credit veya debit
businessCard (string)	Şirket Kartı: Kartın şirket kartı olup olmadığı bilgisi	y / n
initial (string)	Kart Şeması: 2 ve 5 MasterCard, 3 Amex, 4 VISA, 9 TROY	2,3,4,5,9
schema (string)	Kartın şeması: Kartın hangi şemaya ait olduğu bilinmiyorsa OTHER döner.	VISA, MASTERCARD, AMEX, TROY, vb.

3) Dönen kart bilgileri alınarak kullanıcıya seçebileceği kayıtlı kartlarını listeleyin.
4) Seçilen kayıtlı kartın ctoken bilgisi ve kullanıcıya ait utoken bilgisini kullanarak ödeme başlatın (Eğer seçilen kart için require_cvv değeri 1 ise kullanıcıya CVV gireceği bir alan sunmalısınız ve ödeme isteğinde CVV'yi göndermelisiniz).

Bu işlem sonunda kayıtlı kart listesi JSON formatında döner.

PHP PYTHON .NET NODEJS
<?php

    ## utoken ile kayıtlı kartların listesi alındığında 1nci adım dokümanında ki zorunlu alanları tamamlayamıyoruz.
    ## Kayıtlı bir kart ile ödeme işlemini tamamlama adımını tarif edebilir misiniz?

    ## Kullanıcı kart listesi için örnek kodlar ##

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    #
    ## Kart kayıt sonrası ödeme bildiriminde tarafınıza PAYTR sisteminden bildirilen kullanıcıya özel token
    $utoken = "";
    #
    ############################################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    $hash_str = $utoken . $merchant_salt;
    $paytr_token=base64_encode(hash_hmac('sha256', $hash_str, $merchant_key, true));
    $post_vals=array(
        'merchant_id'=>$merchant_id,
        'utoken'=>$utoken,
        'paytr_token'=>$paytr_token
    );
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/capi/list");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR CAPI List connection error. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die("PAYTR CAPI list failed. Error:".$result['err_msg']);
    else
        print_r($result);

?>
List Card Servisi örnek kodlarını indirmek için tıklayın.

Kayıtlı Kart Silme

KULLANICI KARTINI SİLME (CAPI DELETE)

1- Bir kullanıcının kayıtlı kartları arasından bir kart silmek için https://www.paytr.com/odeme/capi/delete adresine aşağıdaki parametreleri göndererek istek yapın.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
utoken	Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token	Evet	-
ctoken	CAPI LIST servisinden kullanıcınıza ait karta token bilgisi	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Zorunlu	Açıklama
merchant_id (integer)	Evet	Mağaza No: PayTR tarafından size verilen Mağaza numarası
utoken (string)	Evet	User Token: Kart kayıt sonrası ödeme bildiriminde tarafınıza PayTR sisteminden bildirilen kullanıcıya özel token
paytr_token (string)	Evet	PayTR Token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)
ctoken (string)	Evet	Card Token: Kullanıcının kayıtlı kartını tanımlayan token.


2- Yapılan isteğe aşağıdaki tabloda bulunan değerler JSON formatında dönecektir. Dönen cevaba göre kullanıcınızı bilgilendirebilirsiniz.

Alan adı / tipi	Zorunlu	Olası/Örnek Değerler
status (string)	Status: Yapılan kart silme isteğinin başarılı ya da başarısız olduğunu belirtir	success veya error
err_msg (string)	Error Message: İstek başarısız olduğu durumlarda err_msg’de hata nedeni döndürülür	Örnek: Kart yok veya daha önce silinmiş


PHP PYTHON .NET NODEJS
    <?php

    ## Kart silmek için örnek kodlar ##

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    #
    ## Kart kayıt sonrası ödeme bildiriminde tarafınıza PAYTR sisteminden bildirilen kullanıcıya özel token
    $utoken = "";
    #
    ## Kullanıcının kayıtlı kartını tanımlayan token (Kullanıcı kayıtlı kart listesini alma sonucunda dönen yanıtta bulunur)
    $ctoken = "";
    #
    ############################################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    $hash_str = $ctoken . $utoken . $merchant_salt;
    $paytr_token=base64_encode(hash_hmac('sha256', $hash_str, $merchant_key, true));
    $post_vals=array(
        'merchant_id'=>$merchant_id,
        'ctoken'=>$ctoken,
        'utoken'=>$utoken,
        'paytr_token'=>$paytr_token
    );
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/capi/delete");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR CAPI Delete connection error. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='success')
        echo "Kart silindi!";
    else
        die("PAYTR CAPI Delete failed. Error:".$result['err_msg']);

    ?>
Delete Card Servisi örnek kodlarını indirmek için tıklayın.

Kayıtlı Kart Tekrarlayan Ödeme

KAYITLI KART İLE TEKRARLAYAN ÖDEME ALMA (RECURRING PAYMENT)

Bu servisi kullanarak tekrarlayan ödeme için PAYTR’da kullanıcınıza ait kayıtlı bir kart ile dilediğiniz zaman veya aralıklarla ödeme alabilirsiniz.

1- Recurring Payment adımında belirtilen değerlerle birlikte ödeme istek bloğunu oluşturun. Ödeme işlemi, kendi oluşturacağınız yapı üzerinden, kayıtlı kart bilgileri ile servise göndereceğiniz istek sonucunda oluşacaktır. Bu sebepten dolayı kullanıcıyla etkileşime girecek form oluşturulmasına gerek bulunmamaktadır.

2- İşlemler Non3D (Non Secure) olarak gerçekleşecektir. Kullanıcınız herhangi bir ek işlem yapmayacak veya işlem sırasında kendisinden herhangi bir bilgi talep edilmeyecektir (Kullanabilmek için mağazanızda Non3D yetkilerinin açık olması gerekmektedir).

3- CAPI LIST servisinden, adına ödeme gerçekleştirilmek istenen kullanıcınıza ait utoken verisini kullanarak, ctoken verisine ulaşmanız gerekmektedir. Akabinde utoken, ctoken ve aşağıda ki tabloda belirtilen değerlerle birlikte https://www.paytr.com/odeme adresine POST metodu ile ödeme isteğinde bulunabilirsiniz.

POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet
paytr_token (string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası (Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası. (Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter, Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_type(string)	Ödeme tipi	Evet	('card')
payment_amount (double), ondalık olarak nokta (.) ve noktadan sonra iki hane	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Örn: 100.99 veya 150 veya 1500.35
installment_count(int)	Taksit sayısı	Evet	0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
card_type(string)	Kart tipi (Taksitli işlemlerde kullanmak üzere)	Hayır	advantage, axess, combo, bonus, cardfinans, maximum, paraf, world
currency(string)	Para birimi	Hayır	TL(veya TRY), EUR, USD (Boş ise TL kabul edilir)
client_lang(string)	Ödeme sürecinde kullanılacak dil	Hayır	Türkçe için tr veya İngilizce için en (Boş gönderilirse tr geçerli olur)
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
non_3d	Tekrarlayan ödeme için 1 gönderilmelidir	Evet	0 veya 1
non3d_test_failed	Non 3D işlemde, başarısız işlem durumunu test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)	Hayır	0 veya 1
merchant_ok_url(string)	Müşterinin başarılı ödeme sonrası yönledirileceği sayfa (Örn.Siparişlerim takip sayfası)(Uyarı: Müşteri bu sayfaya ulaştığında henüz sipariş onaylanmış olmaz)	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
merchant_fail_url(string)	Müşterinin ödemesi sırasında beklenmeyen bir hatada yönlendirileceği sayfa	Evet	En fazla 400 karakter Uyarı: Tam URL olmalıdır
user_name (string)	Müşteri adı ve soyadı: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız adı ve soyadı	Evet	En fazla 60 karakter
user_address (string)	Müşteri adresi: Müşterinin sipariş sırasında ilettiği adresi	Evet	En fazla 400 karakter
user_phone (string)	Müşteri telefon numarası: Müşterinin sipariş sırasında ilettiği telefon numarası	Evet	En fazla 20 karakter
user_basket (string)	Sepet içeriği: Müşterinin siparişindeki ürün/hizmet bilgilerini içermelidir	Evet	JSON tipinde(Örnek kodları inceleyin)
debug_on (int)	Hata döndür: PayTR’a yanlış veya eksik bilgi iletilmesi durumunda sistemden hata mesajı döndürülmesi için 1 gönderilmelidir	Hayır	0 veya 1(Entegrasyon ve test sürecinde hataları tespit etmek için mutlaka 1
utoken(string)	User Token: Sitenizdeki kullanıcıya özel PAYTR tarafından oluşturulmuş token. Bu token’ı sisteminizde işlemi yapan kullanıcıyla eşleştirmelisiniz	Evet	-
ctoken(string)	Card Token: Kullanıcının kayıtlı kartını tanımlayan token	Evet	-
recurring_payment(int)	Recurring: Ödeme isteğinin gönderilmesi ardından işlem sonucuna göre başarılı veya başarısız sayfasına yönlendirme yapılmadan, JSON formatında olan yanıt direkt olarak istek sonucuna döner. Ek olarak; işleme ait detaylar tanımlı olan Bildirim URL adresine gönderilir. Recurring sonucunda dönen status alanının alabileceği değerler “failed”, “wait_callback” ve “success” şeklindedir.Not: Bu işlem için mağazanızda Non3D yetkisinin açık olması gerekmektedir.	Hayır	0 veya 1(İlgili yetkinin mağazaya tanımlanabilmesi için tarafımıza talep iletilmesi gerekmektedir Birimlerimizin onayından geçmesi halinden yetki mağazaya tanımlanacaktır.)


RECURRING YANITLARI

status	msg (açıklama)	try_again
failed	“Kart banka tarafından kapatılmış. Bu kart ile tekrar işlem göndermeyin.”veya farklı bir hata mesajı.	false
failed	Henüz devam eden bir işleminiz bulunmaktadır, sonuçlandıktan sonra tekrar deneyebilirsiniz.	true
wait_callback	Ödeme Kontrol Ediliyor, Bildirimi Bekleyin	-
success	Ödeme Başarılı.	-


PHP PYTHON .NET NODEJS
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>

    <?php

    ## Kullanıcının ödeme yaparken kayıtlı kartını kullanması için örnek kodlar ##

        $merchant_id = 'MAGAZA_NO';
        $merchant_key = 'XXXXXXXXXXX';
        $merchant_salt = 'YYYYYYYYYYY';

        $merchant_ok_url="http://site-ismi/basarili";
        $merchant_fail_url="http://site-ismi/basarisiz";

        $user_basket = htmlentities(json_encode(array(
            array("Altis Renkli Deniz Yatağı - Mavi", "18.00", 1),
            array("Pharmasol Güneş Kremi 50+ Yetişkin & Bepanthol Cilt Bakım Kremi", "33,25", 2),
            array("Bestway Çocuklar İçin Plaj Seti Beach Set ÇANTADA DENİZ TOPU-BOT-KOLLUK", "45,42", 1)
        )));

        srand(time(null));
        $merchant_oid = rand();

        $test_mode="0";

        //3d'siz işlem
        $non_3d="1";

        //non3d işlemde, başarısız işlemi test etmek için 1 gönderilir (test_mode ve non_3d değerleri 1 ise dikkate alınır!)
        $non3d_test_failed="0";

        if( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
            $ip = $_SERVER["HTTP_CLIENT_IP"];
        } elseif( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
            $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else {
            $ip = $_SERVER["REMOTE_ADDR"];
        }

        $user_ip = $ip;

        $email = "testnon3d@paytr.com";

        // 100.99 TL ödeme
        $payment_amount = "100.99";
        $currency="TL";
        //
        $payment_type = "card";

        //      $card_type = "bonus";       // Alabileceği değerler; advantage, axess, bonus, cardfinans, maximum, paraf, world
        //      $installment_count = "5";

        $post_url = "https://www.paytr.com/odeme";

        $recurring_payment = "1";

        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $payment_type . $installment_count. $currency. $test_mode. $non_3d;
        $token = base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));

        $utoken = "";
        $ctoken = "";       

    ?>

    <body>
        <form action="<?php echo $post_url;?>" method="post">
          <input type="hidden" name="merchant_id" value="<?php echo $merchant_id;?>">
          <input type="hidden" name="user_ip" value="<?php echo $user_ip;?>">
          <input type="hidden" name="merchant_oid" value="<?php echo $merchant_oid;?>">
          <input type="hidden" name="email" value="<?php echo $email;?>">
          <input type="hidden" name="payment_type" value="<?php echo $payment_type;?>">
          <input type="hidden" name="payment_amount" value="<?php echo $payment_amount;?>">
          <input type="hidden" name="installment_count" value="0">
          <input type="hidden" name="currency" value="<?php echo $currency;?>">
          <input type="hidden" name="test_mode" value="<?php echo $test_mode;?>">
          <input type="hidden" name="non_3d" value="<?php echo $non_3d;?>">
          <input type="hidden" name="merchant_ok_url" value="<?php echo $merchant_ok_url;?>">
          <input type="hidden" name="merchant_fail_url" value="<?php echo $merchant_fail_url;?>">
          <input type="hidden" name="user_name" value="Paytr Test">
          <input type="hidden" name="user_address" value="test test test">
          <input type="hidden" name="user_phone" value="05555555555">
          <input type="hidden" name="user_basket" value="<?php echo $user_basket; ?>">
          <input type="hidden" name="debug_on" value="1">
          <input type="hidden" name="paytr_token" value="<?php echo $token; ?>">
          <input type="hidden" name="non3d_test_failed" value="<?php echo $non3d_test_failed; ?>">
          <input type="hidden" name="installment_count" value="<?php echo $installment_count; ?>">
          <input type="hidden" name="card_type" value="<?php echo $card_type; ?>">
          <input type="hidden" name="utoken" value="<?php echo $utoken; ?>">
          <input type="hidden" name="ctoken" value="<?php echo $ctoken; ?>">
          <input type="hidden" name="recurring_payment" value="<?php echo $recurring_payment; ?>">
          <br />
          <input type="submit" value="Submit">
        </form>
    </body>
</html>
Recurring Payment Servisi örnek kodlarını indirmek için tıklayın.

4.2 Taksit Oranları Sorgulama

Direkt API entegrasyonu yapılırken, taksit oranlarını çekmek için taksit oranları sorgulama API kullanılır. Oranlar günlük olarak değişebilir. Bu nedenle bu oranları günlük olarak taksit oranları sorgulama API aracılığıyla çekip, veritabanına kaydedebilir, güncelleyebilirsiniz. Bu oranları taksitli işlemlerde ürün fiyatına göre uygulayabilirsiniz. Aşağıda yer alan tablolarda result değişkeni içinde dönen değerler ayrıntılı olarak anlatılmıştır.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
request_id	İstek atılırken oluşturulacak random değer.	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Değişkenler	Açıklamalar	Zorunlu
merchant_id	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet
request_id	En fazla 32 karakterden oluşan (string) istek ID'si. Yanıt içerisinde tekrar geri döner.	Evet
paytr_token		Evet
single_ratio	1 veya 0 (Mağaza tek çekim oranı için 1 gönderilmelidir)	Hayır
abroad_ratio	1 veya 0 (Mağaza yurtdışı tek çekim oranı için 1 gönderilmelidir)	Hayır


Result değişkeni içinde dönen değerler:

Değişkenler	Açıklamalar
status	Success olarak dönerse veritabanı işlemleri yapılır
request_id	En fazla 32 karakterden oluşan (string) istek ID'si. Yanıtta geri döner
err_msg	Hata mesajı döner (Örnek:"Zorunlu alan degeri gecersiz veya gonderilmedi:")
max_inst_non_bus	Mağazanıza tanımlı maksimum taksit sayısı
oranlar	Mağazanıza tanımlı taksit sayısının oranları kart tipine göre (axess, world, maximum, cardfinans, paraf, advantage, combo, bonus) array formatında döner

Taksit sorgulama örnek kodları: Örnek kodlar içinde nasıl yapılacağı detaylı olarak anlatılmaktadır.

PHP PYTHON .NET NODEJS
<?php
    $merchant_id='XXXXXX';
    $merchant_key='YYYYYYYYYYYYYY';
    $merchant_salt='ZZZZZZZZZZZZZZ';
    $request_id=time();

    $paytr_token=base64_encode(hash_hmac('sha256',$merchant_id.$request_id.$merchant_salt,$merchant_key,true));

    $post_vals=array(
        'merchant_id'=>$merchant_id,
        'request_id'=>$request_id,
        'paytr_token'=>$paytr_token
    );

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/taksit-oranlari");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
    {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);
    $result=json_decode($result,1);

    if($result[status]=='success')
    {
        //VT işlemleri vs.
        print_r($result);
    }
    else //Örn. $result -> array('status'=>'error', "err_msg" => "Zorunlu alan degeri gecersiz veya gonderilmedi: "
    {
        echo $result[err_msg];
    }
Taksit sorgulama örnek kodlarını indirmek için tıklayın.

4.3 BIN Sorgulama Servisi

BIN sorgulama servisi ile bir BIN numarası gönderip kartın detaylı bilgilerine ulaşabilirsiniz.

1- Detayını sorgulamak istediğiniz kartın BIN numarasını (kart numarasının ilk 6 veya 8 hanesini) ve aşağıdaki tabloda belirtilen diğer bilgileri https://www.paytr.com/odeme/api/bin-detail adresine POST ile gönderin.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
bin_number	BIN Numarası: Sorgulama yapılmak istenen karta ait kart numarasının ilk 6 veya 8 hanesi. Maksimum doğrulama için 8 hane kullanın.	Evet	Maksimum 8 hane olacak şekilde.
merchant_id	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Zorunlu	Açıklama
merchant_id(integer)	Evet	Mağaza no: PayTR tarafından size verilen Mağaza numarası
bin_number(string)	Evet	BIN Numarası: Kart numarasının ilk 6 veya 8 hanesi
paytr_token(string)	Evet	Paytr Token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir (Hesaplama ile ilgili olarak örnek kodlara bakmalısınız)

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. BIN Numarası tanmlı değilse (Örneğin bir yurtdışı kartı ise) status değeri “failed” olarak döner.
b. Eğer BIN numarası tanımlı ise status değeri “success” olarak döner ve aşağıdaki tabloda bulunan bilgiler döner.
c. Eğer sorguda bir hatanız varsa status değeri “error” döner. Bu durumda hata detayı için “err_msg” içeriğini kontrol etmelisiniz.

Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Alan adı / tipi	Değerler	Açıklama
status (string)	success, error veya failed	Status: Sorgulama sonucu
cardType (string)	credit / debit	Kart Türü: Kartın tipi
businessCard (string)	y / n	Şirket Kartı: Kartın şirket kartı olup olmadığı bilgisi
bank (string)	Örnek: Yapı Kredi	Banka: Kartın bankası
brand (string)	Örnek: axess, bonus,cardfinans, combo,world, paraf, advantage,maximum,saglamkart	Kart Program Ortaklığı İsmi: Kartın program ortaklığı ismi(Kart bir program ortaklığına dahil değil ise değer none olur. Bu durumda ilgili kart ile PayTR üzerinden taksitli işlem yapılamaz.)
schema (string)	VISA, MASTERCARD, AMEX, TROY, OTHER	Kartın hangi şemaya ait olduğu. (Kartın hangi şemaya ait olduğu bilinmiyorsa OTHER döner.)
bankCode (int)	Örnek: 0010	Banka Kodu: Kart bankasının kodu
allow_non3d (string)	Y(yes) ve N(no)	Non-3D işlem izni sonucu


PHP PYTHON .NET NODEJS
<?php

    ## BIN sorgulama servisi için kullanılacak örnek kod ##

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXX';
    $merchant_salt  = 'XXXXXX';
    #
    ## Sorgulama yapılmak istenen karta ait kart numarasının ilk 6 veya 8 hanesi. Maksimum doğrulama için 8 hane kullanın.
    $bin_number = "";
    #
    ############################################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    $hash_str = $bin_number . $merchant_id . $merchant_salt;
    $paytr_token=base64_encode(hash_hmac('sha256', $hash_str, $merchant_key, true));
    $post_vals=array(
        'merchant_id'=>$merchant_id,
        'bin_number'=>$bin_number,
        'paytr_token'=>$paytr_token
    );
    ############################################################################################

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/bin-detail");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR BIN detail request timeout. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    if($result['status']=='error')
        die("PAYTR BIN detail request error. Error:".$result['err_msg']);
    elseif($result['status']=='failed')
        die("BIN tanımlı değil. (Örneğin bir yurtdışı kartı)");
    else
        print_r($result);

?>


BIN Sorgulama örnek kodları indirmek için tıklayın.

Ön Provizyon Entegrasyonu

Provizyon Nedir?

Provizyon yapılan kredi kartı harcamasının ön onay sürecini tanımlar. Yapılan harcamaya yönelik işlem güvenliği ve limitinin hesap ekstresine yansımadan provizyon üzerinden kontrol edilebilir. Yapılan ödemeler için ayrılmış olan karşılık bu bekleme sürecinde bankalar tarafından onaylanır ve böylece çalıntı kart, şüpheli işlem, vb. durumlara karşı kredi kartı kullanıcılarının güvenliği sağlanır.

Kredi Kartı Provizyonu Nedir?

Kredi kartı provizyonu yapılan harcamanın kullanıcı ve banka onayına sunulduğu ön onay sürecidir. Bu süreçte kullanıcı yaptığı harcamanın miktarını kontrol eder ve herhangi bir problem yaşanması durumunda sürece müdahil olur. Provizyondaki işlemler banka tarafından da incelenir ve onay alması ardından “kredi kartı hareketler” bölümüne yapılmış harcama tutarı olarak yansıtılır.

Ön Provizyon hakkında daha fazla bilgi almak ve entegrasyon dokümanına ulaşmak için bize ulaşın.

Havale/EFT iFrame API

HAVALE / EFT / PTT / ATM
Kredi kartı kullanım zorunluluğunu ortadan kaldıran Havale Sistemi, bir çok banka ve PTT entegrasyonu ile hizmetinizde. Düşük komisyon avantajının yanı sıra, 7/24 çalışan operasyon birimimiz yapılan ödeme isteklerini kontrol eder ve onaylanma sürecini en hızlı şekilde tamamlanmasını sağlar.



ENTEGRASYON HAKKINDA ÖNEMLİ ÖN BİLGİLENDİRME:

Entegrasyonda gerekli olan "Mağaza no (merchant_id)" eposta ile şirket yetkilisine gönderilecektir. "Mağaza parolası (merchant_key)" ve "Mağaza gizli anahtarı (merchant_salt)" ise Mağaza Paneli'ne giriş yapılarak Bilgi sayfasında görülebilir.

Entegrasyon 2 aşamalıdır:

PayTR'a arka planda (server-side) istek yapılarak iframe_token alınması ve alınan iframe_token ile iframe içerisinde ödeme bildirim formunun açılması

PayTR sisteminin ödeme sonuçlarını bildireceği, sitenizin bildirim sayfasının(Bildirim URL) hazırlanarak kodlanması

Havale/EFT iFrame API 1. Adım

Entegrasyon ve İşlem akışı:

1) Üye işyeri, PayTR'a iframe_token isteğinde bulunur. Bu istek arka planda (server-side) POST metodu ile gerçekleşir.

İstek (REQUEST) yapılacak URL: https://www.paytr.com/odeme/api/get-token

POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	
user_ip (string)	Müşteri ip: İstek anında aldığınız müşteri ip numarası(Önemli: Lokal makinenizde yapacağınız denemelerde mutlaka dış IP adresini gönderdiğinizden emin olun)	Evet	En fazla 39 karakter (ipv4)
merchant_oid (string)	Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası.(Not: Sipariş no ödeme sonuç bildirimi esnasında geri dönen değerler arasındadır)	Evet	En fazla 64 karakter,Alfa numerik
email (string)	Müşteri eposta adresi: Müşterinin sisteminizde kayıtlı olan veya form aracılığıyla aldığınız eposta adresi	Evet	En fazla 100 karakter
payment_amount(integer)	Ödeme tutarı: Siparişe ait toplam ödeme tutarı	Evet	Ayraç olarak yalnızca nokta(.) gönderilmelidir
paytr_token(string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız içinoluşturacağınız değerdir	Evet	Nasıl hesaplanacağı ile ilgili lütfen örnek kodları inceleyin
user_name	Ad-Soyad: Gönderilmesi durumunda IFrame içerisinde bulunan ödeme bildirim formunda Ad-Soyad bilgisi dolu gelir ve değiştirilemez	Hayır	En fazla 30 karakter
user_phone	Telefon: Gönderilmesi durumunda IFrame içerisinde bulunan ödeme bildirim formunda Telefon bilgisi dolu gelir ve değiştirilemez	Hayır	11 karakter, numerik
payment_type(string)	Ödeme tipi	Evet	('eft')
tc_no_last5	TC No Son 5 hane: Gönderilmesi durumunda IFrame içerisinde bulunan ödeme bildirim formunda TCNo Son 5 hane dolu gelir ve değiştirilemezi	Hayır	5 karakter numerik
bank	Banka: Gönderilmesi durumunda IFrame içerisinde banka seçimi yapılamaz, yalnızca gönderilen banka görüntülenir.	Hayır	isbank, akbank, denizbank, finansbank,halkbank, ptt, teb, vakifbank, yapikredi,ziraat seçeneklerinden bir tanesi
test_mode	Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir	Hayır	0 veya 1
debug_on (int)	Hata döndür: Yanlış veya eksik bilgi iletilmesi durumunda hata mesajı döndürülmesi için 1 gönderilmelidir	Hayır	0 veya 1
timeout_limit(int)	Sıfırdan farklı bir değer gönderilmesi durumunda, ödeme işlemi bu süre içerisinde tamamlanmalıdır (Ödeme sırasında sisteminizde fiyat güncellemesi olması durumuna karşı güvenlik amaçlı kullanabilirsiniz)	Hayır	Dakika cinsinden (Gönderilmemesi durumunda 30 dakika olarak tanımlanır)
Yapılan isteğe geri dönecek yanıt (RESPONSE) JSON formatındadır. Detaylı bilgi için örnek kodu inceleyebilirsiniz.

Üye İşyeri, başarılı yanıt içerisinde gelen iframe_token ile iframe kullanarak ödeme bildirim formunu açar.

NOT: Yukarıda anlatılan işlemlerin tamamlanmasıyla birlikte müşteri tarafından kullanılacak olan ödeme bildirimi formu ekranda belirecektir.

Ödeme işleminde müşterinin etkileşimde bulunacağı adım entegrasyonda böylece tamamlanmış olur. ANCAK; entegrasyonunuz henüz tamamlanmamıştır, 2. adımın tamamlanması ödeme sonucunun (başarılı/başarısız) üye işyerine ulaştırılması için gereklidir.

2) İlk adımda iframe ile açılan formu doldurarak müşteri ödeme bildirimi yaptığında, PayTR operasyon ekibi bildirimi görür ve ödemeyi kontrol eder. Kontrol sonrası, PayTR sistemi tarafından arka planda (server-side) mağaza bildirim sayfasına (Bildirim URL) POST metodu ile kontrolün sonucu gönderilir. Bu bildirime istinaden üye işyeri siparişi onaylar veya iptal eder.

POST REQUEST içeriğinde gönderilecek değerler:

Alan adı	Açıklama
merchant_oid	Mağaza sipariş no: Satış işlemi için belirlediğiniz sipariş numarası
status	Ödeme işleminin sonucu(success/failed)
total_amount	Ödeme tutarı (100 ile çarpılmış hali gönderilir. 34.56 TL => 3456)
hash	Üye işyerinin, PayTR sisteminden gönderilen değerleri kontrol edebilmesi için güvenlik amaçlı oluşturulan hash
failed_reason_code	Ödeme bildiriminin onaylanmaması durumunda gönderilir
failed_reason_msg	Ödeme bildiriminin neden onaylanmadığı mesajını içerir
test_mode	Mağazanız test modunda iken veya canlı modda yapılan test işlemlerde 1 olarak gönderilir.


PHP PYTHON .NET NODEJS
<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Örnek Ödeme Sayfası</title>
</head>
<body>

<div>
    <h1>Örnek Ödeme Sayfası</h1>
</div>
<br><br>

<div style="width: 100%;margin: 0 auto;display: table;">

    <?php 

$merchant_id='XXXXXX'; // Mağaza numarası
$merchant_key='YYYYYYYYYYYYYY'; // Mağaza Parolası - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
$merchant_salt='ZZZZZZZZZZZZZZ'; // Mağaza Gizli Anahtarı - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

## Kullanıcının IP adresi
if( isset( $_SERVER["HTTP_CLIENT_IP"] ) ) {
       $ip = $_SERVER["HTTP_CLIENT_IP"];
} elseif( isset( $_SERVER["HTTP_X_FORWARDED_FOR"] ) ) {
       $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
} else {
       $ip = $_SERVER["REMOTE_ADDR"];
}

$user_ip=$ip;  // !!! Eğer bu kodu sunucuda değil local makinanızda çalıştırıyorsanız buraya dış ip adresinizi(https://www.whatismyip.com/) yazmalısınız.

$merchant_oid=time();//sipariş numarası: her işlemde benzersiz olmalıdır! Bu bilgi bildirim sayfanıza yapılacak bildirimde gönderilir.
$email="musteri@saglayici.com"; // Müşterinizin sitenizde kayıtlı eposta adresi
$payment_amount="999";//9.99 TL
$payment_type='eft';
$debug_on=1;//hata mesajlarını ekrana bas

## İşlem zaman aşımı süresi - dakika cinsinden
$timeout_limit = "30";

## Mağaza canlı modda iken test işlem yapmak için 1 olarak gönderilebilir
$test_mode = 0;

$hash_str=$merchant_id.$user_ip.$merchant_oid.$email.$payment_amount.$payment_type.$test_mode;
$paytr_token=base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));

$post_vals=array(
        'merchant_id'=>$merchant_id,
        'user_ip'=>$user_ip,
        'merchant_oid'=>$merchant_oid,
        'email'=>$email,
        'payment_amount'=>$payment_amount,
        'payment_type'=>$payment_type,
        'paytr_token'=>$paytr_token,
        'debug_on'=>$debug_on,
        'timeout_limit'=>$timeout_limit,
        'test_mode'=>$test_mode
);

$ch=curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/get-token");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1) ;
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);

//XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
//aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$result = @curl_exec($ch);

if(curl_errno($ch))
{
    die("PAYTR EFT IFRAME connection error. err:".curl_error($ch));
}
curl_close($ch);

$result=json_decode($result,1);

/*
Başarılı yanıt örneği: (token içerir)
{"status":"success","token":"28cc613c3d7633cfa4ed0956fdf901e05cf9d9cc0c2ef8db54fa"}

Başarısız yanıt örneği:
{"status":"failed","reason":"Zorunlu alan degeri gecersiz: merchant_id"}
*/

if($result['status']=='success')
{
    $token=$result['token'];
}
else
{
    die("PAYTR EFT IFRAME failed. reason:".$result['reason']);
}

    ?>

    <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
    <iframe src="https://www.paytr.com/odeme/api/<?php echo $token;?>" id="paytriframe" frameborder="0" scrolling="no" style="width: 100%;"></iframe>
    <script>iFrameResize({},'#paytriframe');</script>

</div>

<br><br>
</body>
</html>
Havale/EFT iFrame API 1. ADIM örnek kodları indirmek için tıklayın.

Havale/EFT iFrame API 2. Adım

Mağaza bildirim sayfasına (Bildirim URL) yapılacak isteğe Üye işyerinin dönmesi gereken yanıt (RESPONSE) text (düz yazı) formatında ve yalnızca OK değeri olmalıdır.

Önemli: OK yanıtının öncesinde veya sonrasında HTML veya herhangi başka bir içerik ekrana basılmamalıdır. Bildirim URL sayfası, müşterinin göreceği bir sayfa değildir, PayTR ile Mağaza arasında arka planda (server-side) bir iletişimde kullanılır. OK yanıtı alınmayan ödeme işlemleri, Mağaza Paneli'ndeki İşlemler sayfasında “Devam Ediyor” olarak görünür. PayTR sistemi OK cevabını istendiği şekilde almadığı durumda, bildirimin başarısız olduğunu varsayarak bir süre daha tekrar tekrar bildirim göndermeye çalışacaktır.

Önemli: PayTR bildirim sistemi, ağ trafik sorunları ve benzeri nedenlerden dolayı aynı ödeme işlemi için birden fazla onay bildirimi gönderebilir. Bu durumda yalnızca ilk bildirim göz önünde bulundurulmalı, sonraki bildirimler için müşteriye tekrar ürün/hizmet sunulmamalı, yalnızca OK yanıtı gönderilerek işlem sonuçlandırılmalıdır. Tekrarlayan bildirimlerin tespiti Mağaza sipariş no (merchant_oid) temel alınarak yapılabilir.

Ödeme işleminin başarısız olması durumunda bildirim POST içeriğinde “failed_reason_code” ve “failed_reason_msg” olmak üzere iki alan daha gelir. Bu alanlar hash hesaplamasında kullanılmaz. Bu mesajlar istenirse müşteriyi bilgilendirme amacıyla eposta veya mağaza mesaj sistemi üzerinden müşteriye iletilebilir
failed_reason_code	failed_reason_msg	Açıklama
4	Havale/EFT ödemesi tespit edilemedi.	Ödeme bildirimi formunda müşterinin belirtmiş olduğu bilgiler ile ödemeye ulaşılamamıştır
5	Havale/EFT ödeme tutarı yetersiz. Lütfen gönderdiğiniz tutar kadar bildirim yapın.	Müşterinin bankaya gönderdiği tutar, alışveriş tutarından (payment_amount) az olduğundan onay verilmemiştir.
6	Müşteri ödeme yapmaktan vazgeçti ve ödeme sayfasından ayrıldı.	Müşteri, kendisine tanınmış olan işlem süresinde (1. ADIM’da tanımlanan timeout_limit değeri) işlemini tamamlamadı veya müşteri ödeme sayfasını kapatarak işlemi sonlandırdı.
7	Bildiriminiz alınmadı, lütfen önceki bildiriminizin kontrolünün sonuçlanmasını bekleyin.	Müşteri henüz kontrolü sonuçlanmamış bir ödeme bildirimi bulunurken, tekrar bildirim yaptı.
41	Havale/EFT ödemesi ile bildirimdeki Ad Soyadı uyuşmuyor.	Müşterinin bildirim yaparken girdiği Ad Soyadı ile banka kayıtlarındaki Ad Soyadı uyuşmadı.
42	Havale/EFT ödemesi ile bildirimdeki TCKN uyuşmuyor.	Müşterinin bildirim yaparken girdiği TCKN ile banka kayıtlarındaki TCKN uyuşmadı.
43	Bu Havale/EFT ödemesi daha önce onaylanmış.	Müşterinin bildirimi sonrası yapılan kontrolde, bu ödemenin daha önce bildirilip onay aldığı görüldü.
44	Bu Havale/EFT ödemesi iade edilmiş.	Müşterinin bildirimi sonrası yapılan kontrolde, bu ödemenin daha önce iade edildiği görüldü.
45	Dekonttaki iki farklı Ad-Soyadından yalnızca birisi yazılmış	Müşterinin bildirimi sonrası yapılan kontrolde,dekontta yazan iki Ad Soyadı bilgisinden yalnızca birisinin girildiği görüldü


PHP PYTHON .NET NODEJS
<?php

## 2. ADIM için örnek kodlar ##

## ÖNEMLİ UYARILAR ##
## 1) Bu sayfaya oturum (SESSION) ile veri taşıyamazsınız. Çünkü bu sayfa müşterilerin yönlendirildiği bir sayfa değildir.
## 2) Entegrasyonun 1. ADIM'ında gönderdiğniz merchant_oid değeri bu sayfaya POST ile gelir. Bu değeri kullanarak
## veri tabanınızdan ilgili siparişi tespit edip onaylamalı veya iptal etmelisiniz.
## 3) Aynı sipariş için birden fazla bildirim ulaşabilir (Ağ bağlantı sorunları vb. nedeniyle). Bu nedenle öncelikle
## siparişin durumunu veri tabanınızdan kontrol edin, eğer onaylandıysa tekrar işlem yapmayın. Örneği aşağıda bulunmaktadır.

$post = $_POST;

####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
#
## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
$merchant_key   = 'YYYYYYYYYYYYYY';
$merchant_salt  = 'ZZZZZZZZZZZZZZ';
###########################################################################

####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
#
## POST değerleri ile hash oluştur.
$hash = base64_encode( hash_hmac('sha256', $post['merchant_oid'].$merchant_salt.$post['status'].$post['total_amount'], $merchant_key, true) );
#
## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
if( $hash != $post['hash'] )
    die('PAYTR notification failed: bad hash');
###########################################################################

## BURADA YAPILMASI GEREKENLER
## 1) Siparişin durumunu $post['merchant_oid'] değerini kullanarak veri tabanınızdan sorgulayın.
## 2) Eğer sipariş zaten daha önceden onaylandıysa veya iptal edildiyse  echo "OK"; exit; yaparak sonlandırın.

/* Sipariş durum sorgulama örnek
$durum = SQL
if($durum == "onay" || $durum == "iptal"){
        echo "OK";
        exit;
}*/

if( $post['status'] == 'success' ) { ## Ödeme Onaylandı

## BURADA YAPILMASI GEREKENLER
## 1) Siparişi onaylayın.
## 2) Eğer müşterinize mesaj / SMS / e-posta gibi bilgilendirme yapacaksanız bu aşamada yapmalısınız.
## 3) 1. ADIM'da gönderilen payment_amount sipariş tutarı taksitli alışveriş yapılması durumunda
## değişebilir. Güncel tutarı $post['total_amount'] değerinden alarak muhasebe işlemlerinizde kullanabilirsiniz.

} else { ## Ödemeye Onay Verilmedi

## BURADA YAPILMASI GEREKENLER
## 1) Siparişi iptal edin.
## 2) Eğer ödemenin onaylanmama sebebini kayıt edecekseniz aşağıdaki değerleri kullanabilirsiniz.
## $post['failed_reason_code'] - başarısız hata kodu
## $post['failed_reason_msg'] - başarısız hata mesajı

}

## Bildirimin alındığını PayTR sistemine bildir.
echo "OK";
exit;
?>
Opsiyonel: Ara bildirimleri alma

Müşterinizin, IFrame içerisinde bildirim formunu doldurmasıyla birlikte, talep etmeniz halinde PayTR alt yapısı belirteceğiniz “Ara Bildirim URL” adresine bir ara bildirim yapacaktır. Bildirim içeriğinde EFT/Havale isteğinde göndermiş olduğunuz sipariş numarası ve müşterinizin işlem için seçtiği banka bilgisi bulunur. “Ara Bildirim URL” olarak kullanmak istediğiniz URL bilgisini Paytr Mağaza Paneli > Ayarlar bölümünden ekleyebilirsiniz.

Alan Adı	Açıklama
hash	Hash: Bildirimin doğruluğunu belirten hash bilgisi
status	Durum: Ara bildirim için “info” değeri gelir
merchant_oid	Sipariş numarası: EFT/Havale bildirimin başlatırken gönderdiğiniz sipariş numarası
bank	Banka: EFT/Havale bildirimin yapıldığı banka

ÖNEMLİ UYARI: Bildirim URL’iniz Paytr Mağaza Paneli > Ayarlar > Bildirim URL Ayarları kısmından, eğer sitenizde SSL var ise Bildirim URL protokolünü HTTPS olarak ayarlamanız gerekmektedir. SSL sertifikanız yok ise, kesinlikle HTTPS’li link kullanmayın. Eğer sitenizde Paytr entegrasyonundan sonra SSL kurulumu yaptıysanız, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTPS olarak değiştirerek kaydedin. Eğer kurulumdan sonra sitenizdeki SSL sertifikasını iptal ederseniz, Bildirim URL Ayarları bölümüne giderek, buradan protokolü HTTP olarak değiştirerek kaydedin.

PHP PYTHON .NET NODEJS
<?php
// Ara Bildirim URL için örnek kodlar

$post = $_POST;

####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
#
## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
$merchant_key   = 'YYYYYYYYYYYYYY';
$merchant_salt  = 'ZZZZZZZZZZZZZZ';
###########################################################################

####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
#
## POST değerleri ile hash oluştur.
$hash = base64_encode( hash_hmac('sha256', $post['merchant_oid'].$post['bank'].$merchant_salt,$merchant_key,true));

## Oluşturulan hash'i, paytr'dan gelen post içindeki hash ile karşılaştır (isteğin paytr'dan geldiğine ve değişmediğine emin olmak için)
## Bu işlemi yapmazsanız maddi zarara uğramanız olasıdır.
if( $hash != $post['hash'] )
    die('PAYTR notification failed: bad hash');
###########################################################################

## DÖNÜLEN POST DEĞERLERİ
/*
    $post[merchant_oid]      => Sipariş Numarası
    $post[status]            => "info"
    $post[hash]              => PayTR Tarafından Hesaplanan Hash Değeri

    ## AŞAĞIDAKİLER MÜŞTERİNİN FORMA GİRDİĞİ BİLGİLERDİR ##
    $post[payment_sent_date] => Ödeme Yapılan Tarih
    $post[bank]              => Ödeme Yapılan Banka
    $post[user_name]         => Ödeme Yapan Adı Soyadı
    $post[user_phone]        => Ödeme Yapan Telefon Numarası
    $post[tc_no_last5]       => T.C. Kimlik Numarası Son 5 Hanesi
*/
###########################################################################
>
Havale/EFT iFrame API 2. ADIM örnek kodları indirmek için tıklayın.

Platform Transfer Talebi

Pazaryeri Çözümü Nedir? PayTR, 6493 sayılı Ödeme ve menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun gereğince TCMB lisanslı ödeme kuruluşu olmayı tercih etmeyen pazaryerleri için "Pazaryeri Çözümü" oluşturmuş ve API sistemiyle çalışan ödeme ve transfer teknik entegrasyonu hazırlamıştır.

Pazaryeri Çözümü Nasıl Çalışır? Alıcı satın alacağı ürün/hizmet için pazaryerindeki ödeme sayfasında ödemesini başlatır ve ödeme PayTR tarafından işlenir. PayTR ürün/hizmet bedeli olan ödemeyi satıcı hesabına ve komisyon bedelini Pazaryeri hesabına aktarır. Pazaryerine ve satıcıya yapılacak para transferleri PayTR tarafından pazaryerinin isteğiyle ve tercihleri doğrultusunda gerçekleşir.



PayTR Pazaryeri Çözümü Avantajları Esnek bir yapıya sahip PayTR Pazaryeri Çözümü ile pazaryeri platformu sahipleri, aynı sepette birden fazla satıcının ürünü olduğu durumlar, parçalı iade yapılması, sipariş tutarının sonradan değişmesi, farklı satıcıya farklı komisyon uygulanması vb. gibi her ihtiyaçlarını özgürce karşılayabilirler.

PLATFORM TRANSFER TALEBİ 2 AŞAMADAN OLUŞMAKTADIR.
1.Transfer talimatının verilmesi bu linkten gidebilirsiniz.
2.Transfer talimatının sonucunun alınması bu linkten gidebilirsiniz.

Direkt API Pazaryeri dokümanı ve tüm servisleri indirmek için tıklayın.

iFrame API Pazaryeri dokümanı ve tüm servisleri indirmek için tıklayın.

Platform Transfer Talimatının Verilmesi

Mağaza aşağıdaki bilgileri Platform Transfer API’sine gönderir.

İstek (REQUEST) yapılacak URL: https://www.paytr.com/odeme/platform/transfer
Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	
merchant_oid (string)	Mağaza sipariş no: Satış işleminde gönderdiğiniz benzersiz sipariş numaranız	Evet	En fazla 64 karakter,Alfa numerik
trans_id (string)	Satıcıya yapılacak bu ödemenin takibi için benzersiz takip numarası	Evet	Alfanumerik – En fazla 60 karakter
submerchant_amount (integer)	Satıcıya yapılacak ödeme tutarı:Satıcıya bu sipariş için ödenecek tutarın 100 ile çarpılmış hali	Evet	Örn: 34.56 TL için 3456 gönderilmelidir
total_amount (integer)	Toplam ödeme tutarı: Siparişe ait toplam ödeme tutarının 100 ile çarpılmış hali	Evet	Örn: 94.56 TL için 9456 gönderilmelidir. (94.56 * 100 = 9456)
transfer_name (string)	Satıcının banka hesabı için ad soyad/ünvanı	Evet	Örn: Ragıp Adıgüzel
transfer_iban(int)	Satıcının banka hesabı IBAN numarası	Evet	Örn: TRXX XXXX XXXX XXXX XXXX XXXX XX (26 Karakter)
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	


POST REQUEST içeriğinde gönderilecek değerler:
Alan adı / tipi	Zorunlu	Token	Açıklama	Kısıtlar
merchant_id(integer)	Evet	Evet	Mağaza no: PayTR tarafından size verilen Mağaza numarası	
merchant_oid (string)	Evet	Evet	Mağaza sipariş no: Satış işleminde gönderdiğiniz benzersiz sipariş numaranız	En fazla 64 karakter,Alfa numerik
trans_id	Satıcıya yapılacak bu ödemenin takibi için benzersiz takip numarası	Evet	Satıcıya yapılacak bu ödemenin takibi için benzersiz takip numarası	Alfanumerik – En fazla 60 karakter
submerchant_amount(integer)	Evet	Evet	Satıcıya yapılacak ödeme tutarı:Satıcıya bu sipariş için ödenecek tutarın 100 ile çarpılmış hali	Örn: 34.56 TL için 3456 gönderilmelidir
total_amount(integer)	Evet	Evet	Toplam ödeme tutarı: Siparişe ait toplam ödeme tutarının 100 ile çarpılmış hali	Örn: 94.56 TL için 9456 gönderilmelidir
transfer_name (string)	Evet	Evet	Satıcının banka hesabı için ad soyad/ünvanı	Örn: Ragıp Adıgüzel
transfer_iban	Evet	Evet	Satıcının banka hesabı IBAN numarası	Örn: TRXX XXXX XXXX XXXX XXXX XXXX XX (26 Karakter)
paytr_token (string)	Evet	Hayır	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Nasıl hesaplanacağı hakkında lütfen örnek kodları inceleyin


ÖNEMLİ NOTLAR

1- Mağaza, ödemenin yapılmasını istediği tarihte en geç saat 10:00’a kadar Transfer API’si yoluyla isteği göndermelidir. Daha sonra gönderilen istekler bir sonraki gün işleme alınacaktır.

2- Sipariş ödemesi ile aynı gün transfer talebi oluşturamazsınız. Talebi en erken, ödemeyi takip eden ilk gün oluşturmanız gerekmektedir.

TRANSFER ÖRNEKLERİ (Değerler gerçek değildir. Sadece örnektir)

ÖRNEK 1: ÖDEMEDE TEK ALT SATICI OLMASI DURUMU

• Mağaza numarası (merchant_id): 100001

• Sipariş tutarı: 100 TL

• Sipariş numarası (merchant_oid): 123ABCD

• Takip numarası (trans_id): 45ABT34

• Satıcı ile olan komisyon oranınıza göre (Örnek: %8) satıcıya aktarılacak (submerchant_amount): 92 TL

• Ödemesi yapılacak işlem tutarı (total_amount): 100 TL Bu bilgilerle ödeme talimatı verdiğinizde;

• Satıcıya 92 TL ödenir,

• Kalan 8 TL içerisinden PayTR ile olan komisyon oranınız (Örnek: %3) düşülerek kalan tutar (örneğe göre 5 TL) firmanızın hesabına aktarılır. Yapılan kesinti tarafınıza faturalandırılır.

ÖRNEK 2: ÖDEMEDE BİRDEN FAZLA ALT SATICI OLMASI DURUMU

Sipariş ödemesi birden fazla satıcıyı kapsayabilir. Örneğin; Kart hamili alışveriş sepetinde birden fazla satıcıdan ürün / hizmet alıyor olabilir. Siparişin toplam bedelinin 300 TL olduğunu düşünelim. Bu durumda,

• Mağaza numarası (merchant_id): 100001

• Sipariş tutarı: 300 TL

• Sipariş numarası (merchant_oid): 123ABCDE

• Takip numarası (trans_id): 75ZTY39

• Satıcı ile olan komisyon oranınıza göre (Örnek: %8) satıcıya aktarılacak (submerchant_amount): 92 TL

• Ödemesi yapılacak işlem tutarı (total_amount): 100 TL

• Mağaza numarası (merchant_id): 100001

• Sipariş tutarı: 300 TL

• Sipariş numarası (merchant_oid): 123ABCDE

• Takip numarası (trans_id): DF43DFC

• Satıcı ile olan komisyon oranınıza göre (Örnek: %5) satıcıya aktarılacak (submerchant_amount): 47,5 TL

• Ödemesi yapılacak işlem tutarı (total_amount): 50 TL

• Mağaza numarası (merchant_id): 100001

• Sipariş tutarı: 300 TL

• Sipariş numarası (merchant_oid): 123ABCDE

• Takip numarası (trans_id): 98DFVXS

• Satıcı ile olan komisyon oranınıza göre (Örnek: %10) satıcıya aktarılacak (submerchant_amount): 135 TL

• Ödemesi yapılacak işlem tutarı (total_amount): 150 TL şeklinde birden fazla ödeme talimatı verebilirsiniz.

ÖRNEK 3: ÖDEMENİN ALT SATICI İÇİN OLMAMA DURUMU

Yazılımınız üzerinden geçen diğer ödemeler için (örneğin 50 TL üyelik ücreti, hizmet bedeli, vb.) eğer tutarın tamamını firmanız hesabına almak istiyorsanız,

• Mağaza numarası (merchant_id): 100001

• Sipariş tutarı: 50 TL

• Sipariş numarası (merchant_oid): 1881ABCD

• Takip numarası (trans_id): 18ATT81

• Satıcı ile olan komisyon oranınıza göre (Örnek: %0) satıcıya aktarılacak (submerchant_amount): 0 TL

• Ödemesi yapılacak işlem tutarı (total_amount): 50 TL şeklinde talep oluşturduğunuz durumda tutarın tamamı firmanız hesabına transfer edilecektir.

Yapılan isteğe geri dönecek yanıt (RESPONSE) JSON formatındadır. Detaylar için örnek kodları inceleyebilirsiniz.

PHP PYTHON .NET NODEJS
<?php

    $merchant_id = 'MAGAZA_NO';
    $merchant_key = 'XXXXXXXXXXX';
    $merchant_salt = 'YYYYYYYYYYY';

    // Mağaza sipariş no: Satış işlemi için belirlediğiniz benzersiz sipariş numarası
    $merchant_oid = "";

    // Satıcıya yapılacak bu ödemenin takibi için benzersiz takip numarası
    $trans_id = time();

    // Satıcıya yapılacak ödeme tutarı: Satıcıya bu sipariş için ödenecek tutarın 100 ile çarpılmış hali (Örnek: 50.99 TL için 5099)
    $submerchant_amount = "";

    // Toplam ödeme tutarı: Siparişe ait toplam ödeme tutarının 100 ile çarpılmış hali (Örnek: 50.99 TL için 5099)
    $total_amount = "";

    // Satıcının banka hesabı için ad soyad/ünvanı
    $transfer_name = "";

    // Satıcının banka hesabı IBAN numarası
    $transfer_iban = "";

    // İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir
    $hash_str = $merchant_id . $merchant_oid . $trans_id . $submerchant_amount . $total_amount . $transfer_name . $transfer_iban;
    $token = base64_encode(hash_hmac('sha256',$hash_str.$merchant_salt,$merchant_key,true));

    $post_vals=array(
            'merchant_id'=>$merchant_id,
            'merchant_oid'=>$merchant_oid,
            'trans_id'=>$trans_id,
            'submerchant_amount'=>$submerchant_amount,
            'total_amount'=>$total_amount,
            'transfer_name'=>$transfer_name,
            'transfer_iban'=>$transfer_iban,
            'paytr_token'=>$token
        );

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/platform/transfer");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
        die("PAYTR platform transfer request connection error. err:".curl_error($ch));

    curl_close($ch);

    $result=json_decode($result,1);

    /*
        Başarılı yanıt örneği:
        {"status":"success", "merchant_amount":"5", "submerchant_amount":"92", "trans_id":"45ABT34", "reference":"12SF45" }

        Başarısız yanıt örneği:
        {"status":"error", "err_no":"010", "err_msg":"toplam transfer tutarı kalan tutardan fazla olamaz"}
    */

    if($result['status']=='success')
    {
        //VT işlemleri vs.
    }
    else
    {
        echo $result['err_no']." - ".$result['err_msg'];
    }
    #########################################################################

?>
Transfer talimatının verilmesi örnek kodları indirmek için tıklayın.

Transfer Talimatının Sonucunun Alınması (Opsiyonel)

PAYTR sistemi, transfer işlemlerinin sonuçlanması sonrası Mağazanın belirlediği URL’e bilgi verir.

İstek (REQUEST) yapılacak URL: Platform Transfer Sonucu Bildirim URL (Mağaza Paneli > Destek & Kurulum > AYARLAR sayfasına Mağaza tarafından girilmelidir))

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
trans_id	Transfer talebinde belirttiğiniz trans_id değerlerini içeren JSON string	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Zorunlu	Açıklama	Kısıtlar
trans_ids (JSON string)	Evet	Transfer talebinde belirttiğiniz trans_id değerlerini içeren JSON string	
hash (string)	Evet	paytr_token: İsteğin PAYTR’dan geldiğine ve içeriğin değişmediğine emin olmanız için oluşturulan değer	Hesaplama ve kontrol hakkında lütfen örnek kodları inceleyin


Örnek POST:

[hash] => Of0/yvgTii/+lGD3o+J0u8xXriVqlPIrvsZsv4cLhM4=
[trans_ids] => ["dcbbe0b9fd25154d73c","dc8c509efc6450d30","9310d84d3bf"]
Yanıt (RESPONSE):

PAYTR’dan gelen isteğe ekrana OK basarak yanıt vermeniz beklenmektedir. Bu yanıtın alınmadığı durumda istek tekrarlanacaktır.

PHP PYTHON .NET NODEJS
<?php

    $post = $_POST;

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    ###########################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    #
    ## POST değerleri ile hash oluştur.
    $post["trans_ids"]=str_replace("\\", "", $post["trans_ids"]);
    $hash = base64_encode( hash_hmac('sha256', $post['trans_ids'].$merchant_salt, $merchant_key, true) );
    #
    ## Oluşturulan hash'i, PayTR'dan gelen post içindeki hash ile karşılaştır (isteğin PayTR'dan geldiğine ve değişmediğine emin olmak için)
    ## Bu işlemi güvenlik nedeniyle mutlaka yapmanız gerekiyor.
    if( $hash != $post['hash'] )
        die('PAYTR notification failed: bad hash');
    ###########################################################################

    ## $post['trans_ids'] içerisinde daha önce PayTR'a ilettiğiniz transfer taleplerinden tamamlanan transferlerin trans_id bilgileri JSON formatında gelir
    ## trans_id bilgisi transfer talebi yaparken PayTR'a gönderdiğiniz her işlem için eşsiz değerdir
    $trans_ids = json_decode($post['trans_ids'],1);
    foreach($trans_ids as $trans_id)
    {
        ## Örn: Burada $trans_id ile veritabanınızdan transfer talebini tespit edip ilgili kullanıcınıza bilgilendirme gönderebilirsiniz (email, sms vb.)
    }

    ## Bildirimin alındığını PayTR sistemine bildir.
    echo "OK";
    exit;
?>
Transfer talimatının sonucunun alınması örnek kodları indirmek için tıklayın.

Geri Dönen Ödemeleri Listele

Bu servis ile transfer talebi yapılmış ancak alıcı hesap hatası nedeniyle geri dönen ödemelerin listesine ulaşabilirsiniz. Geri dönen ödemeler mağazanıza ait bir alt hesaba bakiye olarak işlenir. Geri dönen bu ödemeleri tekrar göndermek için “Geri Dönen Ödemeler – Hesaptan Gönder” servisini kullanabilirsiniz.

1- Geri dönen ödemelerin listesini alabilmek için tabloda belirtilen bilgileri POST ile ilgili URL’e gönderin: https://www.paytr.com/odeme/geri-donen-transfer

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id(integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet	-
start_date(string)	Başlangıç Tarihi Formatı: 2021-01-01 00:00:00 (YYYY-MM-DD hh:mm:ss)	Evet	-
end_date	Bitiş Tarihi Formatı: 2021-01-01 23:59:59 (YYYY-MM-DD hh:mm:ss)	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
start_date (integer)	Başlangıç Tarihi Formatı: 2021-01-01 00:00:00 (YYYY-MM-DD hh:mm:ss)	Evet	-
end_date(integer)	Bitiş Tarihi Formatı: 2021-01-01 23:59:59 (YYYY-MM-DD hh:mm:ss)	Evet	-
dummy(integer)	Dummy veri oluşturmak için kullanılır	Hayır	1 veya 0 (Dummy veri için 1 gönderilmesi gerekmektedir)
paytr_token(string)	paytr_token: İsteğin sizden geldiğine veiçeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.



2- Yaptığınız bu isteğe cevap JSON formatında döner. a. Verilen tarih aralığında eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner. b. Verilen tarih aralığında eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner. c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.

Status success durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır. Satış ve İade işlemlerinde fark olmaksızın aynı değerler döner.

Açıklama	Alan adı / tipi	Değerler
Referans No: İşlemin ayırt edici numarası	ref_no	Örnek: 1000001
Geri dönen ödemenin tespit edildiği tarih	date_detected	Örnek: 2020-06-08
Ödemenin geri döndüğü tarih	date_reimbursed	Örnek: 2020-06-08
Transfer talebinde iletilen alıcı adı soyadı	transfer_name	Örnek: TEST USER
Transfer talebinde iletilen IBAN	transfer_iban	-
Transfer talebinde iletilen tutar	transfer_amount	Örnek: 35.18
Transfer talebinde iletilen para birimi.	transfer_currency	Örnek: TL
Transfer talebinin iletildiği tarih	transfer_date	Örnek: 2020-06-08


PHP PYTHON .NET NODEJS
<?php

    ########################### İŞLEM DÖKÜMÜ ALMAK  İÇİN ÖRNEK KODLAR ##########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXXXXYYYYYYYY';
    $merchant_salt  = 'XXXXXXXXYYYYYYYY';

    ## Gerekli Bilgiler
    #
    $start_date = "2020-05-20 00:00:00";
    $end_date = "2020-06-16 23:59:59";
    # Başlangıç / Bitiş tarihi. En fazla 31 gün aralık tanımlanabilir.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $start_date . $end_date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'start_date' => $start_date,
        'end_date' => $end_date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/geri-donen-transfer");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    $result = json_decode($result, 1);

    /*
      $result değeri içerisinde dönen yanıt örneği;

    [ref_no] => 1000001
    [date_detected] => 2020-06-10
    [date_reimbursed] => 2020-06-08
    [transfer_name] => ÖRNEK İSİM
    [transfer_iban] => TR100000000000000000000001
    [transfer_amount] => 35.18
    [transfer_currency] => TL
    [transfer_date] => 2020-06-08

    */

    if ($result[status] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result[status] == 'failed')
    {
        // sonuç bulunamadı
        echo "ilgili tarih araliginda islem bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result[err_no] . " - " . $result[err_msg];
    }
Geri dönen ödemeler örnek kodları indirmek için tıklayın.

Geri Dönen Ödemeleri Hesaptan Gönder

Bu servis ile transfer talebi yapılmış ancak alıcı hesap hatası nedeniyle geri dönen ödemeler için tekrar ödeme isteği gönderebilirsiniz. Geri dönen ödemeler mağazanıza ait bir alt hesaba bakiye olarak işlenir. Geri dönen bu ödemelerin listesine “Geri Dönen Ödemeler – Listele API” servisi ile ulaşabilirsiniz.

1- Hesaptan ödeme transferi gönderebilmek için tabloda belirtilen bilgileri POST ile ilgili URL’e gönderin: https://www.paytr.com/odeme/hesaptan-gonder

Token üretiminde kullanılacak veriler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id(integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet	-
trans_id(string)	Transfer ID: Transfer işlemi için belirlediğiniz benzersiz işlem numarası.	Evet	En fazla 64 karakter, Alfa numerik
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id(integer)	Mağaza no: PayTR tarafından size verilen Mağaza numarası	Evet	-
trans_id(string)	Transfer ID: Transfer işlemi için belirlediğiniz benzersiz işlem numarası.	Evet	En fazla 64 karakter, Alfa numerik
trans_info(JSON)	Transfer Bilgisi: Transfer tutarı, alıcı ismi ve IBAN değerlerini içeren JSON formatında içerik. (Nasıl tanımlanacağı için örnek koda bakın)	Evet	-
paytr_token(string)	PayTR Token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir (Hesaplama için örnek koda bakın)	Evet	-


2- Yaptığınız bu isteğe cevap JSON formatında döner.

a. Yapılan istek geçerli ise status değeri success ve trans_id alanında gönderdiğiniz işlem numarası döner.
b. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.

3- Success yanıtı almanız ile birlikte hesaptan gönderme talebiniz PayTR sistemi tarafından başarılı olarak alınmış olur. PayTR sistemi talebinizi ortalama 5 dakika içerisinde işleme alacak, gönderdiğiniz trans_info içeriğini kontrol ederek transferleri gerçekleştirecektir. Kontrol sırasında hatalı bilgi tespiti halinde ilgili işlem başarısız olarak işaretlenir. Oluşan sonuç JSON formatında PayTR Mağaza Paneli > Ayarlar > Platform Transfer Sonucu Bildirim URL olarak tanımladığınız adrese POST edilerek bildirilir.

PHP PYTHON .NET NODEJS
<?php

    ########################### İŞLEM DÖKÜMÜ ALMAK  İÇİN ÖRNEK KODLAR ##########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXXXXYYYYYYYY';
    $merchant_salt  = 'XXXXXXXXYYYYYYYY';

    ## Gerekli Bilgiler
    #
    $trans_id="PHG".time();
    $trans_info=array();
    //amount 100 ile çarpılarak gönderilir!!
    $trans_info[]=array("amount"=>"1283",
        "receiver"=>"XYZ LTD ŞTİ",
        "iban"=>"TRXXXXXXXXXXXXXXXXXXXXX");
    //...$trans_info[]=...
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token=base64_encode(hash_hmac('sha256',$merchant_id.$trans_id.$merchant_salt, $merchant_key, true));

    $post_vals=array('trans_info'=>json_encode($trans_info),
        'trans_id'=>$trans_id,
        'paytr_token'=>$paytr_token,
        'merchant_id'=>$merchant_id
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/hesaptan-gonder");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
    {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    $result_raw=$result;
    $result=json_decode($result,1);

    if($result['status']=='success')
    {
        //status ve trans_id içerir
        print_r($result_raw);
    }
    else//status=>error
    {
        //status ve err_no - err_msg içerir
        print_r($result_raw);
    }
Geri dönen ödemeler örnek kodları indirmek için tıklayın.

Geri Dönen Ödemeler Callback

Geri dönen ödemelerden oluşturacağınız transfer talebi sonrasında Success yanıtı almanız ile birlikte hesaptan gönderme talebiniz PayTR sistemi tarafından başarılı olarak alınmış olur. PayTR sistemi talebinizi ortalama 5 dakika içerisinde işleme alacak, gönderdiğiniz trans_info içeriğini kontrol ederek transferleri gerçekleştirecektir. Kontrol sırasında hatalı bilgi tespiti halinde ilgili işlem başarısız olarak işaretlenir. Oluşan sonuç JSON formatında PayTR Mağaza Paneli > Destek & Kurulum > Ayarlar > Platform Transfer Sonucu Bildirim URL olarak tanımladığınız adrese POST edilerek bildirilir.

Tanımlayacağınız Bildirim URL’ye POST metodu ile talebinizin sonucu (başarılı veya başarısız) her işlem için ayrı olarak gönderilir. Gelen değerler içerisinde bulunan result değerini ele alarak talep sonucuna göre işlem yapabilirsiniz.

PayTR sistemince Bildirim URL’nize POST REQUEST içeriğinde gönderilecek değerler:

Alan adı	Açıklama	Değer
mode	Sabit olarak cashout değeri ile gelir.	cashout
hash	Hash kontrolünde kullanılacaktır.	ÖRN: wszlFsC7nrfCPvP77kdEzzE4smGdV4FWvDibKlXIpRM=
trans_id	Geri dönen ödeme hesaptan gönderme talebi yaparken PayTR'a gönderdiğiniz eşsiz değer.	ÖRN: 12345aaabbb
processed_result	Geri dönen ödeme hesaptan gönderme talebi yaparken PayTR'a gönderdiğiniz değerler.	ÖRN: [{\"amount\":484.48,\"receiver\":\"XYZ LTD STI\",\"iban\":\"TRXXXXXXXXXXXXXXXXXX\",\"result\":\"success\"}]
success_total	Başarıyla transfer edilen işlem sayısı (processed_result içerisinde, result:success olanların sayısı)	ÖRN: 1
failed_total	Hata alan işlem sayısı (processed_result içerisinde, result:failed olanların sayısı)	ÖRN: 0
transfer_total	Başarıyla tranasfer edilen işlemlerin toplam tutarı.	ÖRN: 484.48
account_balance	Transferler sonrasında kalan alt hesap bakiyeniz.	ÖRN: 75
Bildirim URL’nize PayTR sistemince yapılacak isteğe dönülmesi gereken yanıt (RESPONSE) text (düz yazı) formatında ve yalnızca OK değeri olmalıdır.

Örnek (PHP): echo "OK";
Örnek (.NET): Response.Write("OK");
ÖNEMLİ UYARILAR:

Bildirim URL adresinize üye girişi ve benzeri erişim kısıtlaması yapılmamalıdır. Böylece PayTR sistemi bildirimleri kolayca iletebilecektir.

Bildirim URL’nize gelecek bildirimlere döneceğiniz OK yanıtının öncesinde veya sonrasında HTML veya herhangi başka bir içerik ekrana basılmamalıdır.

Bildirim URL’niz, müşterinizin ödeme sırasında ulaşacağı bir sayfa değildir, PayTR tarafından arka planda (server-side) ödeme sonucunu bildirmek için kullanılır. Bu nedenle, Bildirim URL’nizde kodlama yaparken oturum (SESSION) değerlerini kullanamazsınız. İşlemlerinizi Mağaza sipariş no (merchant_oid) kullanarak gerçekleştirmelisiniz.

Bildirimin PayTR sisteminden geldiğinden ve ulaşım esnasında değiştirilmediğinden emin olmak için, POST içerisindeki hash değeri ile tarafınızca oluşturulacak hash değerinin aynı olduğunu kontrol etmeniz, güvenlik açısından büyük önem arz etmektedir. Bu kontrolü yapmamanız durumunda maddi kayıplar ile karşılaşabilirsiniz.



PHP PYTHON .NET NODEJS
<?php

    #################### POST içerisinde gelen örnek veriler ####################
    #
    // [mode] => cashout
    // -> Sabit bu şekilide gelir
    #
    // [hash] => wszlFsC7nrfCPvP77kdEzzE4smGdV4FWvDibKlXIpRM=,
    // -> Kontrolde kullanaılacaktır.
    #
    // [trans_id] => 12345aaabbb
    // -> Geri dönen ödeme hesaptan gönderme talebi yaparken PayTR'a gönderdiğiniz eşsiz değer.
    #
    // [processed_result] => [{\"amount\":484.48,\"receiver\":\"XYZ LTD STI\",\"iban\":\"TRXXXXXXXXXXXXXXXXXX\",\"result\":\"success\"}]
    // -> Geri dönen ödeme hesaptan gönderme talebi yaparken PayTR'a gönderdiğiniz değerler.
    #
    // [success_total] => 1
    // -> Başarıyla transfer edilen işlem sayısı (processed_result içerisinde, result:success olanların sayısı)
    #
    // [failed_total] => 0
    // -> Hata alan işlem sayısı (processed_result içerisinde, result:failed olanların sayısı)
    #
    // [transfer_total] => 484.48
    // -> Başarıyla tranasfer edilen işlemlerin toplam tutarı.
    #
    // [account_balance] => 0
    // -> Transferler sonrasında kalan alt hesap bakiyeniz.
    ############################################################################

    $post = $_POST;

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_key   = 'YYYYYYYYYYYYYY';
    $merchant_salt  = 'ZZZZZZZZZZZZZZ';
    ###########################################################################

    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    #
    ## POST değerleri ile hash oluştur.
    $hash = base64_encode( hash_hmac('sha256', $post['merchant_id'].$post['trans_id'].$merchant_salt, $merchant_key, true) );
    #
    ## Oluşturulan hash'i, PayTR'dan gelen post içindeki hash ile karşılaştır (isteğin PayTR'dan geldiğine ve değişmediğine emin olmak için)
    ## Bu işlemi güvenlik nedeniyle mutlaka yapmanız gerekiyor.
    if( $hash != $post['hash'] )
        die('PAYTR notification failed: bad hash');
    ###########################################################################

    ## trans_id bilgisi transfer talebi yaparken PayTR'a gönderdiğiniz her işlem için eşsiz değerdir.
    $processed_result = json_decode($post['processed_result'],1);
    foreach($processed_result as $trans)
    {
        // Burada her işlem için gerekli veri tabanı vb. işlemleri yapabilirsiniz.
    }

    ## Bildirimin alındığını PayTR sistemine bildir.
    echo "OK";
    exit;
?>
Geri dönen ödemeler örnek kodları indirmek için tıklayın.

İade API Entegrasyonu

Bu servis aracılığıyla, siparişe ait tutarın bir kısmı veya tamamı için iade işlemi gerçekleştirebilirsiniz.

ÖNEMLİ UYARI: Yanlış entegrasyon yapmanız hatalı iadelere sebep olabilir ve bu nedenle maddi kayıp yaşayabilirsiniz. Lütfen entegrasyon esnasında çok dikkatli olun! Sorularınız için bize ulaşabilirsiniz.

1- Bu servis ile birlikte iade etmek istediğiniz sipariş için sipariş numarasını ve iade tutarını aşağıda belirtilen gönderilmesi zorunlu olan değerler ile birlikte https://www.paytr.com/odeme/iade adresine POST metodunu kullanarak istek atabilirsiniz.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet
merchant_oid (string)	Sipariş No: İade işlemini gerçekleştirmek istediğiniz sipariş numarası	Evet
return_amount(integer)	İade Tutarı: Belirtilen sipariş için iade etmek istediğiniz tutar (Ayraç olarak yalnızca bir nokta (.) gönderilmelidir. Örnek: 10.25)	Evet
merchant_salt (string)	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet
merchant_key(integer)	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet


POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu
merchant_id (integer)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet
merchant_oid (string)	Sipariş No: İade işlemini gerçekleştirmek istediğiniz sipariş numarası	Evet
return_amount(integer)	İade Tutarı: Belirtilen sipariş için iade etmek istediğiniz tutar (Ayraç olarak yalnızca bir nokta (.) gönderilmelidir. Örnek: 10.25)	Evet
paytr_token (string)	paytr_token: İsteğin sizden geldiğine ve içeriğin değişmediğine emin olmamız için oluşturacağınız değerdir.	Evet
reference_no	Referans No: İletilmesi durumunda, Durum Sorgu servisinden döner,Alfa numerik	Hayır


2- Yapılan isteğe dönecek yanıt JSON formatında olacaktır.
a. Eğer oluşturulan istek içerisinde belirtilen sipariş numarası yok ise status değeri failed olarak dönecektir.
b. Eğer oluşturulan istek içerisinde belirtilen sipariş numarası var ise status değeri aşağıdaki tabloda belirtilen değerler ile birlikte success dönecektir.
c. Eğer gönderdiğiniz isteğin içerisinde bir hata/eksiklik var ise ekranda hata bildirimi belirecektir. Bu durumda hata hakkında detaylı bilgi için err_msg içeriğini kontrol etmeniz gerekecektir.

Result değişkeni içinde dönen değerler

Değişkenler	Açıklamalar
status	İade talebi başarılı ise success döner
is_test	İade talebi test işlem içinse 1 döner
merchant_oid	İade talebi yapılan sipariş numarası
return_amount	İade talebi yapılan tutar
reference_no	Gönderildi ise referans numarası


PHP PYTHON .NET NODEJS
<?php

    ####################### DÜZENLEMESİ ZORUNLU ALANLAR #######################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.
    $merchant_id    = "XXXXXX";
    $merchant_key   = "YYYYYYYYYYYYYY";
    $merchant_salt  = "ZZZZZZZZZZZZZZ";
    #
    # Sipariş No: İade etmek istediğiniz siparişin numarası.
    $merchant_oid   = "XXXXXX";
    #
    # İade Tutarı: Örneğin işlem 11.97 TL veya 11.97 USD ise.
    $return_amount  = "11.97";
    #
    # Referans Numarası: En fazla 64 karakter, alfa numerik. Zorunlu değil.
    $reference_no  = "XXXXXX11111";
    #
    ####### Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. #######
    $paytr_token=base64_encode(hash_hmac('sha256',$merchant_id.$merchant_oid.$return_amount.$merchant_salt,$merchant_key,true));

    $post_vals=array('merchant_id'=>$merchant_id,
        'merchant_oid'=>$merchant_oid,
        'return_amount'=>$return_amount,
        'paytr_token'=>$paytr_token);

    $ch=curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/iade");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1) ;
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if(curl_errno($ch))
    {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    $result=json_decode($result,1);

    /*
        $result değeri içerisinde;

        [status]        - İade talebi başarılı ise success döner.
        [is_test]       - İade talebi test işlem içinse 1 döner.
        [merchant_oid]  - İade talebi yapılan sipariş numarası.
        [return_amount] - İade talebi yapılan tutar.

        bilgileri dönmektedir.
    */

    if($result['status']=='success')
    {
        // VT işlemleri vs.
    }
    else
    {
        //Örn. $result -> array('status'=>'error', "err_no"=>"006", "err_msg"=>"Toplam iade tutarı odeme tutarindan fazla olamaz")
        echo $result['err_no']." - ".$result['err_msg'];
    }
İade API örnek kodları indirmek için tıklayın.

Durum Sorgu API Entegrasyonu

Durum Sorgu servisi aracılığıyla, mağazanız üzerinde gerçekleştirilen işlemlerin durumunu sorgulayabilirsiniz.

Mağaza Durum Sorgulama ve Pazaryeri Durum Sorgulama olarak iki kategoriye ayrılır.

1- Aşağıdaki tabloda belirtilen bilgileri https://www.paytr.com/odeme/durum-sorgu adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
merchant_key	Mağaza Parola
merchant_salt	Mağaza Gizli Anahtar
merchant_oid	Sipariş Numarası

Mağaza Durum Sorgulama
Tablodan gelen değerler ile sipariş numarası sorgulanır. Müşteriye ait ödeme tutarı ve toplam ödeme tutarı para birimi ile birlikte ekrana basılır. Yukarıdaki bilgilerde bir yanlışlık olursa hata mesajıda ekranda gösterilir. Aynı zamanda siparişe ait iadeler var ise bu iadeler ekranda belirtilir.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Eğer sorguda bir hata yoksa status değeri “success” ve aşağıdaki tabloda bulunan bilgiler döner.
b. Eğer sorguda bir hatanız varsa status değeri “error” döner. Bu durumda hata detayı için “err_msg” içeriğini kontrol etmelisiniz.

Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Değişkenler	Açıklamalar	Değerler
status(string)	Sorgulama sonucu(success veya failed)	success veya error
net_tutar (string)	Kesinti sonrası kalan tutar	9.76
kesinti_tutari (string)	İşlem için kesilen tutar	0.24
payment_amount(string)	İlgili siparişe ait tutar bilgisi	10,8
payment_total(string)	Müşterinin ilgili sipariş için ödediği tutar	10,8
payment_date(integer)	İşlemin gerçekleşme tarihi	2021-01-01 (YYYY-MM-DD)
currency(string)	Para birimi	TL(veya TRY), EUR, USD, GBP, RUB
taksit(string)	Taksit: İşlem taksitli yapıldı ise taksit sayısı	0,2,3,4,5,6,7,8,9,10,11,12
kart_marka(string)	İşlem yapılan kartın markası	Örn. WORD, BONUS, vb.
masked_pan(string)	İşlemin gerçekleşme tarihi	Örn. 455359AAA6747
odeme_tipi(string)	Ödemenin hangi tipte yapıldığı	KART veya EFT
test_mode(string)	İşlemin test veya canlı ortamda yapıldığı	0 veya 1
returns(Array)	Eğer ilgili sipariş içerisinde iade varsa dönecek değer
err_no	Hata numarası	004
err_msg	Hata mesajı	merchant_oid ile basarili odeme bulunamadi


Durum sorgulama örnek kodları: Örnek kodlar içinde nasıl yapılacağı detaylı olarak anlatılmaktadır.

PHP PYTHON .NET NODEJS
<?php

$merchant_id = "XXX";
$merchant_key = "XXX";
$merchant_salt = "XXX";
$merchant_oid = "XXX";

$paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $merchant_oid . $merchant_salt, $merchant_key, true));

$post_vals = array('merchant_id' => $merchant_id,
        'merchant_oid' => $merchant_oid,
        'paytr_token' => $paytr_token);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/durum-sorgu");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 90);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

//XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
//aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$result = @curl_exec($ch);

if (curl_errno($ch)) {
       echo curl_error($ch);
       curl_close($ch);
        exit;
}
curl_close($ch);

$result = json_decode($result, 1);

if ($result[status] != 'success') {
       echo $result[err_no] . " - " . $result[err_msg];
       exit;
}

echo $result['payment_amount'] . " " . $result['currency'] . "<br>";

echo $result['payment_total'] . " " . $result['currency'] . "<br>";

echo $result['payment_date'] . "<br>";

foreach ($result['returns'] AS $return_success)
       print_r($return_success);
?>
Mağaza durum sorgulama örnek kodları indirmek için tıklayın.

1- Aşağıdaki tabloda belirtilen diğer bilgileri https://www.paytr.com/odeme/durum-sorgu adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
merchant_key	Mağaza Parola
merchant_salt	Mağaza Gizli Anahtar
merchant_oid	Sipariş Numarası
Pazaryeri Durum Sorgulama
Tablodan gelen değerler ile sipariş numarası sorgulanır. Müşteriye ait ödeme tutarı ve toplam ödeme tutarı para birimi ile birlikte ekrana basılır. Yukarıdaki bilgilerde bir yanlışlık olursa hata mesajıda ekranda gösterilir. Aynı zamanda siparişe ait iadeler var ise bu iadeler ekranda belirtilir.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Eğer sorguda bir hata yoksa status değeri “success” ve aşağıdaki tabloda bulunan bilgiler döner.
b. Eğer sorguda bir hatanız varsa status değeri “error” döner. Bu durumda hata detayı için “err_msg” içeriğini kontrol etmelisiniz.

Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Değişkenler	Açıklamalar	Değerler
Status(string)	Sorgulama sonucu.(success veya failed)	success veya error
payment_amount(string)	İlgili siparişe ait tutar bilgisi	10,8
payment_total(string)	Müşterinin ilgili sipariş için ödediği tutar	10,8
payment_date(integer)	İşlemin gerçekleşme tarihi	2021-01-01 23:59:59 (YYYY-MM-DD hh:mm:ss)
currency(string)	Para birimi	TL(veya TRY), EUR, USD, GBP, RUB
taksit(string)	Taksit: İşlem taksitli yapıldı ise taksit sayısı	0,2,3,4,5,6,7,8,9,10,11,12
kart_marka(string)	İşlem yapılan kartın markası	Örn. WORD, BONUS, vb.
masked_pan(string)	İşlemin gerçekleşme tarihi	Örn. 455359AAA6747
odeme_tipi(string)	Ödemenin hangi tipte yapıldığı	KART veya EFT
test_mode(string)	İşlemin test veya canlı ortamda yapıldığı	0 veya 1
returns(string)	Eğer ilgili sipariş içerisinde iade varsa dönecek değer	
reference_no(string)	Referans No: İade talebinde bulunurken gönderildi ise dönen iade referans numarası	111111111111(maksimum 64 alfanumarik karakter)
err_no	Hata numarası	004
err_msg	Hata mesajı	merchant_oid ile basarili odeme bulunamadi
submerchant_payments	Platform ödemeleri	


Pazar yeri durum sorgulama örnek kodları: Örnek kodlar içinde nasıl yapılacağı detaylı olarak anlatılmaktadır.

PHP PYTHON .NET NODEJS
<?php
    $merchant_id = "XXX";
    $merchant_key = "XXX";
    $merchant_salt = "XXX";
    $merchant_oid = "XXX";

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $merchant_oid . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'merchant_oid' => $merchant_oid,
        'paytr_token' => $paytr_token);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/durum-sorgu");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }
    curl_close($ch);

    $result = json_decode($result, 1);

    if ($result[status] != 'success') {
        echo $result['err_no'] . " - " . $result['err_msg'];
        exit;
    }

    //sipariş tutarı
    echo $result['payment_amount'] . " " . $result['currency'] . "<br>";

    //işlem tarihi
    echo $result['payment_date']. "<br>";

    //müşteri ödeme tutarı
    echo $result['payment_total'] . " " . $result['currency'] . "<br>";

    //siparişteki iadeler (varsa)

    /*

    Array ( 
    [return_amount] => 1 
    [return_date] => 2021-03-25 23:45:22 
    [return_type] => 
    [date_completed] => 2021-03-25 23:46:02 
    [return_auth_code] =>
    [return_ref_num] => 
    [reference_no] => 111111111111111
    [return_source] => 
    )

    */

    foreach ($result['returns'] AS $return_success)
        print_r($return_success);

    //platform ödemeleri
    foreach ($result['submerchant_payments'] AS $sub_payments)
        print_r($sub_payments);
?>
Pazaryeri durum sorgulama örnek kodları indirmek için tıklayın.

PayTR Hata Kodları

PayTR servislerinden dönen Hata Kodlarına ait tablolar

ÖDEME İŞLEMİ SONRASI BANKAYA GİTMEDEN PAYTR TARAFINDAN BİLDİRİM URL ADRESİNİZE DÖNÜLEN HATA KODLARI VE AÇIKLAMALARI

failed_reason_code	failed_reason_msg	Açıklama
0	DEĞİŞKEN (AÇIKLAMAYI OKUYUN)	Ödemenin neden onaylanmadığına ilişkin,detaylı hata mesajı (Örneğin: Kartın limiti /bakiyesi yetersiz).
1	Kimlik Doğrulama yapılmadı. Lütfen tekrar deneyin ve işlemi tamamlayın.	Müşteri, kimlik doğrulama adımında cep telefonu numarasını girmedi.
2	Kimlik Doğrulama başarısız. Lütfen tekrar deneyin ve şifreyi doğru girin.	Müşteri, cep telefonuna gelen şifreyi doğru girmedi.
3	Güvenlik kontrolü sonrası onay verilmedi veya kontrol yapılamadı.	Müşterinin işlemi PayTR tarafından güvenlik kontrolünden geçemedi veya kontrol yapılamadı.
6	Müşteri ödeme yapmaktan vazgeçti ve ödeme sayfasından ayrıldı.	Müşteri, kendisine tanınmış olan işlem süresinde(1. ADIM’da tanımlanan request_exp_date değeri) işlemini tamamlamadı veya müşteri ödeme sayfasını kapatarak işlemi sonlandırdı.
8	Bu karta taksit yapılamamaktadır.	Müşterinin kullanmakta olduğu kart ile seçmiş olduğu taksitli ödeme yöntemi kullanılamaz.
9	Bu kart ile işlem yetkisi bulunmamaktadır.	Müşterinin kullanmakta olduğu kart için mağazanızın işlem yetkisi bulunmuyor.
10	Bu işlemde 3D Secure kullanılmalıdır.	Müşteri, yapmış olduğu işlemde 3D Secure ile ödeme yapmalıdır.
11	Güvenlik uyarısı. İşlem yapan müşterinizi kontrol edin.	Müşterinin işleminde fraud tespiti bulunuyor. Güvenliğiniz için müşterinin işlemlerini kontrol edin.
99	İşlem başarısız: Teknik entegrasyon hatası.	Teknik entegrasyon hatası varsa dönülecektir. (debug_on değeri 0 ise)



İADE API SERVİSİ ÜZERİNDEN DÖNÜLEN HATA KODLARI VE AÇIKLAMALARI

err_no	err_msg	Açıklama
000	iade yapilamiyor, daha sonra tekrar deneyin	Ödeme çıkışı esnasında iade servisinin kilitlenmesi durumunda yaşanmaktadır. Bir süre sonra tekrar deneyebilirsiniz.
001	Gecersiz istek veya magaza aktif degil	İstekte merchant_id bilgisinin iletilmemesi veya mağazanın aktif olmaması durumunda dönülmektedir.
002	Gecersiz merchant_oid	İstekte merchant_oid alanını iletmemeniz durumunda dönülmektedir.
003	Gecersiz return_amount	İstekte return_amount alanını iletmemeniz durumunda dönülmektedir.
004	paytr_token gonderilmedi veya gecersiz	paytr_token alanının iletilmemesi veya doğru olmaması durumunda dönülmektedir.
005	merchant_oid ile basarili odeme bulunamadi	İlettiğiniz sipariş numarası ile başarılı bir ödemenin olmadığı durumda dönülmektedir.
007	merchant_oid bulundu ancak odeme henuz siteye bildirilmemis	İlettiğiniz sipariş numarasının bildirim akışının tamamlanmadığını belirtmektedir.
008	XYZ odeme tipi iade desteklemiyor	İlettiğiniz ödeme tipi ile iade işlemi yapılmamaktadır.
009	Toplam iade tutari odeme tutarindan fazla olamaz	İlettiğiniz iade tutarı işleme ait kalan tutardan fazla olması durumunda dönülmektedir.
010	Net bakiyeniz yetersiz	Hesabınızda iade etmek istediğiniz tutar kadar bakiye bulunmaması durumunda döndülmektedir.
011	Bir yildan eski islemler icin iade islemi yapilamaz.	Bir yıldan önceki bir işlem için iade işlemi denemeniz durumunda dönülmektedir.



DURUM SORGU SERVİSİ ÜZERİNDEN DÖNÜLEN HATA KODLARI VE AÇIKLAMALARI

err_no	err_msg	Açıklama
001	Gecersiz istek veya magaza aktif degil	İstekte merchant_id bilgisinin iletilmemesi veya mağazanın aktif olmaması durumunda dönülmektedir.
002	Gecersiz merchant_oid	İstekte merchant_oid alanını iletmemeniz durumunda dönülmektedir.
003	paytr_token gonderilmedi veya gecersiz	paytr_token alanının iletilmemesi veya doğru olmaması durumunda dönülmektedir.
004	merchant_oid ile islem bulunamadi	İlettiğiniz sipariş numarasına ait bir işlem bulunamaması durumunda dönülmektedir.
004	merchant_oid ile basarili odeme bulunamadi	İlettiğiniz sipariş numarası ile başarılı bir ödemenin olmadığı durumda dönülmektedir.
PLATFORM TRANSFER TALEBİ SERVİSLERİ ÜZERİNDEN DÖNÜLEN HATA KODLARI VE AÇIKLAMALARI

err_no	err_msg	Açıklama
001	Gecersiz istek veya magaza aktif degil	İstekte merchant_id bilgisinin iletilmemesi veya mağazanın aktif olmaması durumunda dönülmektedir.
002	Bu servis icin yetkiniz yok	Mağazanız türünüz pazaryeri olmaması durumunda bu hata dönülmektedir.
003	Gecersiz trans_id	trans_id değeri gönderilmemesi durumunda bu hata yanıtı dönülmektedir.
004	paytr_token gonderilmedi veya gecersiz	paytr_token alanının iletilmemesi veya doğru olmaması durumunda dönülmektedir.
005	Gecersiz merchant_oid	İstekte merchant_oid alanını iletmemeniz durumunda dönülmektedir.
006	merchant_oid ile basarili odeme bulunamadi	İlettiğiniz sipariş numarası ile başarılı bir ödemenin olmadığı durumda dönülmektedir.
007	merchant_oid bulundu ancak odeme henuz siteye bildirilmemis	İlettiğiniz sipariş numarasının bildirim akışının tamamlanmadığını belirtmektedir.
008	valor tarihi gecmeden transfer yapilamaz, (valör tarihi) sonrasi tekrar deneyin	İşlem için geçerli olan valör tarihinizden önce istekte bulunmanız durumunda dönülmektedir.
009	trans_id benzersiz olmalidir, bu trans_id daha once kullanilmis.	Daha önce iletilen bir trans_id değeri iletmeniz durumunda dönülmektedir.
010	toplam transfer tutari, kalan tutardan fazla olamaz.	İletmiş olduğunuz transfer tutarı işlem için kalan tutardan fazla olması durumunda dönülmektedir.
012	platform komisyonu sifirdan az olamaz	Yapmış olduğunuz istekte PayTR komisyonu kadar tutar kalmaması durumunda dönülmektedir.
091	transfer_iban degeri IBAN dogrulamasindan gecemedi, lutfen kontrol edin.	Geçerli bir IBAN numarası girmemeniz durumunda dönülmektedir.
092	transfer_iban TR ile baslamalidir, bosluk veya '-' icermemeli ve 26 hane olmalidir, lutfen kontrol edin.	IBAN alanı doğru formatta iletilmemesi nedeniyle dönülmektedir.
095	submerchant_amount sifirdan kucuk olamaz.	Alt satıcınıza aktaracağınız tutar 0 dan küçük gönderilmesi nedeniyle dönülmektedir.
096	trans_id alfanumerik olmalidir, ozel karakter iceremez	İletilen trans_id alanının alfa numerik olmaması nedeniyle dönülmektedir.
097	transfer_iban zorunludur, lutfen kontrol edin	transfer_iban alanının iletilmemesi durumunda dönülmektedir.
098	transfer_name zorunludur, lutfen kontrol edin	transfer_name alanının iletilmemesi durumunda dönülmektedir.
099	total_amount sifirdan buyuk ve sayisal olmalidir	total_amount alanının doğru formatta iletilmemesi veya 0'dan küçük iletilmesi durumunda dönülmektedir.
100	transfer_name icerisinde ad ve soyad arasinda bosluk olmalidir	transfer_name alanının doğru formatta iletilmemesi durumunda dönülmektedir.
101	transfer_name icerisinde ad ve soyad en az 2 karakter olmalidir	transfer_name alanının doğru formatta iletilmemesi durumunda dönülmektedir.
201	paytr_token gonderilmedi veya gecersiz	paytr_token alanının iletilmemesi veya doğru olmaması durumunda dönülmektedir.
202	trans_id alfanumerik olmalidir, ozel karakter iceremez	İletilen trans_id alanının alfa numerik olmaması nedeniyle dönülmektedir.
203	trans_id benzersiz olmalidir, bu trans_id daha once kullanilmis.	Daha önce iletilen bir trans_id değeri iletmeniz durumunda dönülmektedir.
204	trans_info izin verilenden uzun, daha az kayit ile tekrar deneyin	trans_info alanında beklenenden fazla kayıt iletilmesi durumunda dönülmektedir.
205	trans_info en az 2 islem en fazla 2000 islem icermelidir	trans_info alanında beklenenden fazla veya az kayıt iletilmesi durumunda dönülmektedir.
206	trans_info gecerli bir JSON string degil	trans_info alanı beklenen formatta iletilmemesi durumunda dönülmektedir.
301	paytr_token gonderilmedi veya gecersiz	paytr_token alanının iletilmemesi veya doğru olmaması durumunda dönülmektedir.
302	trans_id alfanumerik olmalidir, ozel karakter iceremez	İletilen trans_id alanının alfa numerik olmaması nedeniyle dönülmektedir.
303	trans_id benzersiz olmalidir, bu trans_id daha once kullanilmis.	Daha önce iletilen bir trans_id değeri iletmeniz durumunda dönülmektedir.
305	merchant_oids en az X islem, en fazla Y islem icermelidir"	İletilen değer merchant_oids alanının alabileceği değerler olmaması durumunda dönülmektedir.
306	merchant_oids gecerli bir JSON string degil	merchant_oids alanı beklenen formatta iletilmemesi durumunda dönülmektedir.
BLK	merchant_oid numarali islemde bloke mevcut, detayli bilgi icin bize ulasin	İletilen sipariş numarasında bloke olması durumunda dönülmektedir.


BKM Express Entegrasyonu

BKM Express servisi aracılığıyla, BKM Express sisteminde kayıtlı kartlar aracılığıyla ödeme alabilirsiniz.

BKM Express Entegrasyonu iFrame ödeme yönteminde otomatik olarak ödeme ekranına gelmektedir. Ancak Direkt API çözümünde BKM Express entegrasyonu yaparken $payment_type = "bex" olarak gönderilmesi gerekmektedir.

Değişkenler	Açıklamalar
merchant_id	Mağaza no
merchant_key	Mağaza parola
merchant_salt	Mağaza gizli anahtar
merchant_oid	Sipariş numarası
payment_amount	Siparişe ait toplam Tutar
user_ip	Kullanıcıdan alınan ip adresi
email	Kullanıcının email adresi
payment_type	Bkm Express için bex olarak gönderilmesi gereklidir.
installment_options	Taksit seçenekleri opsiyoneldir. Göndermediğiniz takdirde müşterinize taksit seçenekleri gösterilmeyecektir. Aşağıda verilen değerler örnektir. Siz komisyon oranlarınıza göre tutarları hesaplayıp aşağıdaki kısmı düzenlemelisiniz.


BKM Express Test Kullanıcı Bilgileri

Kullanıcı bilgisi	Banka
0010@banka.com	ZİRAAT BANKASI
0012@banka.com	HALK BANKASI
0015@banka.com	VAKIFBANK
0032@banka.com	TEB
0046@banka.com	AKBANK
0062@banka.com	GARANTİ
0064@banka.com	İŞBANK
0067@banka.com	YAPI KREDİ
0134@banka.com	DENİZBANK
0111@banka.com,qnbfinans@bkm.com	FİNANSBANK

Tüm kullanıcıların şifreleri 147258'dir.

Bkm Express örnek kodları:

PHP
<?php

$merchant_id = '';
$merchant_key = '';
$merchant_salt = '';

$user_basket = htmlentities(json_encode(array(
    array("Örnek ürün 1", "18.00", 1),
    array("Örnek ürün 2", "33.25", 2),
    array("Örnek ürün 3", "45.42", 1)
)));

$merchant_oid = $_POST['merchant_oid'];

$test_mode = 1;

if (isset($_SERVER["HTTP_CLIENT_IP"])) {
    $ip = $_SERVER["HTTP_CLIENT_IP"];
} elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
    $ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
} else {
    $ip = $_SERVER["REMOTE_ADDR"];
}
$user_ip = $ip;

$email = "testbex@siteniz.com";
$payment_amount = "15.20";

$installment_count = 0;

$payment_type = "bex";

/* Taksit seçenekleri opsiyoneldir. Göndermediğiniz takdirde müşterinize taksit seçenekleri gösterilmeyecektir. */
/* Aşağıda verilen değerler örnektir! Siz komisyon oranlarınıza göre tutarları hesaplayıp aşağıdaki kısmı düzenlemelisiniz. */
/* DİKKAT: Oluşturacağınız JSON tek satır olması ve arasında herhangi bir enter, vb. olmaması gerekmektedir. */

$installment_options = '{"advantage":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"axess":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"bonus":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"combo":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"cardfinans":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"maximum":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"paraf":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8},'.
'"world":{"2":20.2,"3":30.9,"4":40.8,"5":50.4,"6":60.4,"7":70.2,"8":80.1,"9":90.5,"10":100.3,"11":110.2,"12":120.8}}';

$hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . $payment_type . $installment_count . $test_mode . $installment_options;
$token = base64_encode(hash_hmac('sha256', $hash_str . $merchant_salt, $merchant_key, true));

$post = [
    'merchant_id' => $merchant_id,
    'user_ip' => $user_ip,
    'merchant_oid' => $merchant_oid,
    'email' => $email,
    'payment_type' => $payment_type,
    'payment_amount' => $payment_amount,
    'installment_count' => $installment_count,
    'test_mode' => $test_mode,
    'user_name' => "TEST NAME",
    'user_address' => "USER TEST ADDRESS",
    'user_phone' => "05555555555",
    'user_basket' => $user_basket,
    'debug_on' => 1,
    'paytr_token' => $token,
    'installment_options' => $installment_options
];

$ch = curl_init('https://www.paytr.com/odeme');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 90);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

//XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
//aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
//curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

$response = @curl_exec($ch);

if (curl_errno($ch)) {
    echo curl_error($ch);
    curl_close($ch);
    exit;
}

curl_close($ch);

exit($response);
?>
BKM Express örnek kodları indirmek için tıklayın.

Satış ve İade İşlem Dökümü Servisi

Bu servisi ile iletilen tarih aralığındaki (en fazla 3 gün) yapılan satış ve iade işlemlerinin dökümünü alabilirsiniz.

1- İşlem detaylarını gerçek istediğiniz tarih / saat ve aşağıdaki tabloda belirtilen diğer bilgileri https://www.paytr.com/rapor/islem-dokumu adresine POST metodu ile gönderin.

Token üretiminde kullanılacak veriler

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id(string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
start_date(string)	Başlangıç Tarihi Formatı: 2021-01-01 00:00:00 (YYYY-MM-DD hh:mm:ss)	Evet	-
end_date	Bitiş Tarihi Formatı: 2021-01-01 23:59:59 (YYYY-MM-DD hh:mm:ss)	Evet	-
merchant_salt	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-
merchant_key	PayTR Mağaza Paneli > Destek & Kurulum > Entegrasyon Bilgileri sayfası üzerinden ulaşabileceğiniz, mağazanıza özgü değer.	Evet	-


* POST REQUEST içeriğinde gönderilecek değerler:

Alan adı / tipi	Açıklama	Zorunlu	Kısıtlar
merchant_id (string)	Mağaza No: PayTR tarafından size verilen Mağaza numarası	Evet	-
start_date (integer)	Başlangıç Tarihi Formatı: 2021-01-01 00:00:00 (YYYY-MM-DD hh:mm:ss)	Evet	-
end_date(integer)	Bitiş Tarihi Formatı: 2021-01-01 23:59:59 (YYYY-MM-DD hh:mm:ss)	Evet	-
dummy(int)	Demo Veri: Servisten dönen verileri simule etmek için kullanılır. Dönen değerler gerçek değildir, test amaçlı gözlem içindir.	Hayır	0 veya 1
paytr_token(string)	paytr_token: İsteğin sizden geldiğine veiçeriğin değişmediğine emin olmamız için oluşturacağınız değerdir	Evet	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.



2- Yaptığınız bu isteğe cevap JSON formatında döner. a. Verilen tarih aralığında eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner. b. Verilen tarih aralığında eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner. c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.

Status success durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır. Satış ve İade işlemlerinde fark olmaksızın aynı değerler döner.

Açıklama	Alan adı / tipi	Değerler
İşlem Tipi: Yapılan işlemin tipi.	islem_tipi (string)	S (satış) veya I (iade)
Net Tutar: Kesinti sonrası kalan tutar.	net_tutar (string)	Örn. 9.76
Kesinti Tutarı: İşlem için kesilen tutar.	kesinti_tutari (string)	Örn. 0.24
Kesinti Oranı: İşlem için kesilen oran.	kesinti_orani (string)	Örn. 2.35
İşlem Tutarı: Yapılan işlemin tutarı.	islem_tutari (string)	Örn. 10.00
Ödeme Tutarı: İşlem tutarı üzerinde bir ödeme olması durumunda dönülür.	odeme_tutari (string)	Örn. 10.00
İşlem Tarihi: İşlemin yapıldığı tarih.	islem_tarihi (string)	Örn. 13.01.2021
Para Birimi: İşlemin para birimi.	para_birimi (string)	TL, USD, EUR, GBP, RUB
Taksit: İşlem taksitli yapıldı ise taksit sayısı.	taksit (string)	0,2,3,4,5,6,7,8,9,10,11,12
Kart Markası: İşlem yapılan kartın markası.	kart_marka (string)	Örn. WORD, BONUS, vb.
Kart No: İşlem yapılan maskeli kart numarası.	kart_no (string)	Örn. 455359AAA6747
Sipariş Numarası: İşlemin sipariş numarası.	siparis_no (string)	Örn. ABC123
Ödeme Tipi: Ödemenin hangi tipte yapıldığı.	odeme_tipi (string)	KART veya EFT


PHP Python .NET NODEJS
<?php

    ########################### İŞLEM DÖKÜMÜ ALMAK  İÇİN ÖRNEK KODLAR ##########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXXYYYYYY';
    $merchant_salt  = 'YYYYYYXXXXXX';

    ## Gerekli Bilgiler
    #
    $start_date = "2020-06-02 00:00:00";
    $end_date = "2020-06-04 23:59:59";
    # Başlangıç / Bitiş tarihi. En fazla 3 gün aralık tanımlanabilir.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $start_date . $end_date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'start_date' => $start_date,
        'end_date' => $end_date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/rapor/islem-dokumu");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    //XXX: DİKKAT: lokal makinanızda "SSL certificate problem: unable to get local issuer certificate" uyarısı alırsanız eğer
    //aşağıdaki kodu açıp deneyebilirsiniz. ANCAK, güvenlik nedeniyle sunucunuzda (gerçek ortamınızda) bu kodun kapalı kalması çok önemlidir!
    //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = @curl_exec($ch);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    $result = json_decode($result, 1);

    if ($result['status'] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result['status'] == 'failed')
    {
        // sonuç bulunamadı
        echo "ilgili tarih araliginda islem bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result['err_no'] . " - " . $result['err_msg'];
    }
İşlem Dökümü Servisi örnek kodlarını indirmek için tıklayın

Ödeme Rapor Servisi

Ödeme Özet Servisi

Bu servis ile iletilen tarih aralığında mağaza hesabına aktarılan ve aktarılacak olan tutarlara ait ödeme özetine ulaşabilirsiniz.

Ödeme özet servisi sayfasına bu linkten gidebilirsiniz.

Ödeme Detay Servisi

Bu servis ile iletilen tarihte yapılan satış işlemlerine ait transfer dökümünü alabilirsiniz.

Ödeme detay servisi sayfasına bu linkten gidebilirsiniz.

Ödeme Özeti

Mağaza Ödeme Özeti ve Pazaryeri Ödeme Özeti olarak iki kategoriye ayrılır.

Mağaza Ödeme Özeti

Ödeme özeti servisi aracılığıyla, iletilen tarih aralığında mağaza hesabına aktarılan ve aktarılacak olan tutarlara ait ödeme özetine ulaşabilirsiniz.

1- Aşağıdaki tabloda belirtilen bilgileri https://www.paytr.com/rapor/odeme-dokumu adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
start_date	Başlangıç Tarihi Formatı: 2022-01-01 (YYYY-MM-DD)
end_date	Bitiş Tarihi Formatı: 2022-01-01 (YYYY-MM-DD)
paytr_token	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.


Tablodan gelen değerler tarih aralığına göre sorgulanır. Tarihe göre hesaba aktarılan ve hesaba aktarılacak olan satış,iade ve net tutar bilgileri servisten döner.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Verilen tarihte eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner.
b. Verilen tarihte eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner.
c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.
Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Alan Adı/tipi	Açıklamalar	Değerler
date_paid	Ödeme tarihi	Örn. 2022-02-07
currency	Aktarılan tutarın para birimi	Örn. TL
sales	Toplam satış tutarı	Örn. 950.95
return	Toplam iade tutarı	Örn. 12.64
net	Aktarılan net tutar	Örn. 938.31
merchant_iban	Mağaza IBAN no	Örn. TR000000000000000000000000000
TL	Hesaba aktarılacak tutarın para birimi	Örn. TL,USD
Gelecek ödemelerinizi içeren data bloğunu, future_payments ismiyle ele alabilirsiniz. future_payments icerisinde, aşağıda belirtilmiş olan alanlara ek olarak; tarih ve döviz cinsi değerlerine ulaşabilirsiniz.

Alan Adı/tipi	Açıklamalar	Değerler
net_amounts	Net tutarı	500
sale_amounts	Satış tutarı	500
return_amounts	İade tutarı	150


PHP PYTHON .NET NODEJS
<?php

########################### ÖDEME RAPOR SERVİSİ - ÖZET ALMAK  İÇİN ÖRNEK KODLAR ##########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXX';
    $merchant_salt  = 'XXXXXX';

    ## Gerekli Bilgiler
    #
    $start_date     = "2022-09-01";
    $end_date       = "2022-09-31";
    # Başlangıç / Bitiş tarihi. En fazla 31 gün aralık tanımlanabilir.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $start_date . $end_date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'start_date' => $start_date,
        'end_date' => $end_date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/rapor/odeme-dokumu/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    $result = @curl_exec($ch);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    echo "<pre>";
    $result = json_decode($result, 1);

    if ($result['status'] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result['status'] == 'failed')
    {
        // sonuç bulunamadı
        echo "ilgili tarih araliginda odeme ozeti bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result['err_no'] . " - " . $result['err_msg'];
    }
Mağaza ödeme özeti örnek kodları indirmek için tıklayın.

Pazaryeri Ödeme Özeti

Ödeme özeti servisi aracılığıyla, iletilen tarih aralığında mağaza hesabına aktarılan tutarlara ait ödeme özetine ulaşabilirsiniz.

1- Aşağıdaki tabloda belirtilen bilgileri https://www.paytr.com/rapor/odeme-dokumu adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
start_date	Başlangıç Tarihi Formatı: 2022-01-01 (YYYY-MM-DD)
end_date	Bitiş Tarihi Formatı: 2022-01-01 (YYYY-MM-DD)
paytr_token	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.


Tablodan gelen değerler tarih aralığına göre sorgulanır. Tarihe göre hesaba aktarılan satış,iade ve net tutar bilgileri servisten döner.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Verilen tarihte eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner.
b. Verilen tarihte eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner.
c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.
Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Alan Adı/tipi	Açıklamalar	Değerler
date_paid	Ödeme tarihi	Örn. 2022-02-07
currency	Aktarılan tutarın para birimi	Örn. TL
sales	Toplam satış tutarı	Örn. 950.95
return	Toplam iade tutarı	Örn. 12.64
net	Aktarılan net tutar	Örn. 938.31
merchant_iban	Mağaza IBAN no	Örn. TR000000000000000000000000000


PHP PYTHON .NET NODEJS
<?php

########################### ÖDEME RAPOR SERVİSİ - ÖZET ALMAK  İÇİN ÖRNEK KODLAR ##########################
    #                                                                                          #
    ################################ DÜZENLEMESİ ZORUNLU ALANLAR ###############################
    #
    ## API Entegrasyon Bilgileri - Mağaza paneline giriş yaparak BİLGİ sayfasından alabilirsiniz.

    $merchant_id    = 'XXXXXX';
    $merchant_key   = 'XXXXXX';
    $merchant_salt  = 'XXXXXX';

    ## Gerekli Bilgiler
    #
    $start_date     = "2022-09-01";
    $end_date       = "2022-09-31";
    # Başlangıç / Bitiş tarihi. En fazla 31 gün aralık tanımlanabilir.
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $start_date . $end_date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'start_date' => $start_date,
        'end_date' => $end_date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/rapor/odeme-dokumu/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    $result = @curl_exec($ch);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    echo "<pre>";
    $result = json_decode($result, 1);

    if ($result[status] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result[status] == 'failed')
    {
        // sonuç bulunamadı
        echo "ilgili tarih araliginda odeme ozeti bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result[err_no] . " - " . $result[err_msg];
    }
Pazaryeri ödeme özeti örnek kodları indirmek için tıklayın.

Ödeme Detay Servisi

Ödeme detay servisi aracılığıyla, iletilen tarihte yapılan satış işlemlerine ait transfer detayı alabilirsiniz.

Mağaza Ödeme Detay ve Pazaryeri Ödeme Detay olarak iki kategoriye ayrılır.

Mağaza Ödeme Detay

1- Aşağıdaki tabloda belirtilen bilgileri https://www.paytr.com/rapor/odeme-detayi adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
date	Ödeme Detayı İstenen Tarih Formatı: 2022-01-01 (YYYY-MM-DD)
paytr_token	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.

Mağaza Ödeme Detay
Tablodan gelen değerler tarihe göre işlemler sorgulanır. İlgili tarihte yapılan satış işlemlerine ait transfer bilgileri servisten döner.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Verilen tarihte eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner.
b. Verilen tarihte eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner.
c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.
Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Alan Adı/tipi	Açıklamalar	Değerler
merchant_oid	Mağaza sipariş no	Örn. ABC123
merchant_iban	Mağaza IBAN no	Örn. TR000000000000000000000000000
merchant_name	Mağaza isim bilgisi	Örn. Test Firma
payment	İşleme ait tutar	Örn. 18
currency	İşlemin para birimi	Örn. TL


PHP PYTHON .NET NODEJS
<?php

$merchant_id    = 'XXXXX';
    $merchant_key   = 'YYYYYYYYYYYYY';
    $merchant_salt  = 'YYYYYYYYYYYYY';

    ## Gerekli Bilgiler
    #
    //$date     = "2022-02-07";
    $date     = "2021-07-01";
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'date' => $date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/rapor/odeme-detayi/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    $result = @curl_exec($ch);
    //print_r($result);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    echo "<pre>";
    $result = json_decode($result, 1);

    if ($result['status'] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result['status'] == 'failed')
    {
       // sonuç bulunamadı
        echo "ilgili tarihte odeme detayi bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result['err_no'] . " - " . $result['err_msg'];
    }
Mağaza ödeme detay örnek kodları indirmek için tıklayın.

Pazaryeri Ödeme Detay

1- Aşağıdaki tabloda belirtilen bilgileri https://www.paytr.com/rapor/odeme-detayi adresine POST ile gönderin.

Değişkenler	Açıklamalar
merchant_id	Mağaza No
date	Ödeme detay alınmak istenen tarih
paytr_token	Hesaplama ile ilgili olarak örnek kodlara bakmalısınız.


Tablodan gelen değerler tarihe göre işlemler sorgulanır. İlgili tarihte yapılan satış işlemlerine ait transfer bilgileri servisten döner.

2- Yaptığınız bu isteğe cevap JSON formatında döner.
a. Verilen tarihte eğer herhangi bir işlem / hareket yoksa status değeri failed olarak döner.
b. Verilen tarihte eğer herhangi bir işlem varsa status değeri success ve aşağıdaki tabloda bulunan bilgiler döner.
c. Eğer sorguda bir hatanız varsa status değeri error döner. Bu durumda hata detayı için err_msg içeriğini kontrol etmelisiniz.
Status “success” durumunda dönen diğer bilgiler aşağıdaki tabloda detaylandırılmıştır.

Alan Adı/tipi	Açıklamalar	Değerler
merchant_oid	Mağaza sipariş no	Örn. ABC123
merchant_iban	Mağaza IBAN no	Örn. TR000000000000000000000000000
merchant_name	Mağaza isim bilgisi	Örn. Test Firma
payment	İşleme ait tutar	Örn. 18
currency	İşlemin para birimi	Örn. TL
amount	Alt satıcıya aktarılan tutar	Örn. 140
transfer	Alt satıcı transfer hesap bilgisi	Örn. TR111111111111111111111, TEST SATICI
currency	İşlemin para birimi	Örn. TL


Gelen tutar ve aktarılan tutarlar günlük olarak görünmektedir.

Ödeme detay örnek kodları: Örnek kodlar içinde nasıl yapılacağı detaylı olarak anlatılmaktadır.

PHP PYTHON .NET NODEJS
<?php

$merchant_id    = 'XXXXX';
    $merchant_key   = 'YYYYYYYYYYYYY';
    $merchant_salt  = 'YYYYYYYYYYYYY';

    ## Gerekli Bilgiler
    #
    //$date     = "2022-02-07";
    $date     = "2021-07-01";
    #
    ############################################################################################

    ################ Bu kısımda herhangi bir değişiklik yapmanıza gerek yoktur. ################

    $paytr_token = base64_encode(hash_hmac('sha256', $merchant_id . $date . $merchant_salt, $merchant_key, true));

    $post_vals = array('merchant_id' => $merchant_id,
        'date' => $date,
        'paytr_token' => $paytr_token
    );
    #
    ############################################################################################

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/rapor/odeme-detayi/");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 90);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 90);

    $result = @curl_exec($ch);
    //print_r($result);

    if (curl_errno($ch)) {
        echo curl_error($ch);
        curl_close($ch);
        exit;
    }

    curl_close($ch);

    echo "<pre>";
    $result = json_decode($result, 1);

    if ($result[status] == 'success')
    {
        // VT işlemleri vs.
        print_r($result);
    }
    elseif ($result[status] == 'failed')
    {
       // sonuç bulunamadı
        echo "ilgili tarihte odeme detayi bulunamadi";
    }
    else
    {
        // Hata durumu
        echo $result[err_no] . " - " . $result[err_msg];
    }
Pazaryeri ödeme detay örnek kodları indirmek için tıklayın.