The dataset MAPC 2012-2016 Labor Force (Census Tracts) was downloaded from Massachusetts Area Planning Council’s DataCommon (https://datacommon.mapc.org/browser/datasets/128). We edited the file to include only columns: census tract number (column name in original: ct10_id, column name in final: ID) and percent unemployed (column name in original: unemp_p, column name in final: unemployed). We changed the CSV file to an excel file. Using the merged file containing Opportunity Zone census tract and town names, we used a VLOOKUP function to identify which census tract was an opportunity zone and filtered out non-opportunity zones, and merged in town name (column name in final: Town). We removed the first “25” from each census track.

The MA average unemployment (6.8%) was obtained from the United States Census Bureau’s FactFinder page (https://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml). We searched for Massachusetts in the “Community Facts” search bar, clicked on “Income” on the left-hand navigation bar, clicked on “Employment Status (Age, Race, Sex, Poverty, Disability, Education, …)”, and clicked on “2016” in the Version menu. The 2016 version is the same time period as our 2012-2016 MAPC data.

Data cleaning: We removed census tract 25001014100 from Forestdale and 25025980101 from Winthrop due to poor quality or missing data.



