{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red27\green31\blue34;\red255\green255\blue255;\red27\green31\blue34;
\red10\green77\blue204;}
{\*\expandedcolortbl;;\cssrgb\c14118\c16078\c18039;\cssrgb\c100000\c100000\c100000;\cssrgb\c14118\c16078\c18039;
\cssrgb\c1176\c40000\c83922;}
\margl1440\margr1440\vieww11560\viewh12480\viewkind0
\deftab720
\pard\pardeftab720\sl360\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Unemployment Data:\
\cf4 \cb3 \outl0\strokewidth0 \
\pard\pardeftab720\sl360\partightenfactor0
\cf4 The dataset MAPC 2012-2016 Labor Force (Census Tracts) was downloaded from Massachusetts Area Planning Council\'92s DataCommon ({\field{\*\fldinst{HYPERLINK "https://datacommon.mapc.org/browser/datasets/134"}}{\fldrslt \cf5 https://datacommon.mapc.org/browser/datasets/128}}). We edited the file to include only columns: census tract number (column name in original: ct10_id, column name in final: ID) and percent unemployed (\cf4 \cb3 column name in original: \cf4 \cb3 unemp_p, column name in final: unemployed). We changed the CSV file to an excel file. Using the merged file containing Opportunity Zone census tract and town names, we used a VLOOKUP function to identify which census tract was an opportunity zone and filtered out non-opportunity zones, and merged in town name (column name in final: Town). \cf4 \cb3 We removed the first \'9325\'94 from each census track.\
\cf4 \cb3 \
The MA average unemployment (6.8%) was obtained from the United States Census Bureau\'92s FactFinder page (https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml). We searched for Massachusetts in the \'93Community Facts\'94 search bar, clicked on \'93Income\'94 on the left-hand navigation bar, clicked on \'93Employment Status (Age, Race, Sex, Poverty, Disability, Education, \'85)\'94, and clicked on \'932016\'94 in the Version menu. The 2016 version is the same time period as our 2012-2016 MAPC data. \
\
Data cleaning: We removed census tract 25001014100 from Forestdale and 25025980101 from Winthrop due to poor quality or missing data. }