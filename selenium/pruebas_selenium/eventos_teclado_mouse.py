from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()

try:
    driver.get("http://localhost:5173/register")


    seleccion = driver.find_element(By.ID, "name")
    seleccion.clear()
    seleccion.send_keys("Erik Porroa")


    email = driver.find_element(By.ID, "email")
    email.clear()
    email.send_keys("eporroa@ejemplo.com")

    tel = driver.find_element(By.ID, "phone")
    tel.clear()
    tel.send_keys("555-2233")


    pass_1 = driver.find_element(By.ID, "password")
    pass_1.clear()
    pass_1.send_keys("password123")

    pass_2 = driver.find_element(By.ID, "confirmPassword")
    pass_2.clear()
    pass_2.send_keys("password123")


    print("La prueba pasó exitosamente.")


except Exception as e:
    print(f"Error en la prueba: {e}")

finally:
    driver.quit()