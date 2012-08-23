// ==UserScript==
// @name        jenkins-role-strategy-ui-enhancer
// @namespace   com.michelin.cio.jenkins.tools
// @include     */role-strategy/assign-roles
// @version     1.0     
// ==/UserScript==

/*
 * The MIT License
 * 
 * Copyright (c) 2011, Manufacture Francaise des Pneumatiques Michelin, Daniel Petisme
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Bootstrap to inject a custom JS function into the page and take advantage
 * of the javascript libraries included in the host page.
 */  
window.addEventListener("load", function() {    
   createScript(main);      
}, false);


/**
 * Create a script element and inject a JS function into.
 */ 
function createScript(fn) {
   var script = document.createElement('script');
   script.setAttribute("type", "application/javascript");   
   script.textContent = '(' + fn + ')();'; //The JS function to run
   document.body.appendChild(script); // run the script
   document.body.removeChild(script); // clean up
}



/**
 * The function injected in the page
 */ 
function main(){
 
    var builToolTips = function(tableId){
       Event.observe(tableId, 'mouseover', function(event) {   
          /**
           * This is a trick to make the cell as event catcher. The cell's mouseover event triggers the input's tooltip construction.
           * If you build the Tooltip when the mouse is over the table cell, then you have to reproduce a mouse over event to display it.
           */
          var cell = $(Event.element(event)).down('input').up('tr.permission-row td');
          
          //The username is stored in the parent row
          var username = cell.up('tr').readAttribute('name');
          //The tooltip will be built againt the checkbox input
          var input = cell.down('input')
          //The role is stored in the child checkbox input
          var role = input.readAttribute('name');
          //Compute an id for this input
          var inputId = username + "-" + role;     
             
          if (!input.hasAttribute('id')) {
             input.setAttribute('id', inputId);             
             
             /**
              * UI enhancement Bascially it take off the "[ ]" and split the pair on 2 lines.         
              * From [username]-[rolename] or anonymous-[rolename] to
              * User: username
              * Role: rolename                                                   
              */                                       
             var tooltipText = inputId.sub(/(\[)?(.*?)(\])?-\[(.*?)\]/,
                                    'User: #{2}<br />Role: #{4}');
             /*
              * Finally, create a tooltip for the input embeds in this table cell
              * We use the present YUI! libraries to build a YAHOO tooltip
              */                                                 
             new YAHOO.widget.Tooltip("Tooltip " + inputId,  
	                         { context:inputId,  
	                           text:tooltipText });                            
              
          }                     
       });
    }    
    
    builToolTips(globalRoles);
    builToolTips(projectRoles);
}