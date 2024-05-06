
# Feladatok

1. Írj egy függvényt `objectsMerge` néven, amely paraméterként tetszőleges darabszámú objektumot merge-öl össze, majd visszatér ezzel az objektummal!
Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.), amelyek tartalmazzák 
a részobjektumokat!  
Pl.: 

```js
// A két objektum:
const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}

// A végeredmény:
{
    0: { 
        firstName: 'John',
        lastName: 'Doe'
    },
    1:  { 
        firstName: 'Jane',
        lastName: 'Doe'
    }
}
```

2. 
- Írj egy függvényt `taggedTemplate` néven! 
- Az első paraméter `texts` néven tartalmazza tömbként a meghíváskor átadott template string-ben lévő string literálokat
- A második paraméter `values` néven tartalmazza tömbként a meghíváskor átadott template string-ben lévő kifejezések értékeit
- A visszatérési értéke egy olyan string-ben, melyben a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza  
- Feltételezzük, hogy a `texts` minden esetben több elemet tartalmat, mint a `values`.   
- Figyelj arra, hogy felesleges üres tagek ne legyenek sehol!

3. Írj egy függvényt `concatArrays` néven, amely első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak!   
A függvény:
   - összefűzi egy tömbbe az összes elemet,
   - eltávolítja az ismétlődő elemeket,
   - eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként megadott karaktert,
   - eltávolítja a string-ek végén lévő whitespace karaktert,
   - visszaadja ezt az új tömböt.
