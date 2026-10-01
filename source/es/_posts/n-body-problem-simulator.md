---
categories:
- Ciencias
date: '2026-07-06T16:08:57+08:00'
expires: '2027-01-06T16:08:57+08:00'
mathjax: true
sticky: 10
tags:
- Simulación del problema de N cuerpos
- Desmos
- PoC
- Método de Euler
title: Simulación del problema de N cuerpos con el método de Euler en Desmos
updated: '2026-08-22T15:45:44.645+08:00'
lang: es
---
## Prólogo

Este artículo presenta, en un orden que va de lo concreto a lo abstracto y usando Desmos como PoC, la implementación paso a paso del método de Euler para el problema de N cuerpos; el resultado final puede verse en la [Demo](https://www.desmos.com/geometry/fldemv2bnl) o en la página de Desmos incrustada más abajo.
~~no usar RK4 se debe sobre todo a que no tengo suficiente nivel técnico~~

{% folding title="Algunos consejillos para novatos de Desmos" class="blue" open="true" %}

1. **Haz clic en el cronómetro a la izquierda de "Run" para iniciar la simulación**
2. **Puedes modificar datos como el número de astros en la carpeta “Propiedades”**
3. **Si la lista de expresiones te tapa la vista, pulsa la doble flecha de su esquina superior derecha para contraerla**

{% endfolding %}

<iframe  src="https://www.desmos.com/geometry/fldemv2bnl" title="Página incrustada de Desmos" style="width: 100%; height: 800px;"></iframe>

## Implementación

### Elementos visuales

#### Astros ("S")

Para el problema de N cuerpos, lo primero es tener N astros, es decir, N puntos representados con S; la cantidad concreta debe seguir el principio de personalización, para que el propio usuario la ajuste.
Primero hay que crear la variable $n$ para guardar el número de astros que introduce el usuario y, además, escribir la lista $N_{um}=[1,2,\dots,n]$ por si acaso. En ese momento Desmos completará automáticamente la progresión aritmética.

{% callout type="warning" title="Cuidado con el dominio de las variables" icon="fa-solid fa-triangle-exclamation" %}
Hay que asegurarse de definir el dominio de todos los elementos (incluidos el rango, el paso del deslizador, etc.) para evitar errores matemáticos.
Ejemplo:

$$
n=15
$$

$$
{2}\le{n}\le{100}~paso:1
$$

~~¿qué persona de bien configuraría -1 astros? Tienes razón, ¿no?~~

Nota: como Desmos limita la longitud de las listas a 10000 elementos como máximo, el número de astros no debe superar los 100; de lo contrario, el número de elementos de la lista de fuerzas $n^2$ superará los 10000 (esto se comentará más adelante). ~~¿de verdad que 100 no se queda colgado?~~
{% endcallout %}

Los astros de aquí forman un conjunto de puntos, así que por supuesto hay que asignarles coordenadas.

**Tarea 1: encontrar una forma adecuada de representar S**

Al escribir esta parte se me ocurrieron las siguientes opciones:

{% tabs %}

<!-- tab Opción 1 -->

Es fácil pensar en hacer $S=[(1,2),(3,4),...]$, pero definir cada elemento por separado no es realista, así que la opción 1 queda descartada.

<!-- tab Opción 2 -->

Para resolver el problema anterior necesitamos asignar valores aleatorios a $S$ en bloque, así que introducimos la función $random()$ y la comprensión de listas $for$. ~~¿esto en Python no se llamaba bucle?~~

{% folding title="Guía rápida del uso de la función random() de Desmos" class="blue" open=true %}
¿Qué, me preguntas cómo se usa? Literalmente: random, número aleatorio. Pero hay varios detalles que hay que tener en cuenta:
1.Para escribir la función $random()$ hay que poner los paréntesis (haya algo dentro o no).
2.Si escribes un número natural entre los paréntesis de la función (lo llamamos $x$), se genera una lista con x números aleatorios distintos.
3.Los números aleatorios que genera la función están en el rango $[0,1]$ y no se pueden ajustar (porque así ya es Turing-completo). Si quieres ajustarlo, usa esta forma:
$Sea~el~rango~de~los~números~aleatorios~[a,b]({a,b}\in{\mathbb{R}}),~entonces~r=a+random()(b-a)$.
{% endfolding %}

{% folding title="Guía rápida del uso de la comprensión de listas for de Desmos" class="blue" open=true %}
Con $for$ se pueden recorrer todos los elementos de una lista e ir sustituyéndolos uno a uno en el cálculo. Por ejemplo, si introduces $sin(i)~for~i=[1,2,\dots,10]$ se obtiene:
=`0.0174524064373` `0.0348994967025` `0.0523359562429` `0.0697564737441` `0.0871557427477` `0.104528463268` `0.121869343405` `0.13917310096` `0.15643446504` `0.173648177667`
Si la variable del bucle tiene 2 valores se consigue el efecto de un “doble bucle” (equivalente a anidar un bucle dentro de otro; y así sucesivamente con más variables):
$(a,b)\space{for}\space{a}=[1,2,\dots,10],b=[1,2,\dots,10]$
El ejemplo anterior dará como resultado una lista con ${10}\times{10}=100$ puntos.
{% endfolding %}

Con lo anterior ya se puede escribir $S=(a,b)~for~a=random(n),b=random(n)$. Sin embargo, cuando de verdad introduces esta expresión descubres que en la pantalla aparece un montón de puntos incomprensibles (como en la imagen).
![Conjunto de puntos erróneo generado con la expresión anterior, en este caso n=5.](/assets/images/QQ_1783412946814.png)
Como Desmos usa una lógica de combinaciones para los bucles múltiples, el resultado de esa expresión es una lista con $n^{2}$ elementos, cuando en realidad necesitamos una lista de n elementos, así que la opción 2 queda descartada.

<!-- tab Opción 3 -->

{% folding title="Guía rápida del uso del operador de asignación $\\to$ de Desmos" class="blue" open=true %}
En pocas palabras: hace que la variable se convierta en lo que tú indiques.
Ejemplo: $Sea~a=0$; si ahora introduces ${a}\to{1}$, aparecerá una flecha a la izquierda de la expresión. Al hacer clic en la flecha se completa la asignación; en Desmos, una asignación de este tipo se llama operación (Actions). En este ejemplo, si se activa esta operación sin parar, el valor de a es: ${0}\to{1}\to{1}\to{1}\dots$
De forma análoga: $Sea~a=0,A={a}\to{a+1}$; al activar A, el valor de a es: ${0}\to{1}\to{2}\to{3}\dots$.
{% endfolding %}

Tras probarlo, crear una lista para la coordenada $x$ y otra para la $y$ de los puntos resuelve perfectamente el problema de la opción 2 y además facilita el análisis y el cálculo de fuerzas posteriores, es decir:
$Sea~x_0=[],y_0=[],R_{esetCoordinates}=x_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},y_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},donde~r_{ad}~es~el~radio~de~la~posición~aleatoria~de~los~astros$
$x_{0}$ y $y_{0}$ son listas vacías; tras activar $R_{esetCoordinates}$ se convierten en n números aleatorios.

{% endtabs %}

En resumen, la opción 3 funciona ~~(sin emoción~~

#### Propiedades de los astros ("m"," $v_x$ "," $v_y$ ")

Como son estrellas y no fotones, los astros siempre tienen masa intrínseca, así que hay que crear el conjunto $m$ para guardar la masa de cada astro y poder calcular. m debe asignarse de antemano; no me extenderé aquí. Por ejemplo:

$$
R_{esetMass}=m\to10{random(n)}
$$

$v_x$ y $v_y$ sirven para guardar las componentes de la velocidad durante el movimiento de las estrellas; basta con crearlas como conjuntos vacíos, ya que los datos se escriben automáticamente al ejecutar.

## Más contenido próximamente~
