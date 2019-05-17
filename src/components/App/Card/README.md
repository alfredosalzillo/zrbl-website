# Card

Card semplice e espandibile.

## Attributes

* `backgroundText` default `'01'`
   permette di personalizzare il testo del background del componente
* `icon`
   icona della `Card`
* `heading`
   descrizione principale della `Card`
* `subHeading`
   descrizione secondaria della `Card`
* `pictures`
   lista delle foto da mostrare nella `Card` espansa
*  `enableExpand`
   abilita e mostra il button per espandere la `Card`
* `expandButtonText` default `'expand'`
   testo del button per espandere la `Card`
   
## Events 
* `onExpand`
   evento di notifica dell'inizio dell'espansione della `Card`,
   notificato prima dell'inizio della prima animazione
* `onExpanded`
   evento di notifica della fine dell'espansione della `Card`,
   notificato alla fine dell'ultima animazione
