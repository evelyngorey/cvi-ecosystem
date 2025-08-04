# cvi-ecosystem

## Overview

The Philadelphia Community Violence Intervention Ecosystem tool (an <a href="https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview">ArcGIS Experience Builder</a> web mapping application) was developed by the PDPH injury prevention team. Its purpose is to help PDPH's community firearm violence intervention partners locate and connect with one another, therefore increasing collaboration and client referrals between programs.

Our program collects information from our partners on a yearly basis through our <a href="https://arcg.is/1C5iri">ArcGIS Survey123 form</a>, such as program contact information, geography/service area boundaries, services provided to clients, eligibility criteria, etc. Through this tool, programs should be able to use the map as well as search and filter mechanisms to find and connect with other programs based on the information we collect from them. The data for each program collected from this Survey123 form are processed with a Python script in ArcGIS Pro and uploaded to ArcGIS Online. The Experience Builder accesses the program data through ArcGIS Online (CityGeo's portal).  

The tool is public-facing because we have so many partners external to the City (mostly community organizations), but our partners are our primary audience, not the general public. 

ArcGIS Experience Builder was chosen because it easily integrates with the Survey123 form, it requires little code but allows some customization through <a href="https://developers.arcgis.com/">Experience Builder Developer Edition</a>, and it can be used as a website with many tabs, which will be useful as we build out resource pages, an events calendar, etc. 

<b>The Experience Builder is hosted locally using the ArcGIS Experience Builder development environment, which runs on Node.js. We're still developing the tool, but we want to deploy at least a first draft to do some user testing with our partners.</b>

## Custom widgets

Experience Builder has many out-of-the-box widgets, but they're limited in terms of styling and sometimes functionality. Because no out-of-the-box widget displayed programs' information in an organized and visually appealing way, the injury prevention team built a custom widget called ``info-card`` through the Experience Builder Developer Edition. 

This widget simply displays each program's information when the program is selected from the list widget (an out-of-the-box widget) or the map. It also includes a print functionality (still in development). This widget's code is included in this repo.

Additional custom widgets may be built as the tool continues to develop.

## Screenshots of custom widget

![Screenshot 2025-05-19 124055](https://github.com/user-attachments/assets/7ece4bbc-5f2f-48d3-b066-b5b287305458)
![Screenshot 2025-05-19 124759](https://github.com/user-attachments/assets/4d40ae47-34c9-4042-ab5f-f9fe96a8a23e)
![Screenshot 2025-05-19 124824](https://github.com/user-attachments/assets/99b3529e-df76-44c0-a19c-b1b365d46adb)
![Screenshot 2025-05-19 124849](https://github.com/user-attachments/assets/c169bde1-2780-431b-a8c1-4f288c72b450)
![Screenshot 2025-05-19 131856](https://github.com/user-attachments/assets/9e8279e4-680c-4c8e-870c-fa60ee303f9e)



