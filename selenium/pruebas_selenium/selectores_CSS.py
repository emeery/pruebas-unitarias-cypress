from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()

try:
    driver.get("http://localhost:5173/")

    titular = driver.find_element(By.CSS_SELECTOR , '.navbar-brand')

    assert titular.text == "Super Mega App", f"El texto del enlace es '{titular.text}', pero se esperaba 'Home'."

    print("La prueba pasó exitosamente.")


except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()