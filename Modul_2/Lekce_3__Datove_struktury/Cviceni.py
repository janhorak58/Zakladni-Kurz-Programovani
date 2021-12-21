# Tvým úkolem je vypsat Větu, kde budeš žádat prodavačku ludmilu o maximální počet rohlíků

# Ludmila je ale nahluchlá, a prto musíš její jméno zopakovat šestnáctkrát, aby ti rohlíky dala...
# Využij definovaných promennych

osloveni_prodavacky = "Ludmilo, "
cena_za_1_rohlik = 2.90
penezenka = 100

pocet_rohliku = int(penezenka // cena_za_1_rohlik)

print(osloveni_prodavacky * 16, " Dej mi prosím", pocet_rohliku, "Rohlíků. Děkuji")