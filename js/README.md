## BRIEF
Il programma dovrà chiedere all'utente il **numero di chilometri** che vuole percorrere e **l'età del passeggero**.
Sulla base di queste informazioni dovrà **calcolare il prezzo totale del viaggio,** secondo queste regole:

1. Il prezzo del biglietto è definito in base ai km **(0.21 € al km)**.
2. Va applicato uno **sconto del 20% per i minorenni.**
3. Va applicato uno **sconto del 40% per gli over 65.**
4. L'output del prezzo finale va **stampato in forma umana** (con massimo due decimali, per indicare centesimi sul prezzo).
---
### DATI
- Chiedo all'utente numero di chilometri
- Chiedo all'utente età del passeggero 
---
### ESECUZIONE LOGICA
- Converto i dati ricevuti in numeri
- Calcolo prezzo del biglietto in base ai km
- Dichiaro la variabile del risultato
- **Se** l'età del passeggero è <18 
    Applico sconto del 20%
    *risultato = prezzo del biglietto - sconto20*
    **Altrimenti se** l'età del passeggero è >65
    Applico sconto del 40%
    *risultato = prezzo del biglietto - sconto40*
    **Altrimenti**
    Applico nessuno sconto
    *risultato = prezzo del biglietto*
- Arrotondo il risultato a 2 cifre decimali
---
### OUTPUT 
Stampa risultato arrotondato

