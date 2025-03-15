# Katkıda Bulunma Rehberi

PayTR Node.js modülü geliştirmesine katkıda bulunmak istediğiniz için teşekkür ederiz!

## Geliştirme Ortamı Kurulumu

1. Projeyi klonlayın
```bash
git clone https://github.com/[kullanici]/paytr-node.git
cd paytr-node
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. Test için kullanılabilecek bir `.env` dosyası oluşturun
```bash
PAYTR_MERCHANT_ID=your_merchant_id
PAYTR_MERCHANT_KEY=your_merchant_key
PAYTR_MERCHANT_SALT=your_merchant_salt
PAYTR_TEST_MODE=true
```

## Testler

Değişikliklerinizi göndermeden önce mevcut testleri çalıştırın:

```bash
npm test
```

## Pull Request Gönderme Süreci

1. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
2. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
3. Branch'inizi push edin (`git push origin feature/amazing-feature`)
4. Pull Request açın

## Kod Stilleri

- Kodu girintilerken 2 boşluk kullanın
- Dosya sonlarında yeni satır bırakın
- `const` ve `let` kullanın, `var` kullanmaktan kaçının
- ESLint kurallarına uyun

## Commit Mesajları

Commit mesajlarında [Conventional Commits](https://www.conventionalcommits.org/) formatını kullanın:

- `feat:` - Yeni özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Sadece dokümantasyon değişiklikleri
- `style:` - Kod anlamını değiştirmeyen biçimlendirme değişiklikleri
- `refactor:` - Ne bir hata düzeltmesi ne de bir özellik olan kod değişiklikleri
- `perf:` - Performansı artıran değişiklikler
- `test:` - Eksik testleri ekleyerek veya mevcut testleri düzelterek
- `chore:` - Derleme süreci veya yardımcı araçlardaki değişiklikler

Teşekkür ederiz!
