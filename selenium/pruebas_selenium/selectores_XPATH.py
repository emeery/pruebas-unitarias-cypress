from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()

try:
    driver.get("http://localhost:5173/")

    seleccion = driver.find_element(By.XPATH, "(//h4)[text()='Ayuda']/following-sibling::ul/li[2]")


    print("La prueba pasó exitosamente.")


except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()