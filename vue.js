youtube.com/watch?v=ccsz9FRy-nk&list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f
1.Data option api
2.Composite api
Root app is app.vue
main js need to mount the app(component)
vue create app_name
folder str
	package.json- dependency and description
	public - index html , favicon
	scr- main.js ,app.vue,assets
	run=> index(root com )->main.js->app.vue
.vue (template, script, style block)
shorthand vbass-css to create template
text binding interpoliation{{}},v-text="property name" cant use both in same tag 
html binding v-html="channel" for html tag like bold, strong
attribute bind v-bind:id ,v-bind:disable
class binding  v-bind:class="classname" with array,object and conditional 
inline style   v-bind:style
shorthand :style, :class , :html
conditional rendering if,if-else,else , v-show (if and show diff is if will be hidden and show ll be display:none)
list rendering  v-for and conditional for 
methods  methods:{}
event handling  v-on:click="Decrement" or  @click="Decrement" , multiple event (increment, decrement), event($event)
form handling: v-model=json key, radio buttin(true-value and false value) @submit=Submitform
modifier - timer(v-model.trim),v-model.number,v-model.lazy,@submit.prevent,keyup.enter(to submit not to reload after submit)
directive v-once(change once),v-pre(not to compile)
computed poperties(cashed, so use this than inline )- compute{} in default to assign to new property using other property
watcher(watch:{})
immediate: to run as soon as page load using handler and immediate=true,deep for array
project:
parent to child data pass =>props:["myname"]
: for non string 
v-bind="$attr" to add id to an element, to remove id to root div inheritAttrs:false
provide and inject (to pass data from 1 com to another com)provide(parent),inject(child)
from child to parent($emit the value)
<slot> adding in child will help to add new content in parent comp for the child, if multiple slot add v-slot in parent for identification
39: passing data from child comp using slot to parent comp
40: scope in style to maintain css in corresponding comp, if we use slot it will take parent css 
41: dynamic tag <component :is="key"
42: cashe the data apart from creat instance <keep-alive>
43: <teleport> to add other element under different element not under app default comp
45: http axios get and post
47: Lifecycle hook (creation , mounting(on page load, authorization), updating,unmounting)
48: to load data on page load created(lifecycle)
49: template ref(focus) add ref prop in field and mounted() life cycle to focus
50: reusing code using mixins:[] create common code in js file and inject to the component
52: composition api(another way of coding) setup()(start of the comp) and import ref from vue---here
53: reactive({}) for objects
54: toRef - to get latest data after set timeout
55: replace method using composition within setup
56: v-model using composite(can use more for forms) 
58: watchers in composite, to auto run watch make immidate as true
59: watcher using reactive and toref(cant hold of old value) so use ...toRef(state), deep true for objects in watch --heres _lodas for deep watchers
60: provide(parent) and inject(any child) - pass data from 1 com to another com(like behaviour subject)
62: composite focus tempref
63:	props in composition setup(props)
64: emit() from child to parent from composition api setup(props,context)
65: mixins(utility fn) in composition , folder name should be composables and file name should be useFunctionalityName
66: deploy

child - parent
computed property
watchers 
methods
slot
Lifecycle hook (creation , mounting(API), updating,unmounting)
provide and inject
axios(is promise based property)
promise resolve n reject
localization
async n await
data,computed,mounted,methods
_lodas
route => path, name , component
vue -2 
package.json


1. Reactivity In vue
2. which is better vue/react and y?
3. did u ever faced reactivity issue in vue
4. we have 4k+ lines code as single file, and i want to split that into chunks how will you achive
5. diff b/w watcher and computed property
6. event loop
7. how your are able to manage async calls before ES6
8. what is your most used ES6 Feature
9. what is Vertual dom and real dom and how Virtual DOM identify change in property value
10. about authentication and authorization(access)
11. slots
12. Mixins(common functionality and reuse)
all questions on reactivity 
and project 
did u worked on typescript?
do u have BE knowledge 
Array Methods
slice and splice
$emit and v-on


