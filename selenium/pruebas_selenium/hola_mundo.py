from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os

driver = webdriver.Chrome()

try:
    driver.get("https://www.wikipedia.org/")
    print("La prueba pasó exitosamente.")

except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()