# Datovou strukturu si můžeme představit jako takový typ informace
# Někdy je to slovo, někdy zase číslo, někdy sada slov a čísel, jindy zase pouhé písmenko...



# V Pythonu Máme několik základních druhů Datových struktur

# 1. Integer - Neboli Celá čísla (1, 2, 4, -928, 293)
cele_cislo = -290

# 2. Float - Neboli desetinné číslo (1.39, 2.93, -1.93, 920.0)
desetinne_cislo = 193.5

# 3. String - Neboli řetězec - řetězec písmenek - je ohraničenný "uvozovkami" ("Ahoj", "Jsem Krásný", "1 Polívku prosím", "2")
text = "Ahoj světe"

# To jsou základní 3 datové struktury - samozřejmě jich existuje mnohem více ale prozatím nám stačí tyto.

# PŘEVÁDĚNÍ
# Pro převod čehokoli na Integer použijeme funkci int() - třeba int("28")
int_28 = int("28")
# Toto ale nefunguje - print(int("Jirka"))
# Poze když je v řetězci celé číslo

# Z float na integer se stane to, že se číslo zaokrouhlí směrem dolů
int_29 = int(29.6)

# Pro float platí to samé ve vztahu se string
float_30_a_pul = float("30.5")

# Kalkulace s Datovými strukturami
# +  => Plus                            (5 + 2 = 7)
# -  => Minus                           (5 - 2 = 3)
# *  => Krát                            (5 * 2 = 10)
# /  => Děleno                          (5 / 2 = 2.5)
# // => Celočíselné dělení              (5 // 2 = 2)
# %  => Zbytek po celočíselném dělení   (5 % 2 = 1 (2 a zbytek 1))

# Integer
suma = 2 + 5
rozdil = 5 - 2
nasobek = 5 * 2
# Atd...

# Float je stejný jako integer

# String
ahoj_svete = "Ahoj" + " " + "Světe" # "Ahoj Světe"
ahoj_ahoj_ahoj = 3 * "Ahoj " # Ahoj Ahoj Ahoj 
