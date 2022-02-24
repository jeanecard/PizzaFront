# Pizza: Yo-Lo

## Description synthétique

L'utilisateur peux constituer une pizza qu'il souhaite commander. Les allergènes éventuels seront pris en compte lorsque les garnitures seront proposées.



### Scénario :

Action utilisateur

1. Sélection des allergènes non supporté par l'utilisateur
2. Choisir la taille (petite, moyenne, grande)
3. Choisir la sauce de base (tomate, blanche)
4. Choisir la garnitures (les garnitures proposées  par le)

Résultat :

1. Prix de la pizza totale
2. Indique la conformité avec : vegan; vegetarien, sans gluten, ...
3. Indique la liste des allergènes contenu dans la pizza

### Règle de gestion

1. Calcul du prix:
   Le prix d'une pizza et la somme des prix de la pâte, sauce et garniture (avec coéficient suivant taille):

   - Pate 
     - small 10€, coefficient 1
     - Medium 15€, coefficient 1.5
     - Large 20€, coefficient 2
   - Sauce 
     - tomate: 1€ * coefficient 
     - blanche 2€ * coefficient 
   - Ingrédiant (Garniture)
     - peperoni 1€ * coefficient 
     - oeuf 1€ * coefficient 
     - janbon  2€ * coefficient 
     - Mozzaréla 2€ * coefficient 
     - ...

2. Calcul de la conformité
   La conformité dépend de la catégorie des ingrédients (garniture), on exclut la pâte et la sauce.

   - La conformité sera affichée en temps réel sur l'IHM
   - La conformité sera calcul et retourné par le back suite à la commande.

3. Calcul des allergènes

   La liste des allergènes est l'ensemble des composantes de la pizza  (pâte, sauce et garniture)

   - La liste sera calcul et retourné par le back suite a la commande.

4. Règles non dites explicitement (et optionnel)

   1. Les messages statiques de l'applications peuvent être internationalisé  (ressource json statique)
   2. Le format des montant de l'applications peuvent être internationalisé suivant la langue du navigateur (vigule vs point)
   3. Etc...

## Objectif

L'implémenté n'est n'est donc pas optimisé (tous peux etre faire dans une SPA si on a toute les information disponible). L'objectif est la mise en oeuvre des principes de conception, il nous faut donc des échange front/back et des RG (front/back).

## Echange Front / Back

### **Allergène**

EndPoint: 	MyPizza/allergens

Verbe:		  Get

Paramètres:	

* sort=[<field>|(asc|desc)] , ...
* page=<number>
* per_page=<limite>

Entête:	Accept-Language: (optionnel) permet d'indiquer la langue attendu (cf. label)

Réponse : (retour paginé)


```json
{
    data : [
        {
            code: string,
            label: string, // // the label to display in appropriate language
            url: string // url to alergen
        } // The description of the alergen
    ], // Message paylaod, here liste of alergen
    pagination: {
        total: number, // the total number of records available
        per_page: number, // the number of records in each page (page size)
        current_page: number, // the current page number of this data chunk
        last_page: number, // the last page number of this data
        next_page_url: string, // URL of the next page
        prev_page_url: string, // URL of the previous page
        from: munber, // the start record of this page, in relation to page size
        to: number, // the end record of this page, in relation to page size       
    } // Pagination information (Optional)
}
```

### Taille

EndPoint: 	*MyPizza/base*

Verbe:		  *Get*

Paramètres:	Aucun

Entête:	Accept-Language: (optionnel) permet d'indiquer la langue attendu (cf. label)

Réponse :  (retour simple)

```json
{ 
    data : {
        sizes: [ 
            {
                code: string,
                label: string, // the label to display in appropriate language
                price: number, 
	            url: string // url to paw size
            } // The description of the alergen
        ], // The list of available size (exemple small, medium, large)
        bases: [
            {
                code: string,
                label: string, // the label to display in appropriate language
                price: number, 
	            url: string // url to base
            } // The description of the alergen
        ] // The list of available base (exemple tomato, ...)
    }
}
```

### Ingredient (Garniture)

EndPoint: 	*MyPizza/ingredients*

Verbe:		  *Get*

Paramètres:	

* alergens: list des codes des alergènes non supporté.
* sort=[<field>|(asc|desc)] , ...
* page=<number>
* per_page=<limite>

Entête:	Accept-Language: (optionnel) permet d'indiquer la langue attendu (cf. label)

Réponse :  (retour paginé)

```json
{ 
    data : [
        {
            code: string,
            label: string, 
            price: number, 
            url: string // url to ingredient
            category: string // 'vegetable', 'meat', 'cheese'
        } // The description of the ingredient
    ], // Message paylaod, The list of available ingredient (peperoni, oeuf, janbon, champignon ...)
    pagination: {
        total: number, // the total number of records available
        per_page: number, // the number of records in each page (page size)
        current_page: number, // the current page number of this data chunk
        last_page: number, // the last page number of this data
        next_page_url: string, // URL of the next page
        prev_page_url: string, // URL of the previous page
        from: munber, // the start record of this page, in relation to page size
        to: number, // the end record of this page, in relation to page size       
    } // Pagination information (Optional)
}
```

### Pizza

EndPoint: 	*MyPizza*

Verbe:		  *Post*

Paramètres:	Aucun

Entête:	Accept-Language: (optionnel) permet d'indiquer la langue attendu (cf. label)

Requête :

```json
{ 
    alergen: [
        code: string // code of alergen
    ], // Listes of alergen to avoid in pizza
    pizza: {
        size: string, // code of size
        base: string, // code of base
        ingredient: [
            code: string, // code of ingredient
        ] // List of xxx to put on pizza
    },
    extra: {
        message: string
    }
}
```



Réponse : 

```json
{
	status: {
        code: string,  // Fonctionnal status, Accepted, Not conforme, Error
        messages: [ 
            message: string // the message to display in appropriate language (could indicat if compitible with vegan, vegetarian, ...)
        ] // the messages
    },
	data: {
		amount: number,
        alergens: [
            label: string // cf sse the alergen label
        ],
        compliences: [
        	label: string // vagan, vegetarian, gluten free, ...    
        ]
	},
}
```

