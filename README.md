# cvi-ecosystem

## Overview

The Philadelphia Community Violence Intervention Ecosystem tool (an <a href="https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview">ArcGIS Experience Builder</a>) was developed by the PDPH injury prevention team. Its purpose is to help PDPH's community firearm violence intervention partners locate and connect with one another, therefore increasing collaboration and client referrals between programs.

Our program collects information from our partners on a yearly basis through an <a href="https://www.esri.com/en-us/arcgis/products/arcgis-survey123/overview?rsource=%2Fen-us%2Farcgis%2Fproducts%2Fsurvey123%2Foverview">ArcGIS Survey123</a> form, such as program contact information, geographies/service area boundaries, services provided to clients, eligibility criteria, etc. Through this tool, programs should be able to use the map as well as search and filter mechanisms to find and connect with other programs based on the information we collect from them. 

The tool is public-facing because we have so many partners external to the City, but the link will not be shared beyond our partners. 

ArcGIS Experience Builder was chosen because it easily integrates with the Survey123 form, it requires little code but allows some customization through <a href="https://developers.arcgis.com/"Experience Builder Developer Edition</a>, and it can be used as a website with many tabs, which will be useful as we build out resource pages, an events calendar, etc. 

The Experience Builder is hosted locally using the ArcGIS Experience Builder development environment, which runs on Node.js. We're still developing the tool, but we want to deploy at least a first draft to do some user testing with our partners. 

## Custom widgets

Experience Builder has many out-of-the-box widgets, but they're limited in terms of styling and sometimes functionality. Because no out-of-the-box widget displayed programs' information in an organized and visually appealing way, the injury prevention team built a custom widget called ``info-card`` through the Experience Builder Developer Edition. This widget simply displays each program's information when the program is selected from the list widget (an out-of-the-box widget) or the map. It also includes a print functionality (still in development). This widget's code is included in this repo.

Additional custom widgets may be built as the tool continues to develop.
