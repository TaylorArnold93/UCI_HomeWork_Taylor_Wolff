from splinter import Browser
from bs4 import BeautifulSoup
import pandas as pd
import requests
import pymongo

def init_browser():
    # actual path to the chromedriver
    executable_path = {'executable_path':r"C:\Users\taylo\Documents\UCI Bootcamp 2020\UCI_HomeWork_Taylor_Wolff\12-Web-Scraping-Challenge\Missions_to_Mars\chromedriver.exe"}
    browser = Browser('chrome', **executable_path, headless=False)

def scrape():
    browser = init_browser()
    mars_dict ={}

    # Mars News URL of page to be scraped
    mars_url = "https://mars.nasa.gov/news/"
    browser.visit(mars_url)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    # Retrieve the latest news title and paragraph
    news_title=slide.find('div', class_="content_title").get_text()
    news_p=slide.find('div', class_="article_teaser_body").get_text()

    # Mars Space Images - Featured Images/Scraped to be images
    jpl_nasa_url = 'https://www.jpl.nasa.gov'
    images_url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    browser.visit(images_url)
    html = browser.html
    images_soup = BeautifulSoup(html, 'html.parser')
    # featured image link
    img_path = images_soup.find_all('img')[3]["src"]
    featured_image_url = jpl_nasa_url + img_path

    # Mars facts 
    mars_facts_url = 'https://space-facts.com/mars/'
    mars_tables = pd.read_html(mars_facts_url)
    mars_df = tables[2]
    mars_df.columns = ["Description", "Value"]
    html_tab = mars_df.to_html()
    html_tab.replace('\n', '')
    
    # Mars hemisphere
    usgs_url = 'https://astrogeology.usgs.gov'
    hemispheres_url = 'https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars'
    browser.visit(hemispheres_url)
    hemispheres_html = browser.html
    hemispheres_soup = BeautifulSoup(hemispheres_html, 'html.parser')
    # Mars hemispheres data
    all_mars_hemi = hemispheres_soup.find('div', class_='collapsible results')
    mars_hemispheres = all_mars_hemi.find_all('div', class_='item')
    hemisphere_image_urls = []
    # Iterate through each hemisphere data
    for i in mars_hemispheres:
        # Collect Title
        hemisphere = i.find('div', class_="description")
        title = hemisphere.h3.text        
        # Collect image link by browsing to hemisphere page
        hemisphere_link = hemisphere.a["href"]    
        browser.visit(usgs_url + hemisphere_link)        
        image_html = browser.html
        image_soup = BeautifulSoup(image_html, 'html.parser')        
        image_link = image_soup.find('div', class_='downloads')
        image_url = image_link.find('li').a['href']
        # Create Dictionary to store title and url info
        image_dict = {}
        image_dict['title'] = title
        image_dict['img_url'] = image_url        
        hemisphere_image_urls.append(image_dict)

    # Mars 
    mars_dict = {
        "news_title": news_title,
        "news_p": news_p,
        "featured_image_url": featured_image_url,
        "fact_table": str(html_tab),
        "hemisphere_images": hemisphere_image_urls
    }

    return mars_dict