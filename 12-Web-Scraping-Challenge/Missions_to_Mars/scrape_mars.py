from splinter import Browser
from bs4 import BeautifulSoup as bs
import pandas as pd
import datetime as dt
import time
import re

def scrape():
    # Initiate headless driver
    executable_path = {'executable_path':r"C:\Users\taylo\Documents\UCI Bootcamp 2020\UCI_HomeWork_Taylor_Wolff\12-Web-Scraping-Challenge\Missions_to_Mars\chromedriver.exe"}
    browser = Browser('chrome', **executable_path, headless=False)
    news_title, news_paragraph = mars_news(browser)

    final_data = {}
    output = marsNews()
    final_data["mars_news"] = output[0]
    final_data["mars_paragraph"] = output[1]
    final_data["mars_image"] = marsImage()
    final_data["mars_facts"] = marsFacts()
    final_data["mars_hemisphere"] = marsHem()

    browser.quit()
    return final_data


def mars_news(browser):
    """Scrape Mars News"""
    # nasa Location
    # beautiful soup for html
    mars_url = "https://mars.nasa.gov/news/"
    browser.visit(mars_url)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    try:
        slide = soup.select_one("ul.item_list li.slide")
        # news title below
        news_title=slide.find('div', class_="content_title").get_text()
        # news paragraph below
        news_p=slide.find('div', class_="article_teaser_body").get_text()
    except AttributeError:
        return None, None
    return news_title, news_paragraph

def featured_image(browser):
    """Collect Main Image"""
    # image url and featured image
    def marsImage():
    image_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(image_url)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    image = soup.find("img", class_="thumb")["src"]
    featured_image_url = "https://www.jpl.nasa.gov" + image
    return featured_image_url

def mars_facts():
    """Mars Facts"""
    import pandas as pd
    mars_facts_url = "https://space-facts.com/mars/"
    browser.visit(mars_facts_url)
    mars_table_data = pd.read_html(mars_facts_url)
    mars_table_data = pd.DataFrame (mars_table_data[0])
    mars_table_data.columns = ["Description", "Value"]
    mars_table_data = mars_table_data.set_index("Description")
    mars_facts = mars_table_data.to_html(header = False, index = False)
    return mars_facts

def scrape_hemisphere(browser):
    """Collecting the  Hemispheres"""
    hemi_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(hemi_url)
    html = browser.html
    soup = BeautifulSoup(html, "html.parser")
    mars_hemisphere = []

    products = soup.find("div", class_ = "result-list" )
    hemispheres = products.find_all("div", class_="item")

    for hemisphere in hemispheres:
        title = hemisphere.find("h3").text
        title = title.replace("Enhanced", "")
        end_link = hemisphere.find("a")["href"]
        image_link = "https://astrogeology.usgs.gov/" + end_link    
        browser.visit(image_link)
        html = browser.html
        soup=BeautifulSoup(html, "html.parser")
        downloads = soup.find("div", class_="downloads")
        image_url = downloads.find("a")["href"]
        mars_hemisphere.append({"title": title, "img_url": image_url})
return mars_hemisphere

if __name__ == "__main__":
    print(scrape())
