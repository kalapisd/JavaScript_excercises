# Feladatok

## 1. feladat
Írj egy olyan függvénykifejezést `sumNetPrices` néven, amely paraméterként vár egy egész számokat tartalmazó tömböt!   
A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig térjen vissza az elemek összegével!

## 2. feladat
Írj egy olyan függvénykifejezést `arrayElementChecker` néven, amely paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt 
és egy tetszőleges primitív értéket. A függvény visszatérési értéke egy objektum, amely a következő property-ket tartalmazza:

   - `exists`: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható-e a tömbben
   - `index`: Értéke egy szám; ha a második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe, ha nem, akkor -1 legyen az értéke
   - `allElementsAreNumbers`: Értéke true/false attól függően, hogy a tömb minden eleme number típusú-e vagy sem
   - `someElementsAreNumbers`: Értéke true/false attól függően, hogy a tömbben van-e number típusú elem vagy sem

## 3. feladat
Írj egy olyan függvénykifejezést `templateFactory` néven, amely paraméterként egy string-eket tartalmazó tömböt kap, és visszaad 
egy HTML-template-et (string)!
A HTML-template egy felsorolt lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.  
Pl.:

```JavaScript
// ha ez a tömb
const content = ['első', 'második', 'harmadik'];

// akkor ez legyen a visszatérési érték:
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
```
