const remote = require('electron').remote;
const main = remote.require('./main.js');
const Viz = require('viz.js');

var button = document.createElement('button');
var draw_button = document.createElement('button');
draw_button.textContent = 'Draw';
button.textContent = 'Open window';
button.addEventListener('click',() => {
  main.openWindow();
}, false);
draw_button.addEventListener('click',() => {
  graph_area.innerHTML = Viz(text_area.value);
}, false);
graph_src = "digraph finite_state_machine {\n\
  node [style=filled];\
  \"Find LTE Component\" -> \"If LTE Component exists\" [ label = \"True\" ]; \
  \"Find LTE Component\" -> \"Return Decomposition Info - Set Empty Info\" [ label = \"False\" ]; \
  \"Find MMS Component\" -> \"Find WAP Component\" [ label = \"False\" ]; \
  \"Find MMS Component\" -> \"If MMS Component exists\" [ label = \"True\" ]; \
  \"Find Mail Component\" -> \"Find LTE Component\" [ label = \"False\" ]; \
  \"Find Mail Component\" -> \"If Mail Component exists\" [ label = \"True\" ]; \
  \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" -> \"If [Underlying Order] exists\" [ label = \"True\" ]; \
  \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" -> \"Return Decomposition Info - Set New Order\" [ label = \"False\" ]; \
  \"Find WAP Component\" -> \"Find Mail Component\" [ label = \"False\" ]; \
  \"Find WAP Component\" -> \"If WAP Component exists\" [ label = \"True\" ]; \
  \"If LTE Component exists\" -> \"If [Current Instance Holder] contains added LTE component?\" [ label = \"True\" ]; \
  \"If LTE Component exists\" -> \"Return Decomposition Info - Set Empty Info\" [ label = \"False\" ]; \
  \"If MMS Component exists\" -> \"Find WAP Component\" [ label = \"False\" ]; \
  \"If MMS Component exists\" -> \"If [Current Instance Holder] contains added MMS component?\" [ label = \"True\" ]; \
  \"If Mail Component exists\" -> \"Find LTE Component\" [ label = \"False\" ]; \
  \"If Mail Component exists\" -> \"If [Current Instance Holder] contains added Mail component?\" [ label = \"True\" ]; \
  \"If WAP Component exists\" -> \"Find Mail Component\" [ label = \"False\" ]; \
  \"If WAP Component exists\" -> \"If [Current Instance Holder] contains added WAP component?\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains added LTE component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains added LTE component?\" -> \"If [Current Instance Holder] contains removed LTE component?\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains added MMS component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains added MMS component?\" -> \"If [Current Instance Holder] contains removed MMS component?\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains added Mail component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains added Mail component?\" -> \"If [Current Instance Holder] contains removed Mail component?\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains added WAP component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains added WAP component?\" -> \"If [Current Instance Holder] contains removed WAP component?\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains removed LTE component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains removed LTE component?\" -> \"Return Decomposition Info - Set Empty Info\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains removed MMS component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] contains removed MMS component?\" -> \"Find WAP Component\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains removed Mail component?\" -> \"Find LTE Component\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains removed Mail component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ];\
  \"If [Current Instance Holder] contains removed WAP component?\" -> \"Find Mail Component\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] contains removed WAP component?\" -> \"Find Underlying Order with same Subscription ID in shared context and set it to internal parameter\" [ label = \"True\" ]; \
  \"If [Current Instance Holder] equals to [Previous Instance Holder] based on <parameters list>?\" -> \"Find MMS Component\" [ label = \"False\" ]; \
  \"If [Current Instance Holder] equals to [Previous Instance Holder] based on <parameters list>?\" -> \"Return Decomposition Info - Set Empty Info\" [ label = \"True\" ]; \
  \"If [Underlying Order] exists\" -> \"Return Decomposition Info - Set New Order\" [ label = \"False\" ]; \
  \"If [Underlying Order] exists\" -> \"Return Decomposition Info - Set Order to reuse\" [ label = \"True\" ]; \
}";
image = Viz(graph_src);
g = Viz(graph_src);
var text_area = document.createElement("TEXTAREA");
text_area.value = graph_src;
text_area.style.width = "100%";
text_area.style.height = "300px";
graph_area = document.createElement("DIV");
graph_area.innerHTML += g;
document.body.appendChild(text_area);
document.body.appendChild(button);
document.body.appendChild(draw_button);
document.body.appendChild(graph_area);
