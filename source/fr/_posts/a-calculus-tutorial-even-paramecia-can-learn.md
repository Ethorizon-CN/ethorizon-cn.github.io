---
abbrlink: ''
categories:
- Discipline
date: '2026-07-17T14:08:08+08:00'
mathjax: true
sticky: 9
tags:
- Mathématiques supérieures
- Calcul infinitésimal
- Tutoriel
title: Un tutoriel de calcul infinitésimal que même les paramécies peuvent comprendre !
updated: '2026-10-01T17:20:37.815+08:00'
lang: fr
---
{% callout type="warning" title="Avertissement" %}
Cet article n'est pas encore terminé.

Si vous tenez absolument à le lire, assumez vous-même les conséquences des ambiguïtés éventuelles.
{% endcallout %}

{% callout type="info" title="À lire avant de commencer !" %}

1. Cet article se limite aux concepts de base du calcul infinitésimal et à une partie des prérequis nécessaires. Et pour me faciliter la rédaction ~~écrire les dizaines de milliers de mots qui suivent m'a déjà épuisé www je n'ai plus envie de parler des trucs trop élémentaires~~, merci de bien maîtriser ou de connaître parfaitement les fonctions du programme de mathématiques du collège avant de lire cet article, merci qwq.
2. Par manque de compétences, et aussi pour abaisser le seuil de compréhension, cet article emploie un langage relativement familier. Si vous cherchez des démonstrations et des preuves rigoureuses, félicitations, vous vous êtes trompé d'endroit : allez plutôt voir [Baidu Baike](https://baike.baidu.com). ~~Après avoir lu Baidu Baike, vous comprendrez pourquoi ma façon d'écrire reste encore familière~~ Je tâcherai d'être aussi rigoureux que possible tout en gardant ce ton familier, en commettant le moins d'erreurs scientifiques possible www. Si vous repérez des oublis, n'hésitez pas à me le signaler dans les commentaires ! ~~en fait, le manque de compétences et la baisse du seuil de compréhension sont liés par un rapport de cause à effet~~
   {% endcallout %}

## Avant-propos : le calcul infinitésimal n'est pas si lointain

Si vous ne connaissez pas le calcul infinitésimal, je devine que votre impression ressemble à peu près à ceci :

Abstrait.

Avancé.

Incompréhensible.

~~ah, je vous mens : ce qui précède fait encore partie des bons cas ; quand je rédigeais cet article, ils n'étaient pas rares à me traiter de prétentieux~~

On peut dire que, pour les concepts les plus élémentaires, le calcul infinitésimal n'est vraiment pas difficile à comprendre ~~en tout cas, c'est mieux que le cliché~~. Matière la plus simple des mathématiques universitaires, le calcul infinitésimal reste relativement concret et tangible. Un exemple —

## Introduction par l'exemple : vitesse, tangente et aire sous la courbe

{% callout type="info" title="À lire avant ce chapitre !" %}
Ce chapitre est assez long, car il doit s'adresser à des personnes à des stades de cognition et à des niveaux de compréhension différents ~~en réalité, c'est écrit pour les bûches~~. Si vous ne voulez pas de mes bavardages, ou si vous préférez aller droit au but, vous pouvez sauter ce chapitre.
{% endcallout %}

~~après y avoir longuement réfléchi, je trouve que l'exemple de la voiture qui roule reste le plus approprié ()~~

Cet article paraîtra sans doute vers la fête nationale ~~qu'il soit publié à temps ou non, c'est une autre histoire ()~~. Vous êtes assis dans la voiture qui vous ramène chez vous pour les vacances, et vous découvrez que le graphe s-t de la voiture est le suivant :

(graphique de l'API Demos « offert » faute de moyens sur place)

Vous en profitez pour tracer aussi un graphe v-t :

(graphique de l'API Demos « offert » faute de moyens sur place x2)

Maintenant, cachez le graphe s-t et ne regardez que le graphe v-t, puis réfléchissez :

Quelle distance a été parcourue sur chacun des segments GH, EF et OD ?

Quelle est la vitesse moyenne de chaque segment ?

— La réponse est évidente, même un écolier la connaît :

La vitesse du segment GH est nulle, la voiture est immobile, $s=vt$, avec $v=0~m/s$, $t=5~s$, donc $s=0~m$, $\bar{v}=0~m/s$.

La vitesse du segment EF est constante et vaut $ 7~m/s$, $t=5~s$, donc $s=vt=7~m/s\times{5~s}=35~m$.

## Limites : l'intuition de s'en approcher à l'infini ~~Jixian ! ()~~

### Le concept et le sens des limites

### Comment calculer des limites simples

### *Continuité et infiniment petits

## Dérivées et différentielles : le taux de variation

### Dérivée et fonction dérivée : taux de variation moyen et taux de variation instantané

#### Le concept et le calcul de la dérivée : le taux de variation instantané

#### Le concept et la dérivation de la fonction dérivée : une fonction composée de taux de variation

#### Les dérivées des fonctions courantes et les règles de dérivation

#### *Dérivées d'ordre supérieur : le taux de variation du taux de variation

### La différentielle : « transformer la courbe en droite »

## Intégrales : la somme de subdivisions infinies ~~des nouilles recollées~~

### Intégrale définie : l'aire sous la courbe

### Intégrale indéfinie et primitive : retrouver la primitive à partir de la fonction dérivée

### Théorème fondamental de l'analyse : la formule de Newton-Leibniz

### *Techniques d'intégration simples

## Exercices pratiques

### Démonstration de la formule du volume d'un cône

### Démonstration des formules du volume et de la surface d'une sphère

### *Démonstration par le calcul infinitésimal de la formule de l'aire latérale d'un cône

## Épilogue
