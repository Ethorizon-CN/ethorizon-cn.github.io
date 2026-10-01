---
categories:
- Discipline
date: '2026-07-06T16:08:57+08:00'
expires: '2027-01-06T16:08:57+08:00'
mathjax: true
sticky: 10
tags:
- Simulation du problème à N corps
- Desmos
- PoC
- Méthode d'Euler
title: Simulation du problème à N corps par la méthode d'Euler sur Desmos
updated: '2026-08-22T15:45:44.645+08:00'
lang: fr
---
## Avant-propos

Cet article présente, du concret vers l'abstrait, la mise en œuvre pas à pas de la méthode d'Euler pour le problème à N corps, avec Desmos comme PoC ; le résultat final est visible dans la [Démo](https://www.desmos.com/geometry/fldemv2bnl) ou dans la page Desmos intégrée ci-dessous.
~~si je n'utilise pas RK4, c'est surtout parce que je n'ai pas les compétences techniques~~

{% folding title="Quelques astuces pour les débutants sur Desmos" class="blue" open="true" %}

1. **Cliquez sur le minuteur à gauche de "Run" pour lancer la simulation**
2. **Vous pouvez modifier des données comme le nombre d'astres dans le dossier « Propriétés »**
3. **Si la liste d'expressions vous gêne, cliquez sur la double flèche en haut à droite de la liste pour la replier**

{% endfolding %}

<iframe  src="https://www.desmos.com/geometry/fldemv2bnl" title="Page Desmos intégrée" style="width: 100%; height: 800px;"></iframe>

## Mise en œuvre

### Éléments visuels

#### Les astres ("S")

Pour le problème à N corps, il faut d'abord N astres, c'est-à-dire N points notés S ; leur nombre suit un principe de personnalisation, à ajuster par l'utilisateur lui-même.
Il faut d'abord créer la variable $n$ pour stocker le nombre d'astres saisi par l'utilisateur, et saisir en même temps la liste $N_{um}=[1,2,\dots,n]$ au cas où. Desmos complète alors automatiquement la suite arithmétique.

{% callout type="warning" title="Attention au domaine de définition des variables" icon="fa-solid fa-triangle-exclamation" %}
Il faut penser à définir le domaine de tous les éléments (bornes, pas du curseur, etc.) pour éviter les erreurs mathématiques.
Exemple :

$$
n=15
$$

$$
{2}\le{n}\le{100}~pas : 1
$$

~~qui donc irait définir -1 étoile, tu ne trouves pas~~

Remarque : Desmos limitant la longueur d'une liste à 10 000 éléments, le nombre d'astres ne doit pas dépasser 100, sinon le nombre d'éléments de la liste des forces $n^2$ dépassera 10 000 (point que j'aborderai plus loin). ~~mettre 100, ça ne rame vraiment pas~~
{% endcallout %}

Les astres, en tant que nuage de points, ont bien sûr besoin de coordonnées.

**Tâche un : trouver une méthode appropriée pour représenter S**

En rédigeant cette partie, l'auteur a pensé aux solutions suivantes :

{% tabs %}

<!-- tab Solution un -->

On pense facilement à poser $S=[(1,2),(3,4),...]$ ; mais définir chaque élément séparément n'est après tout pas réaliste, donc la solution un passe.

<!-- tab Solution deux -->

Pour résoudre le problème ci-dessus, nous devons attribuer des valeurs aléatoires à $S$ en lot ; nous introduisons donc la fonction $random()$ et la compréhension de liste $for$. ~~ce truc en py, ça ne s'appelle pas une boucle ?~~

{% folding title="Bref aperçu de l'usage de la fonction Desmos random()" class="blue" open=true %}
Quoi, vous me demandez comment l'utiliser ? Au sens littéral : random, nombre aléatoire. Il y a toutefois quelques détails à connaître :
1.Écrire la fonction $random()$ oblige à mettre les parenthèses (qu'il y ait quelque chose dedans ou non).
2.Écrire un entier naturel (noté $x$) entre les parenthèses de cette fonction permet de générer une liste de x nombres aléatoires distincts.
3.Les nombres aléatoires générés par cette fonction sont dans l'intervalle $[0,1]$ et non réglable (car cela suffit déjà à être Turing-complet). Pour les ajuster, voyez l'écriture suivante :
$Soit l'intervalle des nombres aléatoires [a,b]({a,b}\in{\mathbb{R}}),alors r=a+random()(b-a)$ .
{% endfolding %}

{% folding title="Bref aperçu de l'usage de la compréhension de liste Desmos for" class="blue" open=true %}
$for$ permet de parcourir tous les éléments d'une liste et de les injecter un à un dans un calcul. Par exemple, saisir $sin(i)~for~i=[1,2,\dots,10]$ affiche :
=`0.0174524064373` `0.0348994967025` `0.0523359562429` `0.0697564737441` `0.0871557427477` `0.104528463268` `0.121869343405` `0.13917310096` `0.15643446504` `0.173648177667`
Si la variable de boucle compte 2 éléments, on obtient l'effet d'une « double boucle » (équivalent à imbriquer une boucle dans une autre. Et ainsi de suite pour davantage de variables) :
$(a,b)\space{for}\space{a}=[1,2,\dots,10],b=[1,2,\dots,10]$
L'exemple ci-dessus affichera une liste de ${10}\times{10}=100$ points.
{% endfolding %}

D'après ce qui précède, on peut écrire $S=(a,b)~for~a=random(n),b=random(n)$ . Pourtant, en saisissant réellement cette formule, vous verrez apparaître à l'écran tout un tas de points incompréhensibles (comme ci-dessous).
![Nuage de points erroné produit par l'expression ci-dessus, ici n=5.](/assets/images/QQ_1783412946814.png)
Comme Desmos applique une logique d'arrangements et de combinaisons aux boucles multiples, cette expression produit une liste de $n^{2}$ éléments, alors que nous voulons en réalité une liste de n éléments : la solution deux passe donc.

<!-- tab Solution trois -->

{% folding title="Bref aperçu de l'usage du symbole d'affectation Desmos $\\to$" class="blue" open=true %}
En bref : faire devenir la variable ce que vous décidez.
Exemple : $soit a=0$ , saisissez alors ${a}\to{1}$ : une flèche apparaît à gauche de l'expression. Cliquez sur la flèche pour effectuer l'affectation ; une telle affectation s'appelle une action (Actions) dans Desmos. Dans cet exemple, si vous déclenchez cette action sans arrêt, la valeur de a devient : ${0}\to{1}\to{1}\to{1}\dots$
De même : $soit a=0,A={a}\to{a+1}$ ; en déclenchant A, la valeur de a devient : ${0}\to{1}\to{2}\to{3}\dots$ .
{% endfolding %}

Après essais, créer séparément une liste pour les coordonnées $x$ et $y$ des points résout parfaitement le problème de la solution deux, et facilite en plus l'analyse et le calcul des forces par la suite, soit :
$Soit x_0=[],y_0=[],R_{esetCoordinates}=x_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},y_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},où r_{ad} est le rayon de position aléatoire des astres$
$x_{0}$ et $y_{0}$ sont des listes vides ; après avoir déclenché $R_{esetCoordinates}$, elles deviennent n nombres aléatoires.

{% endtabs %}

En résumé, la solution trois est un succès ~~(sans émotion~~

#### Propriétés des astres ("m"," $v_x$ "," $v_y$ ")

Étant des étoiles et non des photons, les astres possèdent toujours une masse intrinsèque ; il faut donc créer l'ensemble $m$ pour stocker la masse de chaque astre et l'utiliser dans les calculs. m doit être affecté au préalable, je ne m'y attarde pas ici. Par exemple :

$$
R_{esetMass}=m\to10{random(n)}
$$

$v_x$ et $v_y$ servent à stocker les composantes de la vitesse des étoiles en mouvement ; il suffit de les créer comme ensembles vides, les données y seront écrites automatiquement à l'exécution.

## Davantage de contenu reste à compléter~
