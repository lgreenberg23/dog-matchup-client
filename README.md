# Overview
  
The main focus of this app is to analyze a users writing style to determine personality traits, to later match up with a dog breed that will fit well with them. This app uses web scraping to retreive blog post text for medium.com users. It then sends the text to IBM's Watson personality insights API to retrieve percentiales for the traits, independence, confidence, energy, and focus. The trait with the highest percentile is then used to find dog breeds that match. 

# Main Features/flow

    - user is able to type in their MEDIUM username
    - nokogiri ruby gem used to scrape for text of meduim blog post
    - blog text is then sent to watson personality api to analyze 
    - based on watson results, top personality traits are matched up with descriptsion of dog in database
    
# Languages & tools

    JavaScript
      - React.JS 
      - React Router 

    HTML & CSS
      - Semantic UI React 
      
