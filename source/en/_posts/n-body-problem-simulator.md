---
categories:
- Disciplines
date: '2026-07-06T16:08:57+08:00'
expires: '2027-01-06T16:08:57+08:00'
mathjax: true
sticky: 10
tags:
- N-Body Problem Simulation
- Desmos
- PoC
- Euler Method
title: Euler-Method N-Body Problem Simulation Based on Desmos
updated: '2026-08-22T15:45:44.645+08:00'
lang: en
---
## Preface

This article will introduce the step-by-step implementation of an Euler-method N-body problem simulation using Desmos as a PoC, going from the concrete to the abstract. For the final result, see the [Demo](https://www.desmos.com/geometry/fldemv2bnl) or the Desmos embedded page below.
~~The real reason I didn't use RK4 is that I lack the technical skill~~

{% folding title="A few tips for Desmos beginners" class="blue" open="true" %}

1. **Click the timer to the left of "Run" to start the simulation**
2. **You can modify data such as the number of stars in the "Properties" folder**
3. **If you find the expression list blocking your view, you can click the double arrow in the top-right corner of the expression list to collapse it**

{% endfolding %}

<iframe  src="https://www.desmos.com/geometry/fldemv2bnl" title="Desmos embedded page" style="width: 100%; height: 800px;"></iframe>

## Implementation

### Visual Elements

#### Stars ("S")

For the N-body problem, we first need N stars, that is, N points represented by S; the exact number should follow a customizable principle, letting the user adjust it themselves.
First you should create the variable $n$ to hold the number of stars the user inputs, and at the same time enter the list $N_{um}=[1,2,\dots,n]$ just in case. At this point Desmos will automatically fill in the arithmetic sequence.

{% callout type="warning" title="Mind the domain of variables" icon="fa-solid fa-triangle-exclamation" %}
You should set a domain for all elements (including ranges, slider step sizes, etc.) to avoid mathematical errors.
Example:

$$
n=15
$$

$$
{2}\le{n}\le{100}~step:1
$$

~~Who in their right mind would set -1 stars, am I right~~

Note: Since Desmos limits list length to a maximum of 10,000 items, the number of stars must not exceed 100, otherwise the number of items in the force list $n^2$ will exceed 10,000 (this will be mentioned later). ~~Does setting it to 100 really not lag~~
{% endcallout %}

The stars here, being a point lattice, of course need their coordinates set.

**Task 1: Find a suitable way to represent S**

When writing this part, I came up with the following options:

{% tabs %}

<!-- tab Option 1 -->

It's easy to think of setting $S=[(1,2),(3,4),...]$ , but setting each item individually is hardly realistic, so Option 1 is out.

<!-- tab Option 2 -->

To solve the above problem, we need to assign values to $S$ in bulk at random, so we introduce the function $random()$ and the list comprehension $for$ . ~~Isn't this thing called a loop in Python~~
{% folding title="A Brief Introduction to the Desmos random() Function" class="blue" open=true %}
What, you're asking me how to use it? Literally — random means random number. But there are a few details to note:
1. To write the $random()$ function you must include the parentheses (whether or not there's anything inside).
2. Writing a natural number (denoted $x$ ) inside the function's parentheses generates a list containing x distinct random numbers.
3. The random numbers this function generates range over $[0,1]$ and this cannot be adjusted (because that already makes it Turing-complete). If you want to adjust it, refer to the following form:
$Let the range of random numbers be [a,b]({a,b}\in{\mathbb{R}}),then r=a+random()(b-a)$ .
{% endfolding %}

{% folding title="A Brief Introduction to the Desmos for List Comprehension" class="blue" open=true %}
Using $for$ , you can iterate over all elements of a list and substitute them one by one into a calculation. For example, entering $sin(i)~for~i=[1,2,\dots,10]$ outputs:
=`0.0174524064373` `0.0348994967025` `0.0523359562429` `0.0697564737441` `0.0871557427477` `0.104528463268` `0.121869343405` `0.13917310096` `0.15643446504` `0.173648177667`
If the loop variable has 2 components, you can achieve a "double loop" effect (equivalent to nesting another loop inside a loop; more variables work the same way):
$(a,b)\space{for}\space{a}=[1,2,\dots,10],b=[1,2,\dots,10]$
The example above will output a list with ${10}\times{10}=100$ points.
{% endfolding %}

Based on the above, we can write $S=(a,b)~for~a=random(n),b=random(n)$ . However, when you actually enter this expression you'll find a big jumble of incomprehensible points on the screen (as in the figure below).
![The erroneous point lattice produced by the above expression, with n=5.](/assets/images/QQ_1783412946814.png)
Because Desmos uses combinatorial logic for multiple loops, the output of this expression is a list containing $n^{2}$ elements, whereas what we actually need is a list of n elements, so Option 2 is out.

<!-- tab Option 3 -->

{% folding title="A Brief Introduction to the Desmos Assignment Operator $\\to$" class="blue" open=true %}
Simply put: it makes a variable become whatever you specify.
Example: $Let a=0$ , then enter ${a}\to{1}$ , and an arrow appears on the left side of the expression. Clicking the arrow completes the assignment; one such assignment is called an Action in Desmos. In this example, if you keep triggering this action, the value of a goes: ${0}\to{1}\to{1}\to{1}\dots$
Similarly: $Let a=0,A={a}\to{a+1}$ — now trigger A and the value of a goes: ${0}\to{1}\to{2}\to{3}\dots$ .
{% endfolding %}

After testing, creating a separate list for the point's $x$ and $y$ coordinates perfectly solves the problem in Option 2, and also makes the later force analysis and computation more convenient, namely:
$Let x_0=[],y_0=[],R_{esetCoordinates}=x_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},y_{0}\to{r_{ad}{random(n)-\frac{r_{ad}}{2}}},where r_{ad} is the random position radius of the stars$
$x_{0}$ and $y_{0}$ are both empty lists; after triggering $R_{esetCoordinates}$ they become n random numbers.

{% endtabs %}

In summary, Option 3 succeeds ~~(emotionlessly~~

#### Star Properties ("m"," $v_x$ "," $v_y$ ")

Being stars rather than photons, stars always have intrinsic mass, so we need to create the set $m$ to store each star's mass for computation. m needs to be assigned in advance; I won't go into detail here. For example:

$$
R_{esetMass}=m\to10{random(n)}
$$

$v_x$ and $v_y$ are used to store the velocity components during the stars' motion; just create them as empty sets, and data will be written in automatically at runtime.

## More content still to come~
