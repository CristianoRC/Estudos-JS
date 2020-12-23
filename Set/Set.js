/*
    Set e WeakSet são listas que não permitem dados duplicados
*/

var set = new Set();

set.add(1)
set.add(1)
set.add(1)
set.add(2)
set.add(3)

for (const item of set) {
    console.log(item)
}