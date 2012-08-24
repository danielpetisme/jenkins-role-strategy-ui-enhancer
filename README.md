# Jenkins Role Strategy UI enhancer

##Context

The [Role Strategy Plugin allows](https://wiki.jenkins-ci.org/display/JENKINS/Role+Strategy+Plugin) to Jenkins Adminsitrator to handle users' 
permissions with a role based mecahism.

The plugin's UI was not initial design to support a large set of users/roles. As 
detailled in the Jenkins Jira Ticket [JENKINS-8075](https://issues.jenkins-ci.org/browse/JENKINS-8075), the role assignation can be quickly a nightmare.

Since there is no scheduled released of this plugins for the coming months, I 
searched a temporal workaround.

##Solution

Basically, I searched a way to display the table cell coordinates (column/row headers)
in a tooltip when the user's mouse will be hover a that cell. 

Greasemonkey is a well-known Firefox/Chrome extension which permits to develop
Javascript to customize the Web pages behaviors.

So, I developed the jenkins-role-strategy-ui-enhancer.js script to enhance the
Role Strategy's UI. The script will display a tooltip when the mouse is over the checkbox.

##Screenshot

![jenkins-role-strategy-ui-enhancer screenshot](https://issues.jenkins-ci.org/secure/attachment/22359/jenkins-role-strategy-ui-enhancer_screenshot_00.png "jenkins-role-strategy-ui-enhancer screenshot")

##Installation

1. Install Greasemonkey 
    * [Firefox extension](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/)
    * [Chrome extension](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
2. Click on the link [Install Jenkins Role Strategy UI Enhancer](https://github.com/danielpetisme/jenkins-role-strategy-ui-enhancer/raw/master/jenkins-role-strategy-ui-enhancer/jenkins-role-strategy-ui-enhancer.user.js)
3. A Greasemonkey dialong should poped-up.
4. Click on install
5. Go to your Jenkins and enjoy!!

##Licence

>The MIT License
>
>Copyright (c) 2012, Manufacture Francaise des Pneumatiques Michelin, Daniel Petisme
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.     